# pokertools-arena

> Watch AI models play poker at one table — Seats several OpenAI-compatible models at the same poker table and lets you watch every decision as a spectator.

- Page: https://tesign.com/en/item/pokertools-arena/
- JSON: https://tesign.com/en/item/pokertools-arena/index.json
- Korean Markdown: https://tesign.com/item/pokertools-arena/index.md
- Generated: 2026-09-23 02:05 UTC

## Numbers

- 2 stars — checked on GitHub 2026-09-23 01:47 UTC
- no 7-day star increase observed (GH Archive) (as of 2026-09-22 21:00 UTC)
- 3 Show HN points — observed 2026-09-22 14:32 UTC
- Star total = the value last checked on GitHub (stars_checked_at) + increases observed via GH Archive since. The 24h · 7d · 30d gains are GH Archive hourly events summed to the reference time (as_of). No score of ours.

## AT A GLANCE

- LICENSE: MIT (permissive) — https://spdx.org/licenses/MIT.html
- USAGE: Use, change and redistribute, commercially too. Keep the notice.
- OPEN SOURCE: YES
- LANGUAGE: JavaScript
- PLATFORM: web
- CATEGORY: AI · GAMES
- Tags: ai 벤치마크 · 포커 · 브라우저 · llm 평가
- How to start: Use in the browser
- SOURCES: Show HN https://github.com/pokertools-arena/pokertools-arena.github.io
- TRY: https://pokertools-arena.github.io/

## ACTIVITY

- Last commit: 2026-09-21 14:58 UTC
- Latest release: v0.18.1 (2026-09-21)
- Contributors: 1
- Open issues (incl. PRs): 0
- Made by: an organization
- Checked on GitHub: 2026-09-23 01:47 UTC

## Signals and evidence

- NEW · 0h OLD WHEN SEEN

## TESIGN TAKE

Using an adversarial game instead of a question set as the benchmark is the different idea here, and being able to watch every decision live is a real part of that.

## WHY IT MATTERS

Most language-model benchmarks are a fixed question set, which makes it hard to tell memorised answers from real judgement. Poker has an opponent, hidden information and a different situation every hand, so bad reasoning shows up immediately. pokertools-arena turns that structure into a benchmark models play against each other.

## BUILD FROM THIS

- Poker legality, hole-card masking and legal actions all come from the PokerTools engine, and every move a model chooses is re-validated by that engine before it counts. It is fully client-side with no server or database — run it with npx pokertools-arena or build it into a single HTML file — and it exports decision logs and replay images.

## WHO IT'S FOR

- Developers comparing real-world judgement across models, and people building AI benchmarks.

## START IN 5 MINUTES

```
# Run npx pokertools-arena to start a local server and seat a model.
```

## CAVEATS

- It needs Node.js 24 or later and an OpenAI-compatible API, and calling real models means paying that provider’s usual rate. It is still very early — one star.

## RECEIPT

- FIRST SEEN BY TESIGN: 2026-09-21 15:07 UTC
- AT SOURCE: 2026-09-21 15:00 UTC
- KEPT: 2026-09-22 05:53 UTC
- Published on TESIGN: 2026-09-22 05:53 UTC
- Text last updated: 2026-09-22 05:53 UTC

## How to read this

- This file was produced by the same build, from the same data, as the tesign.com item page. The text is editorial; the numbers are stored observations.
- null in the JSON means not observed — never zero. The Markdown writes [unconfirmed] for it.
- Star total = the value last checked on GitHub (stars_checked_at) + increases observed via GH Archive since. The 24h · 7d · 30d gains are GH Archive hourly events summed to the reference time (as_of). No score of ours.
- A summary, not legal advice.

[Image] https://tesign.com/img/pokertools-arena-4e5941629f.png
