# ESP-KVM

> 직접 만드는 원격 KVM — ESP32-P4 보드로 만드는 IP-KVM — OS가 없거나 부팅 전인 PC의 BIOS 화면과 키보드·마우스를 브라우저에서 다룬다(부품 약 $40)

- 페이지: https://tesign.com/item/esp-kvm/
- JSON: https://tesign.com/item/esp-kvm/index.json
- 영어 마크다운: https://tesign.com/en/item/esp-kvm/index.md
- 생성 시각: 2026-09-22 07:26 UTC

## 숫자

- 별 452 — GitHub에서 2026-09-22 00:38 UTC 확인
- 7일 별 증가 관측 없음 (GH Archive) (기준 2026-09-22 03:00 UTC)
- 별 총합 = GitHub에서 마지막으로 확인한 값(stars_checked_at) + 그 뒤 GH Archive에서 관측한 증가. 24h·7d·30d 증가는 GH Archive 시간별 이벤트를 기준 시각(as_of)까지 합한 값. 우리 점수는 없습니다.

## 한눈에 보는 사실

- 라이선스: Apache-2.0 (허용적) — https://spdx.org/licenses/Apache-2.0.html
- 사용 범위: 상업 이용·수정·재배포 가능. 고지 유지, 바꾼 부분은 표시.
- 오픈소스: 예
- 언어: C
- 플랫폼: web
- 분류: 하드웨어 · 인프라
- 태그: ip-kvm · esp32-p4 · hdmi-capture · homelab · esp-idf · home-assistant
- 바로 쓰기: 직접 서버에
- 출처: GitHub https://github.com/espkvm/espkvm
- SELF-HOST: https://espkvm.io/

## 활동

- 마지막 커밋: 2026-09-21 20:07 UTC
- 최근 릴리스: v.0.52.3 (2026-09-21)
- 기여자: 4
- 열린 이슈 (PR 포함): 3
- 만든 이: 조직
- GitHub 확인 시각: 2026-09-22 00:38 UTC

## 선정 신호와 근거

- 과거 기록

## TESIGN TAKE

원격 데스크톱이 죽은 자리에서만 진가가 드러나는 도구인데, 그 자리를 40달러 부품과 브라우저 플래시로 채웠다 — 단, 공개 인터넷에 두지 말라는 저자의 경고는 문자 그대로 받아들여야 한다.

## 왜 볼 만한가

원격 데스크톱은 OS가 살아 있어야 하지만, 이 장치는 대상 PC의 HDMI 출력과 USB 포트에 물려 BIOS·부트 메뉴·OS가 없는 상태까지 브라우저로 보여 준다. ESP32-P4 보드와 Toshiba TC358743 HDMI-CSI 브리지(Geekworm C790)로 구성되며 홈페이지는 부품값을 약 $40으로 적는다. 1080p 실측은 Waveshare ESP32-P4-ETH에서 MJPEG 20fps, Function EV(rev 3.2)에서 H.264 22–24fps이고, 가상 미디어 부팅·Wake-on-LAN·ATX 전원 제어·Home Assistant(MQTT)·WireGuard/Tailscale까지 들어 있다. 브라우저에서 바로 플래시할 수 있고 최신 릴리스는 v0.48.0(2026-09-14).

## 이걸로 무엇을 만들 수 있나

- 홈랩 서버·미니PC 여러 대에 BMC 대용으로 달거나, 런북(화면에 'Press F2'가 뜨면 F2를 누르는 식의 매크로)과 크론 스케줄러를 엮어 BIOS 설정·부트 메뉴처럼 문자 화면에서 이뤄지는 작업과 야간 점검을 자동화할 수 있다.

## 누구에게 맞나

- 홈랩·미니PC 운영자 — BIOS 진입·OS 재설치를 원격으로
- Home Assistant 사용자 — MQTT 자동 발견으로 화면 스틸·전원 버튼·센서 연동
- ESP32-P4·HDMI 캡처를 다루는 임베디드 개발자 — TC358743 브링업과 CSI 레지스터 코드 참고

## 5분 안에 시작하기

```
# 1. Releases에서 보드용 espkvm-<version>-<board>-merged.bin 받기 (예: -p4-eth-, -funcev-)
# esptool --chip esp32p4 -b 921600 write-flash 0x0 espkvm-<version>-<board>-merged.bin
# # 또는 Chrome/Edge에서 https://espkvm.io/flash/ 로 바로 플래시
# 2. 이더넷, 대상 PC의 HDMI, 보드의 USB 2.0 OTG-HS 포트를 연결하고 https://espkvm.local/ 접속
# 3. admin / admin 으로 로그인 → 비밀번호를 바꿔야 다음으로 진행됨
```

## 주의할 점

- Apache-2.0; 저자가 H.264 자체는 라이선스와 무관하게 특허 부담이 있다고 명시
- 하드웨어 조건: PSRAM 32MB·플래시 16MB 이상의 ESP32-P4 보드 + TC358743 캡처 보드(Geekworm C790) — 홈페이지 기준 약 $40; 칩 리비전(3.0 미만/이상)에 따라 빌드가 다름
- 보안 검토를 거치지 않았으니 공개 인터넷 노출 금지(VPN 내장); HDMI 오디오 미구현; H.264·키보드·마우스는 장치 CA를 신뢰한 HTTPS에서만 동작

## 영수증

- TESIGN이 처음 본 시각: 2026-09-13 09:56 UTC
- 출처 등록: 2026-07-22 20:25 UTC
- 선정: 2026-09-14 19:27 UTC
- TESIGN 게재: 2026-09-14 19:27 UTC
- 소개 글 마지막 수정: 2026-09-15 04:36 UTC
- ◌ 과거 기록: 과거 데이터를 되짚어 채운 항목입니다. 라이브 발견이 아닙니다.

## 읽는 법

- 이 파일은 tesign.com 항목 페이지와 같은 빌드에서 같은 데이터로 만들어졌습니다. 소개 글은 편집자가 쓴 것이고, 숫자는 저장된 관측값입니다.
- JSON의 null은 관측하지 않았다는 뜻입니다 — 0이 아닙니다. 마크다운에서는 [확인 필요]로 적습니다.
- 별 총합 = GitHub에서 마지막으로 확인한 값(stars_checked_at) + 그 뒤 GH Archive에서 관측한 증가. 24h·7d·30d 증가는 GH Archive 시간별 이벤트를 기준 시각(as_of)까지 합한 값. 우리 점수는 없습니다.
- 과거 데이터를 되짚어 채운 항목입니다. 라이브 발견이 아닙니다.
- 요약이며 법적 조언이 아닙니다.

[대표 이미지] https://tesign.com/img/esp-kvm-d27aaf95fb.png
