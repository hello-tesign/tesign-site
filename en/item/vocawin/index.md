# VocaWin

> Voice typing that stays on your PC — Hold a hotkey, speak, and the text appears at the cursor — Windows dictation that stays on the PC.

- Page: https://tesign.com/en/item/vocawin/
- JSON: https://tesign.com/en/item/vocawin/index.json
- Korean Markdown: https://tesign.com/item/vocawin/index.md
- Generated: 2026-09-22 07:26 UTC

## Numbers

- 74 stars — checked on GitHub 2026-09-22 00:37 UTC
- 7-day +5 observed via GH Archive (as of 2026-09-22 03:00 UTC)
- Star total = the value last checked on GitHub (stars_checked_at) + increases observed via GH Archive since. The 24h · 7d · 30d gains are GH Archive hourly events summed to the reference time (as_of). No score of ours.

## AT A GLANCE

- LICENSE: AGPL-3.0 (copyleft) — https://spdx.org/licenses/AGPL-3.0.html
- USAGE: Release source if you redistribute or host it as a service.
- OPEN SOURCE: YES
- LANGUAGE: Rust
- PLATFORM: windows
- CATEGORY: AI · PRODUCTIVITY
- Tags: 받아쓰기 · 음성 인식 · 윈도우 · 내 기기에서
- How to start: Install to use
- SOURCES: GitHub https://github.com/vocahq/vocawin
- INSTALL: https://vocawin.com/

## ACTIVITY

- Last commit: 2026-09-17 17:05 UTC
- Latest release: v0.1.1-beta (2026-09-06)
- Contributors: 3
- Open issues (incl. PRs): 9
- Made by: an organization
- Checked on GitHub: 2026-09-22 00:37 UTC

## TESIGN TAKE

The first line of its own page says "beta, unsigned". Stating that up front is more useful when choosing a tool than hiding it.

## WHY IT MATTERS

Most dictation tools send your voice to a company server. VocaWin is built so that, once a model is on disk, recording and transcription stay on the PC. There is no account to create and no hosted speech service behind it.

## BUILD FROM THIS

- A Tauri and Rust tray app. Right Alt is the default push-to-talk key, with a double tap to toggle; hotkeys, models, languages, silence detection and start-on-login live in Settings. Models (Whisper family, Parakeet, Moonshine, SenseVoice and others) download inside the app, and Windows acceleration runs on Vulkan or DirectML with a CPU fallback. Text is typed at the caret and your clipboard is left alone.

## WHO IT'S FOR

- Windows users who want to dictate mail and documents but do not want the audio leaving the machine.

## START IN 5 MINUTES

```
# Download the beta installer from vocawin.com, then download a speech model once from inside the app.
```

## CAVEATS

- It is a beta and unsigned, so Windows will flag an unknown publisher. No model ships with the installer, so the first run needs the network once. Elevated windows can block text injection, and there is no auto-update. AGPL-3.0 means a modified, served version must publish its source.

## RECEIPT

- FIRST SEEN BY TESIGN: 2026-09-17 01:24 UTC
- AT SOURCE: 2026-03-01 05:23 UTC
- KEPT: 2026-09-19 22:45 UTC
- Published on TESIGN: 2026-09-19 22:45 UTC
- Text last updated: 2026-09-19 22:45 UTC

## How to read this

- This file was produced by the same build, from the same data, as the tesign.com item page. The text is editorial; the numbers are stored observations.
- null in the JSON means not observed — never zero. The Markdown writes [unconfirmed] for it.
- Star total = the value last checked on GitHub (stars_checked_at) + increases observed via GH Archive since. The 24h · 7d · 30d gains are GH Archive hourly events summed to the reference time (as_of). No score of ours.
- A summary, not legal advice.

[Image] https://tesign.com/img/vocawin-b4eb1ed3f0.png
