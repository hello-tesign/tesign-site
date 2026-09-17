# Yap

> On-device dictation for Mac users — Press a shortcut, talk, text lands in any macOS field; on-device, no account or API key.

- Page: https://tesign.com/en/item/yap/
- JSON: https://tesign.com/en/item/yap/index.json
- Korean Markdown: https://tesign.com/item/yap/index.md
- Generated: 2026-09-17 01:56 UTC

## Numbers

- 392 stars — checked on GitHub 2026-09-15 19:35 UTC
- no 7-day star increase observed (GH Archive) (as of 2026-09-16 21:00 UTC)
- 104 Show HN points — observed 2026-09-13 14:52 UTC
- Star total = the value last checked on GitHub (stars_checked_at) + increases observed via GH Archive since. The 24h · 7d · 30d gains are GH Archive hourly events summed to the reference time (as_of). No score of ours.

## AT A GLANCE

- LICENSE: MIT (permissive) — https://spdx.org/licenses/MIT.html
- USAGE: Use, change and redistribute, commercially too. Keep the notice.
- OPEN SOURCE: YES
- LANGUAGE: Swift
- PLATFORM: macos
- CATEGORY: PRODUCTIVITY · AI
- Tags: dictation · speech-to-text · macos · on-device · swift · menu-bar
- How to start: Install to use
- SOURCES: Show HN https://github.com/FrigadeHQ/yap
- INSTALL: https://frigade.com/yap

## ACTIVITY

- Last commit: 2026-09-15 00:08 UTC
- Latest release: v0.1.12 (2026-09-15)
- Contributors: 6
- Open issues (incl. PRs): 7
- Made by: an organization
- Checked on GitHub: 2026-09-15 19:35 UTC

## Signals and evidence

- BACK CATALOG

## TESIGN TAKE

A case for using the speech recognition already in the OS instead of shipping a model: lighter, and private by construction.

## WHY IT MATTERS

macOS 26 added the SpeechAnalyzer and SpeechTranscriber APIs, which do on-device streaming speech to text with models the OS ships and manages. Yap uses only that path, so it downloads no model, weighs 4 MB, idles at about 60 MB of memory and contains no network code at all. In the benchmark the README cites (5,559 LibriSpeech clips), Apple's model scored a 2.12% word error rate on clean audio against 3.74% for Whisper Small, about three times faster.

## BUILD FROM THIS

- At roughly three thousand lines of Swift it is easy to read and modify: keep the `RecordingCoordinator` state machine and add a language picker or an app-specific paste path to make your own dictation tool.

## WHO IT'S FOR

- Developers prompting coding agents — dictate into terminals and editors, preview before inserting
- People writing email and Slack all day — sentences faster than typing
- Users who do not want audio leaving the machine — dictation with zero network calls

## START IN 5 MINUTES

```
# brew install --cask frigadehq/tap/yap
# brew upgrade --cask yap   # to update later
# # or download the .dmg from https://frigade.com/yap and drag it into Applications
# Build from source (Xcode 26): git clone https://github.com/FrigadeHQ/yap.git && cd yap && ./install.sh
```

## CAVEATS

- MIT licence. macOS 26 Tahoe or later on Apple Silicon only; Intel Macs are not supported (the older 0.1.4 Intel build sends audio to Apple's servers). Needs four permissions — Microphone, Speech Recognition, Accessibility, Automation — and Accessibility must be switched on by hand. Language follows the system locale; there is no language picker yet. Free.

## RECEIPT

- FIRST SEEN BY TESIGN: 2026-09-13 14:52 UTC
- AT SOURCE: 2026-07-27 18:36 UTC
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

[Image] https://tesign.com/img/yap-6c42099287.png
