# proton-cli

> Proton services from the terminal — Runs Proton Mail, Drive, Calendar, Pass and Contacts from the terminal.

- Page: https://tesign.com/en/item/proton-cli/
- JSON: https://tesign.com/en/item/proton-cli/index.json
- Korean Markdown: https://tesign.com/item/proton-cli/index.md
- Generated: 2026-09-22 05:53 UTC

## Numbers

- 71 stars — checked on GitHub 2026-09-22 00:38 UTC
- no 7-day star increase observed (GH Archive) (as of 2026-09-21 20:00 UTC)
- 3 Show HN points — observed 2026-09-20 04:28 UTC
- Star total = the value last checked on GitHub (stars_checked_at) + increases observed via GH Archive since. The 24h · 7d · 30d gains are GH Archive hourly events summed to the reference time (as_of). No score of ours.

## AT A GLANCE

- LICENSE: MIT (permissive) — https://spdx.org/licenses/MIT.html
- USAGE: Use, change and redistribute, commercially too. Keep the notice.
- OPEN SOURCE: YES
- LANGUAGE: Go
- PLATFORM: linux · macos · windows · cli
- CATEGORY: PRODUCTIVITY · DEV TOOLS
- Tags: proton · cli · email · encryption
- How to start: Install to use
- SOURCES: Show HN https://github.com/roman-16/proton-cli
- INSTALL: https://proton-cli.lerchster.dev/

## ACTIVITY

- Last commit: 2026-09-21 21:02 UTC
- Latest release: v4.2.3 (2026-09-18)
- Contributors: 1
- Open issues (incl. PRs): 0
- Made by: an individual
- Checked on GitHub: 2026-09-22 00:38 UTC

## Signals and evidence

- NEW · 0h OLD WHEN SEEN

## TESIGN TAKE

No bridge, no proxy: the encryption happens on your machine, and that is the whole pitch.

## WHY IT MATTERS

A Proton account can only be used through the browser or the apps, which keeps it out of scripts and cron. proton-cli puts Mail, Drive, Calendar, Pass and Contacts behind one binary, handling SRP login and PGP encryption on your machine with Proton's own libraries. Every listing comes out as JSON or YAML, and anything that changes state takes --dry-run. Linux, macOS and Windows under MIT; a community project unaffiliated with Proton AG, so mind Proton's terms yourself.

## BUILD FROM THIS

- A cron job that pulls unread mail each morning for a summary
- A release script that uploads reports to a Drive folder
- An agent hooked to mail and calendar via proton skill

## WHO IT'S FOR

- Proton user — wants mail and files automated by script
- Terminal person — prefers the account without a browser
- Agent user — letting an agent read mail and calendar

## START IN 5 MINUTES

```
$ curl -fsSL https://raw.githubusercontent.com/roman-16/proton-cli/main/scripts/install.sh | sh
$ irm https://raw.githubusercontent.com/roman-16/proton-cli/main/scripts/install.ps1 | iex
# Also on Homebrew, winget, APT, AUR, Nix, npm and as signed binaries
$ proton account login
$ proton mail messages list --unread
# Every command reads proton <app> <collection> <verb> · proton-cli works too
```

## CAVEATS

- Community project unaffiliated with Proton AG; mind Proton's terms
- It handles your password and keys; read the Security doc first

## RECEIPT

- FIRST SEEN BY TESIGN: 2026-09-13 12:59 UTC
- AT SOURCE: 2026-09-13 12:42 UTC
- KEPT: 2026-09-14 02:41 UTC
- Text last updated: 2026-09-15 07:17 UTC

## How to read this

- This file was produced by the same build, from the same data, as the tesign.com item page. The text is editorial; the numbers are stored observations.
- null in the JSON means not observed — never zero. The Markdown writes [unconfirmed] for it.
- Star total = the value last checked on GitHub (stars_checked_at) + increases observed via GH Archive since. The 24h · 7d · 30d gains are GH Archive hourly events summed to the reference time (as_of). No score of ours.
- A summary, not legal advice.

[Image] https://tesign.com/img/proton-cli-b7a9bc1524.png
