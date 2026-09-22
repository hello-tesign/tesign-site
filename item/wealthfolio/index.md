# Wealthfolio

> 로컬 우선 자산관리 앱 — 투자·순자산·소비를 내 기기에만 저장해서 추적하는 오픈소스 자산관리 앱으로, 클라우드 계정이 필요 없습니다.

- 페이지: https://tesign.com/item/wealthfolio/
- JSON: https://tesign.com/item/wealthfolio/index.json
- 영어 마크다운: https://tesign.com/en/item/wealthfolio/index.md
- 생성 시각: 2026-09-22 07:26 UTC

## 순위

- 데이터 분야 14위 · 금융 분야 6위 (기준 2026-09-22 03:00 UTC)

## 숫자

- 별 9,018 — GitHub에서 2026-09-22 00:39 UTC 확인
- 7일 +13은 GH Archive 관측 (기준 2026-09-22 03:00 UTC)
- 별 총합 = GitHub에서 마지막으로 확인한 값(stars_checked_at) + 그 뒤 GH Archive에서 관측한 증가. 24h·7d·30d 증가는 GH Archive 시간별 이벤트를 기준 시각(as_of)까지 합한 값. 우리 점수는 없습니다.

## 한눈에 보는 사실

- 라이선스: AGPL-3.0 (카피레프트) — https://spdx.org/licenses/AGPL-3.0.html
- 사용 범위: 사용·수정은 자유. 배포는 물론 네트워크 서비스로 제공해도 소스 공개.
- 오픈소스: 예
- 언어: Rust
- 플랫폼: macos · windows · linux · ios · web
- 분류: 금융 · 데이터
- 태그: personal-finance · portfolio-tracker · local-first · open-source · self-hosted
- 바로 쓰기: 설치해서 쓰기
- 출처: GitHub https://github.com/wealthfolio/wealthfolio
- INSTALL: https://wealthfolio.app/

## 활동

- 마지막 커밋: 2026-09-21 20:52 UTC
- 최근 릴리스: v3.8.0 (2026-09-07)
- 기여자: 73
- 열린 이슈 (PR 포함): 461
- 만든 이: 조직
- GitHub 확인 시각: 2026-09-22 00:39 UTC

## TESIGN TAKE

계좌 연동이라는 진짜 비용이 드는 부분만 유료로 떼어 놓고, 핵심 추적 기능은 계정 없이 영구 무료로 두는 구조가 솔직합니다.

## 왜 볼 만한가

대부분의 자산관리 앱은 계좌 정보를 클라우드 서버에 맡겨야 합니다. Wealthfolio는 반대로, 모든 데이터를 기기 안에 저장하는 데스크톱·모바일 앱입니다. 여러 계좌와 자산군의 투자 내역을 CSV로 불러와 시간·금액가중 수익률, 배분·리스크, 배당 흐름 같은 지표를 계산해 보여줍니다. 계좌 자동 연동(30개 이상 증권사, 읽기 전용)과 암호화된 다중기기 동기화는 "Wealthfolio Connect"라는 별도 유료 구독으로 제공되지만, 수동 입력과 CSV 가져오기를 쓰는 핵심 기능은 영구히 무료입니다.

## 이걸로 무엇을 만들 수 있나

- 여러 계좌에 흩어진 투자를 CSV로 모아 한 화면에서 순자산·수익률 보기
- 배당·이자 흐름을 시간순으로 추적해서 현금흐름 계획 세우기
- 애드온 SDK(타입스크립트)로 내 계좌 구성에 맞는 화면·기능을 직접 만들기

## 누구에게 맞나

- 여러 증권사·계좌에 투자를 흩어둔 사람 — 한 곳에서 순자산을 보고 싶을 때
- 투자 데이터를 클라우드에 맡기고 싶지 않은 사람
- 개발자 — 애드온으로 자기만의 화면을 붙이고 싶을 때

## 5분 안에 시작하기

```
# 설치: https://wealthfolio.app/download 에서 macOS·Windows·Linux용 내려받기 (iOS 앱, Docker 자가호스팅도 가능)
# 소스에서 빌드(Node·pnpm·Rust·Tauri 필요):
$ git clone https://github.com/wealthfolio/wealthfolio.git
$ pnpm install
$ cp .env.example .env
```

## 주의할 점

- AGPL-3.0 · 계좌 자동 연동·암호화 동기화는 "Wealthfolio Connect" 유료 구독이 따로 필요합니다
- macOS 12는 시스템·Safari를 최신으로 유지해야 동작합니다(WKWebView가 Safari 16 기준을 맞춰야 함)

## 영수증

- TESIGN이 처음 본 시각: 2026-09-16 03:33 UTC
- 출처 등록: 2024-05-27 14:44 UTC
- 선정: 2026-09-17 01:24 UTC
- TESIGN 게재: 2026-09-17 01:24 UTC
- 소개 글 마지막 수정: 2026-09-17 01:26 UTC

## 읽는 법

- 이 파일은 tesign.com 항목 페이지와 같은 빌드에서 같은 데이터로 만들어졌습니다. 소개 글은 편집자가 쓴 것이고, 숫자는 저장된 관측값입니다.
- JSON의 null은 관측하지 않았다는 뜻입니다 — 0이 아닙니다. 마크다운에서는 [확인 필요]로 적습니다.
- 별 총합 = GitHub에서 마지막으로 확인한 값(stars_checked_at) + 그 뒤 GH Archive에서 관측한 증가. 24h·7d·30d 증가는 GH Archive 시간별 이벤트를 기준 시각(as_of)까지 합한 값. 우리 점수는 없습니다.
- 요약이며 법적 조언이 아닙니다.

[대표 이미지] https://tesign.com/img/wealthfolio-7287e60bd3.webp
