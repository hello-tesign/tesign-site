# Spotifast (formerly Fastpotify)

> Lightweight Spotify client (Premium) — Native Rust Spotify client, 100-250 MB RAM, Linux/macOS/Windows; playback needs Premium

- Page: https://tesign.com/en/item/spotifast/
- JSON: https://tesign.com/en/item/spotifast/index.json
- Korean Markdown: https://tesign.com/item/spotifast/index.md
- Generated: 2026-09-22 06:54 UTC

## Numbers

- 4,497 stars — checked on GitHub 2026-09-22 00:38 UTC
- no 7-day star increase observed (GH Archive) (as of 2026-09-21 20:00 UTC)
- 1 Show HN points — observed 2026-09-13 14:04 UTC
- Star total = the value last checked on GitHub (stars_checked_at) + increases observed via GH Archive since. The 24h · 7d · 30d gains are GH Archive hourly events summed to the reference time (as_of). No score of ours.

## AT A GLANCE

- LICENSE: MIT (permissive) — https://spdx.org/licenses/MIT.html
- USAGE: Use, change and redistribute, commercially too. Keep the notice.
- OPEN SOURCE: YES
- LANGUAGE: Rust
- PLATFORM: linux · macos · windows · cli
- CATEGORY: MEDIA
- Tags: spotify · rust · egui · librespot · music-player · spotify-connect
- How to start: Install to use
- SOURCES: Show HN https://github.com/crmne/fastpotify · GitHub https://github.com/crmne/fastpotify
- INSTALL: https://fastpotify.rocks/

## ACTIVITY

- Last commit: 2026-09-21 20:37 UTC
- Latest release: v0.9.0 (2026-09-21)
- Contributors: 46
- Open issues (incl. PRs): 69
- Made by: an individual
- Checked on GitHub: 2026-09-22 00:38 UTC

## Signals and evidence

- CROSS-SIGNAL · Show HN + GitHub
- BACK CATALOG

## TESIGN TAKE

A third-party client that puts a number on 'it could be lighter'; just note that without Premium you can browse but not listen.

## WHY IT MATTERS

Where Spotify's own desktop app often uses 600 MB to over 1 GB of RAM, Spotifast typically runs the same library, search and playback in 100-250 MB and starts in well under a second. It plays through librespot and appears as a Spotify Connect device, so you can pick this computer from your phone or control a speaker from the desktop. It was renamed from Fastpotify to Spotifast at 0.8.0, and the repository now redirects to crmne/spotifast.

## BUILD FROM THIS

- Read playback state through subcommands like fastpotify now-playing --raw on macOS and Windows or MPRIS on Linux to build Stream Deck, Raycast, hotkey or status-bar integrations, and ship JSON palettes in the themes folder beside settings.json.

## WHO IT'S FOR

- Spotify Premium listeners, Linux users especially — a native player that uses less memory
- Keyboard and launcher fans — control playback with shortcuts and CLI subcommands
- The Winamp generation — a .wsz-skin mini player and the MilkDrop visualiser

## START IN 5 MINUTES

```
# # Windows installer / macOS DMG / Linux deb, rpm, Flatpak: https://spotifast.rocks/download/
# yay -S spotifast-bin      # Arch Linux (AUR)
# brew install --cask crmne/tap/spotifast   # macOS (Homebrew)
# cargo install --path . --locked           # elsewhere: Rust 1.95 or newer, inside a clone
# # Without MilkDrop: cargo install --path . --locked --no-default-features
```

## CAVEATS

- Licence MIT. Playback requires Spotify Premium; free accounts can only browse and search. It is unaffiliated with Spotify, and the author only says they are 'not aware' of account suspensions, which is not a guarantee.
- Renamed from Fastpotify to Spotifast at 0.8.0; the repository and site moved to crmne/spotifast and spotifast.rocks, and the command is spotifast (fastpotify still works).
- Windows installers, a macOS DMG and Linux deb/rpm/Flatpak ship on GitHub Releases and spotifast.rocks/download; elsewhere build from source with Rust 1.95 or newer. The MilkDrop build needs CMake, a C++ compiler and libclang, and opening MilkDrop for the first time downloads about 26 MB of presets.

## RECEIPT

- FIRST SEEN BY TESIGN: 2026-09-13 09:37 UTC
- AT SOURCE: 2026-08-28 14:50 UTC
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

[Image] https://tesign.com/img/spotifast-092eb69cd9.png
