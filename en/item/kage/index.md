# kage

> Offline, script-free copies of websites — CLI that renders a site in headless Chrome and saves a script-free copy to read offline

- Page: https://tesign.com/en/item/kage/
- JSON: https://tesign.com/en/item/kage/index.json
- Korean Markdown: https://tesign.com/item/kage/index.md
- Generated: 2026-09-18 21:08 UTC

## Numbers

- 3,401 stars — checked on GitHub 2026-09-17 18:40 UTC
- no 7-day star increase observed (GH Archive) (as of 2026-09-18 15:00 UTC)
- 712 Show HN points — observed 2026-09-13 16:05 UTC
- Star total = the value last checked on GitHub (stars_checked_at) + increases observed via GH Archive since. The 24h · 7d · 30d gains are GH Archive hourly events summed to the reference time (as_of). No score of ours.

## AT A GLANCE

- LICENSE: MIT (permissive) — https://spdx.org/licenses/MIT.html
- USAGE: Use, change and redistribute, commercially too. Keep the notice.
- OPEN SOURCE: YES
- LANGUAGE: Go
- PLATFORM: cli · macos · windows · linux
- CATEGORY: DEV TOOLS
- Tags: web-archiving · offline · headless-chrome · cli · go · zim
- How to start: Install to use
- SOURCES: Show HN https://github.com/tamnd/kage · GitHub https://github.com/tamnd/kage
- INSTALL: https://kage.tamnd.com/

## ACTIVITY

- Last commit: 2026-08-10 11:59 UTC
- Latest release: v0.3.12 (2026-08-10)
- Contributors: 7
- Open issues (incl. PRs): 9
- Made by: an individual
- Checked on GitHub: 2026-09-17 18:40 UTC

## Signals and evidence

- CROSS-SIGNAL · Show HN + GitHub
- BACK CATALOG

## TESIGN TAKE

It does one thing, keeping what a real browser rendered minus the code, and finishes in an open format (ZIM) instead of its own.

## WHY IT MATTERS

A page saved with Save As tends to open months later as a blank screen or a spinner that never stops. kage loads each page in real headless Chrome, waits for it to settle, snapshots the DOM, deletes every script and pulls CSS, images and fonts to local paths. `kage pack` then collapses the mirror into one ZIM file (the format Kiwix uses) or a single executable that serves the site itself (about 13 MiB plus the site).

## BUILD FROM THIS

- You could schedule a job that re-renders an internal docs site with `--refresh` into a script-free static copy, or run archiving on a server with the container image that bundles Chromium. The pure-Go ZIM reader and writer (zim/) can be reused on its own.

## WHO IT'S FOR

- Readers who want to keep a body of writing — a whole essay site as an offline folder or one ZIM file
- Docs owners — hand out a script-free copy of a documentation site
- Go developers — reuse the pure-Go ZIM package and headless Chrome control

## START IN 5 MINUTES

```
# brew install --cask tamnd/tap/kage   # Windows: scoop bucket add tamnd https://github.com/tamnd/scoop-bucket && scoop install kage / Go: go install github.com/tamnd/kage/cmd/kage@latest
# kage clone paulgraham.com
# kage serve $HOME/data/kage/paulgraham.com
# # open http://127.0.0.1:8800
# kage pack paulgraham.com               # -> paulgraham.com.zim
```

## CAVEATS

- Licence MIT. Needs Chrome or Chromium on the host (the container image bundles Chromium). Respects robots.txt by default.
- ZIM output has no full-text search index like Kiwix's own packs, so in-reader search is limited. The binary pack adds about 13 MiB regardless of site size. The native-window viewer is an opt-in cgo build.
- Free. Latest release v0.3.12 as of 2026-09-15, still 0.x.

## RECEIPT

- FIRST SEEN BY TESIGN: 2026-09-13 08:18 UTC
- AT SOURCE: 2026-06-14 11:21 UTC
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

[Image] https://tesign.com/img/kage-f2e1003e91.png
