# fx

> Shell-like coding agent, one binary — Vercel Labs' coding agent CLI: a 6.17 MiB Zig binary, shell-like, embeddable via WASM

- Page: https://tesign.com/en/item/vercel-labs-fx/
- JSON: https://tesign.com/en/item/vercel-labs-fx/index.json
- Korean Markdown: https://tesign.com/item/vercel-labs-fx/index.md
- Generated: 2026-09-15 20:32 UTC

## Numbers

- 2,988 stars — checked on GitHub 2026-09-15 19:35 UTC
- 7-day +4 observed via GH Archive (as of 2026-09-15 15:00 UTC)
- Star total = the value last checked on GitHub (stars_checked_at) + increases observed via GH Archive since. The 24h · 7d · 30d gains are GH Archive hourly events summed to the reference time (as_of). No score of ours.

## AT A GLANCE

- LICENSE: Apache-2.0 (permissive) — https://spdx.org/licenses/Apache-2.0.html
- USAGE: Commercial use, redistribution OK. Keep notices; mark changes.
- OPEN SOURCE: YES
- LANGUAGE: Zig
- PLATFORM: macos · linux · cli
- CATEGORY: DEV TOOLS · AI
- Tags: coding-agent · cli · zig · webassembly · vercel · acp
- How to start: Install to use
- SOURCES: GitHub https://github.com/vercel-labs/fx
- INSTALL: https://fx.sh/

## ACTIVITY

- Last commit: 2026-09-15 17:04 UTC
- Latest release: v0.0.10 (2026-09-14)
- Contributors: 18
- Open issues (incl. PRs): 229
- Made by: an organization
- Checked on GitHub: 2026-09-15 19:35 UTC

## Signals and evidence

- BACK CATALOG

## TESIGN TAKE

An experiment in making a coding agent small and embeddable like a Unix tool rather than an IDE — and the authors themselves label it experimental.

## WHY IT MATTERS

A coding agent from Vercel Labs with a different shape: one 6.17 MiB native binary written in Zig, with an interface closer to a Unix shell than an IDE in the terminal. It is model-agnostic — sign in with Vercel AI Gateway, a ChatGPT subscription (Codex OAuth) or a Grok subscription — and the same core builds to fx-core.wasm and fx-term.wasm, published to npm as libfx for Node.js, browser and Next.js hosts. fx acp connects it to editors and other Agent Client Protocol clients.

## BUILD FROM THIS

- With libfx you can embed a coding-agent terminal inside your own web app or internal tool (Node.js, browser, Next.js and Nuxt examples are provided), and extend the agent with skills, MCP servers and subagents.

## WHO IT'S FOR

- Terminal-centric developers — a light single-binary coding agent
- Teams embedding an agent in their own product — libfx (WASM) embedding
- Users of ACP-capable editors — connect the agent with fx acp

## START IN 5 MINUTES

```
# curl -fsSL https://fx.sh/setup.sh | bash
# fx login          # Vercel AI Gateway (fx login codex for a ChatGPT subscription, fx login grok for Grok)
# cd your_project
# fx
# fx ask "explain the changes in this repository"
```

## CAVEATS

- Licence Apache-2.0. README status: 'Experimental. Use at your own risk', and the homepage warns of frequent changes. Model costs are separate: you need a Vercel AI Gateway key/account or a paid ChatGPT or Grok subscription. The homepage lists macOS and Linux as operating systems; Windows support [확인 필요]. The WebAssembly SDK is also experimental, and building from source needs Zig 0.16.0+.

## RECEIPT

- FIRST SEEN BY TESIGN: 2026-09-13 09:42 UTC
- AT SOURCE: 2026-08-11 08:57 UTC
- KEPT: 2026-09-14 19:27 UTC
- Published on TESIGN: 2026-09-14 19:27 UTC
- Text last updated: 2026-09-15 20:14 UTC
- ◌ BACK CATALOG: Reconstructed from archive data, not a live discovery.

## How to read this

- This file was produced by the same build, from the same data, as the tesign.com item page. The text is editorial; the numbers are stored observations.
- null in the JSON means not observed — never zero. The Markdown writes [unconfirmed] for it.
- Star total = the value last checked on GitHub (stars_checked_at) + increases observed via GH Archive since. The 24h · 7d · 30d gains are GH Archive hourly events summed to the reference time (as_of). No score of ours.
- Reconstructed from archive data, not a live discovery.
- A summary, not legal advice.

[Image] https://tesign.com/img/vercel-labs-fx-ed809f35cb.png
