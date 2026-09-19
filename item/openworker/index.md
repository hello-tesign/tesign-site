# OpenWorker

> 업무용 데스크톱 AI 동료 — 내 API 키나 로컬 Ollama로 돌아가는 데스크톱 AI 동료 — 25종 이상 업무 도구를 잇고 쓰기·전송·명령마다 승인을 받습니다.

- 페이지: https://tesign.com/item/openworker/
- JSON: https://tesign.com/item/openworker/index.json
- 영어 마크다운: https://tesign.com/en/item/openworker/index.md
- 생성 시각: 2026-09-19 23:10 UTC

## 숫자

- 별 18,049 — GitHub에서 2026-09-19 22:58 UTC 확인
- 7일 +37은 GH Archive 관측 (기준 2026-09-19 18:00 UTC)
- 별 총합 = GitHub에서 마지막으로 확인한 값(stars_checked_at) + 그 뒤 GH Archive에서 관측한 증가. 24h·7d·30d 증가는 GH Archive 시간별 이벤트를 기준 시각(as_of)까지 합한 값. 우리 점수는 없습니다.

## 한눈에 보는 사실

- 라이선스: MIT (허용적) — https://spdx.org/licenses/MIT.html
- 사용 범위: 상업 이용·수정·재배포 가능. 저작권 고지는 유지.
- 오픈소스: 예
- 언어: Python
- 플랫폼: macos · windows
- 분류: AI · 생산성
- 태그: ai-coworker · desktop-app · byok · ollama · security-review · mcp
- 바로 쓰기: 설치해서 쓰기
- 출처: GitHub https://github.com/andrewyng/openworker
- INSTALL: http://openworker.com/

## 활동

- 마지막 커밋: 2026-09-19 05:23 UTC
- 최근 릴리스: v0.2.1 (2026-08-25)
- 기여자: 29
- 열린 이슈 (PR 포함): 504
- 만든 이: 개인
- GitHub 확인 시각: 2026-09-19 22:58 UTC

## 선정 신호와 근거

- 과거 기록

## TESIGN TAKE

이 프로젝트의 무게는 모델 선택이 아니라 '에이전트가 스스로 권한을 늘릴 수 없다'는 거버넌스 구조에 있고, 그 구조 전체를 저장소에서 읽어 볼 수 있습니다. 아직 오픈 베타지만 스타는 1.7만을 넘었습니다.

## 왜 볼 만한가

데스크톱에서 돌아가는 오픈소스 AI 동료로, 답변이 아니라 완성된 결과물(취약점 수정안이 붙은 코드 리뷰, 문서, 수치가 든 Slack 답장, 정리된 받은 편지함)을 내놓는 것을 목표로 하며 보안 전문 동료를 먼저 내놓았습니다. 모델은 OpenAI·Anthropic·Google 등 본인 키나 Ollama 로컬 모델 중 고르고, GitHub·Slack·Jira·Notion·Gmail·Google Calendar 등 25개 이상의 연동과 MCP 도구를 붙입니다. 메시지 전송·캘린더 변경·명령 실행 같은 행동은 기본적으로 승인을 거치고, 사람만 할 수 있는 '하드 플로어' 작업은 자동 승인 모드에서도 넘길 수 없으며 모든 도구 호출이 승인 출처와 함께 기록됩니다.

## 이걸로 무엇을 만들 수 있나

- 아침 브리핑·주간 보고서·특정 채널 감시 같은 예약 자동화를 전체 기록과 함께 돌리고, Slack에서 @OpenWorker를 부르면 데스크톱에서 세션이 열려 스레드 답글로 결과가 돌아오는 팀 워크플로를 만들 수 있습니다. 엔진은 aisuite(Python) 위에 있어 자기만의 에이전트 하네스를 만들 때 참고 구현으로도 쓸 수 있습니다.

## 누구에게 맞나

- 코드·의존성 보안 점검을 자동화하려는 개발자 — semgrep 등 스캐너와 모델 판단을 합친 리뷰, 승인 전 재검사된 수정안
- 여러 업무 도구를 오가는 실무자 — CRM·받은 편지함으로 고객 미팅 준비, 캘린더·Slack 스레드 처리
- 에이전트 거버넌스를 설계하는 팀 — 승인 사다리·하드 플로어·감사 기록 구현을 참고

## 5분 안에 시작하기

```
# 1. macOS(Apple Silicon, macOS 12+) https://download.openworker.com/mac 또는 Windows 10/11 x64 https://download.openworker.com/windows 에서 내려받아 앱을 열고, 모델 키를 넣거나 Ollama를 지정한 뒤 작업을 요청
# 2. 소스에서 실행(Python 3.10+, Node 20+, Rust 툴체인; 이어지는 서버·UI 실행 단계는 README 참고):
# git clone https://github.com/andrewyng/openworker
# cd openworker
# bash packaging/setup_dev_env.sh
```

## 주의할 점

- 라이선스 MIT. README 기준 오픈 베타 — 사용 가능하나 다듬는 중.
- macOS 빌드는 Apple Silicon 전용(macOS 12+, 서명·노터라이즈, 자동 업데이트); Windows x64 빌드는 아직 코드 서명이 없어 SmartScreen 경고가 뜨며, 홈페이지에는 Windows가 '준비 중'으로 표시됨. Linux 빌드는 README에 없음.
- 모델 비용은 본인 키(또는 Ollama 로컬) 부담. 연동 OAuth 중개용 작은 클라우드 서비스가 유일한 외부 구성 요소이며 로그인 없이 API 키로도 사용 가능. 로드맵 밖 기능 PR은 승인되지 않을 수 있다고 명시.

## 영수증

- TESIGN이 처음 본 시각: 2026-09-13 08:56 UTC
- 출처 등록: 2026-07-20 01:52 UTC
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

[대표 이미지] https://tesign.com/img/openworker-5775ed8369.png
