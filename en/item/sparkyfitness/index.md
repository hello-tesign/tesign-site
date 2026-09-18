# SparkyFitness

> Self-hosted family health tracking — A self-hosted health tracker for nutrition, exercise, sleep, fasting, mood and body metrics — all on a server you run yourself.

- Page: https://tesign.com/en/item/sparkyfitness/
- JSON: https://tesign.com/en/item/sparkyfitness/index.json
- Korean Markdown: https://tesign.com/item/sparkyfitness/index.md
- Generated: 2026-09-18 21:08 UTC

## RANKS

- DATA #17 (As of 2026-09-18 15:00 UTC)

## Numbers

- 6,104 stars — checked on GitHub 2026-09-17 18:42 UTC
- 7-day +13 observed via GH Archive (as of 2026-09-18 15:00 UTC)
- Star total = the value last checked on GitHub (stars_checked_at) + increases observed via GH Archive since. The 24h · 7d · 30d gains are GH Archive hourly events summed to the reference time (as_of). No score of ours.

## AT A GLANCE

- LICENSE: Licence unconfirmed
- USAGE: Unconfirmed — check before use.
- LANGUAGE: TypeScript
- PLATFORM: web · ios · android
- CATEGORY: PRODUCTIVITY · DATA
- Tags: self-hosted · health-tracker · nutrition · family · docker
- How to start: Self-host
- SOURCES: GitHub https://github.com/codewithcj/sparkyfitness
- SELF-HOST: https://codewithcj.github.io/SparkyFitness

## ACTIVITY

- Last commit: 2026-09-17 18:31 UTC
- Latest release: v1.7.1 (2026-09-14)
- Contributors: 134
- Open issues (incl. PRs): 156
- Made by: an individual
- Checked on GitHub: 2026-09-17 18:42 UTC

## TESIGN TAKE

It openly admits it's source-available, not open source — and backs its value claim with a public comparison table against several paid alternatives' subscription costs.

## WHY IT MATTERS

Tracking nutrition, exercise, sleep, cycle and medication separately usually means paying for several different subscriptions with no single view across them. SparkyFitness puts all of it on one self-hosted server (run via Docker Compose) and lets a family split access with granular permissions. It syncs steps, workouts and sleep automatically from 8+ services (Apple Health, Fitbit, Garmin, Oura and more), and a beta conversational AI (SparkyAI) can log a meal from an uploaded food photo.

## BUILD FROM THIS

- Consolidate several health-app subscriptions into one self-hosted server the whole family shares
- Auto-sync wearable data to see nutrition, exercise and sleep on one screen
- Try logging a meal from a single photo with the beta AI chatbot (still beta)

## WHO IT'S FOR

- Someone paying for several separate health-app subscriptions
- A family that wants one shared place for everyone's health data
- Anyone who doesn't want their health data in someone else's cloud

## START IN 5 MINUTES

```
# Self-host (needs Docker):
$ mkdir sparkyfitness && cd sparkyfitness
$ curl -L -o docker-compose.yml https://github.com/CodeWithCJ/SparkyFitness/releases/latest/download/docker-compose.prod.yml
$ curl -L -o .env https://github.com/CodeWithCJ/SparkyFitness/releases/latest/download/default.env.example
$ docker compose pull && docker compose up -d
# → open http://localhost:8080
# Non-technical users can use a third-party cloud host like PikaPods instead
```

## CAVEATS

- Custom non-commercial licence — the source is visible but this is not open source, and commercial use needs the author's prior permission
- The AI chatbot, family sharing and API docs are still beta; auto-updating containers isn't recommended
- The README states the comparison table is written by the project being compared, i.e. by SparkyFitness itself

## RECEIPT

- FIRST SEEN BY TESIGN: 2026-09-16 03:33 UTC
- AT SOURCE: 2025-06-21 14:00 UTC
- KEPT: 2026-09-17 01:24 UTC
- Published on TESIGN: 2026-09-17 01:24 UTC
- Text last updated: 2026-09-17 01:26 UTC

## How to read this

- This file was produced by the same build, from the same data, as the tesign.com item page. The text is editorial; the numbers are stored observations.
- null in the JSON means not observed — never zero. The Markdown writes [unconfirmed] for it.
- Star total = the value last checked on GitHub (stars_checked_at) + increases observed via GH Archive since. The 24h · 7d · 30d gains are GH Archive hourly events summed to the reference time (as_of). No score of ours.
- A summary, not legal advice.

[Image] https://tesign.com/img/og/sparkyfitness.en.png
