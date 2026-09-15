# nurb

> Describe-it CAD for 3D printing — Describe a part in words; AI models a real CAD solid, checks printability, exports a 3MF.

- Page: https://tesign.com/en/item/nurb/
- JSON: https://tesign.com/en/item/nurb/index.json
- Korean Markdown: https://tesign.com/item/nurb/index.md
- Generated: 2026-09-15 19:35 UTC

## Numbers

- 539 stars — checked on GitHub 2026-09-15 19:35 UTC
- no 7-day star increase observed (GH Archive) (as of 2026-09-15 15:00 UTC)
- 2 Show HN points — observed 2026-09-13 14:48 UTC
- Star total = the value last checked on GitHub (stars_checked_at) + increases observed via GH Archive since. The 24h · 7d · 30d gains are GH Archive hourly events summed to the reference time (as_of). No score of ours.

## AT A GLANCE

- LICENSE: Licence unconfirmed
- USAGE: Unconfirmed — check before use.
- LANGUAGE: Python
- PLATFORM: macos · cli
- CATEGORY: HARDWARE · AI
- Tags: 3d-printing · cad · ai-agent · occt · python · cli
- How to start: Install to use
- SOURCES: Show HN https://github.com/Shpigford/nurb
- INSTALL: https://nurb.dev/

## ACTIVITY

- Last commit: 2026-09-05 11:41 UTC
- Latest release: v0.26.0 (2026-09-05)
- Contributors: 11
- Open issues (incl. PRs): 12
- Made by: an individual
- Checked on GitHub: 2026-09-15 19:35 UTC

## Signals and evidence

- BACK CATALOG

## TESIGN TAKE

The bottleneck in AI CAD is not modelling but knowing whether it will print, and nurb turns that check into a tool.

## WHY IT MATTERS

A nurb part is not a mesh but a true B-rep solid on the OCCT kernel (via build123d), so chamfers and fillets are real operations and STEP export opens in Fusion or FreeCAD. Because the AI cannot see, `nurb check` runs thirteen printability rules — overhangs, thin walls, floating regions, warp risk and more — against the exact solid and pins each finding to the face it fired on. It runs locally with the AI subscription you already have, with no account or cloud.

## BUILD FROM THIS

- Set up a personal workflow where you measure a hose adapter or shelf bracket and order it in words, or put `nurb check --strict` in CI to gate a parametric parts library on printability.

## WHO IT'S FOR

- Makers with a 3D printer — design and print custom parts by describing them
- Hobbyists who never learned CAD — adjust dimensions with sliders and print variants
- Developers using AI agents — keep parts as Python functions and build, check and export from the CLI

## START IN 5 MINUTES

```
# Mac app: download nurb.dmg (Apple silicon) or nurb-intel.dmg from GitHub Releases
# curl -fsSL https://nurb.dev/install.sh | sh   # one-line install (uv, nurb and the agent skill)
# # or: uv tool install nurb   (or pip install nurb) — then add the skill separately with the next line
# npx skills add shpigford/nurb --skill nurb   # installs the agent skill
# nurb update   # upgrades nurb and the installed agent skill together
```

## CAVEATS

- Licence is FSL-1.1-MIT (confirmed from the LICENSE file): source-available for any purpose except building a competing product, converting to MIT two years after each release. It is not a conventional open-source licence, so read the terms before commercial use. The first build takes about 45 seconds while the CAD kernel loads; `nurb slice` needs OrcaSlicer or Bambu Studio installed; only `nurb render` needs a browser (Playwright chromium). Support for platforms other than the Mac app is [확인 필요]. Free; you supply your own AI subscription.

## RECEIPT

- FIRST SEEN BY TESIGN: 2026-09-13 14:48 UTC
- AT SOURCE: 2026-07-29 19:46 UTC
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

[Image] https://tesign.com/img/nurb-77b79fad3b.png
