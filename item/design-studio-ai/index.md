# Design Studio AI

> 에이전트와 함께 디자인 편집 — 사람과 에이전트가 같은 문서에서 웹·슬라이드·3D·영상을 함께 만듭니다.

- 페이지: https://tesign.com/item/design-studio-ai/
- JSON: https://tesign.com/item/design-studio-ai/index.json
- 영어 마크다운: https://tesign.com/en/item/design-studio-ai/index.md
- 생성 시각: 2026-09-25 03:06 UTC

## 숫자

- 별 209 — GitHub에서 2026-09-25 02:58 UTC 확인
- 7일 별 증가 관측 없음 (GH Archive) (기준 2026-09-23 20:00 UTC)
- 별 총합 = GitHub에서 마지막으로 확인한 값(stars_checked_at) + 그 뒤 GH Archive에서 관측한 증가. 24h·7d·30d 증가는 GH Archive 시간별 이벤트를 기준 시각(as_of)까지 합한 값. 우리 점수는 없습니다.

## 한눈에 보는 사실

- 라이선스: MIT (허용적) — https://spdx.org/licenses/MIT.html
- 사용 범위: 상업 이용·수정·재배포 가능. 저작권 고지는 유지.
- 오픈소스: 예
- 언어: TypeScript
- 플랫폼: web · cli
- 분류: 디자인 · AI
- 태그: design · agents · mcp · self-host
- 바로 쓰기: 설치 없이 바로
- 출처: GitHub https://github.com/bestagentkits/design-studio-ai
- TRY: https://studio.agentkit.best/

## 활동

- 마지막 커밋: 2026-09-24 16:47 UTC
- 최근 릴리스: v0.4.3 (2026-09-12)
- 기여자: 1
- 열린 이슈 (PR 포함): 12
- 만든 이: 조직
- GitHub 확인 시각: 2026-09-25 02:58 UTC

## TESIGN TAKE

채팅 결과물이 아니라 사람도 같이 고치는 문서를 목표로 잡았다는 점이 다릅니다.

## 왜 볼 만한가

에이전트에 디자인을 시키면 결과물이 채팅 밖으로 나오지 않아 사람이 이어서 손보기 어렵습니다. Design Studio AI는 웹 화면·슬라이드·보고서·와이어프레임·3D 장면·타임라인 영상을 한 버전 관리 문서에 두고, 채팅과 수동 편집기로 사람과 에이전트가 번갈아 고치게 합니다. REST·MCP·CLI로 에이전트가 붙고 HTML·PDF·PowerPoint·GLB 등으로 내보내며, 생성은 자기 키(BYOK)로 외부 제공자를 부릅니다. 호스팅판을 바로 쓰거나 Docker로 직접 띄울 수 있고 MIT입니다.

## 이걸로 무엇을 만들 수 있나

- 에이전트가 초안을 만들고 디자이너가 마무리하는 제안서 슬라이드 공정
- 여러 화면 시안을 하나의 디자인 시스템으로 묶는 사내 작업대
- 영상·3D 장면까지 같은 문서로 관리하는 소규모 스튜디오 파이프라인

## 누구에게 맞나

- 1인 디자이너 — 에이전트 초안을 받아 직접 마무리하고 싶을 때
- 에이전트 개발자 — 디자인 결과를 MCP·CLI로 넣고 뺄 통로가 필요할 때
- 소규모 팀 — 슬라이드·화면·영상 시안을 한곳에서 관리할 때

## 5분 안에 시작하기

```
# 호스팅판은 studio.agentkit.best에서 바로 시작(설치 없음)
# 직접 띄우려면 ENCRYPTION_KEY와 APP_URL 설정 후(Node.js 24+ 또는 Docker)
$ docker compose up --build -d
# 컨테이너는 0.0.0.0:8787에 열림 · 인터넷 공개 시 HTTPS 프록시 권장
```

## 주의할 점

- 생성 기능은 자기 API 키(BYOK)와 외부 제공자 계정이 필요합니다
- Google Slides 내보내기 등은 초기 환경에서 실검증되지 않았다고 밝힙니다
- CLI는 npm 레지스트리에 없고 릴리스 tarball로 설치합니다

## 영수증

- TESIGN이 처음 본 시각: 2026-09-13 10:29 UTC
- 출처 등록: 2026-09-07 15:51 UTC
- 선정: 2026-09-14 02:41 UTC
- TESIGN 게재: 2026-09-14 02:41 UTC
- 소개 글 마지막 수정: 2026-09-15 04:36 UTC

## 읽는 법

- 이 파일은 tesign.com 항목 페이지와 같은 빌드에서 같은 데이터로 만들어졌습니다. 소개 글은 편집자가 쓴 것이고, 숫자는 저장된 관측값입니다.
- JSON의 null은 관측하지 않았다는 뜻입니다 — 0이 아닙니다. 마크다운에서는 [확인 필요]로 적습니다.
- 별 총합 = GitHub에서 마지막으로 확인한 값(stars_checked_at) + 그 뒤 GH Archive에서 관측한 증가. 24h·7d·30d 증가는 GH Archive 시간별 이벤트를 기준 시각(as_of)까지 합한 값. 우리 점수는 없습니다.
- 요약이며 법적 조언이 아닙니다.

[대표 이미지] https://tesign.com/img/design-studio-ai-c602c052ed.webp
