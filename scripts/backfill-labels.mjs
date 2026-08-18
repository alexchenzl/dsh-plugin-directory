// One-time backfill for the `plugin-submission` label.
//
// .github/workflows/label-plugin-submissions.yml labels submissions as they
// arrive, but it only fires on `issues: [opened, edited]`, so merging it does
// nothing for the issues already filed. Roughly half of those were created
// outside the issue form — blank issues, the GitHub API, mobile — and an issue
// form's `labels:` only applies in the web form UI, so they carry no label and
// anything querying `label:plugin-submission` misses them.
//
// This walks every issue, applies the same predicate the workflow uses, and
// adds the label where it is missing. It is idempotent: issues that already
// carry the label are skipped, so a second run is a no-op.
//
//   node scripts/backfill-labels.mjs              # dry run, prints the plan
//   node scripts/backfill-labels.mjs --apply      # actually writes the label
//
// Needs the `gh` CLI authenticated as someone with write access to the repo.
import { execFileSync } from 'node:child_process'
import { parseArgs } from 'node:util'

const LABEL = 'plugin-submission'
const REPO = 'alexchenzl/dsh-plugin-directory'

const usage = `Usage: node scripts/backfill-labels.mjs [options]

Options:
  --apply          Add missing labels (default: dry run)
  --limit NUMBER   Maximum issues to inspect (default: 500)
  -h, --help       Show this help

The script refuses to apply changes when the result reaches --limit, because
there may be additional issues that were not inspected.`

const fail = (message, { exitCode = 1, usageHint = false } = {}) => {
  console.error(`Error: ${message}`)
  if (usageHint) console.error(`\n${usage}`)
  process.exit(exitCode)
}

let parsedArgs
try {
  parsedArgs = parseArgs({
    args: process.argv.slice(2),
    options: {
      apply: { type: 'boolean', default: false },
      limit: { type: 'string', default: '500' },
      help: { type: 'boolean', short: 'h', default: false },
    },
    strict: true,
    allowPositionals: false,
  })
} catch (error) {
  fail(error.message, { exitCode: 2, usageHint: true })
}

const { values } = parsedArgs

if (values.help) {
  console.log(usage)
  process.exit(0)
}

const APPLY = values.apply

if (!/^\d+$/.test(values.limit)) fail('--limit must be a positive integer', { exitCode: 2 })

const LIMIT = Number(values.limit)
if (!Number.isSafeInteger(LIMIT) || LIMIT < 1) {
  fail('--limit must be a positive safe integer', { exitCode: 2 })
}

const runGh = (args) => {
  try {
    return execFileSync('gh', [...args, '--repo', REPO], {
      encoding: 'utf8',
      maxBuffer: 64 * 1024 * 1024,
      stdio: ['ignore', 'pipe', 'pipe'],
    })
  } catch (error) {
    const detail = error.stderr?.toString().trim() || error.message
    throw new Error(detail, { cause: error })
  }
}

// Keep these three checks in sync with the workflow's `looksLikeSubmission`.
// Three signals, because the submissions arrived by three different routes:
// the form's title prefix, the form's body heading, and — for the free-form
// blank issues that follow neither — the install command every submission
// carries. Deliberately does not match issue #2, the repo's own meta issue.
const looksLikeSubmission = ({ title, body }) =>
  /^\s*\[plugin\]\s*:/i.test(title ?? '') ||
  /^#{1,4}\s*Plugin package URL\s*$/im.test(body ?? '') ||
  /dsh\s+plugin\b.*\badd\b/i.test(body ?? '')

let issues
try {
  issues = JSON.parse(
    runGh(['issue', 'list', '--state', 'all', '--limit', String(LIMIT), '--json', 'number,title,body,labels']),
  )
} catch (error) {
  fail(`could not list issues with gh: ${error.message}`)
}

if (!Array.isArray(issues)) fail('gh returned an unexpected response instead of an issue list')
if (issues.length >= LIMIT) {
  fail(`fetched ${issues.length} issues, reaching --limit ${LIMIT}; re-run with a higher limit`)
}

issues.sort((a, b) => a.number - b.number)

const labelled = (issue) =>
  Array.isArray(issue.labels) && issue.labels.some((label) => label.name?.toLowerCase() === LABEL.toLowerCase())
const matched = issues.filter(looksLikeSubmission)
const todo = matched.filter((i) => !labelled(i))
const skipped = issues.filter((i) => !looksLikeSubmission(i))
const alreadyLabelled = matched.filter(labelled)

console.log(`${issues.length} issues scanned; ${matched.length} plugin submissions matched`)
console.log(`${alreadyLabelled.length} already labelled; ${todo.length} to backfill`)

// A labelled issue the predicate misses would mean the workflow is narrower
// than what is already in the repo — worth seeing before trusting it.
const narrower = issues.filter((i) => labelled(i) && !looksLikeSubmission(i))
if (narrower.length) {
  console.log(`\nWARNING: labelled but not matched: ${narrower.map((i) => `#${i.number}`).join(', ')}`)
}

if (skipped.length) {
  console.log('\nNot matched (left alone):')
  for (const i of skipped) console.log(`  #${i.number} ${i.title}`)
}

if (!todo.length) {
  console.log('\nNothing to do.')
  process.exit(0)
}

if (!APPLY) {
  console.log('\nWould label:')
  for (const i of todo) console.log(`  #${i.number} ${i.title}`)
  console.log(`\nDry run. Re-run with --apply to write ${LABEL} to ${todo.length} issues.`)
  process.exit(0)
}

let failed = 0
for (const [n, issue] of todo.entries()) {
  const at = `[${n + 1}/${todo.length}] #${issue.number}`
  try {
    runGh(['issue', 'edit', String(issue.number), '--add-label', LABEL])
    console.log(`${at} labelled — ${issue.title}`)
  } catch (err) {
    failed++
    console.error(`${at} FAILED — ${err.message}`)
  }
}

console.log(`\nDone: ${todo.length - failed} labelled, ${failed} failed.`)
process.exit(failed ? 1 : 0)
