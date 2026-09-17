# Capptivo

> Screen recording for product demos — Free screen recorder with follow-cursor zoom and on-device captions for product demos

- Page: https://tesign.com/en/item/capptivo/
- JSON: https://tesign.com/en/item/capptivo/index.json
- Korean Markdown: https://tesign.com/item/capptivo/index.md
- Generated: 2026-09-17 01:30 UTC

## Numbers

- 995 stars — checked on GitHub 2026-09-15 19:34 UTC
- 7-day +2 observed via GH Archive (as of 2026-09-16 21:00 UTC)
- Star total = the value last checked on GitHub (stars_checked_at) + increases observed via GH Archive since. The 24h · 7d · 30d gains are GH Archive hourly events summed to the reference time (as_of). No score of ours.

## AT A GLANCE

- LICENSE: MIT (permissive) — https://spdx.org/licenses/MIT.html
- USAGE: Use, change and redistribute, commercially too. Keep the notice.
- OPEN SOURCE: YES
- LANGUAGE: TypeScript
- PLATFORM: macos · windows · linux
- CATEGORY: MEDIA
- Tags: screen-recording · tauri · rust · whisper · demo-video · cursor-zoom
- How to start: Install to use
- SOURCES: GitHub https://github.com/sechak-ag/capptivo
- INSTALL: https://capptivo.com/

## ACTIVITY

- Last commit: 2026-08-24 15:41 UTC
- Latest release: v1.0.3 (2026-08-05)
- Contributors: 6
- Open issues (incl. PRs): 32
- Made by: an organization
- Checked on GitHub: 2026-09-15 19:34 UTC

## Signals and evidence

- BACK CATALOG

## TESIGN TAKE

You trade the subscription for some legwork: unsigned macOS builds and a whisper-cli you install yourself, in exchange for the same kind of demo video made locally.

## WHY IT MATTERS

Pitched as a Screen Studio and Cursorful alternative, it makes follow-cursor zoom demo videos without the "$29/month" the README says such software costs. While recording it stores a 60 Hz cursor and click track (cursor.json), and when you open a fresh recording it suggests zoom fragments from your clicks. Captions are generated on-device with whisper.cpp, and the UI ships in 11 languages including Korean (v1.0.3, released 2026-08-05).

## BUILD FROM THIS

- Under MIT you can ship a customised in-house demo recorder with your own presets and backgrounds, or lift the Rust capture and encoding modules (recorder/, cursor/), which do not depend on Tauri, into your own recording app.

## WHO IT'S FOR

- Solo developers making product demos and tutorials — click-based auto zoom cuts editing time
- Teams needing a UI in Korean or one of 10 other languages — captions stay on-device
- Rust/Tauri developers building a recorder — capture → encoding pipeline to study

## START IN 5 MINUTES

```
# 1. Download an installer from GitHub Releases (macOS .dmg / Windows .msi or *-setup.exe / Linux .deb, .AppImage, .rpm)
# # To run from source (needs Rust, Node, pnpm):
# pnpm install
# pnpm tauri dev
# # Open the recorder with ⌥⇧R (Alt+Shift+R on Windows/Linux) or the tray icon
```

## CAVEATS

- MIT — but the FFmpeg sidecars it downloads are GPL, so redistributing builds carries their own terms (see THIRD_PARTY_NOTICES.md)
- macOS 13+, Windows 10 build 1903+, Linux with PipeWire 1.0+; macOS builds are currently unsigned (right-click → Open on first launch, then grant Screen Recording)
- Captions need a system whisper.cpp whisper-cli binary; area selection is not yet available on Linux

## RECEIPT

- FIRST SEEN BY TESIGN: 2026-09-13 09:14 UTC
- AT SOURCE: 2026-07-28 18:27 UTC
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

[Image] https://tesign.com/img/capptivo-e2f0abf7aa.webp
