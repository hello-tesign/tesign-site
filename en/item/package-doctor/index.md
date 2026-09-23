# package-doctor

> Find the Python dependency to fix first — Scans Python dependencies and tells you which are being exploited now — and which have no one left to fix them.

- Page: https://tesign.com/en/item/package-doctor/
- JSON: https://tesign.com/en/item/package-doctor/index.json
- Korean Markdown: https://tesign.com/item/package-doctor/index.md
- Generated: 2026-09-23 02:05 UTC

## Numbers

- 9 stars — checked on GitHub 2026-09-23 01:47 UTC
- no 7-day star increase observed (GH Archive) (as of 2026-09-22 21:00 UTC)
- 4 Show HN points — observed 2026-09-22 01:35 UTC
- Star total = the value last checked on GitHub (stars_checked_at) + increases observed via GH Archive since. The 24h · 7d · 30d gains are GH Archive hourly events summed to the reference time (as_of). No score of ours.

## AT A GLANCE

- LICENSE: MIT (permissive) — https://spdx.org/licenses/MIT.html
- USAGE: Use, change and redistribute, commercially too. Keep the notice.
- OPEN SOURCE: YES
- LANGUAGE: Python
- PLATFORM: cli
- CATEGORY: SECURITY · DEV TOOLS
- Tags: 보안 점검 · 파이썬 · 의존성 · claude code 훅
- How to start: Install to use
- SOURCES: Show HN https://github.com/binuka200/package-doctor
- INSTALL: https://pypi.org/project/package-doctor

## ACTIVITY

- Last commit: 2026-09-22 15:52 UTC
- Latest release: v1.0.2 (2026-09-16)
- Contributors: 3
- Open issues (incl. PRs): 0
- Made by: an individual
- Checked on GitHub: 2026-09-23 01:47 UTC

## Signals and evidence

- NEW · 1h OLD WHEN SEEN

## TESIGN TAKE

Filtering on two axes — currently exploited, and is anyone left to fix it — rather than just counting advisories is what separates it from a plain scanner.

## WHY IT MATTERS

When one dependency accumulates dozens of advisories, knowing where to start is hard. package-doctor orders them by CISA’s known-exploited list and EPSS scores, and only flags a package to replace when it sits at a trust boundary — parsing or authenticating outside input — and no one is left to patch it. Everything else is marked quiet.

## BUILD FROM THIS

- Written in Python and installed with pip install package-doctor. It reads uv.lock, poetry.lock, Pipfile.lock, requirements.txt and similar files, and calls the trust-boundary question against a human-reviewed map of roughly 1,500 packages. As a Claude Code hook it blocks a coding agent from installing invented package names, packages published in the last 30 days, or vulnerable/abandoned ones at a boundary. It also runs in CI, as a pre-commit hook, and writes SARIF.

## WHO IT'S FOR

- Developers running Python projects, and teams that want to stop a coding agent from adding a package on its own.

## START IN 5 MINUTES

```
# Install with pip install package-doctor and run package-doctor scan.
```

## CAVEATS

- The trust-boundary call depends on that human-reviewed map of about 1,500 packages, so anything outside it is left unchecked. It covers Python projects only.

## RECEIPT

- FIRST SEEN BY TESIGN: 2026-09-19 02:09 UTC
- AT SOURCE: 2026-09-19 00:27 UTC
- KEPT: 2026-09-22 05:53 UTC
- Published on TESIGN: 2026-09-22 05:53 UTC
- Text last updated: 2026-09-22 05:53 UTC

## How to read this

- This file was produced by the same build, from the same data, as the tesign.com item page. The text is editorial; the numbers are stored observations.
- null in the JSON means not observed — never zero. The Markdown writes [unconfirmed] for it.
- Star total = the value last checked on GitHub (stars_checked_at) + increases observed via GH Archive since. The 24h · 7d · 30d gains are GH Archive hourly events summed to the reference time (as_of). No score of ours.
- A summary, not legal advice.

[Image] https://tesign.com/img/package-doctor-888d02a454.png
