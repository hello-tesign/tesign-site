# Codex Astra Orchestrator + Luna Subagents

> Codex 사용자용 역할 구성 — Codex에 Astra가 지휘하고 Luna가 실행하는 역할 분담을 설치합니다.

- 페이지: https://tesign.com/item/codex-astra-luna-orchestrator/
- JSON: https://tesign.com/item/codex-astra-luna-orchestrator/index.json
- 영어 마크다운: https://tesign.com/en/item/codex-astra-luna-orchestrator/index.md
- 생성 시각: 2026-09-17 19:00 UTC

## 숫자

- 별 1,468 — GitHub에서 2026-09-17 18:40 UTC 확인
- 7일 +62은 GH Archive 관측 (기준 2026-09-17 13:00 UTC)
- 별 총합 = GitHub에서 마지막으로 확인한 값(stars_checked_at) + 그 뒤 GH Archive에서 관측한 증가. 24h·7d·30d 증가는 GH Archive 시간별 이벤트를 기준 시각(as_of)까지 합한 값. 우리 점수는 없습니다.

## 한눈에 보는 사실

- 라이선스: Apache-2.0 (허용적) — https://spdx.org/licenses/Apache-2.0.html
- 사용 범위: 상업 이용·수정·재배포 가능. 고지 유지, 바꾼 부분은 표시.
- 오픈소스: 예
- 언어: Python
- 플랫폼: macos · linux · windows · cli
- 분류: AI · 개발 도구
- 태그: codex · agents · orchestration · config
- 바로 쓰기: 설치해서 쓰기
- 출처: GitHub https://github.com/donvito/codex-astra-luna-orchestrator
- INSTALL: https://github.com/donvito/codex-astra-luna-orchestrator

## 활동

- 마지막 커밋: 2026-09-17 14:43 UTC
- 최근 릴리스: v0.1.0 (2026-09-16)
- 기여자: 5
- 열린 이슈 (PR 포함): 4
- 만든 이: 개인
- GitHub 확인 시각: 2026-09-17 18:40 UTC

## TESIGN TAKE

설정 파일 몇 개가 전부지만, 역할별 모델 고정을 손으로 다시 짤 필요가 없어집니다.

## 왜 볼 만한가

Codex에서 서브에이전트를 쓰기 시작하면 역할마다 어떤 모델과 추론 강도를 줄지 손으로 정하게 됩니다. Codex Astra Orchestrator + Luna Subagents는 오케스트레이터·탐색·작업·테스트·리뷰 역할별로 모델을 고정한 프로필을 대상 저장소의 .codex와 .agents에 복사해 줍니다. 설치 스크립트가 Pro·Plus 플랜을 물어 맞는 프로필을 넣고, Apache-2.0으로 공개돼 있습니다. 토큰 사용량은 저장소와 작업에 따라 달라 단일 수치가 없다고 README가 밝힙니다.

## 이걸로 무엇을 만들 수 있나

- 팀 저장소마다 같은 역할 분담을 까는 Codex 기본 설정
- 리뷰어만 다른 모델로 두는 독립 검수 단계
- 세션 로그로 역할별 토큰 사용을 집계하는 점검 스크립트

## 누구에게 맞나

- Codex 사용자 — 서브에이전트 역할과 모델을 처음 나누는 중
- 팀 리드 — 저장소마다 같은 에이전트 구성을 깔아야 할 때

## 5분 안에 시작하기

```
$ git clone https://github.com/donvito/codex-astra-luna-orchestrator.git
$ cd codex-astra-luna-orchestrator
$ ./setup.sh
# Windows에서는 아래 명령
$ powershell -ExecutionPolicy Bypass -File .\setup.ps1
# 설치 대상 프로젝트는 이 저장소와 다른 기존 폴더여야 합니다
```

## 주의할 점

- 설정 묶음이라 Codex CLI와 해당 플랜(Pro·Plus)이 있어야 합니다
- 역할 파일이 모델에 고정돼 기본값만 바꿔선 이름 있는 역할이 안 바뀝니다
- 오케스트레이션은 토큰을 더 씁니다 — README가 직접 밝힘

## 영수증

- TESIGN이 처음 본 시각: 2026-09-13 07:43 UTC
- 출처 등록: 2026-09-05 16:03 UTC
- 선정: 2026-09-14 02:41 UTC
- 소개 글 마지막 수정: 2026-09-15 04:36 UTC

## 읽는 법

- 이 파일은 tesign.com 항목 페이지와 같은 빌드에서 같은 데이터로 만들어졌습니다. 소개 글은 편집자가 쓴 것이고, 숫자는 저장된 관측값입니다.
- JSON의 null은 관측하지 않았다는 뜻입니다 — 0이 아닙니다. 마크다운에서는 [확인 필요]로 적습니다.
- 별 총합 = GitHub에서 마지막으로 확인한 값(stars_checked_at) + 그 뒤 GH Archive에서 관측한 증가. 24h·7d·30d 증가는 GH Archive 시간별 이벤트를 기준 시각(as_of)까지 합한 값. 우리 점수는 없습니다.
- 요약이며 법적 조언이 아닙니다.

[대표 이미지] https://tesign.com/img/og/codex-astra-luna-orchestrator.png
