# DSH Directory — Discover DeepSeek Harness plugins

![DSH Hero Banner](assets/dsh-hero-banner.png)

[Browse DSH Directory](https://dsh.directory) · [Submit a plugin](https://github.com/alexchenzl/dsh-plugin-directory/issues/new?template=plugin-submission.yml) · [Contributing guide](CONTRIBUTING.md)

## About

DSH Plugin Directory is a community-driven catalog of plugins for DeepSeek Harness. This repository handles the submission and verification process — plugin authors open an issue to submit their plugin, and automated checks validate its structure. The accepted-record files here are exported snapshots for reference. This repository does not host plugin source code or binaries.

Accepted plugins get more prominent placement in the directory, making them easier for users to find.

## How it works

Plugin authors and community members submit **one plugin package per issue** using the GitHub issue form.

| Required field   | What to provide                                                                                         |
| ---------------- | ------------------------------------------------------------------------------------------------------- |
| Package URL      | A GitHub URL pointing to the package directory on the default branch — either the repo root or a path like `/tree/main/my-plugin`. |
| Primary category | One category from the Harness category list.                                                            |
| Description      | A single factual sentence describing what the plugin does.                                              |
| Install command  | A one-line install command copied from the plugin's own documentation.                                  |

![Plugin submission verification workflow](assets/submission-workflow.png)

Automated checks read the issue fields and validate the submitted information and package structure. The upstream repository remains the source of truth for the plugin itself.

## What can pass verification

Verification is intended for publicly accessible, installable DSH Profile Bundles — packages that declare `dsh.bundle.patch` in their `package.json`.

| Rule               | Passes                                                                    | Does not pass                                                        |
| ------------------- | ------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| Repository access   | The repository is public.                                                 | The repository is private or inaccessible.                           |
| Package URL         | Points to the exact package directory on the current default branch.      | Points to a file, a wrong directory, or a non-default branch.        |
| Package manifest    | `package.json` is directly inside the submitted directory.                | `package.json` is missing or located elsewhere.                      |
| Bundle declaration  | `package.json` declares `dsh.bundle.patch`.                               | The package declares only `dsh.client` or no bundle patch.           |
| Patch file          | The declared patch file exists in the package directory.                  | The declared patch file is missing or outside the package directory.  |
| Listing details     | Includes a valid category, factual one-line description, and documented single-line install command. | Any required value is missing, invalid, promotional, or undocumented. |

Packages that only declare `dsh.client` (without `dsh.bundle.patch`) are not installable Profile Bundles and won't pass verification. These checks only verify structure and listing details — they don't test runtime behavior, quality, compatibility, or security. See [CONTRIBUTING.md](CONTRIBUTING.md) for the complete submission requirements.

## Trust and safety

The directory checks only verify that a submission has the expected structure. They do not run the plugin or execute its install command — install commands are stored as plain text only.

Being listed in the directory is not a security audit, endorsement, or guarantee of any kind. A listing does not imply that the plugin is safe, compatible, or approved. Submitting a repository does not establish ownership of it.

Before installing any third-party plugin, review its source code, permissions, dependencies, license, and documentation.

## Submit your plugin

Built a plugin for DeepSeek Harness? [Submit it here](https://github.com/alexchenzl/dsh-plugin-directory/issues/new?template=plugin-submission.yml) to share it with the community and help more users discover your work.

Review the [contributing guide](CONTRIBUTING.md) for eligibility rules, submission requirements, corrections, and pull request guidance.

## License

Repository code and documentation are available under the [Apache License 2.0](LICENSE). Third-party plugins remain subject to their own licenses.
