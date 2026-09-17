# ESP-KVM

> Build-your-own remote KVM — ESP32-P4 IP-KVM: a PC's BIOS screen, keyboard and mouse in a browser, about $40 in parts

- Page: https://tesign.com/en/item/esp-kvm/
- JSON: https://tesign.com/en/item/esp-kvm/index.json
- Korean Markdown: https://tesign.com/item/esp-kvm/index.md
- Generated: 2026-09-17 01:56 UTC

## Numbers

- 422 stars — checked on GitHub 2026-09-15 19:35 UTC
- 7-day +12 observed via GH Archive (as of 2026-09-16 21:00 UTC)
- Star total = the value last checked on GitHub (stars_checked_at) + increases observed via GH Archive since. The 24h · 7d · 30d gains are GH Archive hourly events summed to the reference time (as_of). No score of ours.

## AT A GLANCE

- LICENSE: Apache-2.0 (permissive) — https://spdx.org/licenses/Apache-2.0.html
- USAGE: Commercial use, redistribution OK. Keep notices; mark changes.
- OPEN SOURCE: YES
- LANGUAGE: C
- PLATFORM: web
- CATEGORY: HARDWARE · INFRA
- Tags: ip-kvm · esp32-p4 · hdmi-capture · homelab · esp-idf · home-assistant
- How to start: Self-host
- SOURCES: GitHub https://github.com/espkvm/espkvm
- SELF-HOST: https://espkvm.io/

## ACTIVITY

- Last commit: 2026-09-15 16:53 UTC
- Latest release: v.0.49.0 (2026-09-15)
- Contributors: 4
- Open issues (incl. PRs): 2
- Made by: an organization
- Checked on GitHub: 2026-09-15 19:35 UTC

## Signals and evidence

- BACK CATALOG

## TESIGN TAKE

It earns its keep exactly where remote desktop dies, and fills that gap with $40 of parts and a browser flasher — but take the author's 'do not put this on the public internet' literally.

## WHY IT MATTERS

Remote desktop needs a running OS; this board plugs into the target's HDMI output and a USB port and shows the BIOS, boot menu or a machine with no OS at all in a browser. It is built from an ESP32-P4 board and a Toshiba TC358743 HDMI-to-CSI bridge (Geekworm C790), and the homepage puts the parts at about $40. Measured at 1080p: MJPEG 20 fps on the Waveshare ESP32-P4-ETH, H.264 22–24 fps on the Function EV (rev 3.2). Virtual-media boot, Wake-on-LAN, ATX power control, Home Assistant over MQTT and WireGuard/Tailscale are included; it flashes from the browser, latest release v0.48.0 (2026-09-14).

## BUILD FROM THIS

- Fit one to each homelab server or mini-PC as a stand-in for a BMC, or combine runbooks (a macro that waits for 'Press F2' on screen, then presses F2) with the cron scheduler for text-screen jobs such as BIOS setup and boot menus, and for overnight checks.

## WHO IT'S FOR

- Homelab and mini-PC owners — enter the BIOS and reinstall an OS remotely
- Home Assistant users — MQTT auto-discovery exposes a screen still, power buttons and sensors
- Embedded developers working with the ESP32-P4 or HDMI capture — TC358743 bring-up and CSI register code to study

## START IN 5 MINUTES

```
# 1. Download your board's espkvm-<version>-<board>-merged.bin from Releases (e.g. -p4-eth-, -funcev-)
# esptool --chip esp32p4 -b 921600 write-flash 0x0 espkvm-<version>-<board>-merged.bin
# # or flash straight from Chrome/Edge at https://espkvm.io/flash/
# 2. Connect Ethernet, HDMI from the target and the board's USB 2.0 OTG-HS port to the target, then open https://espkvm.local/
# 3. Sign in as admin / admin → the console will not continue until the password is changed
```

## CAVEATS

- Apache-2.0; the author notes H.264 is patent-encumbered whatever licence the code carries
- Hardware: an ESP32-P4 board with 32 MB PSRAM and 16 MB flash plus a TC358743 capture board (Geekworm C790) — about $40 per the homepage; chip revision (below/above 3.0) changes the build
- No security review yet, so keep it off the public internet (VPN built in); HDMI audio not implemented; H.264, keyboard and mouse need HTTPS with the device CA trusted

## RECEIPT

- FIRST SEEN BY TESIGN: 2026-09-13 09:56 UTC
- AT SOURCE: 2026-07-22 20:25 UTC
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

[Image] https://tesign.com/img/esp-kvm-d27aaf95fb.png
