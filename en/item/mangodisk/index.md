# MangoDisk

> Disk cleanup for Mac and Windows — Disk cleaner for macOS and Windows: read-only scan, then caches, duplicates and big files

- Page: https://tesign.com/en/item/mangodisk/
- JSON: https://tesign.com/en/item/mangodisk/index.json
- Korean Markdown: https://tesign.com/item/mangodisk/index.md
- Generated: 2026-09-20 03:36 UTC

## Numbers

- 2,905 stars — checked on GitHub 2026-09-19 22:59 UTC
- 7-day +11 observed via GH Archive (as of 2026-09-19 22:00 UTC)
- Star total = the value last checked on GitHub (stars_checked_at) + increases observed via GH Archive since. The 24h · 7d · 30d gains are GH Archive hourly events summed to the reference time (as_of). No score of ours.

## AT A GLANCE

- LICENSE: GPL-3.0 (copyleft) — https://spdx.org/licenses/GPL-3.0.html
- USAGE: Use freely. Release your source if you redistribute (copyleft).
- OPEN SOURCE: YES
- LANGUAGE: Rust
- PLATFORM: macos · windows · cli
- CATEGORY: PRODUCTIVITY
- Tags: disk-cleaner · tauri · rust · duplicate-finder · app-uninstaller · cross-platform
- How to start: Install to use
- SOURCES: GitHub https://github.com/harry0703/mangodisk
- INSTALL: https://mangodisk.app/

## ACTIVITY

- Last commit: 2026-09-18 15:18 UTC
- Latest release: v1.1.3 (2026-09-18)
- Contributors: 4
- Open issues (incl. PRs): 12
- Made by: an individual
- Checked on GitHub: 2026-09-19 22:59 UTC

## Signals and evidence

- BACK CATALOG

## TESIGN TAKE

A cleaner that puts not deleting the wrong thing ahead of deleting more, and publishes its rule book so you can check.

## WHY IT MATTERS

The real question for a disk cleaner is not how much it removes but whether it removes the wrong thing; MangoDisk scans read-only by default, makes you review every item before deletion, uninstall or settings changes, and logs the result in Operation History. One app covers system and browser caches, developer caches such as Xcode, Docker and Node.js project build artifacts, local AI models, duplicate and large files, app leftovers, startup items and a treemap, and the cleanup rule library is published in the repository. It is built with Tauri 2 and Rust and has a Korean README.

## BUILD FROM THIS

- Script unattended checks across several Macs or PCs with the CLI (mangodisk clean --format json), or contribute declarative TOML rules that teach it how to clean your own app's caches.

## WHO IT'S FOR

- Everyday Mac and Windows users — reclaim space from caches, duplicates and large files
- Developers — recover space from Xcode, Docker, package-manager and build caches
- Office PC administrators — JSON output and unattended cleanup scripts through the CLI

## START IN 5 MINUTES

```
# brew install --cask harry0703/tap/mangodisk        # macOS
# irm "https://get.mangodisk.app" | iex              # Windows PowerShell
# brew install harry0703/tap/mangodisk-cli           # CLI (macOS); Windows: irm "https://get.mangodisk.app/cli" | iex
# mangodisk clean                                    # scan only, changes nothing
# mangodisk clean --apply                            # apply the same smart recommendations as the desktop app
```

## CAVEATS

- Licence GPL-3.0. macOS Monterey 12.5 or later and 64-bit Windows 10 or later (Microsoft Edge WebView2 Runtime 111.0.1661.62 or later required); no Linux build.
- The README warns that cleanup, permanent deletion and uninstall may be irreversible and that some system optimisations can affect security, battery life or update behaviour.
- AI explanations (since 1.1.0) come with free daily use in official releases plus an option to connect your own AI service; the exact free quota is [확인 필요].

## RECEIPT

- FIRST SEEN BY TESIGN: 2026-09-13 09:38 UTC
- AT SOURCE: 2026-08-01 03:00 UTC
- KEPT: 2026-09-14 19:27 UTC
- Published on TESIGN: 2026-09-14 19:27 UTC
- Text last updated: 2026-09-15 04:36 UTC
- ◌ BACK CATALOG: Reconstructed from archive data, not a live discovery.

## How to read this

- This file was produced by the same build, from the same data, as the tesign.com item page. The text is editorial; the numbers are stored observations.
- null in the JSON means not observed — never zero. The Markdown writes [unconfirmed] for it.
- Star total = the value last checked on GitHub (stars_checked_at) + increases observed via GH Archive since. The 24h · 7d · 30d gains are GH Archive hourly events summed to the reference time (as_of). No score of ours.
- Reconstructed from archive data, not a live discovery.
- A summary, not legal advice.

[Image] https://tesign.com/img/mangodisk-e5d8c43485.jpg
