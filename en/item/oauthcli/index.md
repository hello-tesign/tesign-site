# oauthcli

> OAuth server audit for developers — Checks what an OAuth or OIDC server supports and audits it against RFCs.

- Page: https://tesign.com/en/item/oauthcli/
- JSON: https://tesign.com/en/item/oauthcli/index.json
- Korean Markdown: https://tesign.com/item/oauthcli/index.md
- Generated: 2026-09-23 04:12 UTC

## Numbers

- 2 stars — checked on GitHub 2026-09-23 01:48 UTC
- no 7-day star increase observed (GH Archive) (as of 2026-09-22 23:00 UTC)
- 5 Show HN points — observed 2026-09-20 04:28 UTC
- Star total = the value last checked on GitHub (stars_checked_at) + increases observed via GH Archive since. The 24h · 7d · 30d gains are GH Archive hourly events summed to the reference time (as_of). No score of ours.

## AT A GLANCE

- LICENSE: Licence unconfirmed
- USAGE: Unconfirmed — check before use.
- LANGUAGE: Go
- PLATFORM: windows · macos · linux · cli
- CATEGORY: SECURITY · DEV TOOLS
- Tags: oauth · oidc · cli · security
- How to start: Install to use
- SOURCES: Show HN https://github.com/Southclaws/oauthcli
- INSTALL: https://github.com/Southclaws/oauthcli

## ACTIVITY

- Last commit: 2026-09-13 12:43 UTC
- Latest release: v1.0.0 (2026-09-12)
- Contributors: 1
- Open issues (incl. PRs): 0
- Made by: an individual
- Checked on GitHub: 2026-09-23 01:48 UTC

## Signals and evidence

- NEW · 1h OLD WHEN SEEN

## TESIGN TAKE

It turns 'does our server follow the standard?' into a verdict per RFC section.

## WHY IT MATTERS

Wiring up OAuth means finding where docs and real behaviour differ. oauthcli reads what a server publishes, gives a verdict per RFC, gets and decodes tokens with every grant, and runs browser and device flows and dynamic client registration as single commands. Every command has --format json and exit codes carry the verdict, so agents use the same tool as people. Installed with Go; the spec texts ship in the binary, and no license is stated in the README.

## BUILD FROM THIS

- A CI step that audits the authorization server before release
- An RFC support report for evaluating a new identity provider
- An agent skill that obtains tokens and exercises an API

## WHO IT'S FOR

- Backend developer — hunting the mismatch in an OAuth integration
- Security engineer — auditing the company IdP against the RFCs
- Agent builder — letting an agent obtain tokens

## START IN 5 MINUTES

```
$ go install github.com/Southclaws/oauthcli@latest
$ oauthcli discover https://accounts.google.com     # what does this issuer publish and support?
$ oauthcli check https://accounts.google.com        # is it conformant? one verdict per RFC
# Needs the Go toolchain · the binary is called oauthcli
```

## CAVEATS

- No license stated in the README
- Installed through the Go toolchain; no binary downloads in the README
- Checks that create state, such as --register, are opt-in

## RECEIPT

- FIRST SEEN BY TESIGN: 2026-09-13 12:59 UTC
- AT SOURCE: 2026-09-13 11:53 UTC
- KEPT: 2026-09-14 02:41 UTC
- Text last updated: 2026-09-15 04:36 UTC

## How to read this

- This file was produced by the same build, from the same data, as the tesign.com item page. The text is editorial; the numbers are stored observations.
- null in the JSON means not observed — never zero. The Markdown writes [unconfirmed] for it.
- Star total = the value last checked on GitHub (stars_checked_at) + increases observed via GH Archive since. The 24h · 7d · 30d gains are GH Archive hourly events summed to the reference time (as_of). No score of ours.
- A summary, not legal advice.

[Image] https://tesign.com/img/og/oauthcli.en.png
