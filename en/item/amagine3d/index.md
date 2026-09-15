# Amagine3D

> Enclosure design for hardware makers — Designs printable hardware enclosures from a description and dimensions.

- Page: https://tesign.com/en/item/amagine3d/
- JSON: https://tesign.com/en/item/amagine3d/index.json
- Korean Markdown: https://tesign.com/item/amagine3d/index.md
- Generated: 2026-09-15 19:35 UTC

## Numbers

- 4,896 stars — checked on GitHub 2026-09-15 19:34 UTC
- 7-day +298 observed via GH Archive (as of 2026-09-15 15:00 UTC)
- 24h +15 ★ · 30d +355 ★ (as of 2026-09-15 15:00 UTC)
- Star total = the value last checked on GitHub (stars_checked_at) + increases observed via GH Archive since. The 24h · 7d · 30d gains are GH Archive hourly events summed to the reference time (as_of). No score of ours.

## AT A GLANCE

- LICENSE: Apache-2.0 (permissive) — https://spdx.org/licenses/Apache-2.0.html
- USAGE: Commercial use, redistribution OK. Keep notices; mark changes.
- OPEN SOURCE: YES
- LANGUAGE: Python
- PLATFORM: web
- CATEGORY: HARDWARE · DESIGN
- Tags: cad · 3d-printing · hardware · agents
- How to start: Install to use
- SOURCES: GitHub https://github.com/amagine-ai/amagine3d
- INSTALL: https://github.com/amagine-ai/amagine3d

## ACTIVITY

- Last commit: 2026-09-12 02:34 UTC
- Latest release: no releases
- Contributors: 4
- Open issues (incl. PRs): 4
- Made by: an organization
- Checked on GitHub: 2026-09-15 19:34 UTC

## TESIGN TAKE

It hands back editable CAD source rather than a mesh, which separates it from other 3D generators.

## WHY IT MATTERS

A hardware enclosure starts with knowing CAD, and revising it around internal parts never ends. Amagine3D takes plain-language requirements, reference images and dimensions, designs from the internal parts out to enclosure, hinges and covers, and returns editable build123d Python source plus STEP, STL and 3MF files. The agent checks wall thickness, interference and print orientation before accepting a result. Apache-2.0; local use needs an OpenAI Responses-compatible API key.

## BUILD FROM THIS

- A same-day prototype case for a development board
- A redesign loop for a small-batch IoT enclosure whenever a part changes
- STEP files ready to send out for a machining quote

## WHO IT'S FOR

- Hardware startup — needs prototype cases without a CAD hire
- Maker — wants a dev-board case from a few dimensions
- Product designer — reviewing part layout and enclosure together

## START IN 5 MINUTES

```
$ git clone https://github.com/amagine-ai/Amagine3D.git
$ cd Amagine3D
$ npm install
$ cp .env.example .env
$ npm run dev
# Set the LLM key in .env, then open 127.0.0.1:6160 · needs Node 22.19+
```

## CAVEATS

- Needs an OpenAI Responses-compatible API key or model gateway
- Under active development; surface continuity can be coarse, per the README
- Full workflow verified only in desktop Chrome and Edge

## RECEIPT

- FIRST SEEN BY TESIGN: 2026-09-13 07:43 UTC
- AT SOURCE: 2026-08-19 15:31 UTC
- KEPT: 2026-09-14 02:41 UTC
- Published on TESIGN: 2026-09-14 02:41 UTC
- Text last updated: 2026-09-15 04:36 UTC

## How to read this

- This file was produced by the same build, from the same data, as the tesign.com item page. The text is editorial; the numbers are stored observations.
- null in the JSON means not observed — never zero. The Markdown writes [unconfirmed] for it.
- Star total = the value last checked on GitHub (stars_checked_at) + increases observed via GH Archive since. The 24h · 7d · 30d gains are GH Archive hourly events summed to the reference time (as_of). No score of ours.
- A summary, not legal advice.

[Image] https://tesign.com/img/amagine3d-5d985bfafc.png
