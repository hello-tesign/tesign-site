# DuoFold for Android

> Fold illusion for Android phones — Makes a regular Android screen fold and shift as you tilt the phone.

- Page: https://tesign.com/en/item/duofold-android/
- JSON: https://tesign.com/en/item/duofold-android/index.json
- Korean Markdown: https://tesign.com/item/duofold-android/index.md
- Generated: 2026-09-19 23:10 UTC

## Numbers

- 157 stars — checked on GitHub 2026-09-19 22:58 UTC
- 7-day +14 observed via GH Archive (as of 2026-09-19 18:00 UTC)
- Star total = the value last checked on GitHub (stars_checked_at) + increases observed via GH Archive since. The 24h · 7d · 30d gains are GH Archive hourly events summed to the reference time (as_of). No score of ours.

## AT A GLANCE

- LICENSE: MIT (permissive) — https://spdx.org/licenses/MIT.html
- USAGE: Use, change and redistribute, commercially too. Keep the notice.
- OPEN SOURCE: YES
- LANGUAGE: Java
- PLATFORM: android
- CATEGORY: MEDIA · EXPERIMENT
- Tags: android · shizuku · opengl · ui-effect
- How to start: Install to use
- SOURCES: GitHub https://github.com/jcx396905-gif/duofold-android
- INSTALL: https://github.com/jcx396905-gif/duofold-android

## ACTIVITY

- Last commit: 2026-09-13 03:13 UTC
- Latest release: v0.6.0 (2026-09-13)
- Contributors: 1
- Open issues (incl. PRs): 3
- Made by: an individual
- Checked on GitHub: 2026-09-19 22:58 UTC

## Signals and evidence

- NEW · 23h OLD WHEN SEEN

## TESIGN TAKE

An experiment that repaints the whole system screen without root; the implementation is the show.

## WHY IT MATTERS

A screen that folds with the phone's motion used to belong to one device. DuoFold takes the current display through Shizuku and reprojects it with OpenGL ES, so tilting the phone moves perspective, blur and lighting in real time. No root is required, the app has no Internet permission and neither stores nor uploads screen images, and it is MIT. A standard build covers Android 14 and newer, a compatibility build 10 to 13; real-device testing so far is on a Xiaomi 15.

## BUILD FROM THIS

- An eye-catching screen effect on a shop demo phone
- A study piece on wiring motion sensors to GPU reprojection on Android

## WHO IT'S FOR

- Android developer — wants to see screen capture plus GPU reprojection done
- Phone tinkerer — already runs Shizuku and wants a new effect

## START IN 5 MINUTES

```
# From the Latest Release, get the standard APK (Android 14+) or the compat APK (10–13)
# Install Shizuku and start its service via wireless debugging or ADB
# In the app: 01 authorize Shizuku → 02 accessibility service → 03 try 10 s → 04 global effect
```

## CAVEATS

- Shizuku must be installed and running (no root needed)
- Tested only on a Xiaomi 15 / Android 16; vendor limits may differ
- Extended use raises GPU load and battery drain

## RECEIPT

- FIRST SEEN BY TESIGN: 2026-09-13 07:43 UTC
- AT SOURCE: 2026-09-12 08:33 UTC
- KEPT: 2026-09-14 02:41 UTC
- Published on TESIGN: 2026-09-14 02:41 UTC
- Text last updated: 2026-09-15 04:36 UTC

## How to read this

- This file was produced by the same build, from the same data, as the tesign.com item page. The text is editorial; the numbers are stored observations.
- null in the JSON means not observed — never zero. The Markdown writes [unconfirmed] for it.
- Star total = the value last checked on GitHub (stars_checked_at) + increases observed via GH Archive since. The 24h · 7d · 30d gains are GH Archive hourly events summed to the reference time (as_of). No score of ours.
- A summary, not legal advice.

[Image] https://tesign.com/img/duofold-android-11ccdb6642.jpg
