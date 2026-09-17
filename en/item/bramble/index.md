# Bramble

> Personal password vault, no account — Password manager with no account: devices sync peer-to-peer; extension, desktop, mobile

- Page: https://tesign.com/en/item/bramble/
- JSON: https://tesign.com/en/item/bramble/index.json
- Korean Markdown: https://tesign.com/item/bramble/index.md
- Generated: 2026-09-17 01:30 UTC

## Numbers

- 387 stars — checked on GitHub 2026-09-15 19:35 UTC
- no 7-day star increase observed (GH Archive) (as of 2026-09-16 21:00 UTC)
- 153 Show HN points — observed 2026-09-13 15:33 UTC
- Star total = the value last checked on GitHub (stars_checked_at) + increases observed via GH Archive since. The 24h · 7d · 30d gains are GH Archive hourly events summed to the reference time (as_of). No score of ours.

## AT A GLANCE

- LICENSE: GPL-3.0 (copyleft) — https://spdx.org/licenses/GPL-3.0.html
- USAGE: Use freely. Release your source if you redistribute (copyleft).
- OPEN SOURCE: YES
- LANGUAGE: TypeScript
- PLATFORM: web · macos · linux · ios · android
- CATEGORY: SECURITY
- Tags: password-manager · peer-to-peer · passkeys · local-first · browser-extension · rust
- How to start: Install to use
- SOURCES: Show HN https://github.com/flythenimbus/bramble
- INSTALL: https://bramble.sh/

## ACTIVITY

- Last commit: 2026-09-12 03:24 UTC
- Latest release: 1.28.0-chromium (2026-09-10)
- Contributors: 4
- Open issues (incl. PRs): 19
- Made by: an individual
- Checked on GitHub: 2026-09-15 19:35 UTC

## Signals and evidence

- BACK CATALOG

## TESIGN TAKE

A password manager that says up front there is no forgot-password button; the recovery code and a second synced device are the safety net.

## WHY IT MATTERS

Cloud password managers keep everyone's vault on one server; Bramble keeps the vault on your own devices and syncs it directly between them, peer-to-peer and end-to-end encrypted. A single Rust core does all cryptography, compiled to WebAssembly in the browser and to a native library on iOS and Android, using Argon2id and AES-256-GCM. Passkeys are stored as ordinary vault entries, so they sync along with everything else.

## BUILD FROM THIS

- You can point it at an S3-compatible bucket or your own WebDAV server for scheduled ciphertext-only backups, or import a KeePass KDBX4 database and get browser and mobile autofill on top. Modified redistributions must stay GPL-3.0.

## WHO IT'S FOR

- People wary of cloud vaults — keep the vault on your devices and sync peer-to-peer
- KeePass users — import KDBX4 and gain browser and mobile autofill
- Self-hosters — scheduled encrypted backups to S3-compatible or WebDAV storage

## START IN 5 MINUTES

```
# # Browser: install Bramble from the Chrome Web Store or Firefox Add-ons
# brew install --cask bramble   # macOS desktop app (Linux: APT repository, AppImage, .deb/.rpm or Nix flake)
# # iOS: App Store / Android: APK from GitHub Releases
# # Store the recovery code shown at vault setup somewhere offline
```

## CAVEATS

- Licence GPL-3.0. Free, no account, subscription or telemetry (donations only).
- The Windows desktop app is unreleased pending code signing (the extension works on Windows). The desktop app lacks Touch ID, passkeys, KeePass export, auto-type into native apps and an SSH agent for now.
- Lose the password, security key and recovery code and the vault is gone. Latest desktop release 0.8.0 as of 2026-09-15; 383 stars.

## RECEIPT

- FIRST SEEN BY TESIGN: 2026-09-13 15:33 UTC
- AT SOURCE: 2026-07-02 19:29 UTC
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

[Image] https://tesign.com/img/bramble-10602fdc45.png
