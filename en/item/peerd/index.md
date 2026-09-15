# peerd

> Agent that runs inside your browser — An AI agent inside a Chrome/Firefox extension: drives your tabs, runs code in-browser.

- Page: https://tesign.com/en/item/peerd/
- JSON: https://tesign.com/en/item/peerd/index.json
- Korean Markdown: https://tesign.com/item/peerd/index.md
- Generated: 2026-09-15 20:32 UTC

## Numbers

- 408 stars — checked on GitHub 2026-09-15 19:35 UTC
- no 7-day star increase observed (GH Archive) (as of 2026-09-15 15:00 UTC)
- 75 Show HN points — observed 2026-09-13 15:49 UTC
- Star total = the value last checked on GitHub (stars_checked_at) + increases observed via GH Archive since. The 24h · 7d · 30d gains are GH Archive hourly events summed to the reference time (as_of). No score of ours.

## AT A GLANCE

- LICENSE: Apache-2.0 (permissive) — https://spdx.org/licenses/Apache-2.0.html
- USAGE: Commercial use, redistribution OK. Keep notices; mark changes.
- OPEN SOURCE: YES
- LANGUAGE: JavaScript
- PLATFORM: web
- CATEGORY: AI · EXPERIMENT
- Tags: browser-extension · ai-agent · chrome · firefox · webassembly · byok
- How to start: Install to use
- SOURCES: Show HN https://github.com/NotASithLord/peerd
- INSTALL: https://peerd.ai/

## ACTIVITY

- Last commit: 2026-09-15 03:37 UTC
- Latest release: v0.7.3 (2026-08-20)
- Contributors: 8
- Open issues (incl. PRs): 51
- Made by: an individual
- Checked on GitHub: 2026-09-15 19:35 UTC

## Signals and evidence

- BACK CATALOG

## TESIGN TAKE

The idea is to borrow the security boundaries browsers have hardened over three decades; it is early, with no store listing yet, so you load it from source.

## WHY IT MATTERS

Local agents can reach your whole computer; remote agents live in someone else's. peerd's alternative is the browser: the whole agent loop lives inside a Chrome or Firefox extension, using your own tabs and sessions while compute such as JS notebooks, WASI tools and Linux WebVMs runs inside browser sandboxes. There is no backend and no peerd account, current builds send no product telemetry, and you bring your own model key or point it at a local model on localhost.

## BUILD FROM THIS

- Build personal automations that chain your web apps through reusable site clients the agent learns once, or in-browser data processing (notebooks, WASM tools) that never touches the host OS. Preview builds add browser-to-browser WebRTC connections for agent-to-agent communication and app sharing.

## WHO IT'S FOR

- Individuals automating browser work — the agent fills forms and drives pages in tabs you are already signed into
- Developers interested in agent security — a browser-isolation design with a written threat model and red-team results
- People who want to try agents without a backend — runs in the extension on your own key or a local model

## START IN 5 MINUTES

```
# 1. Clone the repository
# 2. In Chrome, open chrome://extensions and enable Developer mode
# 3. Choose Load unpacked and select the extension/ directory
# Firefox: bun run package -- --channel=preview --browser=firefox --no-sign, then load artifacts/peerd-preview-firefox.xpi as a temporary add-on from about:debugging
```

## CAVEATS

- Apache-2.0 licence (the bundled CheerpX runtime is proprietary software from Leaning Technologies and is not covered).
- Chrome and Firefox extension (Manifest V3) only; Apps and WebVMs run on Chrome only, and a Firefox temporary add-on must be reloaded after every restart. Chrome Web Store and Firefox AMO listings are 'coming soon' per the homepage.
- Model costs are on your own key. Early-stage project (408 stars); the README says the code is the source of truth for current behaviour.

## RECEIPT

- FIRST SEEN BY TESIGN: 2026-09-13 15:49 UTC
- AT SOURCE: 2026-06-23 15:05 UTC
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

[Image] https://tesign.com/img/peerd-cd93ce28ea.png
