# ARTEMIS

> Android app test automation — Turns written instructions into automation on real Android phones.

- Page: https://tesign.com/en/item/artemis/
- JSON: https://tesign.com/en/item/artemis/index.json
- Korean Markdown: https://tesign.com/item/artemis/index.md
- Generated: 2026-09-17 01:30 UTC

## Numbers

- 5,899 stars — checked on GitHub 2026-09-15 19:33 UTC (+70 observed since the check)
- 7-day +943 observed via GH Archive (as of 2026-09-16 21:00 UTC)
- 24h +62 ★ · 30d +949 ★ (as of 2026-09-16 21:00 UTC)
- Star total = the value last checked on GitHub (stars_checked_at) + increases observed via GH Archive since. The 24h · 7d · 30d gains are GH Archive hourly events summed to the reference time (as_of). No score of ours.

## AT A GLANCE

- LICENSE: Apache-2.0 (permissive) — https://spdx.org/licenses/Apache-2.0.html
- USAGE: Commercial use, redistribution OK. Keep notices; mark changes.
- OPEN SOURCE: YES
- LANGUAGE: Python
- PLATFORM: macos · linux · windows · android · cli
- CATEGORY: AI · DEV TOOLS
- Tags: android · test-automation · mcp · agents
- How to start: Install to use
- SOURCES: GitHub https://github.com/google/artemis
- INSTALL: https://github.com/google/artemis

## ACTIVITY

- Last commit: 2026-09-12 03:00 UTC
- Latest release: no releases
- Contributors: 8
- Open issues (incl. PRs): 76
- Made by: an organization
- Checked on GitHub: 2026-09-15 19:33 UTC

## TESIGN TAKE

Hand it a sentence instead of a test script, and get back what a real phone actually did.

## WHY IT MATTERS

Android app tests wire a script to every screen element, and it breaks as soon as the screen changes. ARTEMIS takes instructions in plain language and drives a real device or emulator itself; over MCP, Antigravity, Claude Code and Windsurf can call the phone and collect Logcat output and screenshots. One start script installs ADB, scrcpy and FFmpeg and opens a browser console (Apache-2.0). The first task installs a small accessibility helper on the phone.

## BUILD FROM THIS

- A pre-release regression run of login and checkout on a real device
- A QA report that reproduces a bug and attaches logs and screenshots
- A nightly long-running exploration test for app stability

## WHO IT'S FOR

- Mobile QA — scripts keep breaking as screens change
- App developer — wants device logs and screenshots inside the IDE
- Solo app maker — needs a pre-release check without a QA team

## START IN 5 MINUTES

```
$ git clone https://github.com/google/artemis.git && cd artemis
$ ./start.sh
# Connect an Android device with USB debugging on, or an emulator, first
# Windows PowerShell: .\start.bat · opens localhost:8000 in the browser
```

## CAVEATS

- The first task installs an accessibility helper on the phone (removable)
- iOS is on the roadmap, not supported yet
- Python 3.12+ and uv; the start script auto-installs system tools

## RECEIPT

- FIRST SEEN BY TESIGN: 2026-09-13 07:43 UTC
- AT SOURCE: 2026-08-13 17:59 UTC
- KEPT: 2026-09-14 02:41 UTC
- Published on TESIGN: 2026-09-14 02:41 UTC
- Text last updated: 2026-09-15 04:36 UTC

## How to read this

- This file was produced by the same build, from the same data, as the tesign.com item page. The text is editorial; the numbers are stored observations.
- null in the JSON means not observed — never zero. The Markdown writes [unconfirmed] for it.
- Star total = the value last checked on GitHub (stars_checked_at) + increases observed via GH Archive since. The 24h · 7d · 30d gains are GH Archive hourly events summed to the reference time (as_of). No score of ours.
- A summary, not legal advice.

[Image] https://tesign.com/img/artemis-b49e23ea8d.png
