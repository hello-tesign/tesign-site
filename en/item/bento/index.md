# Bento

> One-file slides for presenters — A PowerPoint alternative in one HTML file; edit, present and share with only a browser.

- Page: https://tesign.com/en/item/bento/
- JSON: https://tesign.com/en/item/bento/index.json
- Korean Markdown: https://tesign.com/item/bento/index.md
- Generated: 2026-09-22 05:53 UTC

## Numbers

- 5,168 stars — checked on GitHub 2026-09-22 00:38 UTC
- 7-day +4 observed via GH Archive (as of 2026-09-21 20:00 UTC)
- Star total = the value last checked on GitHub (stars_checked_at) + increases observed via GH Archive since. The 24h · 7d · 30d gains are GH Archive hourly events summed to the reference time (as_of). No score of ours.

## AT A GLANCE

- LICENSE: MIT (permissive) — https://spdx.org/licenses/MIT.html
- USAGE: Use, change and redistribute, commercially too. Keep the notice.
- OPEN SOURCE: YES
- LANGUAGE: TypeScript
- PLATFORM: web
- CATEGORY: PRODUCTIVITY
- Tags: presentation · single-file · local-first · office · html · e2ee
- How to start: Use in the browser
- SOURCES: GitHub https://github.com/nyblnet/bento
- TRY: https://bento.page/

## ACTIVITY

- Last commit: 2026-09-20 20:55 UTC
- Latest release: v1.2.3 (2026-09-19)
- Contributors: 16
- Open issues (incl. PRs): 45
- Made by: an individual
- Checked on GitHub: 2026-09-22 00:38 UTC

## Signals and evidence

- BACK CATALOG

## TESIGN TAKE

The point is that the file is the software; anything with a browser opens it.

## WHY IT MATTERS

While office documents have moved behind cloud logins, Bento takes the other path. The deck, fonts, images, charts and the full editor travel in one .bento.html file, and on save the file rewrites its own data block (File System Access API, with a download fallback). The document sits as readable JSON near the top of the file, so an AI agent or any other tool can edit it in place.

## BUILD FROM THIS

- Ship a company template as a .bento.html file that colleagues can edit and present with nothing installed, or write a script that generates decks from data because the document is plain JSON.

## WHO IT'S FOR

- Small teams that trade decks often — share slides the other side can open without installing anything
- Developers driving documents with AI agents — generate slides by editing the JSON block
- Individuals avoiding cloud subscriptions — presentations that stay as a local file

## START IN 5 MINUTES

```
# 1. Open https://bento.page/slides in a browser (the whole app, running on a starter deck)
# 2. Or download the file: https://bento.page/releases/slides/Bento_Slides.bento.html (~560 KB per the README, ~710 KB per the site; no account, no installer)
# Build from source (Node 20+):
# cd slides
# npm install
# npm run build:single   # → dist-single/Bento_Slides.bento.html (the product)
```

## CAVEATS

- MIT licence (bundled reveal.js, Moveable and Selecto are MIT; typefaces OFL). Editing is desktop-first; phones are for viewing and presenting, per the README. Known trade-off: undo during live collaboration is snapshot-based and can revert a collaborator's concurrent edit to the same property; the sync relay is optional. Free.

## RECEIPT

- FIRST SEEN BY TESIGN: 2026-09-13 09:41 UTC
- AT SOURCE: 2026-07-17 16:55 UTC
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

[Image] https://tesign.com/img/bento-3e4e146afc.png
