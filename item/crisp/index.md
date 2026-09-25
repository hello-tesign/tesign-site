# Crisp

> 맥 외장 모니터 설정 — macOS 외장 모니터의 선명한 HiDPI 배율, DDC 밝기·볼륨, 프리셋을 메뉴 막대에서 다루는 무료 앱.

- 페이지: https://tesign.com/item/crisp/
- JSON: https://tesign.com/item/crisp/index.json
- 영어 마크다운: https://tesign.com/en/item/crisp/index.md
- 생성 시각: 2026-09-25 03:06 UTC

## 숫자

- 별 1,887 — GitHub에서 2026-09-25 02:59 UTC 확인
- 7일 별 증가 관측 없음 (GH Archive) (기준 2026-09-23 20:00 UTC)
- Show HN 4점 — 2026-09-13 14:56 UTC 관측
- 별 총합 = GitHub에서 마지막으로 확인한 값(stars_checked_at) + 그 뒤 GH Archive에서 관측한 증가. 24h·7d·30d 증가는 GH Archive 시간별 이벤트를 기준 시각(as_of)까지 합한 값. 우리 점수는 없습니다.

## 한눈에 보는 사실

- 라이선스: MIT (허용적) — https://spdx.org/licenses/MIT.html
- 사용 범위: 상업 이용·수정·재배포 가능. 저작권 고지는 유지.
- 오픈소스: 예
- 언어: Swift
- 플랫폼: macos · cli
- 분류: 생산성
- 태그: macos · menu-bar · external-monitor · hidpi · ddc · swift
- 바로 쓰기: 설치해서 쓰기
- 출처: Show HN https://github.com/didriksg/Crisp
- INSTALL: https://crispmac.app/

## 활동

- 마지막 커밋: 2026-09-24 10:38 UTC
- 최근 릴리스: v1.6.0 (2026-09-08)
- 기여자: 14
- 열린 이슈 (PR 포함): 8
- 만든 이: 개인
- GitHub 확인 시각: 2026-09-25 02:59 UTC

## 선정 신호와 근거

- 과거 기록

## TESIGN TAKE

BetterDisplay를 사게 만든 그 기능들이 여기서는 기본입니다.

## 왜 볼 만한가

macOS는 애플 디스플레이가 아닌 모니터에서 글자를 흐리거나 작게 그리고 밝기 키를 죽여 두는데, 그 공백을 메워 주던 BetterDisplay·Lunar는 핵심 기능이 유료입니다. Crisp는 HiDPI 배율(1440p 이상은 자동, 패널 최대 주사율 유지), DDC 하드웨어 밝기·볼륨, HDR 여유분을 쓰는 Extra Brightness, 프리셋, 가상 디스플레이를 Pro 등급 없이 전부 무료로 제공합니다. 모든 릴리스는 Apple 서명·공증이 되어 있고, `crispctl` 명령줄 도구로 스크립트나 단축어에서도 같은 제어가 가능합니다.

## 이걸로 무엇을 만들 수 있나

- `crispctl display toggle`로 KVM 책상에서 버튼 하나로 모니터를 끊고 붙이는 자동화나, 시간대별로 밝기·HDR을 바꾸는 셸 스크립트·Apple 단축어를 만들 수 있습니다.

## 누구에게 맞나

- 외장 4K·1440p 모니터를 쓰는 Mac 사용자 — 흐린 글자를 HiDPI로 선명하게
- 여러 디스플레이 구성을 오가며 일하는 사람 — 해상도·밝기·배치를 프리셋으로 한 번에 전환
- 책상 자동화를 하는 개발자 — crispctl로 밝기·연결·HDR을 스크립트 제어

## 5분 안에 시작하기

```
# brew install --cask crisp
# # 또는 Crisp.dmg 내려받아 Applications로 드래그: https://github.com/didriksg/Crisp/releases/latest/download/Crisp.dmg
# 소스 빌드:
# brew install xcodegen
# xcodegen generate   # generates Crisp.xcodeproj from project.yml
```

## 주의할 점

- 라이선스 MIT(FreeDisplay 포크에서 출발, 해당 부분도 MIT). macOS 14 Sonoma 이상 전용이며 디스플레이 끊기/재연결은 Apple Silicon에서만 됩니다. 스무스 스케일링을 켤 때 모니터마다 한 번 관리자 암호가 필요하고, 밝기 키 기능은 손쉬운 사용(Accessibility) 권한이 필요합니다. 비용 없음. 개발자는 연 $99 Apple 개발자 프로그램 비용을 후원으로 받습니다.

## 영수증

- TESIGN이 처음 본 시각: 2026-09-13 14:56 UTC
- 출처 등록: 2026-07-24 16:05 UTC
- 선정: 2026-09-14 19:27 UTC
- TESIGN 게재: 2026-09-14 19:27 UTC
- 소개 글 마지막 수정: 2026-09-15 07:17 UTC
- ◌ 과거 기록: 과거 데이터를 되짚어 채운 항목입니다. 라이브 발견이 아닙니다.

## 읽는 법

- 이 파일은 tesign.com 항목 페이지와 같은 빌드에서 같은 데이터로 만들어졌습니다. 소개 글은 편집자가 쓴 것이고, 숫자는 저장된 관측값입니다.
- JSON의 null은 관측하지 않았다는 뜻입니다 — 0이 아닙니다. 마크다운에서는 [확인 필요]로 적습니다.
- 별 총합 = GitHub에서 마지막으로 확인한 값(stars_checked_at) + 그 뒤 GH Archive에서 관측한 증가. 24h·7d·30d 증가는 GH Archive 시간별 이벤트를 기준 시각(as_of)까지 합한 값. 우리 점수는 없습니다.
- 과거 데이터를 되짚어 채운 항목입니다. 라이브 발견이 아닙니다.
- 요약이며 법적 조언이 아닙니다.

[대표 이미지] https://tesign.com/img/crisp-2d184b1a82.png
