# OpenMouse

> Gaming-mouse settings in the browser — Browser control panel for gaming-mouse DPI and polling rate, no vendor driver needed

- Page: https://tesign.com/en/item/openmouse/
- JSON: https://tesign.com/en/item/openmouse/index.json
- Korean Markdown: https://tesign.com/item/openmouse/index.md
- Generated: 2026-09-19 23:10 UTC

## RANKS

- GAMES #7 · HARDWARE #3 (As of 2026-09-19 18:00 UTC)

## Numbers

- 1,938 stars — checked on GitHub 2026-09-19 22:59 UTC
- no 7-day star increase observed (GH Archive) (as of 2026-09-19 18:00 UTC)
- Star total = the value last checked on GitHub (stars_checked_at) + increases observed via GH Archive since. The 24h · 7d · 30d gains are GH Archive hourly events summed to the reference time (as_of). No score of ours.

## AT A GLANCE

- LICENSE: AGPL-3.0 (copyleft) — https://spdx.org/licenses/AGPL-3.0.html
- USAGE: Release source if you redistribute or host it as a service.
- OPEN SOURCE: YES
- LANGUAGE: TypeScript
- PLATFORM: web
- CATEGORY: HARDWARE · GAMES
- Tags: webhid · gaming-mouse · dpi · polling-rate · typescript · agpl
- How to start: Use in the browser
- SOURCES: GitHub https://github.com/openmouse-project/openmouse
- TRY: https://openmouse.app/

## ACTIVITY

- Last commit: 2026-09-19 21:01 UTC
- Latest release: no releases
- Contributors: 38
- Open issues (incl. PRs): 23
- Made by: an organization
- Checked on GitHub: 2026-09-19 22:59 UTC

## Signals and evidence

- BACK CATALOG

## TESIGN TAKE

An attempt to replace a settings app per brand with one web page — and its own README insists that 'protocol implemented' and 'verified on hardware' are two different claims.

## WHY IT MATTERS

Instead of one vendor app per brand, it talks to the mouse over the browser's WebHID, reads its information and changes settings such as DPI and polling rate. Packet codecs and drivers live in the separate @openmouse/protocol library, whose README lists 32 brand/protocol entry points including Razer, Logitech, Pulsar, Lamzu, Glorious, Finalmouse and the SteelSeries Rival 3. It states plainly that an implemented protocol does not mean every mouse of that brand works; a catalog's verified field marks hardware-tested support.

## BUILD FROM THIS

- The codec entry points in @openmouse/protocol work without WebHID, so you could build a Node.js mouse-configuration CLI or your own Linux settings tool on them. AGPL-3.0 applies even when you offer it as a service.

## WHO IT'S FOR

- Gamers with mice from several brands — one page instead of several vendor apps
- Linux users — change DPI and polling where no official app exists (hidraw udev rules required)
- Developers reverse-engineering mouse protocols — contribute codecs to the per-brand library

## START IN 5 MINUTES

```
# # Use it directly: open https://openmouse.app in your browser and connect the mouse
# npm install    # local development
# npm run dev
# # On Linux, if you see 'Failed to open the device', adapt the README udev example (70-openmouse-vxe.rules, written for the VXE R1 SE+) to your device IDs from lsusb, then:
# sudo udevadm control --reload-rules
```

## CAVEATS

- AGPL-3.0 — source must be published even when offered over a network
- WebHID-based; the README describes it against Chromium's device picker, other browsers [확인 필요]. Linux needs hidraw udev rules
- The supported-device list lives in the separate mouse-protocol repo, and an implemented brand protocol does not mean every model works (check the verified field); no GitHub releases, it is deployed as a web app

## RECEIPT

- FIRST SEEN BY TESIGN: 2026-09-13 09:39 UTC
- AT SOURCE: 2026-07-27 03:22 UTC
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

[Image] https://tesign.com/img/openmouse-b9bd418845.png
