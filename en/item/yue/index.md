# YuE2

> Songs from lyrics and a style prompt — Generates music, makes zero-shot covers and edits parts of a track.

- Page: https://tesign.com/en/item/yue/
- JSON: https://tesign.com/en/item/yue/index.json
- Korean Markdown: https://tesign.com/item/yue/index.md
- Generated: 2026-09-17 01:56 UTC

## RANKS

- Rising this week #20 · MEDIA #13 (As of 2026-09-16 21:00 UTC)

## Numbers

- 8,971 stars — checked on GitHub 2026-09-15 19:33 UTC (+62 observed since the check)
- 7-day +381 observed via GH Archive (as of 2026-09-16 21:00 UTC)
- 24h +55 ★ · 30d +381 ★ (as of 2026-09-16 21:00 UTC)
- Star total = the value last checked on GitHub (stars_checked_at) + increases observed via GH Archive since. The 24h · 7d · 30d gains are GH Archive hourly events summed to the reference time (as_of). No score of ours.

## AT A GLANCE

- LICENSE: Apache-2.0 (permissive) — https://spdx.org/licenses/Apache-2.0.html
- USAGE: Commercial use, redistribution OK. Keep notices; mark changes.
- OPEN SOURCE: YES
- LANGUAGE: Python
- PLATFORM: linux
- CATEGORY: AI · MEDIA
- Tags: music · audio · models
- How to start: Install to use
- SOURCES: GitHub https://github.com/multimodal-art-projection/yue
- RUN: https://map-yue2.github.io/

## ACTIVITY

- Last commit: 2026-09-14 10:31 UTC
- Latest release: yue2-v0.1.6 (2026-09-09)
- Contributors: 9
- Open issues (incl. PRs): 25
- Made by: an organization
- Checked on GitHub: 2026-09-15 19:33 UTC

## TESIGN TAKE

Planning a song as an editable score, then regenerating from the edit, sets it apart from one-shot generators.

## WHY IT MATTERS

Music generators are hard to correct once a track exists; changing one part usually means generating the whole thing again. YuE2 plans the structure symbolically before generating and keeps zero-shot covers and agentic editing inside the same flow. It is written in Python, published under Apache-2.0, and has a demo page. You run the model yourself, so the environment is yours to prepare.

## BUILD FROM THIS

- A production line that makes your own background music for video
- An experiment that re-sings an existing track in another voice

## WHO IT'S FOR

- Video maker — wants original background music (non-commercial only)
- Music researcher — works with symbolic planning and audio generation
- ML engineer — runs a music model on a GPU server

## START IN 5 MINUTES

```
$ git clone https://github.com/multimodal-art-projection/YuE.git
$ cd YuE
$ python3.12 -m venv .venv
$ source .venv/bin/activate
$ python -m pip install .
$ python examples/generate.py --output outputs/first-song
```

## CAVEATS

- Needs Linux, Python 3.12 and an NVIDIA GPU with 24 GB of VRAM
- Code is Apache-2.0, but the model weights are CC BY-NC 4.0 (non-commercial)
- Model files download from Hugging Face on first use

## RECEIPT

- FIRST SEEN BY TESIGN: 2026-09-13 07:43 UTC
- AT SOURCE: 2025-01-23 06:21 UTC
- KEPT: 2026-09-13 11:32 UTC
- Published on TESIGN: 2026-09-13 11:32 UTC
- Text last updated: 2026-09-15 04:36 UTC

## How to read this

- This file was produced by the same build, from the same data, as the tesign.com item page. The text is editorial; the numbers are stored observations.
- null in the JSON means not observed — never zero. The Markdown writes [unconfirmed] for it.
- Star total = the value last checked on GitHub (stars_checked_at) + increases observed via GH Archive since. The 24h · 7d · 30d gains are GH Archive hourly events summed to the reference time (as_of). No score of ours.
- A summary, not legal advice.

[Image] https://tesign.com/img/yue-9a684df443.png
