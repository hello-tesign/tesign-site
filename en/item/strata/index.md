# Strata

> Keyboard-first Linux file manager — Keyboard-first Linux file manager: Miller columns, Ctrl+K search, RAW/PDF/video previews

- Page: https://tesign.com/en/item/strata/
- JSON: https://tesign.com/en/item/strata/index.json
- Korean Markdown: https://tesign.com/item/strata/index.md
- Generated: 2026-09-17 01:56 UTC

## Numbers

- 433 stars — checked on GitHub 2026-09-15 19:35 UTC (+2 observed since the check)
- 7-day +4 observed via GH Archive (as of 2026-09-16 21:00 UTC)
- 24h +2 ★ · 30d +25 ★ (as of 2026-09-16 21:00 UTC)
- Star total = the value last checked on GitHub (stars_checked_at) + increases observed via GH Archive since. The 24h · 7d · 30d gains are GH Archive hourly events summed to the reference time (as_of). No score of ours.

## AT A GLANCE

- LICENSE: MIT (permissive) — https://spdx.org/licenses/MIT.html
- USAGE: Use, change and redistribute, commercially too. Keep the notice.
- OPEN SOURCE: YES
- LANGUAGE: Rust
- PLATFORM: linux
- CATEGORY: PRODUCTIVITY
- Tags: file-manager · linux · gtk4 · rust · omarchy · wayland
- How to start: Install to use
- SOURCES: GitHub https://github.com/lgse/strata
- INSTALL: https://stratafiles.io/

## ACTIVITY

- Last commit: 2026-09-15 18:51 UTC
- Latest release: v0.18.0 (2026-09-15)
- Contributors: 29
- Open issues (incl. PRs): 74
- Made by: an organization
- Checked on GitHub: 2026-09-15 19:35 UTC

## Signals and evidence

- BACK CATALOG

## TESIGN TAKE

A file manager riding the Omarchy wave, with a clear security posture: sandboxed preview parsers and build-provenance checks before install.

## WHY IT MATTERS

Spatial Miller-column navigation sits alongside Icons and List views, and Ctrl+K recursive search covers Home and all mounted local drives even while the tree is still being indexed. Previews for images, camera RAW, PDF, audio and video are produced by helpers isolated in a Bubblewrap sandbox with no network; plain-text and source previews stay in process, capped at 1 MiB. The installer verifies the SHA-256 digest and GitHub Actions build provenance before installing the binary, and on Omarchy it can replace the Nautilus shortcuts and even act as the system file chooser (portal).

## BUILD FROM THIS

- Beyond the six bundled themes you can write custom themes, and it follows the Omarchy Quattro theme live; with strata --install-portal you can make Strata the Open/Save chooser for portal-aware applications (apps that do not use the XDG Desktop Portal are unchanged).

## WHO IT'S FOR

- Omarchy and Arch + Hyprland users — a Nautilus replacement wired to Super+Shift+F
- Keyboard-first users — Ctrl+K search, Ctrl+L path entry, Space to preview
- People working with photos, video and documents — RAW/PDF/video previews and media properties (resolution, codecs)

## START IN 5 MINUTES

```
# curl -fsSL https://raw.githubusercontent.com/lgse/strata/main/install.sh | bash
# # Dependencies for a manual install on Arch / Omarchy
# sudo pacman -S --needed bubblewrap ffmpeg ffmpegthumbnailer fontconfig gstreamer gst-libav gst-plugins-base gst-plugins-good gtk4 gtksourceview5 gvfs poppler-glib
# strata                 # home directory
# strata ~/Documents     # a specific directory
```

## CAVEATS

- Licence: the repository LICENSE file and README say MIT, but the official homepage FAQ says GPL-3.0-or-later — which is correct: [확인 필요]. 64-bit Linux only (x86_64, aarch64); glibc 2.39+ and GTK 4.12+ required. Arch and Omarchy are the primary supported environments and Wayland the primary display stack. SMB and phone access need extra GVfs backends. The project started at the end of August 2026. Free, no paid tier.

## RECEIPT

- FIRST SEEN BY TESIGN: 2026-09-13 09:44 UTC
- AT SOURCE: 2026-08-28 22:41 UTC
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

[Image] https://tesign.com/img/strata-445a0cc781.png
