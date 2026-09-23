# SparkyFitness

> 가족용 자가호스팅 건강 추적 — 영양·운동·수면·단식·기분·체성분을 한 앱에서 추적하는 자가호스팅 건강 트래커로, 데이터는 내가 띄운 서버에만 남습니다.

- 페이지: https://tesign.com/item/sparkyfitness/
- JSON: https://tesign.com/item/sparkyfitness/index.json
- 영어 마크다운: https://tesign.com/en/item/sparkyfitness/index.md
- 생성 시각: 2026-09-23 02:05 UTC

## 순위

- 데이터 분야 17위 (기준 2026-09-22 21:00 UTC)

## 숫자

- 별 6,096 — GitHub에서 2026-09-23 01:49 UTC 확인
- 7일 +13은 GH Archive 관측 (기준 2026-09-22 21:00 UTC)
- 별 총합 = GitHub에서 마지막으로 확인한 값(stars_checked_at) + 그 뒤 GH Archive에서 관측한 증가. 24h·7d·30d 증가는 GH Archive 시간별 이벤트를 기준 시각(as_of)까지 합한 값. 우리 점수는 없습니다.

## 한눈에 보는 사실

- 라이선스: 라이선스 미확인
- 사용 범위: 미확인 — 쓰기 전에 살펴보세요.
- 언어: TypeScript
- 플랫폼: web · ios · android
- 분류: 생산성 · 데이터
- 태그: self-hosted · health-tracker · nutrition · family · docker
- 바로 쓰기: 직접 서버에
- 출처: GitHub https://github.com/codewithcj/sparkyfitness
- SELF-HOST: https://codewithcj.github.io/SparkyFitness

## 활동

- 마지막 커밋: 2026-09-23 01:25 UTC
- 최근 릴리스: v1.7.2 (2026-09-21)
- 기여자: 141
- 열린 이슈 (PR 포함): 152
- 만든 이: 개인
- GitHub 확인 시각: 2026-09-23 01:49 UTC

## TESIGN TAKE

"오픈소스가 아니라 소스공개"라고 스스로 밝히면서도, 상업적 대안 여러 개의 구독료를 합친 것과 비교한 표까지 공개해 둔 점이 솔직합니다.

## 왜 볼 만한가

영양·운동·수면·생리주기·복약을 각각 다른 앱으로 추적하면 앱마다 구독료가 붙고, 그마저 하나로 모아 보는 화면이 없습니다. SparkyFitness는 이 전부를 자가호스팅 서버 하나로 모으고(도커 컴포즈로 직접 운영), 가족 여러 명이 권한을 나눠 쓸 수 있게 합니다. Apple Health·Fitbit·Garmin·Oura 등 8개 이상의 서비스와 연동해 걸음·운동·수면 같은 값을 자동으로 가져오고, 베타 단계의 대화형 AI(SparkyAI)로 음식 사진을 올려 식사를 기록할 수도 있습니다.

## 이걸로 무엇을 만들 수 있나

- 여러 건강 앱 구독을 하나의 자가호스팅 서버로 통합해서 가족과 함께 쓰기
- 웨어러블 데이터를 자동 동기화해서 영양·운동·수면을 한 화면에서 보기
- 베타 AI 챗봇으로 사진 한 장으로 식사 기록해 보기(아직 베타임에 유의)

## 누구에게 맞나

- 여러 건강 앱을 따로 쓰며 구독료를 여러 번 내는 사람
- 가족 단위로 건강 데이터를 한곳에서 관리하고 싶은 사람
- 자기 데이터를 클라우드에 맡기고 싶지 않은 사람

## 5분 안에 시작하기

```
# 자가호스팅(도커 필요):
$ mkdir sparkyfitness && cd sparkyfitness
$ curl -L -o docker-compose.yml https://github.com/CodeWithCJ/SparkyFitness/releases/latest/download/docker-compose.prod.yml
$ curl -L -o .env https://github.com/CodeWithCJ/SparkyFitness/releases/latest/download/default.env.example
$ docker compose pull && docker compose up -d
# → http://localhost:8080 접속
# 비기술 사용자는 PikaPods 같은 제3자 클라우드 호스팅도 가능
```

## 주의할 점

- 커스텀 비상업 라이선스입니다 — 소스는 공개되어 있지만 오픈소스는 아니고, 상업적 이용에는 저작자의 사전 허가가 필요합니다
- AI 챗봇·가족 공유·API 문서는 아직 베타로, 컨테이너 자동 업데이트는 권장하지 않습니다
- 비교표는 SparkyFitness 쪽에서 직접 작성한 것이라고 README가 밝힙니다

## 영수증

- TESIGN이 처음 본 시각: 2026-09-16 03:33 UTC
- 출처 등록: 2025-06-21 14:00 UTC
- 선정: 2026-09-17 01:24 UTC
- TESIGN 게재: 2026-09-17 01:24 UTC
- 소개 글 마지막 수정: 2026-09-17 01:26 UTC

## 읽는 법

- 이 파일은 tesign.com 항목 페이지와 같은 빌드에서 같은 데이터로 만들어졌습니다. 소개 글은 편집자가 쓴 것이고, 숫자는 저장된 관측값입니다.
- JSON의 null은 관측하지 않았다는 뜻입니다 — 0이 아닙니다. 마크다운에서는 [확인 필요]로 적습니다.
- 별 총합 = GitHub에서 마지막으로 확인한 값(stars_checked_at) + 그 뒤 GH Archive에서 관측한 증가. 24h·7d·30d 증가는 GH Archive 시간별 이벤트를 기준 시각(as_of)까지 합한 값. 우리 점수는 없습니다.
- 요약이며 법적 조언이 아닙니다.

[대표 이미지] https://tesign.com/img/og/sparkyfitness.png
