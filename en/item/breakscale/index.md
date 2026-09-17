# Breakscale

> System-design simulator for learners — Browser system-design simulator: build a topology, load it until it breaks, see why

- Page: https://tesign.com/en/item/breakscale/
- JSON: https://tesign.com/en/item/breakscale/index.json
- Korean Markdown: https://tesign.com/item/breakscale/index.md
- Generated: 2026-09-17 01:30 UTC

## RANKS

- EDUCATION #6 (As of 2026-09-16 21:00 UTC)

## Numbers

- 1,156 stars — checked on GitHub 2026-09-15 19:35 UTC
- no 7-day star increase observed (GH Archive) (as of 2026-09-16 21:00 UTC)
- Star total = the value last checked on GitHub (stars_checked_at) + increases observed via GH Archive since. The 24h · 7d · 30d gains are GH Archive hourly events summed to the reference time (as_of). No score of ours.

## AT A GLANCE

- LICENSE: MIT (permissive) — https://spdx.org/licenses/MIT.html
- USAGE: Use, change and redistribute, commercially too. Keep the notice.
- OPEN SOURCE: YES
- LANGUAGE: TypeScript
- PLATFORM: web
- CATEGORY: EDUCATION · DEV TOOLS
- Tags: system-design · distributed-systems · simulator · education · queueing-theory · react
- How to start: Use in the browser
- SOURCES: GitHub https://github.com/xevrion/breakscale
- TRY: https://breakscale.tech/

## ACTIVITY

- Last commit: 2026-09-14 23:10 UTC
- Latest release: no releases
- Contributors: 14
- Open issues (incl. PRs): 14
- Made by: an individual
- Checked on GitHub: 2026-09-15 19:35 UTC

## Signals and evidence

- BACK CATALOG

## TESIGN TAKE

Instead of telling you to add a cache, it shows the numbers collapsing until you understand why.

## WHY IT MATTERS

System design is usually taught with static diagrams and rules of thumb like 'add a cache', which never explain why p99 latency falls off a cliff past 80 percent utilisation. Breakscale runs a discrete-event simulator in the browser, with finite server slots, gamma-distributed service times and measured percentiles, so that, in the README's account of the Retry Storm example, 100 offered requests per second become 348 hitting a database that is 99.9% busy while goodput is zero. It ships 33 components and 23 examples: sixteen teaching scenarios and seven reconstructions of Netflix, Spotify, Discord and other real architectures.

## BUILD FROM THIS

- The engine in src/sim has no React or DOM dependency, so you can drive Engine from a script to generate teaching material or capacity-planning experiments, and add components or examples that model your own architecture.

## WHO IT'S FOR

- Backend job seekers — load-test the classic system-design interview topologies yourself
- Mentors of junior engineers — demonstrate retry storms, circuit breakers and sharding live
- Service operators — thought experiments that reproduce an outage

## START IN 5 MINUTES

```
# # No install: https://breakscale.tech
# git clone https://github.com/xevrion/breakscale.git
# cd breakscale
# bun install
# bun dev   # http://localhost:5173
```

## CAVEATS

- Licence MIT (the bundled Caveat font is separately under SIL OFL 1.1). Runs entirely in the browser with no account or telemetry, and a design stays on your machine unless you create a share link.
- Running locally requires Bun. The seven real-company architectures are teaching diagrams reconstructed from published material, not insider knowledge, as the README states.
- Workers IO (YC F26) is listed as title sponsor.

## RECEIPT

- FIRST SEEN BY TESIGN: 2026-09-13 09:39 UTC
- AT SOURCE: 2026-08-23 06:21 UTC
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

[Image] https://tesign.com/img/breakscale-3ba86788af.png
