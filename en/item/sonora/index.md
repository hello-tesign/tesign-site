# Sonora

> Several music services in one player — Native Rust/GPUI music client for Spotify, YouTube Music, Subsonic and local files

- Page: https://tesign.com/en/item/sonora/
- JSON: https://tesign.com/en/item/sonora/index.json
- Korean Markdown: https://tesign.com/item/sonora/index.md
- Generated: 2026-09-23 02:05 UTC

## Numbers

- 1,407 stars — checked on GitHub 2026-09-23 01:49 UTC
- no 7-day star increase observed (GH Archive) (as of 2026-09-22 21:00 UTC)
- Star total = the value last checked on GitHub (stars_checked_at) + increases observed via GH Archive since. The 24h · 7d · 30d gains are GH Archive hourly events summed to the reference time (as_of). No score of ours.

## AT A GLANCE

- LICENSE: GPL-3.0 (copyleft) — https://spdx.org/licenses/GPL-3.0.html
- USAGE: Use freely. Release your source if you redistribute (copyleft).
- OPEN SOURCE: YES
- LANGUAGE: Rust
- PLATFORM: macos · windows · linux
- CATEGORY: MEDIA
- Tags: music-player · spotify · youtube-music · subsonic · rust · gpui
- How to start: Install to use
- SOURCES: GitHub https://github.com/nolight132/sonora
- INSTALL: https://sonorahq.org/

## ACTIVITY

- Last commit: 2026-09-23 01:05 UTC
- Latest release: v0.38.0 (2026-09-20)
- Contributors: 46
- Open issues (incl. PRs): 115
- Made by: an organization
- Checked on GitHub: 2026-09-23 01:49 UTC

## Signals and evidence

- BACK CATALOG

## TESIGN TAKE

A native, non-Electron player that unifies three streaming sources is rare; the fact that it is an unofficial Spotify client travels with it.

## WHY IT MATTERS

Sonora is a native app built on the GPUI rendering stack from the Zed editor and on librespot, playing Spotify, YouTube Music, Subsonic/OpenSubsonic and local files in one window. It offers gapless playback, volume normalization, synced karaoke-style lyrics with romanization, theme/font/icon/transparency customization and Discord Rich Presence. Distribution covers a brew cask on macOS, the AUR on Arch, Flatpak, Nix and a Windows installer; the repository has moved to sonorahq/sonora.

## BUILD FROM THIS

- Declare provider and theme through the Nix flake's programs.sonora module to roll the same setup across machines, or attach your own Navidrome server so streaming and a personal library share one player.

## WHO IT'S FOR

- People who use both Spotify and YouTube Music — one app, one playback flow
- Navidrome/Subsonic server owners — a native desktop player for your own library
- Rust GUI developers — a real desktop app built with GPUI

## START IN 5 MINUTES

```
# brew install --cask nolight132/tap/sonora
# xattr -dr com.apple.quarantine /Applications/Sonora.app
# yay -S sonora-bin
# flatpak install --user https://sonorahq.github.io/sonora/sonora.flatpakref
# # Windows: download and run Sonora-Setup.exe from Releases
```

## CAVEATS

- GPL-3.0-or-later. macOS, Windows and Linux (FreeBSD "probably", in the README's words).
- Unofficial client unaffiliated with Spotify AB; you need your own Spotify or YouTube Music account.
- Releases are not yet code-signed, so macOS needs the quarantine attribute removed with xattr; translations, per the README table, are 100% English and 82–98% for twelve other languages.

## RECEIPT

- FIRST SEEN BY TESIGN: 2026-09-13 09:37 UTC
- AT SOURCE: 2026-08-03 22:27 UTC
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

[Image] https://tesign.com/img/sonora-20710e87e8.png
