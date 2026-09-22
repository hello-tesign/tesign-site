# ZenConverter

> On-phone file conversion for Android — Android converter for video, audio, images and PDFs — runs on the phone, no uploads

- Page: https://tesign.com/en/item/zenconverter/
- JSON: https://tesign.com/en/item/zenconverter/index.json
- Korean Markdown: https://tesign.com/item/zenconverter/index.md
- Generated: 2026-09-22 06:54 UTC

## Numbers

- 1,450 stars — checked on GitHub 2026-09-22 00:38 UTC
- no 7-day star increase observed (GH Archive) (as of 2026-09-21 20:00 UTC)
- Star total = the value last checked on GitHub (stars_checked_at) + increases observed via GH Archive since. The 24h · 7d · 30d gains are GH Archive hourly events summed to the reference time (as_of). No score of ours.

## AT A GLANCE

- LICENSE: AGPL-3.0 (copyleft) — https://spdx.org/licenses/AGPL-3.0.html
- USAGE: Release source if you redistribute or host it as a service.
- OPEN SOURCE: YES
- LANGUAGE: Kotlin
- PLATFORM: android
- CATEGORY: PRODUCTIVITY · MEDIA
- Tags: android · kotlin · jetpack-compose · ffmpeg · file-converter · local-first
- How to start: Install to use
- SOURCES: GitHub https://github.com/jasonzhu1207/zenconverter
- INSTALL: https://zenconverter.xlab.my/

## ACTIVITY

- Last commit: 2026-09-19 22:58 UTC
- Latest release: pre-release (2026-09-19) · pre-release
- Contributors: 4
- Open issues (incl. PRs): 5
- Made by: an individual
- Checked on GitHub: 2026-09-22 00:38 UTC

## Signals and evidence

- BACK CATALOG

## TESIGN TAKE

The point is refusing the upload-first habit and publishing what works and where it breaks in a table; the price is that large videos draw on the phone's own storage, memory and battery.

## WHY IT MATTERS

Android converter apps tend to be ad-heavy or upload your file first; this one is written in Kotlin and Jetpack Compose and does every conversion inside a foreground service on the device. Video (MP4/MKV/MOV) and audio (MP3/M4A/WAV/FLAC/OPUS) are truly re-encoded with FFmpeg; it also handles images including HEIC, PDF merge, compression and encryption, TTF/OTF/WOFF2 fonts and SRT/VTT/LRC/ASS subtitles, with Real-ESRGAN upscaling on NCNN Vulkan. The INTERNET permission is used only for manual update checks and on-demand model/font downloads, and the supported routes and their limits are written down in a public support-matrix.md (v0.2.3, 2026-09-12).

## BUILD FROM THIS

- As AGPL source you could cut a lightweight fork that keeps only one job (say, batch WEBP conversion of product photos plus metadata stripping), and its queue design — foreground service → engine routing → save — is a reference for other Android media apps.

## WHO IT'S FOR

- People shrinking a video or turning it into a GIF on the phone — without a server upload
- Anyone stripping photo metadata before sharing — JPGs are cleaned without re-encoding and can be restored from the backup
- Android media-app developers — a Compose + foreground service + FFmpeg pipeline to study

## START IN 5 MINUTES

```
# 1. Install from Google Play (package org.zenconverter.app) or the APK on GitHub Releases
# 2. Add files → pick the target format and options per file → the ready queue runs in a foreground service
# # Development setup is in docs/development-setup.md — no build commands in the README [확인 필요]
```

## CAVEATS

- AGPL-3.0 — the README says 'GNU AGPL v3.0 or later', the homepage 'AGPL-3.0+' (third-party libraries, native binaries and bundled fonts keep their own licences)
- Android only; minimum Android version is not stated in the README [확인 필요]
- Office conversion is beta (limited layout fidelity, 64 MiB source cap) and frame interpolation is experimental; large videos need free storage, memory and power

## RECEIPT

- FIRST SEEN BY TESIGN: 2026-09-13 09:39 UTC
- AT SOURCE: 2026-07-09 09:29 UTC
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

[Image] https://tesign.com/img/zenconverter-1e5195cf95.png
