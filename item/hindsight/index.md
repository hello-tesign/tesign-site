# Hindsight

> 유튜브 시청자용 발언 지도 — 유튜브 108개 채널 49,411편의 자막을 기억하고 그중 2만 2천여 편을 주제 지도로 펼쳐 같은 이슈에 대한 발언이 어떻게 바뀌었는지 따라갑니다.

- 페이지: https://tesign.com/item/hindsight/
- JSON: https://tesign.com/item/hindsight/index.json
- 영어 마크다운: https://tesign.com/en/item/hindsight/index.md
- 생성 시각: 2026-09-18 21:08 UTC

## 숫자

- 별 0 — GitHub에서 2026-09-17 18:40 UTC 확인
- 7일 별 증가 관측 없음 (GH Archive) (기준 2026-09-18 15:00 UTC)
- Show HN 1점 — 2026-09-18 00:55 UTC 관측
- 별 총합 = GitHub에서 마지막으로 확인한 값(stars_checked_at) + 그 뒤 GH Archive에서 관측한 증가. 24h·7d·30d 증가는 GH Archive 시간별 이벤트를 기준 시각(as_of)까지 합한 값. 우리 점수는 없습니다.

## 한눈에 보는 사실

- 라이선스: MIT (허용적) — https://spdx.org/licenses/MIT.html
- 사용 범위: 상업 이용·수정·재배포 가능. 저작권 고지는 유지.
- 오픈소스: 예
- 언어: JavaScript
- 플랫폼: web · cli
- 분류: AI · 미디어
- 태그: youtube · transcripts · narrative-map · topic-clusters · agents
- 바로 쓰기: 설치 없이 바로
- 출처: Show HN https://github.com/brishtiteveja/hindsight
- TRY: https://dev.perspectivity.co/hindsight

## 활동

- 마지막 커밋: 2026-09-13 05:57 UTC
- 최근 릴리스: 릴리스 없음
- 기여자: 1
- 열린 이슈 (PR 포함): 0
- 만든 이: 개인
- GitHub 확인 시각: 2026-09-17 18:40 UTC

## 선정 신호와 근거

- 신규 · 생성 2h 만에 포착

## TESIGN TAKE

영상을 한 편씩 보는 대신 채널 전체를 하나의 기억으로 다루는 발상이라, 논쟁을 오래 지켜본 시청자에게 특히 맞습니다.

## 왜 볼 만한가

유튜버가 같은 이슈를 몇 달 뒤 다시 다루면 예시도 어조도 달라지는데, 예전 발언을 찾으려면 몇 시간짜리 영상을 뒤져야 합니다. Hindsight는 108개 채널, 49,411편의 자막을 미리 기억해 두고 그중 22,904편을 점 하나씩 찍은 주제 지도(Issue Galaxy)로 보여 줍니다(라이브 사이트 기준). 군집을 누르면 Galaxy에서 영상을 하나씩 살펴볼 수 있고, 이야기 흐름에서 발언 뒤의 자막을 열어 볼 수 있으며, 같은 화면의 에이전트에게 '이 세 시점을 비교해 달라'고 물을 수 있습니다.

## 이걸로 무엇을 만들 수 있나

- 즐겨 보는 채널이 특정 이슈를 어떻게 다뤄 왔는지 날짜순으로 정리한 노트
- 유튜브 링크를 붙여 넣어 자막을 기억시킨 뒤 내용을 묻는 조사 세션
- 창작자라면 새 대본을 올리기 전에 예전 발언과 충돌하는지 확인하는 사전 점검(Pre-flight)

## 누구에게 맞나

- 시사·기술 유튜브 애독자 — 좋아하는 채널의 입장 변화를 자막으로 확인할 때
- 기자·리서처 — 특정 인물이 한 이슈에 대해 실제로 무엇을 말했는지 찾을 때
- 유튜브 창작자 — 새 대본이 예전 발언과 어긋나지 않는지 미리 점검할 때

## 5분 안에 시작하기

```
# 바로 쓰기: https://dev.perspectivity.co/hindsight/ 를 엽니다 → 검색창에 주제·채널·유튜브 링크를 넣거나 'Follow a story'를 선택
# 내 PC에서 실행(Python 3.11+ · uv 필요):
$ git clone https://github.com/brishtiteveja/hindsight.git
$ cd hindsight
$ uv sync
$ cp .env.example .env
$ uv run hindsight ingest samples/demo-channel --channel "Demo Channel"
$ uv run hindsight analyze --channel "Demo Channel"
$ uv run hindsight index --channel "Demo Channel"
$ uv run hindsight serve
# → http://localhost:8300/ 을 엽니다
```

## 주의할 점

- 코드는 MIT · 영상과 자막은 원 저작자의 것이며 이 저장소가 재라이선스하지 않는다고 명시
- 라이브 사이트는 키 없이 열리지만, 내 PC에서 분석·검색·에이전트를 쓰려면 OpenRouter와 Gemini API 키가 필요합니다(자막 수집과 서버 실행은 키 없이 가능)
- 에이전트 부분은 해커톤(AI Tinkerers × OpenAI) 작업이고 자막 자료·분석 엔진·Galaxy는 Perspectivity의 기존 작업입니다 · 전체는 색인된 자료 위의 프로토타입이며 전체 자막 자료는 저장소에 포함되지 않습니다
- 주제·입장 라벨은 모델이 만든 탐색 보조이고 발언자 표기·타임스탬프가 틀릴 수 있어 원본 확인이 필요하다고 README가 밝힙니다

## 영수증

- TESIGN이 처음 본 시각: 2026-09-13 07:43 UTC
- 출처 등록: 2026-09-13 05:27 UTC
- 선정: 2026-09-15 14:07 UTC
- TESIGN 게재: 2026-09-15 14:07 UTC
- 소개 글 마지막 수정: 2026-09-15 14:07 UTC

## 읽는 법

- 이 파일은 tesign.com 항목 페이지와 같은 빌드에서 같은 데이터로 만들어졌습니다. 소개 글은 편집자가 쓴 것이고, 숫자는 저장된 관측값입니다.
- JSON의 null은 관측하지 않았다는 뜻입니다 — 0이 아닙니다. 마크다운에서는 [확인 필요]로 적습니다.
- 별 총합 = GitHub에서 마지막으로 확인한 값(stars_checked_at) + 그 뒤 GH Archive에서 관측한 증가. 24h·7d·30d 증가는 GH Archive 시간별 이벤트를 기준 시각(as_of)까지 합한 값. 우리 점수는 없습니다.
- 요약이며 법적 조언이 아닙니다.

[대표 이미지] https://tesign.com/img/hindsight-69a568861b.png
