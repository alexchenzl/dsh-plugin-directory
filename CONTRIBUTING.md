# Contributing to DSH Plugin Directory

Thank you for helping keep the DSH plugin submission directory useful and accurate.

Submit a plugin through the GitHub issue form.

## Submit a plugin

Open the [plugin submission form](https://github.com/alexchenzl/dsh-plugin-directory/issues/new?template=plugin-submission.yml) so every candidate goes through the same basic checks and retry policy.

Before submitting, confirm that:

- the repository is public;
- the URL identifies the exact package directory on the current default branch — not a `package.json`, patch file, README, or any other single file;
- `package.json` is directly inside that directory;
- `package.json` declares `dsh.bundle.patch`, not only `dsh.client`;
- the declared patch file, normally `cordis.patch.yml`, exists inside the package directory;
- the description is one line, factual, and free of rankings or promotional claims; and
- the install command is a single line copied from the plugin's own documentation. When the plugin documents both a published npm package and a Git-source install, prefer the npm command.

Submit one package per issue. A repository-root package uses:

```text
https://github.com/owner/repository
```

A nested package uses a directory URL on the default branch:

```text
https://github.com/owner/repository/tree/main/path/to/plugin
```

Choose exactly one option from the form's category dropdown:

- `Models & Providers (models)`
- `Tools (tools)`
- `Skills (skills)`
- `Sessions (sessions)`
- `Sandboxes (sandboxes)`
- `Storage (storage)`
- `Agent Loops (loops)`
- `Scheduling (scheduling)`
- `User Interface (ui)`

Select one of these options exactly as listed; the directory derives the stored category from your selection. An edited or free-form category value is invalid.

The automation checks new issues immediately and then once per day for seven days. If you need to fix the source package or the submitted values, do so while the issue remains open; a new issue is not required, and each check re-reads the issue's current values.

Accepted submissions receive one reply containing their directory URL, and the issue is closed. Unaccepted submissions receive no individual feedback: there is no rejection comment and no explanation of what failed. Use the checklist above to diagnose a submission that stays open. Unaccepted issues are closed after the final check and may be submitted again later.

Anyone may submit a public repository. Submission does not establish ownership, and acceptance is not an endorsement, compatibility guarantee, runtime test, or security audit.

## Correct an existing record

To change the category, description, or install command of an accepted record, submit the same package again through the submission form. A submission for a package that is already listed updates that listing instead of creating a duplicate, so the corrected values simply replace the previous ones.

Open a plain issue instead when re-submitting cannot fix the problem — the listed URL resolves to the wrong package, or the source repository has moved, been archived, or disappeared. Include the current directory entry, the proposed correction, and a link to the upstream evidence.

A package that moved to a different path in its repository is a different plugin identity, so submit the new path through the form and open an issue asking for the stale listing to be removed.

Do not make speculative changes or copy large portions of third-party documentation into a record.

## Data and security

Treat all submission fields and upstream repository content as untrusted input.

- Never execute a submitted install command; store and render it only as inert text.
- Do not commit secrets, credentials, private repository content, personal data, or private issue material.
- Keep submitted paths inside the selected plugin package and reject path traversal.
- Escape user-provided text before rendering it in another system.
- Do not add third-party binaries or vendor plugin source into this repository.

If you discover a security issue in this repository's submission or validation tooling, do not include exploit details or secrets in a public issue. Contact the maintainers privately through the security reporting method configured for the repository.

## License

By contributing, you agree that your contribution will be licensed under this repository's [MIT License](LICENSE). Third-party plugin code and metadata remain subject to their upstream licenses.
