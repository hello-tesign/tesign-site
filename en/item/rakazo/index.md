# Rakazo

> Persistent AI teammates for teams — Self-hosted persistent AI teammates with their own memory, routines and computers

- Page: https://tesign.com/en/item/rakazo/
- JSON: https://tesign.com/en/item/rakazo/index.json
- Korean Markdown: https://tesign.com/item/rakazo/index.md
- Generated: 2026-09-15 20:32 UTC

## Numbers

- 2,519 stars — checked on GitHub 2026-09-15 19:34 UTC
- 7-day +20 observed via GH Archive (as of 2026-09-15 15:00 UTC)
- Star total = the value last checked on GitHub (stars_checked_at) + increases observed via GH Archive since. The 24h · 7d · 30d gains are GH Archive hourly events summed to the reference time (as_of). No score of ours.

## AT A GLANCE

- LICENSE: Apache-2.0 (permissive) — https://spdx.org/licenses/Apache-2.0.html
- USAGE: Commercial use, redistribution OK. Keep notices; mark changes.
- OPEN SOURCE: YES
- LANGUAGE: TypeScript
- PLATFORM: web · macos · linux
- CATEGORY: AI · PRODUCTIVITY
- Tags: ai-agents · self-hosted · docker · electron · expo · sandbox
- How to start: Self-host
- SOURCES: GitHub https://github.com/elie222/rakazo
- SELF-HOST: https://rakazo.com/

## ACTIVITY

- Last commit: 2026-09-15 18:50 UTC
- Latest release: v0.1.6 (2026-09-08)
- Contributors: 54
- Open issues (incl. PRs): 18
- Made by: an individual
- Checked on GitHub: 2026-09-15 19:34 UTC

## Signals and evidence

- BACK CATALOG

## TESIGN TAKE

"AI teammates" is a common pitch, but giving each bot a real computer and memory with one-script self-hosting is the difference here; it is beta, and every model bill is yours.

## WHY IT MATTERS

Rakazo gives each bot its own conversations, memory, routines and history, plus a computer (Docker, E2B, Daytona or Box) with browser, terminal, file and graphical-desktop access. Installation is a single install-images.sh run that needs only Docker Engine with the Compose plugin, curl and OpenSSL — no clone or Node install. Web, Electron desktop and Expo mobile clients share one API, and the UI ships in nine languages including Korean; the latest release (v0.1.6) carries a macOS universal .dmg and a Linux AppImage.

## BUILD FROM THIS

- Run the same installer on a VPS with SANDBOX_PROVIDER set to e2b, daytona or box and you have an always-on bot server; connect internal tools through Composio, Pipedream, MCP or OpenAPI to build sales or operations assistants.

## WHO IT'S FOR

- Small teams — keep always-on assistant bots on your own server
- People who want to keep their data — pick model and sandbox, run locally
- Agent-platform developers — reference for a web/Electron/Expo multi-client architecture

## START IN 5 MINUTES

```
# mkdir -p rakazo && cd rakazo &&
# curl -fsSLO https://raw.githubusercontent.com/elie222/rakazo/main/infra/compose/install-images.sh &&
# bash install-images.sh
# # open http://127.0.0.1:5173, create an account, connect a model
```

## CAVEATS

- Apache-2.0. Needs Docker Engine, the Compose plugin, curl and OpenSSL; images are linux/amd64 and arm64. Desktop downloads in v0.1.6 cover macOS and Linux; desktop-release.md says the Windows build is skipped without a signing secret. App-store availability of the mobile client is [확인 필요].
- You pay for the model API (OpenRouter or another provider) and for optional E2B, Daytona, Box or voice keys; Treg tools are usage-metered.
- The README calls it beta.

## RECEIPT

- FIRST SEEN BY TESIGN: 2026-09-13 09:38 UTC
- AT SOURCE: 2026-08-13 06:28 UTC
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

[Image] https://tesign.com/img/rakazo-8a284024c4.png
