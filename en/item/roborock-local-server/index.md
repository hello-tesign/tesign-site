# Roborock Local Server

> Run a Roborock vacuum without the cloud — Runs Roborock's cloud backend on your own network so the vacuum keeps maps and controls without internet.

- Page: https://tesign.com/en/item/roborock-local-server/
- JSON: https://tesign.com/en/item/roborock-local-server/index.json
- Korean Markdown: https://tesign.com/item/roborock-local-server/index.md
- Generated: 2026-09-30 02:30 UTC

## Numbers

- 805 stars — checked on GitHub 2026-09-30 02:15 UTC
- no 7-day star increase observed (GH Archive) (as of 2026-09-29 17:00 UTC)
- 1 Show HN points — observed 2026-09-29 10:20 UTC
- Star total = the value last checked on GitHub (stars_checked_at) + increases observed via GH Archive since. The 24h · 7d · 30d gains are GH Archive hourly events summed to the reference time (as_of). No score of ours.

## AT A GLANCE

- LICENSE: MIT (permissive) — https://spdx.org/licenses/MIT.html
- USAGE: Use, change and redistribute, commercially too. Keep the notice.
- OPEN SOURCE: YES
- LANGUAGE: Python
- PLATFORM: [unconfirmed]
- CATEGORY: HARDWARE
- Tags: 스마트홈 · 로봇청소기 · 자체 호스팅 · 개인정보
- How to start: Self-host
- SOURCES: Show HN https://github.com/Python-roborock/local_roborock_server
- SELF-HOST: https://python-roborock.github.io/local_roborock_server

## ACTIVITY

- Last commit: 2026-09-30 01:00 UTC
- Latest release: v1.2.0 (2026-09-27)
- Contributors: 18
- Open issues (incl. PRs): 27
- Made by: an organization
- Checked on GitHub: 2026-09-30 02:15 UTC

## Signals and evidence

- NEW · 0h OLD WHEN SEEN

## TESIGN TAKE

It cuts the cloud dependency in software alone, without opening the device.

## WHY IT MATTERS

Roborock vacuums store maps locally but route map data through Roborock's cloud, and keep restarting their network when they can't reach it — so cutting them off the internet broke them.

## BUILD FROM THIS

- It runs HTTPS and MQTT on your LAN and redirects DNS so the vacuum connects to it instead of Roborock. No disassembly, soldering or bootloader unlocking, and new vacuums work without prior cloud registration. Install with Docker Compose or as a Home Assistant add-on.

## WHO IT'S FOR

- Home Assistant users who want their Roborock vacuum off the internet.

## START IN 5 MINUTES

```
# Check the network requirements in the install guide, run the server with Docker Compose or the Home Assistant add-on, then run onboarding from a second machine.
```

## CAVEATS

- You need to manage your home network yourself (DNS changes, certificates). The README notes upstream authentication changes are the most frequent point of failure.

## RECEIPT

- FIRST SEEN BY TESIGN: 2026-09-28 13:44 UTC
- AT SOURCE: 2026-09-28 12:52 UTC
- KEPT: 2026-09-29 02:28 UTC
- Published on TESIGN: 2026-09-29 02:28 UTC
- Text last updated: 2026-09-29 02:28 UTC

## How to read this

- This file was produced by the same build, from the same data, as the tesign.com item page. The text is editorial; the numbers are stored observations.
- null in the JSON means not observed — never zero. The Markdown writes [unconfirmed] for it.
- Star total = the value last checked on GitHub (stars_checked_at) + increases observed via GH Archive since. The 24h · 7d · 30d gains are GH Archive hourly events summed to the reference time (as_of). No score of ours.
- A summary, not legal advice.

[Image] https://tesign.com/img/roborock-local-server-cc5eb99970.png
