# OpenClip

> Text-selection actions for Mac users — Select text in any Mac app; a floating bar offers copy, transform, math and AI actions

- Page: https://tesign.com/en/item/openclip/
- JSON: https://tesign.com/en/item/openclip/index.json
- Korean Markdown: https://tesign.com/item/openclip/index.md
- Generated: 2026-09-18 06:40 UTC

## Numbers

- 424 stars — checked on GitHub 2026-09-17 18:41 UTC
- 7-day +4 observed via GH Archive (as of 2026-09-18 01:00 UTC)
- 5 Show HN points — observed 2026-09-13 13:55 UTC
- Star total = the value last checked on GitHub (stars_checked_at) + increases observed via GH Archive since. The 24h · 7d · 30d gains are GH Archive hourly events summed to the reference time (as_of). No score of ours.

## AT A GLANCE

- LICENSE: MIT (permissive) — https://spdx.org/licenses/MIT.html
- USAGE: Use, change and redistribute, commercially too. Keep the notice.
- OPEN SOURCE: YES
- LANGUAGE: Swift
- PLATFORM: macos
- CATEGORY: PRODUCTIVITY
- Tags: macos · menubar · text-actions · popclip-alternative · extensions · ollama
- How to start: Install to use
- SOURCES: Show HN https://github.com/ganeshmshetty/openclip · GitHub https://github.com/ganeshmshetty/openclip
- INSTALL: https://getopenclip.app/

## ACTIVITY

- Last commit: 2026-09-17 14:03 UTC
- Latest release: v1.6.1 (2026-09-16)
- Contributors: 10
- Open issues (incl. PRs): 10
- Made by: an individual
- Checked on GitHub: 2026-09-17 18:41 UTC

## Signals and evidence

- CROSS-SIGNAL · Show HN + GitHub
- BACK CATALOG

## TESIGN TAKE

It is plainly an open-source PopClip alternative with a simpler extension format; the trade-off is an app that cannot work without Accessibility permission.

## WHY IT MATTERS

OpenClip reads the selected text through macOS Accessibility (not the clipboard) on macOS 14+ and shows a bar of actions that fit it. Pressing ⌥⌘C turns the bar into a fuzzy-search palette over the whole action catalog, and extensions are JavaScript, AppleScript, shell or URL-template files dropped into ~/.openclip/extensions with an openclip.json manifest, no compile step. AI actions can run on Apple Intelligence, a local Ollama model, or OpenAI/Claude.

## BUILD FROM THIS

- One openclip.json with a URL template becomes a search action for your internal wiki or order lookup; a shell-script extension can send a selected product code to an inventory API and surface the result as a status message or notification.

## WHO IT'S FOR

- Mac users who handle a lot of text — case changes, summaries, translations on selection
- Developers — register shell or JS scripts as text-selection actions
- Ollama users — inline AI writing on a local model, no cloud

## START IN 5 MINUTES

```
# brew install --cask ganeshmshetty/tap/openclip
# # launch OpenClip and grant Accessibility permission:
# System Settings → Privacy & Security → Accessibility → enable OpenClip
# # select text in any app, or press ⌥⌘C
```

## CAVEATS

- MIT. macOS 14+ only and Accessibility permission is mandatory.
- Cloud AI (OpenAI, Claude) uses your own API key and budget; choosing Apple Intelligence or a local Ollama model needs no cloud key.
- The README states it is independent of and unaffiliated with PopClip.

## RECEIPT

- FIRST SEEN BY TESIGN: 2026-09-13 09:42 UTC
- AT SOURCE: 2026-09-03 12:25 UTC
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

[Image] https://tesign.com/img/openclip-bde794c307.webp
