# Hydra Download Manager

> Multi-source download accelerator — Multi-connection download manager: desktop GUI, browser add-ons, wget/curl-compatible CLI

- Page: https://tesign.com/en/item/hydra-download-manager/
- JSON: https://tesign.com/en/item/hydra-download-manager/index.json
- Korean Markdown: https://tesign.com/item/hydra-download-manager/index.md
- Generated: 2026-09-17 19:00 UTC

## Numbers

- 560 stars — checked on GitHub 2026-09-17 18:41 UTC
- 7-day +3 observed via GH Archive (as of 2026-09-17 13:00 UTC)
- Star total = the value last checked on GitHub (stars_checked_at) + increases observed via GH Archive since. The 24h · 7d · 30d gains are GH Archive hourly events summed to the reference time (as_of). No score of ours.

## AT A GLANCE

- LICENSE: GPL-3.0 (copyleft) — https://spdx.org/licenses/GPL-3.0.html
- USAGE: Use freely. Release your source if you redistribute (copyleft).
- OPEN SOURCE: YES
- LANGUAGE: Rust
- PLATFORM: windows · macos · linux · cli
- CATEGORY: PRODUCTIVITY
- Tags: download-manager · rust · cli · browser-extension · cross-platform · metalink
- How to start: Install to use
- SOURCES: GitHub https://github.com/ja7ad/hydra
- INSTALL: https://hydra.javad.dev/

## ACTIVITY

- Last commit: 2026-09-16 15:10 UTC
- Latest release: v0.5.2-rc (2026-09-16) · pre-release
- Contributors: 9
- Open issues (incl. PRs): 17
- Made by: an individual
- Checked on GitHub: 2026-09-17 18:41 UTC

## Signals and evidence

- BACK CATALOG

## TESIGN TAKE

An open-source IDM-style download manager on three OSes, with the licence split so the engine alone can be embedded elsewhere.

## WHY IT MATTERS

The Rust engine splits a download across multiple connections and independent mirrors and re-assigns ranges from slow peers to fast ones (range stealing). The same engine ships as a wget/curl-compatible CLI (a static musl build that runs on any Linux distribution) and as a desktop app for Windows, macOS and Linux, with Chrome Web Store, Firefox Add-ons and Safari extensions handing downloads over. It reads Metalink 3/4 documents to pick up mirror lists, sizes and hashes, and installs via one-line install.sh/install.ps1 scripts, Homebrew, PPA, COPR, AUR or AppImage.

## BUILD FROM THIS

- Because hydra-core and libhydra (the C ABI) are dual-licensed MIT/Apache-2.0, you can embed the download engine in Android, iOS, Go or Flutter apps; in server scripts it drops in where wget or curl was.

## WHO IT'S FOR

- People who often download large files (ISOs, datasets) — GUI plus browser extensions that hand over downloads
- Server and CLI users — wget/curl-compatible commands, static build, Metalink mirror merging
- App developers — embed the engine via libhydra (MIT/Apache-2.0)

## START IN 5 MINUTES

```
# curl -fsSL https://raw.githubusercontent.com/ja7ad/hydra/main/install.sh | bash   # macOS / Linux (GUI bundle; append -s -- --cli for CLI only)
# irm https://raw.githubusercontent.com/ja7ad/hydra/main/install.ps1 | iex   # Windows PowerShell
# brew install ja7ad/tap/hydra
# hydra https://example.com/archive.tar.gz
# hydra -x 8 https://example.com/largefile.iso
```

## CAVEATS

- Licence: the CLI binary is GPL-3.0-or-later; the hydra-core, hya-net and hya-ffi libraries are MIT OR Apache-2.0 (repository shows GPL-3.0). The macOS app is not notarized yet, so Gatekeeper may block it; Linux desktop builds need glibc 2.35+ (Ubuntu 22.04, Debian 12, RHEL 9 and newer). On Ubuntu, apt install hydra gives THC-Hydra, a different program — install hydra-download-manager instead. Free.

## RECEIPT

- FIRST SEEN BY TESIGN: 2026-09-13 09:47 UTC
- AT SOURCE: 2026-08-15 14:20 UTC
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

[Image] https://tesign.com/img/hydra-download-manager-a160e15181.jpg
