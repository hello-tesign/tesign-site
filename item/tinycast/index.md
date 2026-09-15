# Tinycast

> 맥 사용자용 가벼운 런처 — 핫키 하나로 앱·클립보드·계산기·창 관리를 부르는 100MB 미만의 네이티브 맥 런처. Raycast 확장도 실행

- 페이지: https://tesign.com/item/tinycast/
- JSON: https://tesign.com/item/tinycast/index.json
- 영어 마크다운: https://tesign.com/en/item/tinycast/index.md
- 생성 시각: 2026-09-15 19:35 UTC

## 순위

-  (기준 2026-09-15 15:00 UTC)

## 숫자

- 별 4,433 — GitHub에서 2026-09-15 19:35 UTC 확인
- 7일 +169은 GH Archive 관측 (기준 2026-09-15 15:00 UTC)
- 24h +130 ★ · 30d +232 ★ (기준 2026-09-15 15:00 UTC)
- 별 총합 = GitHub에서 마지막으로 확인한 값(stars_checked_at) + 그 뒤 GH Archive에서 관측한 증가. 24h·7d·30d 증가는 GH Archive 시간별 이벤트를 기준 시각(as_of)까지 합한 값. 우리 점수는 없습니다.

## 한눈에 보는 사실

- 라이선스: 라이선스 미확인
- 사용 범위: 미확인 — 쓰기 전에 살펴보세요.
- 언어: Swift
- 플랫폼: macos
- 분류: 생산성
- 태그: macos · launcher · swiftui · raycast · clipboard · hotkeys
- 바로 쓰기: 설치해서 쓰기
- 출처: GitHub https://github.com/abue-ammar/tinycast
- INSTALL: https://abue-ammar.github.io/tinycast

## 활동

- 마지막 커밋: 2026-09-15 19:22 UTC
- 최근 릴리스: v0.11.0-beta.95 (2026-09-14) · 프리릴리스
- 기여자: 39
- 열린 이슈 (PR 포함): 23
- 만든 이: 개인
- GitHub 확인 시각: 2026-09-15 19:35 UTC

## 선정 신호와 근거

- 상승 중 · +130 ★ / 24h
- 과거 기록

## TESIGN TAKE

Raycast 확장과 설정을 그대로 가져올 수 있어서, 갈아타기 비용이 거의 없는 무료 네이티브 런처다.

## 왜 볼 만한가

README가 내세우는 숫자는 셋이다: 서드파티 의존성 0, 텔레메트리 0, 메모리 100MB 미만. SwiftUI와 AppKit만으로 만들었고 Electron이 아니다. 이미 쓰던 Raycast 확장을 SwiftUI로 렌더링해 그대로 실행하고, Raycast 내보내기 파일(.rayconfig)에서 단축키·클립보드 기록·스니펫·퀵링크까지 불러오므로 옮겨오는 비용이 낮다. 34가지 창 배치, 클립보드 기록, 통화·암호화폐 환율 계산, 다음 회의 참여까지 팔레트 하나에 들어 있다.

## 이걸로 무엇을 만들 수 있나

- 퀵링크·스니펫·커스텀 셸 명령으로 자기 업무용 명령 팔레트를 짤 수 있고, 회사 내부 URL이나 배포 스크립트를 글로벌 핫키 하나에 묶을 수 있다.

## 누구에게 맞나

- Raycast 사용자 — 확장·설정을 가져와 네이티브 앱으로 이전
- 메모리에 민감한 Mac 사용자 — Electron 런처 대신 100MB 미만 팔레트
- 키보드 중심 작업자 — 앱별 핫키, 34가지 창 배치, 스니펫 확장

## 5분 안에 시작하기

```
# brew trust --tap abue-ammar/tinycast   # required for third-party taps
# brew tap abue-ammar/tinycast
# brew install --cask tinycast            # Apple silicon, macOS 26 or newer
# brew install --cask tinycast-universal  # Intel, macOS 26
# 그다음 Settings → General에서 글로벌 단축키를 등록하고, 아무 곳에서나 눌러 팔레트를 띄운다.
```

## 주의할 점

- 라이선스 AGPL-3.0(README 배지와 LICENSE 파일 기준; GitHub 메타데이터에는 미표기). macOS 26 이상, Apple silicon·Intel. macOS 15 Sequoia용 캐스크는 더 이상 유지되지 않음. 자체 서명 앱이라 DMG로 받으면 quarantine 해제 명령이 한 번 필요. 붙여넣기·스니펫 확장은 손쉬운 사용(Accessibility) 권한 필요. 무료, 후원은 Polar 링크로 선택.

## 영수증

- TESIGN이 처음 본 시각: 2026-09-13 09:39 UTC
- 출처 등록: 2026-06-29 15:18 UTC
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

[대표 이미지] https://tesign.com/img/tinycast-8c67ac65bb.png
