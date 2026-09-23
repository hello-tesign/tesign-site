# Amagine3D

> 하드웨어 제작자용 외장 설계 — 제품 설명과 치수에서 3D 프린터로 뽑을 수 있는 하드웨어 외장 설계를 만듭니다.

- 페이지: https://tesign.com/item/amagine3d/
- JSON: https://tesign.com/item/amagine3d/index.json
- 영어 마크다운: https://tesign.com/en/item/amagine3d/index.md
- 생성 시각: 2026-09-23 04:12 UTC

## 숫자

- 별 6,220 — GitHub에서 2026-09-23 01:48 UTC 확인
- 7일 +20은 GH Archive 관측 (기준 2026-09-22 23:00 UTC)
- 별 총합 = GitHub에서 마지막으로 확인한 값(stars_checked_at) + 그 뒤 GH Archive에서 관측한 증가. 24h·7d·30d 증가는 GH Archive 시간별 이벤트를 기준 시각(as_of)까지 합한 값. 우리 점수는 없습니다.

## 한눈에 보는 사실

- 라이선스: Apache-2.0 (허용적) — https://spdx.org/licenses/Apache-2.0.html
- 사용 범위: 상업 이용·수정·재배포 가능. 고지 유지, 바꾼 부분은 표시.
- 오픈소스: 예
- 언어: Python
- 플랫폼: web
- 분류: 하드웨어 · 디자인
- 태그: cad · 3d-printing · hardware · agents
- 바로 쓰기: 설치해서 쓰기
- 출처: GitHub https://github.com/amagine-ai/amagine3d
- INSTALL: https://github.com/amagine-ai/amagine3d

## 활동

- 마지막 커밋: 2026-09-16 08:59 UTC
- 최근 릴리스: 릴리스 없음
- 기여자: 4
- 열린 이슈 (PR 포함): 2
- 만든 이: 조직
- GitHub 확인 시각: 2026-09-23 01:48 UTC

## TESIGN TAKE

메시가 아니라 수정 가능한 CAD 소스를 내놓는다는 점이 다른 3D 생성기와 갈립니다.

## 왜 볼 만한가

하드웨어 외장은 CAD를 다룰 줄 알아야 시작할 수 있고, 내부 부품에 맞춰 고치는 일이 반복됩니다. Amagine3D는 자연어 요구사항·참고 이미지·치수를 받아 내부 부품 배치부터 외장·경첩·덮개까지 설계하고, 결과를 수정 가능한 build123d 파이썬 소스와 STEP·STL·3MF로 내놓습니다. 에이전트가 벽 두께·간섭·출력 방향을 스스로 검사한 뒤 받아들이는 구조이며 Apache-2.0으로 공개돼 있습니다. 로컬에서 띄우려면 OpenAI Responses 호환 API 키가 필요합니다.

## 이걸로 무엇을 만들 수 있나

- 개발 보드에 맞춘 시제품 케이스를 하루 안에 뽑는 제작 흐름
- 소량 IoT 기기 외장을 부품이 바뀔 때마다 다시 만드는 설계 루프
- STEP 파일로 외주 가공 견적을 받는 준비 자료

## 누구에게 맞나

- 하드웨어 스타트업 — CAD 인력 없이 시제품 케이스가 필요할 때
- 메이커 — 개발 보드용 케이스를 치수만 주고 뽑고 싶을 때
- 제품 디자이너 — 부품 배치와 외장을 함께 검토할 때

## 5분 안에 시작하기

```
$ git clone https://github.com/amagine-ai/Amagine3D.git
$ cd Amagine3D
$ npm install
$ cp .env.example .env
$ npm run dev
# .env에 LLM 키 입력 후 127.0.0.1:6160 열기 · Node 22.19+ 필요
```

## 주의할 점

- OpenAI Responses 호환 API 키나 모델 게이트웨이가 필요합니다
- 활발히 개발 중이며 표면 연속성은 거칠 수 있다고 밝힙니다
- 데스크톱 Chrome·Edge에서만 전체 흐름이 검증됐습니다

## 영수증

- TESIGN이 처음 본 시각: 2026-09-13 07:43 UTC
- 출처 등록: 2026-08-19 15:31 UTC
- 선정: 2026-09-14 02:41 UTC
- TESIGN 게재: 2026-09-14 02:41 UTC
- 소개 글 마지막 수정: 2026-09-15 04:36 UTC

## 읽는 법

- 이 파일은 tesign.com 항목 페이지와 같은 빌드에서 같은 데이터로 만들어졌습니다. 소개 글은 편집자가 쓴 것이고, 숫자는 저장된 관측값입니다.
- JSON의 null은 관측하지 않았다는 뜻입니다 — 0이 아닙니다. 마크다운에서는 [확인 필요]로 적습니다.
- 별 총합 = GitHub에서 마지막으로 확인한 값(stars_checked_at) + 그 뒤 GH Archive에서 관측한 증가. 24h·7d·30d 증가는 GH Archive 시간별 이벤트를 기준 시각(as_of)까지 합한 값. 우리 점수는 없습니다.
- 요약이며 법적 조언이 아닙니다.

[대표 이미지] https://tesign.com/img/amagine3d-5d985bfafc.png
