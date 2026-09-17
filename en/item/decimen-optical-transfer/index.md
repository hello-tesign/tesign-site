# Decimen Optical Transfer

> File transfer with no network — Send a file up to 64 MB between two devices using only a screen and a camera; no network.

- Page: https://tesign.com/en/item/decimen-optical-transfer/
- JSON: https://tesign.com/en/item/decimen-optical-transfer/index.json
- Korean Markdown: https://tesign.com/item/decimen-optical-transfer/index.md
- Generated: 2026-09-17 19:00 UTC

## RANKS

- MEDIA #15 (As of 2026-09-17 13:00 UTC)

## Numbers

- 6,759 stars — checked on GitHub 2026-09-17 18:41 UTC
- no 7-day star increase observed (GH Archive) (as of 2026-09-17 13:00 UTC)
- Star total = the value last checked on GitHub (stars_checked_at) + increases observed via GH Archive since. The 24h · 7d · 30d gains are GH Archive hourly events summed to the reference time (as_of). No score of ours.

## AT A GLANCE

- LICENSE: AGPL-3.0 (copyleft) — https://spdx.org/licenses/AGPL-3.0.html
- USAGE: Release source if you redistribute or host it as a service.
- OPEN SOURCE: YES
- LANGUAGE: TypeScript
- PLATFORM: web · ios · android
- CATEGORY: EXPERIMENT · MEDIA
- Tags: qr-code · file-transfer · fountain-codes · air-gap · pwa · camera
- How to start: Use in the browser
- SOURCES: GitHub https://github.com/bashalarmistalt/decimen-optical-transfer
- TRY: https://decimen.app/

## ACTIVITY

- Last commit: 2026-08-26 12:51 UTC
- Latest release: v0.5.3 (2026-08-20)
- Contributors: 2
- Open issues (incl. PRs): 23
- Made by: an individual
- Checked on GitHub: 2026-09-17 18:41 UTC

## Signals and evidence

- BACK CATALOG

## TESIGN TAKE

An experiment that takes an old idea, moving bytes as light instead of over a network, to usable speed with fountain codes and nothing but a browser; it is upfront that there is no encryption, so any camera watching the screen can read it.

## WHY IT MATTERS

When there is no network between two devices, or none you trust, Decimen shows the file as an endless stream of animated QR codes and the other device's camera reads it back. A screen-to-camera link has no return channel, so it uses fountain codes (Luby transform): the receiver collects any ~K×1.15 distinct frames in any order, and dropped frames cost time, never correctness. A published record with its run report shows 1.0 MB in 2.5 s, 418.5 KB/s sustained, from a 49-inch monitor to an iPhone 17 Pro Max.

## BUILD FROM THIS

- Export a stream as an APNG or PNG sequence and drop it into a video lesson or a page: anyone pointing a camera at the playing file receives it. The source self-hosts with npm and also builds as two standalone pages, which fits air-gapped distribution.

## WHO IT'S FOR

- Air-gapped rooms and locked-down networks — pass a config file or document with only a screen and a camera
- Handing a short text or file to an unfamiliar device — no account, pairing or cloud, just a browser on both sides
- Developers curious about coding theory and in-browser camera work — open protocol docs and benchmark run reports

## START IN 5 MINUTES

```
# 1. Open https://decimen.app/ on both devices — nothing to install; one side Send, the other Receive
# 2. To run it yourself:
# npm install
# npm run dev
# Open https://localhost:5173/send/ on the sending device and the printed Network URL on the receiving phone (accept the self-signed certificate once)
```

## CAVEATS

- AGPL-3.0-or-later licence (since v0.4.0; releases up to v0.3.0 remain MIT). AGPL obligations apply if you self-host or redistribute modified versions.
- No encryption — any camera that can see the sending screen can read the file. Limits: 64 MB files, 4 MB text.
- A web app (PWA) needing only camera permission; speed depends heavily on screen size and camera (phone-to-phone record is 199.2 KB/s). v0.5.3 per the homepage.

## RECEIPT

- FIRST SEEN BY TESIGN: 2026-09-13 09:14 UTC
- AT SOURCE: 2026-07-30 18:17 UTC
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

[Image] https://tesign.com/img/decimen-optical-transfer-4354ccd078.jpg
