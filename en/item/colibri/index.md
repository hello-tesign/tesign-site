# colibri

> Run huge MoE models on your own PC — Runs frontier MoE models on hardware you already own.

- Page: https://tesign.com/en/item/colibri/
- JSON: https://tesign.com/en/item/colibri/index.json
- Korean Markdown: https://tesign.com/item/colibri/index.md
- Generated: 2026-09-17 01:56 UTC

## RANKS

- All-time #185 · Rising this week #7 · INFRA #10 (As of 2026-09-16 21:00 UTC)

## Numbers

- 33,753 stars — checked on GitHub 2026-09-15 19:33 UTC (+211 observed since the check)
- 7-day +974 observed via GH Archive (as of 2026-09-16 21:00 UTC)
- 24h +175 ★ · 30d +1,021 ★ (as of 2026-09-16 21:00 UTC)
- 937 Show HN points — observed 2026-09-13 15:23 UTC
- Star total = the value last checked on GitHub (stars_checked_at) + increases observed via GH Archive since. The 24h · 7d · 30d gains are GH Archive hourly events summed to the reference time (as_of). No score of ours.

## AT A GLANCE

- LICENSE: Apache-2.0 (permissive) — https://spdx.org/licenses/Apache-2.0.html
- USAGE: Commercial use, redistribution OK. Keep notices; mark changes.
- OPEN SOURCE: YES
- LANGUAGE: C
- PLATFORM: linux · macos · windows · cli
- CATEGORY: AI · INFRA
- Tags: local-models · inference · c
- How to start: Install to use
- SOURCES: Show HN https://github.com/JustVugg/colibri · GitHub https://github.com/justvugg/colibri
- RUN: https://justvugg.github.io/colibri

## ACTIVITY

- Last commit: 2026-09-15 19:28 UTC
- Latest release: v1.11.0 (2026-09-13)
- Contributors: 150
- Open issues (incl. PRs): 117
- Made by: an individual
- Checked on GitHub: 2026-09-15 19:33 UTC

## Signals and evidence

- CROSS-SIGNAL · Show HN + GitHub
- RISING · +175 ★ / 24h

## TESIGN TAKE

Lets you test on your own hardware whether placing a huge model across disk, RAM and VRAM actually works.

## WHY IT MATTERS

Large MoE models rarely fit in memory, and the usual answer is to buy different hardware. colibri streams expert weights from disk as they are needed, so the model runs on hardware you already own. It is written in pure C with no dependencies and published under Apache-2.0. Which models are supported has to be checked in the repository itself.

## BUILD FROM THIS

- An in-house local-model test bench on a single server
- An inference binary built with no dependencies and shipped in a product
- A comparison run before deciding on new hardware

## WHO IT'S FOR

- ML engineer — measures local inference limits before buying hardware
- Infra owner — trials a large model on one in-house server
- Systems developer — wants pure-C inference code to read and change

## START IN 5 MINUTES

```
# Get a Linux/macOS/Windows build from Releases (Python 3 needed) or build:
$ git clone https://github.com/JustVugg/colibri && cd colibri/c
$ ./setup.sh
# Download a model (GLM-5.2 int4, about 372 GB) from Hugging Face, then:
$ COLI_MODEL=/nvme/glm52_i4 ./coli chat
$ ./coli web  --model /nvme/glm52_i4
```

## CAVEATS

- The reference model GLM-5.2 needs 372 GB of disk and 16 GB+ of RAM
- Speed depends on the disk; a slow drive can mean under one token per second
- A research engine that explicitly promises no SLA on speed

## RECEIPT

- FIRST SEEN BY TESIGN: 2026-09-13 07:43 UTC
- AT SOURCE: 2026-07-01 12:27 UTC
- KEPT: 2026-09-13 11:32 UTC
- Published on TESIGN: 2026-09-13 11:32 UTC
- Text last updated: 2026-09-15 04:36 UTC

## How to read this

- This file was produced by the same build, from the same data, as the tesign.com item page. The text is editorial; the numbers are stored observations.
- null in the JSON means not observed — never zero. The Markdown writes [unconfirmed] for it.
- Star total = the value last checked on GitHub (stars_checked_at) + increases observed via GH Archive since. The 24h · 7d · 30d gains are GH Archive hourly events summed to the reference time (as_of). No score of ours.
- A summary, not legal advice.

[Image] https://tesign.com/img/colibri-cb1362e93a.png
