# pokertools-arena

> AI 포커 시험대 — OpenAI 호환 모델 여럿을 같은 포커 판에 앉혀 놓고 결정을 하나하나 지켜보는 브라우저 벤치마크.

- 페이지: https://tesign.com/item/pokertools-arena/
- JSON: https://tesign.com/item/pokertools-arena/index.json
- 영어 마크다운: https://tesign.com/en/item/pokertools-arena/index.md
- 생성 시각: 2026-09-23 02:05 UTC

## 숫자

- 별 2 — GitHub에서 2026-09-23 01:47 UTC 확인
- 7일 별 증가 관측 없음 (GH Archive) (기준 2026-09-22 21:00 UTC)
- Show HN 3점 — 2026-09-22 14:32 UTC 관측
- 별 총합 = GitHub에서 마지막으로 확인한 값(stars_checked_at) + 그 뒤 GH Archive에서 관측한 증가. 24h·7d·30d 증가는 GH Archive 시간별 이벤트를 기준 시각(as_of)까지 합한 값. 우리 점수는 없습니다.

## 한눈에 보는 사실

- 라이선스: MIT (허용적) — https://spdx.org/licenses/MIT.html
- 사용 범위: 상업 이용·수정·재배포 가능. 저작권 고지는 유지.
- 오픈소스: 예
- 언어: JavaScript
- 플랫폼: web
- 분류: AI · 게임
- 태그: ai 벤치마크 · 포커 · 브라우저 · llm 평가
- 바로 쓰기: 설치 없이 바로
- 출처: Show HN https://github.com/pokertools-arena/pokertools-arena.github.io
- TRY: https://pokertools-arena.github.io/

## 활동

- 마지막 커밋: 2026-09-21 14:58 UTC
- 최근 릴리스: v0.18.1 (2026-09-21)
- 기여자: 1
- 열린 이슈 (PR 포함): 0
- 만든 이: 조직
- GitHub 확인 시각: 2026-09-23 01:47 UTC

## 선정 신호와 근거

- 신규 · 생성 0h 만에 포착

## TESIGN TAKE

질문지가 아니라 서로 겨루는 판을 벤치마크로 쓴다는 발상이 다른 평가 도구와 다르다. 결과를 눈으로 지켜볼 수 있다는 점도 크다.

## 왜 볼 만한가

언어 모델 벤치마크는 대개 고정된 문제집이라 답을 외운 건지 실제로 판단한 건지 가리기 어렵다. 포커는 상대가 있고 정보가 가려져 있으며 판마다 상황이 달라, 나쁜 추론이 곧바로 드러난다. pokertools-arena는 이 구조를 그대로 벤치마크로 만들어 모델끼리 겨루게 한다.

## 이걸로 무엇을 만들 수 있나

- 포커 규칙·패 가림·합법 수는 PokerTools 엔진이 만들고, 각 모델이 고른 수는 엔진이 다시 검증한 뒤에만 반영된다. 서버·데이터베이스가 없는 완전한 클라이언트 앱으로, npx pokertools-arena로 실행하거나 빌드해서 HTML 파일 하나로 열 수 있다. 결정 로그를 내보내고 리플레이 이미지도 저장한다.

## 누구에게 맞나

- 여러 모델의 실전 판단력을 비교하려는 개발자, AI 벤치마크를 만드는 사람.

## 5분 안에 시작하기

```
# npx pokertools-arena로 로컬 서버를 띄우고 자리에 모델을 앉힌다.
```

## 주의할 점

- Node.js 24 이상과 OpenAI 호환 API가 있어야 하고, 실제 모델을 부르는 만큼 API 사용료가 그대로 든다. 아직 초기 단계(별 1개)다.

## 영수증

- TESIGN이 처음 본 시각: 2026-09-21 15:07 UTC
- 출처 등록: 2026-09-21 15:00 UTC
- 선정: 2026-09-22 05:53 UTC
- TESIGN 게재: 2026-09-22 05:53 UTC
- 소개 글 마지막 수정: 2026-09-22 05:53 UTC

## 읽는 법

- 이 파일은 tesign.com 항목 페이지와 같은 빌드에서 같은 데이터로 만들어졌습니다. 소개 글은 편집자가 쓴 것이고, 숫자는 저장된 관측값입니다.
- JSON의 null은 관측하지 않았다는 뜻입니다 — 0이 아닙니다. 마크다운에서는 [확인 필요]로 적습니다.
- 별 총합 = GitHub에서 마지막으로 확인한 값(stars_checked_at) + 그 뒤 GH Archive에서 관측한 증가. 24h·7d·30d 증가는 GH Archive 시간별 이벤트를 기준 시각(as_of)까지 합한 값. 우리 점수는 없습니다.
- 요약이며 법적 조언이 아닙니다.

[대표 이미지] https://tesign.com/img/pokertools-arena-4e5941629f.png
