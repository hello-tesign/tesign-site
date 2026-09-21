# JobSync

> Track job applications on your server — A self-hosted job-search companion that keeps applications, resumes and interview notes in one place.

- Page: https://tesign.com/en/item/jobsync/
- JSON: https://tesign.com/en/item/jobsync/index.json
- Korean Markdown: https://tesign.com/item/jobsync/index.md
- Generated: 2026-09-21 05:58 UTC

## Numbers

- 1,268 stars — checked on GitHub 2026-09-19 22:57 UTC
- 7-day +8 observed via GH Archive (as of 2026-09-21 00:00 UTC)
- Star total = the value last checked on GitHub (stars_checked_at) + increases observed via GH Archive since. The 24h · 7d · 30d gains are GH Archive hourly events summed to the reference time (as_of). No score of ours.

## AT A GLANCE

- LICENSE: MIT (permissive) — https://spdx.org/licenses/MIT.html
- USAGE: Use, change and redistribute, commercially too. Keep the notice.
- OPEN SOURCE: YES
- LANGUAGE: TypeScript
- PLATFORM: web
- CATEGORY: PRODUCTIVITY · AI
- Tags: 구직 · 지원 관리 · 이력서 · 자체 설치
- How to start: Self-host
- SOURCES: GitHub https://github.com/gsync/jobsync
- SELF-HOST: https://jobsync.ca/

## ACTIVITY

- Last commit: 2026-09-16 13:48 UTC
- Latest release: v1.1.20 (2026-09-14)
- Contributors: 3
- Open issues (incl. PRs): 30
- Made by: an individual
- Checked on GitHub: 2026-09-19 22:57 UTC

## TESIGN TAKE

You can walk through the whole thing in the public demo before installing anything. Most job tools start with a sign-up; this one starts with a server you own.

## WHY IT MATTERS

A spreadsheet of applications stops telling you where you are. JobSync gathers applications, resumes and interview questions in one place, and its AI features — resume review, job matching, cover letters — can run entirely on your own machine through Ollama, so the resume never leaves it.

## BUILD FROM THIS

- Runs under Docker: clone, docker compose up, then create your account at localhost:3737. It has an application tracker, a dashboard and calendar, and resume storage; importing a PDF or .docx splits it into contact details, experience and education, and exports come back as one of two formatted PDF templates. A built-in MCP server lets tools such as Claude Desktop add jobs straight from a chat.

## WHO IT'S FOR

- Anyone with several applications in flight at once, and anyone who tailors a resume for each posting.

## START IN 5 MINUTES

```
# Try demo.jobsync.ca first, then bring it up with Docker on your own machine or server.
```

## CAVEATS

- It needs Docker, and the first start takes a few minutes while the image builds. AI features require either a local model or your own provider key, and on a remote server you must set TZ or activity times drift.

## RECEIPT

- FIRST SEEN BY TESIGN: 2026-09-17 01:24 UTC
- AT SOURCE: 2024-05-21 22:30 UTC
- KEPT: 2026-09-19 22:45 UTC
- Published on TESIGN: 2026-09-19 22:45 UTC
- Text last updated: 2026-09-19 22:45 UTC

## How to read this

- This file was produced by the same build, from the same data, as the tesign.com item page. The text is editorial; the numbers are stored observations.
- null in the JSON means not observed — never zero. The Markdown writes [unconfirmed] for it.
- Star total = the value last checked on GitHub (stars_checked_at) + increases observed via GH Archive since. The 24h · 7d · 30d gains are GH Archive hourly events summed to the reference time (as_of). No score of ours.
- A summary, not legal advice.

[Image] https://tesign.com/img/jobsync-12ce0957f8.png
