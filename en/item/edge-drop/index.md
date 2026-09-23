# Edge-Drop

> Drag-out clipboard shelf for Windows — Windows clipboard shelf on the screen edge — hover to open, drag items into any app

- Page: https://tesign.com/en/item/edge-drop/
- JSON: https://tesign.com/en/item/edge-drop/index.json
- Korean Markdown: https://tesign.com/item/edge-drop/index.md
- Generated: 2026-09-23 02:05 UTC

## Numbers

- 582 stars — checked on GitHub 2026-09-23 01:49 UTC
- no 7-day star increase observed (GH Archive) (as of 2026-09-22 21:00 UTC)
- 6 Show HN points — observed 2026-09-13 14:47 UTC
- Star total = the value last checked on GitHub (stars_checked_at) + increases observed via GH Archive since. The 24h · 7d · 30d gains are GH Archive hourly events summed to the reference time (as_of). No score of ours.

## AT A GLANCE

- LICENSE: Apache-2.0 (permissive) — https://spdx.org/licenses/Apache-2.0.html
- USAGE: Commercial use, redistribution OK. Keep notices; mark changes.
- OPEN SOURCE: YES
- LANGUAGE: TypeScript
- PLATFORM: windows
- CATEGORY: PRODUCTIVITY
- Tags: clipboard-manager · windows · electron · drag-and-drop · productivity · react
- How to start: Install to use
- SOURCES: Show HN https://edgedrop.vercel.app/
- INSTALL: https://edgedrop.app/

## ACTIVITY

- Last commit: 2026-09-15 16:28 UTC
- Latest release: v0.3.1 (2026-09-08)
- Contributors: 5
- Open issues (incl. PRs): 23
- Made by: an individual
- Checked on GitHub: 2026-09-23 01:49 UTC

## Signals and evidence

- BACK CATALOG

## TESIGN TAKE

All it does is collapse the Win+V hunt into one motion — cursor to the edge, drag out — and it went as far as OLE drag and DPAPI encryption to make that one motion work; Windows only, still beta.

## WHY IT MATTERS

Instead of arrowing through Win+V history, a transparent always-on-top click-through window sits on the screen edge and the shelf opens when the cursor reaches it. Using the Win32 OLE drag pipeline from Electron, images, file stacks and rich text can be dragged for real into Photoshop, Word or Explorer, and several files can be grouped into a stack or split apart. History is encrypted at rest with Windows DPAPI and the app honours the clipboard-exclusion formats used by 1Password, Bitwarden and KeePass. It ships via the Microsoft Store and an .exe installer, is localised into 31 languages, and is in public beta (v0.3.1, 2026-09-08).

## BUILD FROM THIS

- Apache-2.0 allows commercial use, so you could rework it into a team shelf of product images and boilerplate to drag into editing tools, or study how it drives OLE drag and transparent windows from Electron for your own Windows app.

## WHO IT'S FOR

- Developers and designers juggling screenshots, snippets and links between windows — drag, no shortcuts
- 1Password and Bitwarden users — a clipboard tool that respects the concealed formats
- Electron developers reaching into Windows natives — OLE drag and transparent-window code to study

## START IN 5 MINUTES

```
# # Install: Microsoft Store (9P3JMHN9M4NR) or the .exe on GitHub Releases — running from source below needs Node.js 18+, Windows 10/11
# git clone https://github.com/Deepender25/Edge-Drop.git
# cd Edge-Drop
# npm install
# npm run dev
```

## CAVEATS

- Apache-2.0 — commercial use, modification and redistribution allowed with attribution
- Windows 10/11 only (relies on Win32 OLE drag and transparent-window cursor polling) — macOS and Linux ports are roadmap items seeking contributors
- Public beta (v0.3.1, 2026-09-08), solo-maintained; full-history search is capped at 500 items by default

## RECEIPT

- FIRST SEEN BY TESIGN: 2026-09-13 14:37 UTC
- AT SOURCE: 2026-08-05 13:11 UTC
- KEPT: 2026-09-14 19:27 UTC
- Published on TESIGN: 2026-09-14 19:27 UTC
- Text last updated: 2026-09-15 07:17 UTC
- ◌ BACK CATALOG: Reconstructed from archive data, not a live discovery.

## How to read this

- This file was produced by the same build, from the same data, as the tesign.com item page. The text is editorial; the numbers are stored observations.
- null in the JSON means not observed — never zero. The Markdown writes [unconfirmed] for it.
- Star total = the value last checked on GitHub (stars_checked_at) + increases observed via GH Archive since. The 24h · 7d · 30d gains are GH Archive hourly events summed to the reference time (as_of). No score of ours.
- Reconstructed from archive data, not a live discovery.
- A summary, not legal advice.

[Image] https://tesign.com/img/edge-drop-606b48c1ca.webp
