# Bento

> 발표자용 파일 하나 슬라이드 — 편집기·발표기·뷰어가 HTML 파일 하나에 든 파워포인트 대안. 받는 쪽은 브라우저만 있으면 됩니다.

- 페이지: https://tesign.com/item/bento/
- JSON: https://tesign.com/item/bento/index.json
- 영어 마크다운: https://tesign.com/en/item/bento/index.md
- 생성 시각: 2026-09-23 02:05 UTC

## 숫자

- 별 5,181 — GitHub에서 2026-09-23 01:49 UTC 확인
- 7일 +2은 GH Archive 관측 (기준 2026-09-22 21:00 UTC)
- 별 총합 = GitHub에서 마지막으로 확인한 값(stars_checked_at) + 그 뒤 GH Archive에서 관측한 증가. 24h·7d·30d 증가는 GH Archive 시간별 이벤트를 기준 시각(as_of)까지 합한 값. 우리 점수는 없습니다.

## 한눈에 보는 사실

- 라이선스: MIT (허용적) — https://spdx.org/licenses/MIT.html
- 사용 범위: 상업 이용·수정·재배포 가능. 저작권 고지는 유지.
- 오픈소스: 예
- 언어: TypeScript
- 플랫폼: web
- 분류: 생산성
- 태그: presentation · single-file · local-first · office · html · e2ee
- 바로 쓰기: 설치 없이 바로
- 출처: GitHub https://github.com/nyblnet/bento
- TRY: https://bento.page/

## 활동

- 마지막 커밋: 2026-09-20 20:55 UTC
- 최근 릴리스: v1.2.3 (2026-09-19)
- 기여자: 16
- 열린 이슈 (PR 포함): 45
- 만든 이: 개인
- GitHub 확인 시각: 2026-09-23 01:49 UTC

## 선정 신호와 근거

- 과거 기록

## TESIGN TAKE

핵심은 '파일이 곧 소프트웨어'라는 점입니다. 브라우저만 있으면 언제든 열립니다.

## 왜 볼 만한가

오피스 문서가 클라우드 구독과 로그인 뒤로 들어간 시대에 Bento는 반대 방향을 택했습니다. 덱·글꼴·이미지·차트·편집기가 한 개의 .bento.html 파일에 함께 담기고, 저장하면 파일이 자기 안의 데이터 블록을 스스로 다시 씁니다(File System Access API, 실패 시 다운로드). 문서 데이터가 파일 상단에 읽을 수 있는 JSON으로 놓여 있어 AI 에이전트나 다른 도구가 그대로 편집할 수 있습니다.

## 이걸로 무엇을 만들 수 있나

- 회사 템플릿을 담은 .bento.html 파일을 만들어 돌리기만 하면 설치 없이 편집·발표까지 되는 사내 슬라이드 배포 체계를 꾸릴 수 있습니다. 문서가 JSON이므로 데이터에서 슬라이드를 자동 생성하는 스크립트도 붙일 수 있습니다.

## 누구에게 맞나

- 발표 자료를 자주 주고받는 소규모 팀 — 상대가 프로그램을 깔지 않아도 되는 슬라이드 공유
- AI 에이전트로 문서를 만드는 개발자 — JSON 블록을 직접 고쳐 슬라이드 생성
- 클라우드 구독을 피하려는 개인 — 로컬 파일로만 남는 발표 자료

## 5분 안에 시작하기

```
# 1. 브라우저에서 https://bento.page/slides 열기 (앱 전체가 시작용 덱 위에서 실행됨)
# 2. 또는 파일 내려받기: https://bento.page/releases/slides/Bento_Slides.bento.html (README 기준 약 560 KB, 사이트 표기는 약 710 KB · 계정·설치 없음)
# 소스 빌드 (Node 20+):
# cd slides
# npm install
# npm run build:single   # → dist-single/Bento_Slides.bento.html (the product)
```

## 주의할 점

- 라이선스 MIT(번들된 reveal.js·Moveable·Selecto도 MIT, 글꼴은 OFL). 편집은 데스크톱 우선이며 휴대폰은 보기·발표 용도라고 README가 밝힙니다. 실시간 협업 중 되돌리기가 스냅샷 기반이라 같은 속성에 대한 동료의 동시 편집을 되돌릴 수 있는 알려진 한계가 있고, 동기화 릴레이는 선택 사항입니다. 비용 없음.

## 영수증

- TESIGN이 처음 본 시각: 2026-09-13 09:41 UTC
- 출처 등록: 2026-07-17 16:55 UTC
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

[대표 이미지] https://tesign.com/img/bento-3e4e146afc.png
