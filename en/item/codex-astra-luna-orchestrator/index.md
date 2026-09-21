# Codex Astra Orchestrator + Luna Subagents

> Orchestrator setup for Codex users — Installs a Codex setup where Astra orchestrates and Luna does the work.

- Page: https://tesign.com/en/item/codex-astra-luna-orchestrator/
- JSON: https://tesign.com/en/item/codex-astra-luna-orchestrator/index.json
- Korean Markdown: https://tesign.com/item/codex-astra-luna-orchestrator/index.md
- Generated: 2026-09-21 05:58 UTC

## Numbers

- 1,497 stars — checked on GitHub 2026-09-19 22:58 UTC
- 7-day +4 observed via GH Archive (as of 2026-09-21 00:00 UTC)
- Star total = the value last checked on GitHub (stars_checked_at) + increases observed via GH Archive since. The 24h · 7d · 30d gains are GH Archive hourly events summed to the reference time (as_of). No score of ours.

## AT A GLANCE

- LICENSE: Apache-2.0 (permissive) — https://spdx.org/licenses/Apache-2.0.html
- USAGE: Commercial use, redistribution OK. Keep notices; mark changes.
- OPEN SOURCE: YES
- LANGUAGE: Python
- PLATFORM: macos · linux · windows · cli
- CATEGORY: AI · DEV TOOLS
- Tags: codex · agents · orchestration · config
- How to start: Install to use
- SOURCES: GitHub https://github.com/donvito/codex-astra-luna-orchestrator
- INSTALL: https://github.com/donvito/codex-astra-luna-orchestrator

## ACTIVITY

- Last commit: 2026-09-17 14:43 UTC
- Latest release: v0.1.0 (2026-09-16)
- Contributors: 5
- Open issues (incl. PRs): 6
- Made by: an individual
- Checked on GitHub: 2026-09-19 22:58 UTC

## TESIGN TAKE

A handful of config files, but it saves you from hand-pinning a model to every Codex role.

## WHY IT MATTERS

Once you use subagents in Codex, every role needs a model and a reasoning level chosen by hand. Codex Astra Orchestrator + Luna Subagents copies a ready-made profile into the target repository's .codex and .agents, with orchestrator, explorer, worker, tester and reviewer each pinned to a model. The installer asks whether you are on the Pro or Plus plan and picks the matching profile. Apache-2.0; the README notes that token usage depends on the repository and the task.

## BUILD FROM THIS

- A default Codex role layout installed the same way in every team repo
- An independent review step pinned to a different model
- A usage check that tallies tokens per role from session logs

## WHO IT'S FOR

- Codex user — splitting roles and models across subagents for the first time
- Team lead — needs the same agent setup in every repository

## START IN 5 MINUTES

```
$ git clone https://github.com/donvito/codex-astra-luna-orchestrator.git
$ cd codex-astra-luna-orchestrator
$ ./setup.sh
# On Windows, run instead:
$ powershell -ExecutionPolicy Bypass -File .\setup.ps1
# The target project must already exist and be a different folder
```

## CAVEATS

- A config pack: you need Codex CLI and a Pro or Plus plan
- Named roles are pinned, so changing the default model alone won't move them
- Orchestration costs more tokens, as the README itself says

## RECEIPT

- FIRST SEEN BY TESIGN: 2026-09-13 07:43 UTC
- AT SOURCE: 2026-09-05 16:03 UTC
- KEPT: 2026-09-14 02:41 UTC
- Text last updated: 2026-09-15 04:36 UTC

## How to read this

- This file was produced by the same build, from the same data, as the tesign.com item page. The text is editorial; the numbers are stored observations.
- null in the JSON means not observed — never zero. The Markdown writes [unconfirmed] for it.
- Star total = the value last checked on GitHub (stars_checked_at) + increases observed via GH Archive since. The 24h · 7d · 30d gains are GH Archive hourly events summed to the reference time (as_of). No score of ours.
- A summary, not legal advice.

[Image] https://tesign.com/img/og/codex-astra-luna-orchestrator.en.png
