<h1 align="center">
  <img src="assets/dsh-hero-banner.png" alt="DSH Directory — Discover DeepSeek Harness plugins built by the community" width="100%" />
</h1>

<p align="center">
  <a href="https://dsh.directory">Browse DSH Directory</a> ·
  <a href="https://github.com/alexchenzl/dsh-plugin-directory/issues/new?template=plugin-submission.yml">Submit a plugin</a> ·
  <a href="CONTRIBUTING.md">Contributing guide</a>
</p>

## About

DSH Plugin Directory gives the DeepSeek Harness community a central place to discover plugins and gives plugin authors a consistent path to share their work. This repository is the submission intake for that directory: it collects submissions and validates their basic structure. Any accepted-record files in this repository are exports for reference only. This repository does not host plugin code or third-party binaries.

Plugin authors are encouraged to submit their work here. Accepted submissions receive more prominent placement in the directory, helping users discover them more easily.

## How it works

Plugin authors and community members submit **one plugin package per issue** through the GitHub issue form. Each submission provides four things:

- the exact GitHub URL of the package directory on the repository's current default branch — the repository root, or a `/tree/<branch>/<path>` directory URL for a nested package;
- one primary category from the Harness category list;
- a one-line description of the plugin's main capability; and
- the install command copied from the plugin's own documentation.

Automated checks validate the submitted information and package structure. Checks run when the issue opens and then once per day for seven days. Accepted submissions receive their listing URL and are closed; unaccepted submissions are closed after the final check and may be submitted again later. The upstream repository remains the source of truth for the plugin itself.

## What can pass verification

Verification is intended for publicly accessible, installable DSH Profile Bundles. A plugin can pass when:

- the submitted URL identifies the exact package directory on the repository's current default branch;
- that directory contains its own `package.json`;
- `package.json` declares `dsh.bundle.patch`;
- the declared patch file exists inside the submitted package directory; and
- the submission includes a valid category, factual one-line description, and documented install command.

A package that declares only `dsh.client` is not an installable Profile Bundle and cannot pass. These checks verify structure and listing information, not the plugin's runtime behavior, quality, compatibility, or security. See [CONTRIBUTING.md](CONTRIBUTING.md) for the complete submission requirements.

## Trust and safety

Directory checks establish that a submission has the expected basic structure; they do not execute the plugin or its installation command, and install commands are stored and rendered only as inert text. Inclusion is not a security audit, compatibility guarantee, runtime test, or endorsement, and a listing does not imply safety, trust, ownership, or approval — submitting a repository does not establish ownership.

Before installing a third-party plugin, review its source code, permissions, dependencies, license, and upstream documentation.

## Submit or contribute

Plugin authors and community members can [submit a plugin](https://github.com/alexchenzl/dsh-plugin-directory/issues/new?template=plugin-submission.yml). For eligibility rules, submission requirements, corrections, and pull request guidance, see [CONTRIBUTING.md](CONTRIBUTING.md).

## License

Repository code and documentation are available under the [Apache License 2.0](LICENSE). Third-party plugins remain subject to their own licenses.
