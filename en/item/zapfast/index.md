# ZapFast

> Lightweight native WhatsApp client — A from-scratch Rust WhatsApp client with no browser engine — about 150MB idle RAM on Linux, versus 1.13GB for WhatsApp Web.

- Page: https://tesign.com/en/item/zapfast/
- JSON: https://tesign.com/en/item/zapfast/index.json
- Korean Markdown: https://tesign.com/item/zapfast/index.md
- Generated: 2026-09-20 03:36 UTC

## Numbers

- 592 stars — checked on GitHub 2026-09-19 22:59 UTC
- 7-day +39 observed via GH Archive (as of 2026-09-19 22:00 UTC)
- Star total = the value last checked on GitHub (stars_checked_at) + increases observed via GH Archive since. The 24h · 7d · 30d gains are GH Archive hourly events summed to the reference time (as_of). No score of ours.

## AT A GLANCE

- LICENSE: MIT (permissive) — https://spdx.org/licenses/MIT.html
- USAGE: Use, change and redistribute, commercially too. Keep the notice.
- OPEN SOURCE: YES
- LANGUAGE: Rust
- PLATFORM: macos · windows · linux
- CATEGORY: SOCIAL
- Tags: whatsapp · rust · native-app · desktop · messaging
- How to start: Install to use
- SOURCES: GitHub https://github.com/crmne/zapfast
- INSTALL: https://zapfast.rocks/

## ACTIVITY

- Last commit: 2026-09-19 06:54 UTC
- Latest release: v0.14.0 (2026-09-16)
- Contributors: 9
- Open issues (incl. PRs): 42
- Made by: an individual
- Checked on GitHub: 2026-09-19 22:59 UTC

## TESIGN TAKE

The point isn't "a lighter Chrome app" — there's genuinely no browser engine in it, and publishing its own measurements makes the claim easier to trust.

## WHY IT MATTERS

WhatsApp Web and its desktop app are heavy because they embed a full Chromium engine. ZapFast is a from-scratch Rust/egui client that links to WhatsApp as a companion device with no browser engine at all. By the maker's own Linux measurements it opens in under a second and idles around 150MB, versus 1.13GB for WhatsApp Web and its Chromium processes. It covers most of WhatsApp's core features — replies, reactions, voice messages, polls, disappearing-message timers — and its local message archive is SQLCipher-encrypted, unlocked through the OS keyring.

## BUILD FROM THIS

- Swap a Chromium-based WhatsApp Web tab for a light native client
- Keep WhatsApp open on an older or low-power machine
- Match its theme with Spotifast (the same maker's Spotify client) since they share the same palette picker

## WHO IT'S FOR

- Anyone who keeps WhatsApp open all day and wants it to use less memory
- Someone on an older or low-power laptop where Chromium-based apps drag
- Linux or Windows users who want a native feel where there's no official app

## START IN 5 MINUTES

```
# Install: get the file for your OS at https://zapfast.rocks (macOS: brew install --cask crmne/tap/zapfast; Arch: yay -S zapfast-bin)
# On first launch, scan the QR code from WhatsApp's Linked Devices menu
# Build from source (needs Rust, CMake, Perl):
$ cargo install --path .
$ zapfast
```

## CAVEATS

- MIT (a few fonts/icons are SIL OFL/ISC) · the README states plainly that it's an unofficial client and using one may violate WhatsApp's terms, which could get an account suspended
- Calls, status posts, communities and group administration aren't supported yet
- Flathub publication is still pending

## RECEIPT

- FIRST SEEN BY TESIGN: 2026-09-15 21:33 UTC
- AT SOURCE: 2026-08-29 15:52 UTC
- KEPT: 2026-09-17 01:24 UTC
- Published on TESIGN: 2026-09-17 01:24 UTC
- Text last updated: 2026-09-17 01:26 UTC

## How to read this

- This file was produced by the same build, from the same data, as the tesign.com item page. The text is editorial; the numbers are stored observations.
- null in the JSON means not observed — never zero. The Markdown writes [unconfirmed] for it.
- Star total = the value last checked on GitHub (stars_checked_at) + increases observed via GH Archive since. The 24h · 7d · 30d gains are GH Archive hourly events summed to the reference time (as_of). No score of ours.
- A summary, not legal advice.

[Image] https://tesign.com/img/zapfast-ac29caa5d5.png
