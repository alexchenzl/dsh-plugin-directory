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

Choose exactly one option from the form's category dropdown based on why a user would install the plugin, not how the plugin is implemented:

- `Models & Providers (models)`
- `Agents & Automation (agents)`
- `Memory & Knowledge (memory)`
- `Sessions & History (sessions)`
- `Coding & Dev Tools (coding)`
- `Web & Browser (browser)`
- `Multimodal & Media (multimodal)`
- `Channels & Notifications (channels)`
- `UI Enhancements (ui)`
- `Themes & Fun (themes)`
- `Usage & Cost (usage)`
- `Security & Permissions (security)`
- `Plugins & Runtime (plugin-tools)`

Select one of these options exactly as listed; the directory derives the stored category from your selection. An edited or free-form category value is invalid.

### Choosing between similar categories

- Choose the plugin's headline user-facing capability; packaging and extension mechanisms are not categories.
- Model memory, RAG, and semantic recall belong in **Memory & Knowledge**; conversation branching, replay, and export belong in **Sessions & History**.
- Functional productivity improvements belong in **UI Enhancements**; appearance and entertainment belong in **Themes & Fun**.
- General development tools belong in **Coding & Dev Tools**; tools specifically for DSH plugins belong in **Plugins & Runtime**.
- Vision, OCR, image, voice, speech, audio, and video capabilities belong in **Multimodal & Media**, even when implemented as a provider or gateway.
- Documents are not multimodal by default: OCR belongs in **Multimodal & Media**, while RAG ingestion belongs in **Memory & Knowledge**.
- Remote DSH access belongs in **Channels & Notifications**; responsive/mobile UI belongs in **UI Enhancements**; remote development workspaces belong in **Coding & Dev Tools**.

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

By contributing, you agree that your contribution will be licensed under this repository's [Apache License 2.0](LICENSE). Third-party plugin code and metadata remain subject to their upstream licenses.
