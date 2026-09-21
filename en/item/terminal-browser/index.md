# terminal-browser

> A browser inside your terminal — A real Chromium browser running inside kitty-graphics terminals like ghostty and VS Code

- Page: https://tesign.com/en/item/terminal-browser/
- JSON: https://tesign.com/en/item/terminal-browser/index.json
- Korean Markdown: https://tesign.com/item/terminal-browser/index.md
- Generated: 2026-09-21 00:32 UTC

## Numbers

- 3,124 stars — checked on GitHub 2026-09-19 22:59 UTC
- 7-day +10 observed via GH Archive (as of 2026-09-20 10:00 UTC)
- 4 Show HN points — observed 2026-09-13 14:00 UTC
- Star total = the value last checked on GitHub (stars_checked_at) + increases observed via GH Archive since. The 24h · 7d · 30d gains are GH Archive hourly events summed to the reference time (as_of). No score of ours.

## AT A GLANCE

- LICENSE: MIT (permissive) — https://spdx.org/licenses/MIT.html
- USAGE: Use, change and redistribute, commercially too. Keep the notice.
- OPEN SOURCE: YES
- LANGUAGE: TypeScript
- PLATFORM: macos · linux · cli
- CATEGORY: DEV TOOLS · AI
- Tags: terminal · browser · chromium · kitty-graphics · coding-agents · rust
- How to start: Install to use
- SOURCES: Show HN https://github.com/zenbu-labs/terminal-browser · GitHub https://github.com/zenbu-labs/terminal-browser
- INSTALL: https://terminal-browser.com/

## ACTIVITY

- Last commit: 2026-09-19 22:13 UTC
- Latest release: v0.11.1 (2026-09-17)
- Contributors: 6
- Open issues (incl. PRs): 64
- Made by: an organization
- Checked on GitHub: 2026-09-19 22:59 UTC

## Signals and evidence

- CROSS-SIGNAL · Show HN + GitHub
- BACK CATALOG

## TESIGN TAKE

The goal is not staying in the terminal for its own sake but keeping the agent and the browser in one tab and one CLI — which is why a kitty-graphics terminal is the price of entry.

## WHY IT MATTERS

This is not a text-mode imitation: it reads the pixels Chromium renders on the GPU through Electron's offscreen rendering and paints them into the terminal with the kitty graphics protocol. A coding agent and a website share one terminal tab, the agent can drive open browsers through an agent-browser compatible CLI (terminal-browser action), and ctrl+g selects a page element to send to the agent. The --ssh option runs the browser locally and proxies only its network requests through the remote host, so a remote localhost site shows without port forwarding. Installed with one curl line or Homebrew; v0.8.1 (2026-09-09), MIT.

## BUILD FROM THIS

- Since terminal-browser action is agent-browser compatible, you can build a loop where the agent's HTML mock-ups open in a split pane and you pick elements to feed back. The examples/embedded reference shows how to embed a web view inside your own TUI.

## WHO IT'S FOR

- Developers running coding agents such as Claude Code or Codex in the terminal — the agent drives the browser itself
- People developing on remote servers — preview localhost over --ssh without port forwarding
- ghostty and kitty users — open docs and web apps in a split pane

## START IN 5 MINUTES

```
# curl -fsSL https://terminal-browser.sh/install | bash   # macOS & Linux
# brew install terminal-browser                            # Homebrew
# terminal-browser open <url>
# terminal-browser --split right
# terminal-browser open --ssh <user@host> <url>
```

## CAVEATS

- MIT (per the repository LICENSE file; the README itself does not state a licence)
- macOS and Linux per the install script; Windows is not mentioned in the README [확인 필요]. Requires a terminal with the kitty graphics protocol (ghostty, kitty, cmux, VS Code and others)
- v0.8.1 (2026-09-09); Chrome extensions and design mode are on the roadmap; it runs Electron (Chromium) underneath; memory footprint [확인 필요]

## RECEIPT

- FIRST SEEN BY TESIGN: 2026-09-13 09:38 UTC
- AT SOURCE: 2026-08-31 20:19 UTC
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

[Image] https://tesign.com/img/terminal-browser-6633abf116.png
