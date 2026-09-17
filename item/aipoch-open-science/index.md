# AIPOCH Open-Science

> 연구자용 AI 워크벤치 — 연구자용 로컬 AI 워크벤치 — Claude Code·Codex 등 에이전트가 Python/R을 돌리고 결과의 출처를 버전으로 남긴다

- 페이지: https://tesign.com/item/aipoch-open-science/
- JSON: https://tesign.com/item/aipoch-open-science/index.json
- 영어 마크다운: https://tesign.com/en/item/aipoch-open-science/index.md
- 생성 시각: 2026-09-17 01:30 UTC

## 순위

- 과학 분야 2위 (기준 2026-09-16 21:00 UTC)

## 숫자

- 별 4,196 — GitHub에서 2026-09-15 19:35 UTC 확인 (+3 확인 이후 관측)
- 7일 +26은 GH Archive 관측 (기준 2026-09-16 21:00 UTC)
- 24h +3 ★ · 30d +186 ★ (기준 2026-09-16 21:00 UTC)
- 별 총합 = GitHub에서 마지막으로 확인한 값(stars_checked_at) + 그 뒤 GH Archive에서 관측한 증가. 24h·7d·30d 증가는 GH Archive 시간별 이벤트를 기준 시각(as_of)까지 합한 값. 우리 점수는 없습니다.

## 한눈에 보는 사실

- 라이선스: Apache-2.0 (허용적) — https://spdx.org/licenses/Apache-2.0.html
- 사용 범위: 상업 이용·수정·재배포 가능. 고지 유지, 바꾼 부분은 표시.
- 오픈소스: 예
- 언어: TypeScript
- 플랫폼: macos · windows · linux · cli
- 분류: 과학 · AI
- 태그: ai-research · provenance · python · r · electron · mcp
- 바로 쓰기: 설치해서 쓰기
- 출처: GitHub https://github.com/aipoch/open-science
- INSTALL: https://aipoch.com/open-science

## 활동

- 마지막 커밋: 2026-09-15 15:52 UTC
- 최근 릴리스: v0.30.0 (2026-09-15)
- 기여자: 17
- 열린 이슈 (PR 포함): 43
- 만든 이: 조직
- GitHub 확인 시각: 2026-09-15 19:35 UTC

## 선정 신호와 근거

- 과거 기록

## TESIGN TAKE

'결과가 어디서 왔는지'를 버전과 재실행 검증으로 남기는 데 집중한 도구다 — 모델 비용은 별도이고 프롬프트와 첨부 맥락은 선택한 모델 제공자에게 전송된다는 점은 그대로다.

## 왜 볼 만한가

연구용 AI 사용이 채팅창·노트북·스크립트·보고서 도구로 흩어지는 문제를 데스크톱 앱 하나로 모은다. 첫 실행 5단계에서 Claude Code·OpenCode·Codex·CodeBuddy 중 하나를 에이전트 런타임으로 설치(Node.js·관리자 권한 불필요)하고, 모델은 내장 클라우드 제공자·커스텀 게이트웨이·Claude/Codex 구독 로그인 중 고른다. Python·R 커널, Europe PMC·OpenAlex·arXiv 문헌 검색, 24개 내장 데이터 커넥터와 22개 스킬이 들어 있고, 생성된 표·그림은 체크섬·실행 기록·입력을 가진 불변 버전으로 남아 격리 환경에서 재실행해 검증할 수 있다. Electron 앱으로 macOS·Windows·Linux를 지원하며 v0.29.0(2026-09-13), Apache-2.0.

## 이걸로 무엇을 만들 수 있나

- 헤드리스 CLI와 Node.js SDK가 데스크톱과 같은 로컬 데몬·프로젝트·권한을 쓰므로, 정해진 데이터셋을 주기적으로 재분석해 검증 기록과 함께 리포트를 뽑는 무인 파이프라인을 만들 수 있다. 커스텀 MCP 커넥터로 사내 데이터베이스도 연결할 수 있다.

## 누구에게 맞나

- 생물정보·통계·화학 등 계산 연구자 — 에이전트가 코드 실행·문헌 검색·표/그림 생성
- 재현성을 요구받는 연구실 — 아티팩트 버전·체크섬·재실행 검증 기록
- Slurm 클러스터를 쓰는 연구팀 — SSH로 원격 노트북 실행

## 5분 안에 시작하기

```
# brew install --cask open-science   # macOS
# # Windows x64 설치 파일, Linux x64 AppImage/.deb는 GitHub 최신 릴리스 Assets에서 받기
# # 첫 실행 5단계: 환경 점검 → 데이터 위치 → 에이전트 런타임(Claude Code/OpenCode/Codex/CodeBuddy) → 모델 제공자 연결 테스트 → 노트북 런타임(선택)
# # New project → 세션에서 연구 목표·입력 데이터·검증 방법을 서술 → 실행 후 Provenance 뷰에서 출처 확인
```

## 주의할 점

- Apache-2.0 — 소프트웨어는 무료, 좌석 라이선스 없음(홈페이지); Anthropic과 무관한 프로젝트라고 홈페이지에 명시
- 모델 사용료는 별도: 내장 클라우드 제공자·커스텀 게이트웨이는 자체 API 키 필요, Claude·Codex 구독 로그인으로 대체 가능; 프롬프트·첨부 맥락은 선택한 제공자에게 전송됨
- Electron 데스크톱 앱, v0.29.0(2026-09-13) — 제공자 목록·카탈로그·UI는 버전마다 달라질 수 있다고 README가 명시; 벤치마크 1위 주장(BiomniBench-DA Public 50)은 README의 자체 보고

## 영수증

- TESIGN이 처음 본 시각: 2026-09-13 09:38 UTC
- 출처 등록: 2026-07-03 02:50 UTC
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

[대표 이미지] https://tesign.com/img/aipoch-open-science-3bdef77a47.jpg
