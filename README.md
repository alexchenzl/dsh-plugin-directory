# DSH Plugin Directory

The community-maintained submission directory for [DeepSeek Harness](https://github.com/deepseek-ai/DeepSeek-Harness) plugins.

[Browse DSH Directory](https://dsh.directory) · [Submit a plugin](https://github.com/alexchenzl/dsh-plugin-directory/issues/new?template=plugin-submission.yml) · [Contributing guide](CONTRIBUTING.md)

## About

DSH Plugin Directory gives the DeepSeek Harness community a central place to discover plugins and gives plugin authors a consistent path to share their work. This repository is the submission intake for that directory: it collects submissions and validates their basic structure. Any accepted-record files in this repository are exports for reference only. This repository does not host plugin code or third-party binaries.

Plugin authors are encouraged to submit their work here. Accepted submissions receive more prominent placement in the directory, helping users discover them more easily.

## How it works

Plugin authors and community members submit **one plugin package per issue** through the GitHub issue form. Each submission provides four things:

- the exact GitHub URL of the package directory on the repository's current default branch — the repository root, or a `/tree/<branch>/<path>` directory URL for a nested package;
- one primary category from the Harness category list;
- a one-line description of the plugin's main capability; and
- the install command copied from the plugin's own documentation.

Automated checks validate those fields and confirm the package has the expected DSH bundle structure: a `package.json` directly in the submitted directory declaring `dsh.bundle.patch`, with the declared patch file inside that directory. Checks run when the issue opens and then once per day for seven days. Accepted submissions receive their listing URL and are closed; unaccepted submissions are closed after the final check and may be submitted again later. The upstream repository remains the source of truth for the plugin itself.

## What you can find

Each listing helps users understand and evaluate a plugin by presenting:

- a concise description of its main capability;
- its primary Harness category;
- a link to the exact upstream plugin package; and
- the installation command documented by the plugin.

## Trust and safety

Directory checks establish that a submission has the expected basic structure; they do not execute the plugin or its installation command, and install commands are stored and rendered only as inert text. Inclusion is not a security audit, compatibility guarantee, runtime test, or endorsement, and a listing does not imply safety, trust, ownership, or approval — submitting a repository does not establish ownership.

Before installing a third-party plugin, review its source code, permissions, dependencies, license, and upstream documentation.

## Submit or contribute

Plugin authors and community members can [submit a plugin](https://github.com/alexchenzl/dsh-plugin-directory/issues/new?template=plugin-submission.yml). For eligibility rules, submission requirements, corrections, and pull request guidance, see [CONTRIBUTING.md](CONTRIBUTING.md).

## License

Repository code and documentation are available under the [MIT License](LICENSE). Third-party plugins remain subject to their own licenses.
