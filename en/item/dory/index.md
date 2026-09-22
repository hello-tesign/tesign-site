# Dory

> Docker environment for Mac developers — Docker Desktop alternative for Apple Silicon: Docker 29, Compose v2, k3s, Linux VMs

- Page: https://tesign.com/en/item/dory/
- JSON: https://tesign.com/en/item/dory/index.json
- Korean Markdown: https://tesign.com/item/dory/index.md
- Generated: 2026-09-22 07:26 UTC

## Numbers

- 1,594 stars — checked on GitHub 2026-09-22 00:38 UTC
- no 7-day star increase observed (GH Archive) (as of 2026-09-22 03:00 UTC)
- Star total = the value last checked on GitHub (stars_checked_at) + increases observed via GH Archive since. The 24h · 7d · 30d gains are GH Archive hourly events summed to the reference time (as_of). No score of ours.

## AT A GLANCE

- LICENSE: GPL-3.0 (copyleft) — https://spdx.org/licenses/GPL-3.0.html
- USAGE: Use freely. Release your source if you redistribute (copyleft).
- OPEN SOURCE: YES
- LANGUAGE: Swift
- PLATFORM: macos · cli
- CATEGORY: INFRA · DEV TOOLS
- Tags: docker · apple-silicon · kubernetes · containers · macos · virtual-machines
- How to start: Install to use
- SOURCES: GitHub https://github.com/augani/dory
- INSTALL: https://usedory.dev/

## ACTIVITY

- Last commit: 2026-09-20 19:34 UTC
- Latest release: v0.4.5 (2026-08-13)
- Contributors: 1
- Open issues (incl. PRs): 24
- Made by: an individual
- Checked on GitHub: 2026-09-22 00:38 UTC

## Signals and evidence

- BACK CATALOG

## TESIGN TAKE

Few container runtimes put a Current boundaries section, what it cannot do yet, in the README itself.

## WHY IT MATTERS

It gives standard Docker tools a native Apple Silicon engine without Docker Desktop, adds one-click k3s Kubernetes and Ubuntu, Debian and Kali graphical Linux VMs, and exposes all of it from both a SwiftUI app and a CLI. The README states there is no account, cloud control plane, telemetry or commercial-use tier, and the licence is GPL-3.0. The README describes 0.4.6 as a smaller Docker Core app with Kubernetes, Linux Machines and desktop images as signed optional components (published releases stop at v0.4.5 as of 2026-09-15), and a migration flow imports images, volumes and containers from Docker Desktop, OrbStack, Colima, Rancher Desktop or Podman.

## BUILD FROM THIS

- Run coding agents in policy-bound isolated sandbox VMs with a read-only MCP mode, or use `dory machine` to spin up snapshot-able headless Alpine dev VMs for repeatable experiments. Containers reach Ollama on the Mac at `host.dory.internal:11434`.

## WHO IT'S FOR

- Mac developers weighing Docker Desktop's licence — the same Docker 29 API and CLI, under GPL
- Anyone needing local Kubernetes — one-click k3s with v1.34–v1.36 presets
- Coding-agent operators — policy-bound isolated sandbox VMs and a read-only MCP mode

## START IN 5 MINUTES

```
# brew install --cask Augani/dory/dory   # installs Docker Core; add Kubernetes or Linux Machines from the app
# # open Dory once and wait for the engine to report ready, then
# docker context use dory
# docker run --rm hello-world
# dory doctor --active
```

## CAVEATS

- Licence GPL-3.0. Free (GitHub Sponsors). No account or telemetry.
- Apple Silicon Macs on macOS 14 Sonoma or later only; no Intel build yet (planned). x86_64 Linux ISOs do not boot (FEX/Rosetta translate applications only). 8 GiB of memory recommended for mixed workloads.
- Still 0.4.x: desktop Linux GPU acceleration unqualified, USB passthrough qualified-only, no audio passthrough. Latest published release v0.4.5 as of 2026-09-15. 1,577 stars.

## RECEIPT

- FIRST SEEN BY TESIGN: 2026-09-13 08:37 UTC
- AT SOURCE: 2026-06-19 00:54 UTC
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

[Image] https://tesign.com/img/dory-9f02fb12b7.png
