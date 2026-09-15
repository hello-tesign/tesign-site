# Pomodoist

> 할 일과 뽀모도로를 한 앱에 — 할 일 관리와 뽀모도로 집중 타이머, 주간 리포트를 한 앱에 담은 오픈소스 Todoist 대안 — 셀프호스팅 가능

- 페이지: https://tesign.com/item/pomodoist/
- JSON: https://tesign.com/item/pomodoist/index.json
- 영어 마크다운: https://tesign.com/en/item/pomodoist/index.md
- 생성 시각: 2026-09-15 20:32 UTC

## 숫자

- 별 425 — GitHub에서 2026-09-15 19:34 UTC 확인
- 7일 +20은 GH Archive 관측 (기준 2026-09-15 15:00 UTC)
- 별 총합 = GitHub에서 마지막으로 확인한 값(stars_checked_at) + 그 뒤 GH Archive에서 관측한 증가. 24h·7d·30d 증가는 GH Archive 시간별 이벤트를 기준 시각(as_of)까지 합한 값. 우리 점수는 없습니다.

## 한눈에 보는 사실

- 라이선스: AGPL-3.0 (카피레프트) — https://spdx.org/licenses/AGPL-3.0.html
- 사용 범위: 사용·수정은 자유. 배포는 물론 네트워크 서비스로 제공해도 소스 공개.
- 오픈소스: 예
- 언어: Dart
- 플랫폼: macos · ios · linux · windows · web
- 분류: 생산성
- 태그: todo · pomodoro · flutter · self-hosted · todoist-alternative · agpl
- 바로 쓰기: 직접 서버에
- 출처: GitHub https://github.com/kabanya/pomodoist
- SELF-HOST: https://pomodoist.com/

## 활동

- 마지막 커밋: 2026-09-15 19:25 UTC
- 최근 릴리스: v1.0.5 (2026-09-10)
- 기여자: 1
- 열린 이슈 (PR 포함): 36
- 만든 이: 개인
- GitHub 확인 시각: 2026-09-15 19:34 UTC

## 선정 신호와 근거

- 과거 기록

## TESIGN TAKE

뽀모도로 타이머가 딸린 할 일 앱은 많지만, 서버까지 AGPL로 공개하고 Docker Compose 한 번으로 올릴 수 있게 한 것이 이 프로젝트의 차이다.

## 왜 볼 만한가

Pomodoist는 인박스·오늘·예정·프로젝트·타임라인·칸반·우선순위 매트릭스로 할 일을 정리하고, 어떤 작업에서든 뽀모도로 세션을 시작해 집중 시간을 기록하며 주간 리포트로 추세를 보여 준다. Flutter/Dart로 만들어 macOS·iOS/iPadOS·Linux·Windows·웹(app.pomodoist.com)에서 같은 작업 공간을 쓰고, PostgreSQL·Auth·REST·Realtime을 포함한 Docker Compose 셀프호스팅 문서가 있다. README는 안드로이드도 지원 목록에 넣었지만 공식 사이트는 2026년 9–10월 출시 예정으로 표시한다.

## 이걸로 무엇을 만들 수 있나

- 자기 서버에 make -C server up으로 올린 인스턴스의 MCP 엔드포인트(/functions/v1/pomodoist-mcp)에 AI 도우미를 연결해 내 할 일을 읽고 추가하게 만들 수 있다. Telegram 미니앱과 Chrome 확장 코드도 저장소에 포함돼 있어 자기 용도로 고칠 수 있다.

## 누구에게 맞나

- Todoist에서 벗어나려는 개인 — 자기 서버에 할 일과 집중 기록 보관
- 집중 시간을 측정하고 싶은 사람 — 작업별 뽀모도로와 주간 리포트
- Flutter 개발자 — 한 코드로 데스크톱·모바일·웹을 배포하는 구조 참고

## 5분 안에 시작하기

```
# git clone https://github.com/Kabanya/Pomodoist.git
# cd Pomodoist
# make -C server setup
# make -C server up
# # 브라우저에서 http://localhost:58080 열기
```

## 주의할 점

- AGPL-3.0-only(저작권 FinchForge LLC) — 수정해서 서비스로 제공하면 소스 공개 의무가 따른다.
- 셀프호스팅은 무료지만 Docker Compose v2·make·openssl·curl과 RAM 4GB·디스크 40GB가 실질 최소 사양.
- 호스팅 버전의 Pro 구독·평생 구매는 유료(가격은 App Store 기준). 안드로이드는 README 지원 목록에는 있지만 공식 사이트 기준 2026년 9–10월 예정이고, iOS/iPadOS는 사이트 FAQ가 심사 중이라고 표기한다.

## 영수증

- TESIGN이 처음 본 시각: 2026-09-13 09:38 UTC
- 출처 등록: 2026-08-09 12:34 UTC
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

[대표 이미지] https://tesign.com/img/pomodoist-d12c65c935.webp
