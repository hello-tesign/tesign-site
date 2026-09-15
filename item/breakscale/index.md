# Breakscale

> 학습자용 시스템 설계 실험 — 부품을 놓고 트래픽 슬라이더를 올리면 큐·지연·재시도 폭풍이 실제 시뮬레이션으로 무너지는 브라우저 시스템 설계 학습 도구

- 페이지: https://tesign.com/item/breakscale/
- JSON: https://tesign.com/item/breakscale/index.json
- 영어 마크다운: https://tesign.com/en/item/breakscale/index.md
- 생성 시각: 2026-09-15 19:35 UTC

## 순위

- 교육 분야 6위 (기준 2026-09-15 15:00 UTC)

## 숫자

- 별 1,156 — GitHub에서 2026-09-15 19:35 UTC 확인
- 7일 별 증가 관측 없음 (GH Archive) (기준 2026-09-15 15:00 UTC)
- 별 총합 = GitHub에서 마지막으로 확인한 값(stars_checked_at) + 그 뒤 GH Archive에서 관측한 증가. 24h·7d·30d 증가는 GH Archive 시간별 이벤트를 기준 시각(as_of)까지 합한 값. 우리 점수는 없습니다.

## 한눈에 보는 사실

- 라이선스: MIT (허용적) — https://spdx.org/licenses/MIT.html
- 사용 범위: 상업 이용·수정·재배포 가능. 저작권 고지는 유지.
- 오픈소스: 예
- 언어: TypeScript
- 플랫폼: web
- 분류: 교육 · 개발 도구
- 태그: system-design · distributed-systems · simulator · education · queueing-theory · react
- 바로 쓰기: 설치 없이 바로
- 출처: GitHub https://github.com/xevrion/breakscale
- TRY: https://breakscale.tech/

## 활동

- 마지막 커밋: 2026-09-14 23:10 UTC
- 최근 릴리스: 릴리스 없음
- 기여자: 14
- 열린 이슈 (PR 포함): 14
- 만든 이: 개인
- GitHub 확인 시각: 2026-09-15 19:35 UTC

## 선정 신호와 근거

- 과거 기록

## TESIGN TAKE

'캐시를 넣으라'는 격언 대신, 왜 넣어야 하는지를 눈앞에서 무너지는 숫자로 보여 주는 교육 도구입니다.

## 왜 볼 만한가

시스템 설계 공부는 대개 정적인 도식과 '캐시를 넣어라' 같은 격언에 그쳐, 사용률 80%를 넘으면 p99 지연이 왜 절벽처럼 치솟는지 감이 잡히지 않습니다. Breakscale은 유한한 서버 슬롯, 감마 분포 서비스 시간, 실측 백분위를 가진 이산 사건 시뮬레이터를 브라우저에서 돌려, README 설명에 따르면 Retry Storm 예제에서 초당 100 요청이 재시도로 348건이 되어 DB가 99.9% 바쁜데 성공 처리량은 0인 장면을 보여 줍니다. 33개 부품과 23개 예제(교육용 16 + Netflix·Spotify·Discord 등 실제 아키텍처 재구성 7)가 들어 있습니다.

## 이걸로 무엇을 만들 수 있나

- 엔진(src/sim)은 React·DOM 의존이 없어 스크립트에서 Engine을 직접 돌려 교육 자료나 용량 계획 사고 실험을 자동화할 수 있고, 새 부품·예제를 추가해 자기 회사 구조를 시뮬레이션할 수 있습니다.

## 누구에게 맞나

- 백엔드 취업 준비생 — 시스템 설계 면접 예제를 직접 부하 실험
- 주니어 교육 담당자 — 재시도 폭풍·서킷 브레이커·샤딩을 시연
- 서비스 운영자 — 장애 상황을 재현하는 사고 실험

## 5분 안에 시작하기

```
# # 설치 없이: https://breakscale.tech
# git clone https://github.com/xevrion/breakscale.git
# cd breakscale
# bun install
# bun dev   # http://localhost:5173
```

## 주의할 점

- 라이선스 MIT(번들된 Caveat 글꼴은 SIL OFL 1.1 별도). 브라우저에서만 실행되며 계정·텔레메트리가 없고, 설계는 공유 링크를 만들지 않는 한 내 기기에 남습니다.
- 로컬 실행에는 Bun이 필요합니다. 실제 회사 아키텍처 7종은 공개 자료로 재구성한 교육용 도식이며 내부 정보가 아니라고 README가 명시합니다.
- Workers IO(YC F26)가 타이틀 스폰서로 표기되어 있습니다.

## 영수증

- TESIGN이 처음 본 시각: 2026-09-13 09:39 UTC
- 출처 등록: 2026-08-23 06:21 UTC
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

[대표 이미지] https://tesign.com/img/breakscale-3ba86788af.png
