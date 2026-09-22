# PokeTokenBar

> Pokemon raised on your coding tokens — Mac menu bar app: your AI coding tokens hatch and evolve a Pokemon; tracks usage limits.

- Page: https://tesign.com/en/item/poketokenbar/
- JSON: https://tesign.com/en/item/poketokenbar/index.json
- Korean Markdown: https://tesign.com/item/poketokenbar/index.md
- Generated: 2026-09-22 05:53 UTC

## Numbers

- 457 stars — checked on GitHub 2026-09-22 00:39 UTC
- no 7-day star increase observed (GH Archive) (as of 2026-09-21 20:00 UTC)
- 2 Show HN points — observed 2026-09-13 15:10 UTC
- Star total = the value last checked on GitHub (stars_checked_at) + increases observed via GH Archive since. The 24h · 7d · 30d gains are GH Archive hourly events summed to the reference time (as_of). No score of ours.

## AT A GLANCE

- LICENSE: MIT (permissive) — https://spdx.org/licenses/MIT.html
- USAGE: Use, change and redistribute, commercially too. Keep the notice.
- OPEN SOURCE: YES
- LANGUAGE: Swift
- PLATFORM: macos
- CATEGORY: AI · GAMES
- Tags: menu-bar · token-usage · claude-code · codex · pokemon · macos
- How to start: Install to use
- SOURCES: Show HN https://github.com/chattymin/PokeTokenBar
- INSTALL: https://chattymin.github.io/PokeTokenBar

## ACTIVITY

- Last commit: 2026-09-18 16:21 UTC
- Latest release: v2.5.4 (2026-09-12)
- Contributors: 38
- Open issues (incl. PRs): 43
- Made by: an individual
- Checked on GitHub: 2026-09-22 00:39 UTC

## Signals and evidence

- BACK CATALOG

## TESIGN TAKE

It shows that gamifying was the way to make people check their usage every day; just remember it is an unofficial fan project for personal, non-commercial use only.

## WHY IT MATTERS

Token dashboards exist, but few people want to open them; PokeTokenBar reads the local logs of 13 tools (Claude Code, Codex, Gemini CLI, Cursor and more) and hatches and evolves a Pokemon as you spend. Species come from PokeAPI's Gen 1–5 evolution lines (329 possible starts), weighted by official capture rate, with a legendary a 1-in-129 hatch. Underneath sits a real usage tracker: today's tokens and cost, official 5-hour and weekly limits for Claude, Codex and Antigravity, reset countdowns and a burn-rate forecast.

## BUILD FROM THIS

- Tools that keep logs elsewhere can be attached through extra scan folders in Settings, and adding a new tool is one provider implementation plus registration (CONTRIBUTING.md), so wiring up your own tool is a feasible contribution. The floating desktop pet also works as a small always-visible usage widget.

## WHO IT'S FOR

- Mac developers using AI coding tools daily — today's tokens, cost and 5-hour/weekly limits from the menu bar
- People mixing several tools — per-tool tabs with a combined daily total
- Users who keep hitting limits — reset countdowns, a burn-rate forecast and threshold alerts

## START IN 5 MINUTES

```
# Requirements: macOS 14+ (Apple Silicon or Intel)
# brew install --cask chattymin/tap/poke-token-bar
# Or download PokeTokenBar.zip from the latest release, drag it into /Applications, and clear the Gatekeeper warning once via right-click → Open (or xattr -dr com.apple.quarantine /Applications/PokeTokenBar.app)
```

## CAVEATS

- MIT covers only the project's original source code; Pokemon trademarks, artwork and data belong to their owners, and the app is an unofficial, non-commercial fan project for personal, non-commercial use only (not affiliated with Nintendo or The Pokemon Company).
- macOS 14+ only. The app is ad-hoc self-signed (not notarized): the first launch warns on a manual zip install, while the Homebrew cask clears quarantine for you.
- Not fully offline: it talks to twelve hosts (PokeAPI, GitHub sprites, api.anthropic.com, claude.ai, cursor.com, Google, status pages) but states it never sends usage logs, prompts or paths. Claude limits come via an unofficial endpoint; Codex via the local codex app-server.

## RECEIPT

- FIRST SEEN BY TESIGN: 2026-09-13 15:10 UTC
- AT SOURCE: 2026-07-16 15:48 UTC
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

[Image] https://tesign.com/img/poketokenbar-962701a111.png
