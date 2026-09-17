# Capptivo

> 제품 데모용 화면 녹화 — 커서를 따라가는 줌과 기기 내 자막을 갖춘 무료 오픈소스 화면 녹화기 — 제품 데모를 만드는 사람용(맥·윈도·리눅스)

- 페이지: https://tesign.com/item/capptivo/
- JSON: https://tesign.com/item/capptivo/index.json
- 영어 마크다운: https://tesign.com/en/item/capptivo/index.md
- 생성 시각: 2026-09-17 01:30 UTC

## 숫자

- 별 995 — GitHub에서 2026-09-15 19:34 UTC 확인
- 7일 +2은 GH Archive 관측 (기준 2026-09-16 21:00 UTC)
- 별 총합 = GitHub에서 마지막으로 확인한 값(stars_checked_at) + 그 뒤 GH Archive에서 관측한 증가. 24h·7d·30d 증가는 GH Archive 시간별 이벤트를 기준 시각(as_of)까지 합한 값. 우리 점수는 없습니다.

## 한눈에 보는 사실

- 라이선스: MIT (허용적) — https://spdx.org/licenses/MIT.html
- 사용 범위: 상업 이용·수정·재배포 가능. 저작권 고지는 유지.
- 오픈소스: 예
- 언어: TypeScript
- 플랫폼: macos · windows · linux
- 분류: 미디어
- 태그: screen-recording · tauri · rust · whisper · demo-video · cursor-zoom
- 바로 쓰기: 설치해서 쓰기
- 출처: GitHub https://github.com/sechak-ag/capptivo
- INSTALL: https://capptivo.com/

## 활동

- 마지막 커밋: 2026-08-24 15:41 UTC
- 최근 릴리스: v1.0.3 (2026-08-05)
- 기여자: 6
- 열린 이슈 (PR 포함): 32
- 만든 이: 조직
- GitHub 확인 시각: 2026-09-15 19:34 UTC

## 선정 신호와 근거

- 과거 기록

## TESIGN TAKE

월 구독 대신 로컬에서 같은 종류의 데모 영상을 만들 수 있고, 그 대신 서명 안 된 맥 빌드와 whisper-cli 직접 설치라는 손품을 감수하는 도구다.

## 왜 볼 만한가

Screen Studio·Cursorful 대안으로, 커서를 따라 화면이 확대되는 데모 영상을 README가 말하는 "월 $29" 없이 만들 수 있다. 녹화 중 60Hz로 커서·클릭 궤적을 따로 저장(cursor.json)해 두고, 새 녹화를 열면 클릭 위치에서 줌 구간을 자동 제안한다. 자막은 whisper.cpp로 기기 안에서 생성되고, UI는 한국어를 포함한 11개 언어를 지원한다(v1.0.3, 2026-08-05 릴리스).

## 이걸로 무엇을 만들 수 있나

- MIT라 회사 내부 데모 녹화 도구로 프리셋·배경을 바꿔 배포하거나, Tauri 없이 설계된 Rust 캡처·인코딩 모듈(recorder/, cursor/)만 떼어 자체 녹화 앱에 넣을 수 있다.

## 누구에게 맞나

- 제품 데모·튜토리얼을 만드는 1인 개발자 — 클릭 기반 자동 줌으로 편집 시간 단축
- 한국어 등 11개 언어 UI가 필요한 팀 — 자막까지 기기 안에서 처리
- 녹화 앱을 만들려는 Rust/Tauri 개발자 — 캡처 → 인코딩 파이프라인 참고

## 5분 안에 시작하기

```
# 1. GitHub Releases에서 설치 파일 받기 (macOS .dmg / Windows .msi 또는 *-setup.exe / Linux .deb·.AppImage·.rpm)
# # 소스로 실행할 때 (Rust·Node·pnpm 필요):
# pnpm install
# pnpm tauri dev
# # 녹화 시작: ⌥⇧R (Windows/Linux는 Alt+Shift+R) 또는 트레이 아이콘
```

## 주의할 점

- MIT — 단, 함께 내려받는 FFmpeg 사이드카는 GPL이라 빌드를 재배포하면 별도 조건이 따름(THIRD_PARTY_NOTICES.md 참고)
- macOS 13+, Windows 10 1903+, Linux는 PipeWire 1.0+; 맥 빌드는 현재 서명되지 않아 첫 실행 시 우클릭 → 열기와 화면 녹화 권한 허용 필요
- 자막은 시스템에 whisper.cpp의 whisper-cli가 설치돼 있어야 하고, 리눅스는 영역 선택 녹화가 아직 없음

## 영수증

- TESIGN이 처음 본 시각: 2026-09-13 09:14 UTC
- 출처 등록: 2026-07-28 18:27 UTC
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

[대표 이미지] https://tesign.com/img/capptivo-e2f0abf7aa.webp
