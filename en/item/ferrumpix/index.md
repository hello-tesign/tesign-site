# FerrumPix

> Photo library and RAW editing — Photo manager, RAW developer and pixel editor in one app; connects to Immich and Nextcloud

- Page: https://tesign.com/en/item/ferrumpix/
- JSON: https://tesign.com/en/item/ferrumpix/index.json
- Korean Markdown: https://tesign.com/item/ferrumpix/index.md
- Generated: 2026-09-22 06:54 UTC

## Numbers

- 664 stars — checked on GitHub 2026-09-22 00:39 UTC
- no 7-day star increase observed (GH Archive) (as of 2026-09-21 20:00 UTC)
- 2 Show HN points — observed 2026-09-13 14:16 UTC
- Star total = the value last checked on GitHub (stars_checked_at) + increases observed via GH Archive since. The 24h · 7d · 30d gains are GH Archive hourly events summed to the reference time (as_of). No score of ours.

## AT A GLANCE

- LICENSE: GPL-3.0 (copyleft) — https://spdx.org/licenses/GPL-3.0.html
- USAGE: Use freely. Release your source if you redistribute (copyleft).
- OPEN SOURCE: YES
- LANGUAGE: Visual Basic .NET
- PLATFORM: linux · windows · macos
- CATEGORY: MEDIA
- Tags: photo-editor · raw · immich · nextcloud · avalonia · dotnet
- How to start: Install to use
- SOURCES: Show HN https://github.com/Bitpainter75/FerrumPix
- INSTALL: https://ferrumpix.app/

## ACTIVITY

- Last commit: 2026-09-21 23:00 UTC
- Latest release: 0.9.48 (2026-09-21)
- Contributors: 3
- Open issues (incl. PRs): 4
- Made by: an individual
- Checked on GitHub: 2026-09-22 00:39 UTC

## Signals and evidence

- BACK CATALOG

## TESIGN TAKE

One developer's answer to juggling four photo programs: one app, with the server and the models both kept under your own control.

## WHY IT MATTERS

It folds the library app, the RAW converter, the pixel editor and the server's web page into one application that runs entirely on your own machine. Lens distortion, colour fringing and vignetting are corrected from Lensfun measurements covering more than 1500 lenses on over 1000 camera bodies, and ratings and keywords written by Lightroom, darktable or digiKam sidecars are read in. It is written, unusually, in VB.NET on Avalonia UI and .NET 10 by a single developer.

## BUILD FROM THIS

- Set up a batch flow that resizes, watermarks and converts product photos and exports them straight to Immich, or fork it under GPL-3.0 into your own photo tool (derivatives stay open under the same licence).

## WHO IT'S FOR

- Hobby photographers — browse folders, rate, develop RAW and edit in one app
- Immich or Nextcloud self-hosters — open server photos on the desktop, edit, upload and sync metadata
- Online shop owners — batch-resize, watermark and convert product photos

## START IN 5 MINUTES

```
# # Linux: download FerrumPix-x86_64.AppImage / .flatpak / -amd64.deb / -x86_64.rpm from GitHub Releases (Arch: AUR ferrumpix-bin)
# # Windows: Microsoft Store or FerrumPix-win-x64-Setup.exe
# # Build from source (.NET SDK 10 or newer)
# dotnet build FerrumPix.sln
# dotnet run --project FerrumPix.vbproj
```

## CAVEATS

- Licence GPL-3.0-only. Linux and Windows x64 are the supported builds; ARM64 and macOS builds are untested and experimental, and the macOS app is unsigned, so you must clear the quarantine flag from the terminal.
- libmpv (video) and libraw (RAW) are required, and eight features such as object selection and people search only appear after downloading model files from Settings; the face-comparison weights (InsightFace) are limited to non-commercial research.
- Korean is not among the 16 UI languages the README names (it says 21 are built in; the other five are [확인 필요]). Actively developed, with stability and performance work still in progress.

## RECEIPT

- FIRST SEEN BY TESIGN: 2026-09-13 14:16 UTC
- AT SOURCE: 2026-08-19 22:22 UTC
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

[Image] https://tesign.com/img/ferrumpix-e40c0c84b0.webp
