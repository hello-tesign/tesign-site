# LitmusChaos

> Chaos engineering for Kubernetes — An open-source chaos engineering platform that injects controlled faults to find weaknesses before outages do; a CNCF project for Kubernetes.

- Page: https://tesign.com/en/item/litmus/
- JSON: https://tesign.com/en/item/litmus/index.json
- Korean Markdown: https://tesign.com/item/litmus/index.md
- Generated: 2026-10-05 02:30 UTC

## Numbers

- 5,728 stars — checked on GitHub 2026-10-05 02:15 UTC
- 7-day +8 observed via GH Archive (as of 2026-10-04 20:00 UTC)
- Star total = the value last checked on GitHub (stars_checked_at) + increases observed via GH Archive since. The 24h · 7d · 30d gains are GH Archive hourly events summed to the reference time (as_of). No score of ours.

## AT A GLANCE

- LICENSE: Apache-2.0 (permissive) — https://spdx.org/licenses/Apache-2.0.html
- USAGE: Commercial use, redistribution OK. Keep notices; mark changes.
- OPEN SOURCE: YES
- LANGUAGE: Go
- PLATFORM: web
- CATEGORY: INFRA
- Tags: 장애 테스트 · 쿠버네티스 · sre · 오픈소스
- How to start: Self-host
- SOURCES: GitHub https://github.com/litmuschaos/litmus
- SELF-HOST: https://litmuschaos.io/

## ACTIVITY

- Last commit: 2026-09-30 12:23 UTC
- Latest release: 3.32.0 (2026-09-17)
- Contributors: 329
- Open issues (incl. PRs): 388
- Made by: an organization
- Checked on GitHub: 2026-10-05 02:15 UTC

## TESIGN TAKE

It supports bring-your-own-chaos to plug in third-party fault tooling.

## WHY IT MATTERS

Finding weak points only after an outage is too late. Litmus lets developers and SREs practice by inducing faults in a controlled way.

## BUILD FROM THIS

- A central chaos-center builds, schedules and visualises experiment workflows while agents in the target Kubernetes environment run and monitor them. Faults and steady-state hypotheses are defined as Kubernetes custom resources such as ChaosExperiment and ChaosEngine.

## WHO IT'S FOR

- SREs and developers who run services on Kubernetes.

## START IN 5 MINUTES

```
# Deploy it to Kubernetes following the install docs at litmuschaos.io.
```

## CAVEATS

- Requires a Kubernetes environment, and since it deliberately injects faults it should be tried in a test environment before production. The image is an architecture diagram, not a screenshot.

## RECEIPT

- FIRST SEEN BY TESIGN: 2026-10-03 11:47 UTC
- AT SOURCE: 2017-03-15 07:02 UTC
- KEPT: 2026-10-04 15:21 UTC
- Published on TESIGN: 2026-10-04 15:21 UTC
- Text last updated: 2026-10-04 15:21 UTC

## How to read this

- This file was produced by the same build, from the same data, as the tesign.com item page. The text is editorial; the numbers are stored observations.
- null in the JSON means not observed — never zero. The Markdown writes [unconfirmed] for it.
- Star total = the value last checked on GitHub (stars_checked_at) + increases observed via GH Archive since. The 24h · 7d · 30d gains are GH Archive hourly events summed to the reference time (as_of). No score of ours.
- A summary, not legal advice.

[Image] https://tesign.com/img/litmus-11bd84a19e.png
