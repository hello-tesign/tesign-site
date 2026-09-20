# Conduit

> Phone terminal for reaching servers — SSH, Mosh, SFTP terminal for Android and iOS with no account; hardware keys over USB/NFC

- Page: https://tesign.com/en/item/conduit/
- JSON: https://tesign.com/en/item/conduit/index.json
- Korean Markdown: https://tesign.com/item/conduit/index.md
- Generated: 2026-09-20 03:36 UTC

## Numbers

- 379 stars — checked on GitHub 2026-09-19 22:59 UTC
- no 7-day star increase observed (GH Archive) (as of 2026-09-19 22:00 UTC)
- 3 Show HN points — observed 2026-09-13 15:58 UTC
- Star total = the value last checked on GitHub (stars_checked_at) + increases observed via GH Archive since. The 24h · 7d · 30d gains are GH Archive hourly events summed to the reference time (as_of). No score of ours.

## AT A GLANCE

- LICENSE: Apache-2.0 (permissive) — https://spdx.org/licenses/Apache-2.0.html
- USAGE: Commercial use, redistribution OK. Keep notices; mark changes.
- OPEN SOURCE: YES
- LANGUAGE: Dart
- PLATFORM: android · ios
- CATEGORY: DEV TOOLS
- Tags: ssh · mosh · sftp · android · ios · flutter
- How to start: Install to use
- SOURCES: Show HN https://github.com/gwitko/Conduit
- INSTALL: https://conduit.gwitko.dev/

## ACTIVITY

- Last commit: 2026-07-24 08:41 UTC
- Latest release: v1.4.14 (2026-07-14)
- Contributors: 3
- Open issues (incl. PRs): 36
- Made by: an individual
- Checked on GitHub: 2026-09-19 22:59 UTC

## Signals and evidence

- BACK CATALOG

## TESIGN TAKE

A phone terminal with hardware-key auth and Mosh, no account or subscription attached, with the source under Apache-2.0.

## WHY IT MATTERS

Hosts, keys and trusted fingerprints stay on the device — no account, no cloud sync, no subscription. Mosh runs on dart_mosh, a clean-room Dart implementation, so a session survives Wi-Fi drops and cellular handoffs; ed25519-sk and ecdsa-sk FIDO keys work over USB and NFC on Android and NFC on iOS (tested with YubiKey). On Android arm64 it can also open a local Arch Linux shell, with pacman, through proot — no server involved.

## BUILD FROM THIS

- Per-host tmux auto-attach plus run-on-connect snippets make a phone-side server check routine; hardware-key auth with agent forwarding covers a jump-host workflow.

## WHO IT'S FOR

- Server operators — SSH/Mosh on the move with tmux auto-attach
- Security-key users — SSH auth from a phone with YubiKey or other FIDO keys
- Android users — a local Arch Linux shell with pacman, no server needed

## START IN 5 MINUTES

```
# 1. App Store: https://apps.apple.com/app/id6780054869
# 2. Google Play: https://play.google.com/store/apps/details?id=com.gwitko.conduit
# 3. F-Droid: https://f-droid.org/packages/com.gwitko.conduit/ (or track GitHub releases with Obtainium)
# 4. Add a machine in the app, import a private key from a file or generate an ed25519 key on device, then connect
# (No shell install commands in the README — store-distributed)
```

## CAVEATS

- Conduit's own code is Apache-2.0. Android builds with the local shell redistribute Termux-packaged third-party binaries (proot and others) under their own licences, GPL/LGPL included, listed in THIRD_PARTY_NOTICES.md. The local Arch Linux shell is Android arm64 only, not iOS. The Google Play build omits the /mnt/android shared-storage mount (all-files permission). iOS hardware keys are NFC only. The app is free per the homepage. Last push 2026-07-24.

## RECEIPT

- FIRST SEEN BY TESIGN: 2026-09-13 15:58 UTC
- AT SOURCE: 2026-06-18 09:32 UTC
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

[Image] https://tesign.com/img/conduit-9c5c4936f8.webp
