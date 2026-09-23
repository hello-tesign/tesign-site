# Easel

> Content workbench for social creators — Workbench for social creators: discover, plan, create, publish to 7 Chinese platforms

- Page: https://tesign.com/en/item/easel/
- JSON: https://tesign.com/en/item/easel/index.json
- Korean Markdown: https://tesign.com/item/easel/index.md
- Generated: 2026-09-23 02:05 UTC

## Numbers

- 1,300 stars — checked on GitHub 2026-09-23 01:48 UTC
- no 7-day star increase observed (GH Archive) (as of 2026-09-22 21:00 UTC)
- Star total = the value last checked on GitHub (stars_checked_at) + increases observed via GH Archive since. The 24h · 7d · 30d gains are GH Archive hourly events summed to the reference time (as_of). No score of ours.

## AT A GLANCE

- LICENSE: Apache-2.0 (permissive) — https://spdx.org/licenses/Apache-2.0.html
- USAGE: Commercial use, redistribution OK. Keep notices; mark changes.
- OPEN SOURCE: YES
- LANGUAGE: Python
- PLATFORM: web · linux · macos · windows
- CATEGORY: AI · SOCIAL
- Tags: social-media · content-automation · agent · xiaohongshu · openclaw · publishing
- How to start: Install to use
- SOURCES: GitHub https://github.com/zju-real/easel
- RUN: https://zju-real.github.io/Easel

## ACTIVITY

- Last commit: 2026-09-20 12:13 UTC
- Latest release: v0.2.0 (2026-09-17)
- Contributors: 9
- Open issues (incl. PRs): 8
- Made by: an organization
- Checked on GitHub: 2026-09-23 01:48 UTC

## TESIGN TAKE

Few open-source tools actually log in and publish to Chinese platforms; the publishing step needs those accounts, and an LLM API key is mandatory throughout.

## WHY IT MATTERS

Easel is published by Zhejiang University's REAL lab (ZJU-REAL) with Peking University and the OpenDCAI lab. Each account gets a profile (positioning, style, audience, platform, red lines, long-term memory), and every output is archived per project under outputs/. It currently handles login, format adaptation and publishing for seven platforms (Xiaohongshu, Douyin, Kuaishou, Zhihu, Bilibili, WeChat Channels, WeChat Official Accounts) with a web workbench on localhost:7860; the README itself warns that automated Xiaohongshu posting can trigger verification, reach limits or account restrictions.

## BUILD FROM THIS

- Copy profiles/_template into an account profile for your brand and set up a China-market pipeline that turns one topic into Xiaohongshu cards, a short video and a Zhihu article at once. New skills are a SKILL.md plus scripts under skills/openclaw/.

## WHO IT'S FOR

- China-platform operators — turn one asset into seven platform formats and publish
- Labs and education channels — paper-explainer cards and videos
- Agent developers — study the structure of 113 OpenClaw skills

## START IN 5 MINUTES

```
# git clone https://github.com/ZJU-REAL/Easel.git
# cd Easel
# bash setup.sh
# # Windows (PowerShell): Set-ExecutionPolicy -Scope Process Bypass; .\setup.ps1
# source .venv/bin/activate    # Windows: .venv\Scripts\activate
# easel web                    # http://localhost:7860
```

## CAVEATS

- Apache-2.0. Needs Linux, macOS or Windows 10/11 (Windows per the Chinese README; the English README lists Linux and macOS only) with Python 3.10+, Node.js 22.19+, FFmpeg and Playwright Chromium.
- An LLM API key (Anthropic, OpenAI or a compatible endpoint) is required; video, music and voice generation need extra provider keys.
- All supported platforms are Chinese services, and the README warns that automated Xiaohongshu posting risks account restrictions.

## RECEIPT

- FIRST SEEN BY TESIGN: 2026-09-13 07:43 UTC
- AT SOURCE: 2026-08-28 02:22 UTC
- KEPT: 2026-09-14 19:27 UTC
- Published on TESIGN: 2026-09-14 19:27 UTC
- Text last updated: 2026-09-15 04:36 UTC

## How to read this

- This file was produced by the same build, from the same data, as the tesign.com item page. The text is editorial; the numbers are stored observations.
- null in the JSON means not observed — never zero. The Markdown writes [unconfirmed] for it.
- Star total = the value last checked on GitHub (stars_checked_at) + increases observed via GH Archive since. The 24h · 7d · 30d gains are GH Archive hourly events summed to the reference time (as_of). No score of ours.
- A summary, not legal advice.

[Image] https://tesign.com/img/easel-80e5d01cea.png
