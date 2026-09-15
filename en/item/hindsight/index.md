# Hindsight

> Narrative map for YouTube viewers — Remembers 49,411 videos, maps 22,904 by issue, traces how a YouTuber's argument changed.

- Page: https://tesign.com/en/item/hindsight/
- JSON: https://tesign.com/en/item/hindsight/index.json
- Korean Markdown: https://tesign.com/item/hindsight/index.md
- Generated: 2026-09-15 19:35 UTC

## Numbers

- 0 stars — checked on GitHub 2026-09-15 19:33 UTC
- no 7-day star increase observed (GH Archive) (as of 2026-09-15 15:00 UTC)
- 1 Show HN points — observed 2026-09-15 11:21 UTC
- Star total = the value last checked on GitHub (stars_checked_at) + increases observed via GH Archive since. The 24h · 7d · 30d gains are GH Archive hourly events summed to the reference time (as_of). No score of ours.

## AT A GLANCE

- LICENSE: MIT (permissive) — https://spdx.org/licenses/MIT.html
- USAGE: Use, change and redistribute, commercially too. Keep the notice.
- OPEN SOURCE: YES
- LANGUAGE: JavaScript
- PLATFORM: web · cli
- CATEGORY: AI · MEDIA
- Tags: youtube · transcripts · narrative-map · topic-clusters · agents
- How to start: Use in the browser
- SOURCES: Show HN https://github.com/brishtiteveja/hindsight
- TRY: https://dev.perspectivity.co/hindsight

## ACTIVITY

- Last commit: 2026-09-13 05:57 UTC
- Latest release: no releases
- Contributors: 1
- Open issues (incl. PRs): 0
- Made by: an individual
- Checked on GitHub: 2026-09-15 19:33 UTC

## Signals and evidence

- NEW · 2h OLD WHEN SEEN

## TESIGN TAKE

It treats a whole channel as one memory instead of a list of videos, which suits anyone who has followed an argument for years.

## WHY IT MATTERS

When a creator returns to an issue months later the examples and tone shift, but finding what they said before means hunting through hours of video. Hindsight keeps transcripts for 49,411 videos across 108 channels (per the live site) and lays 22,904 of them out as dots on an issue map (the Issue Galaxy). Click a cluster to inspect its videos in the Galaxy, open the transcript behind a claim from the story view, or ask the agent in the same workspace to compare three moments side by side.

## BUILD FROM THIS

- A dated timeline of how a channel you follow has treated one issue
- A research session: paste a YouTube link, let it build memory from the captions, then ask questions
- For creators, a Pre-flight check of a new draft against earlier claims in the channel's archive

## WHO IT'S FOR

- Regular viewer of news or tech channels — checks how a favourite creator's stance shifted, in their own words
- Journalist or researcher — finds what a person actually said about one issue, and when
- YouTube creator — checks a new draft against earlier claims before publishing

## START IN 5 MINUTES

```
# Use it now: open https://dev.perspectivity.co/hindsight/ → type a topic, creator or YouTube link in the search box, or choose 'Follow a story'
# Run locally (requires Python 3.11+ and uv):
$ git clone https://github.com/brishtiteveja/hindsight.git
$ cd hindsight
$ uv sync
$ cp .env.example .env
$ uv run hindsight ingest samples/demo-channel --channel "Demo Channel"
$ uv run hindsight analyze --channel "Demo Channel"
$ uv run hindsight index --channel "Demo Channel"
$ uv run hindsight serve
# → open http://localhost:8300/
```

## CAVEATS

- MIT for the code; third-party videos and transcripts are not relicensed by the repository
- The live site opens without keys, but a local install needs OpenRouter and Gemini API keys for analysis, indexing and the agent (caption ingestion and serving work without them)
- The agent layer is hackathon work (AI Tinkerers × OpenAI); the transcript corpus, engine and Galaxy are Perspectivity's earlier work. A prototype over the indexed archive; the full corpus is not in the repository.
- The README warns that topic and stance labels are model-generated aids and that speaker attribution and timestamps can be wrong — check the original recording

## RECEIPT

- FIRST SEEN BY TESIGN: 2026-09-13 07:43 UTC
- AT SOURCE: 2026-09-13 05:27 UTC
- KEPT: 2026-09-15 14:07 UTC
- Published on TESIGN: 2026-09-15 14:07 UTC
- Text last updated: 2026-09-15 14:07 UTC

## How to read this

- This file was produced by the same build, from the same data, as the tesign.com item page. The text is editorial; the numbers are stored observations.
- null in the JSON means not observed — never zero. The Markdown writes [unconfirmed] for it.
- Star total = the value last checked on GitHub (stars_checked_at) + increases observed via GH Archive since. The 24h · 7d · 30d gains are GH Archive hourly events summed to the reference time (as_of). No score of ours.
- A summary, not legal advice.

[Image] https://tesign.com/img/hindsight-69a568861b.png
