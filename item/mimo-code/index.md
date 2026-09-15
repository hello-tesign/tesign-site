# MiMo Code

> 기억하는 터미널 코딩 에이전트 — 샤오미의 터미널 코딩 에이전트 — 세션을 넘어 기억하는 프로젝트 메모리, 서브에이전트, 음성 입력

- 페이지: https://tesign.com/item/mimo-code/
- JSON: https://tesign.com/item/mimo-code/index.json
- 영어 마크다운: https://tesign.com/en/item/mimo-code/index.md
- 생성 시각: 2026-09-15 19:35 UTC

## 숫자

- 별 13,128 — GitHub에서 2026-09-15 19:34 UTC 확인
- 7일 +6은 GH Archive 관측 (기준 2026-09-15 15:00 UTC)
- 별 총합 = GitHub에서 마지막으로 확인한 값(stars_checked_at) + 그 뒤 GH Archive에서 관측한 증가. 24h·7d·30d 증가는 GH Archive 시간별 이벤트를 기준 시각(as_of)까지 합한 값. 우리 점수는 없습니다.

## 한눈에 보는 사실

- 라이선스: MIT (허용적) — https://spdx.org/licenses/MIT.html
- 사용 범위: 상업 이용·수정·재배포 가능. 저작권 고지는 유지.
- 오픈소스: 예
- 언어: TypeScript
- 플랫폼: cli · macos · windows · linux
- 분류: AI · 개발 도구
- 태그: coding-agent · cli · terminal · xiaomi · opencode-fork · ai
- 바로 쓰기: 설치해서 쓰기
- 출처: GitHub https://github.com/xiaomimimo/mimo-code
- INSTALL: https://mimo.xiaomi.com/mimocode

## 활동

- 마지막 커밋: 2026-09-15 19:08 UTC
- 최근 릴리스: v0.1.14 (2026-09-02)
- 기여자: 20
- 열린 이슈 (PR 포함): 1,001
- 만든 이: 조직
- GitHub 확인 시각: 2026-09-15 19:34 UTC

## 선정 신호와 근거

- 과거 기록

## TESIGN TAKE

다른 코딩 에이전트의 인증을 그대로 가져와 바로 쓰게 한 것이 진입 전략이고, 메모리·체크포인트가 남기려는 차별점이다.

## 왜 볼 만한가

OpenCode 포크 위에 SQLite FTS5 기반 영속 메모리(MEMORY.md·checkpoint.md·notes.md·tasks/)를 얹어, 컨텍스트가 한계에 가까워지면 최신 체크포인트에서 재구성하고 세션을 재개하면 자동으로 주입한다. 로그인은 샤오미 MiMo OAuth, Codex(ChatGPT) OAuth, Claude Code 인증 가져오기, API 키나 OpenAI 호환 커스텀 엔드포인트 중 고른다. `/goal`은 별도 판정 모델이 종료 조건을 검사해 낙관적 조기 종료를 막고, `/voice`는 TenVAD와 MiMo ASR로 말을 스트리밍 입력한다.

## 이걸로 무엇을 만들 수 있나

- compose·deep-research·fact-check·research-experiment 4개 내장 워크플로를 본떠 `.mimocode/workflows/`에 JS로 자기 팀의 결정적 다단계 파이프라인을 쓸 수 있다.

## 누구에게 맞나

- 터미널 코딩 에이전트 사용자 — Claude Code/Codex 인증 그대로 갈아타 보기
- 긴 작업을 돌리는 개발자 — 체크포인트·메모리로 세션 재개
- 연구자 — deep-research·fact-check 워크플로와 arXiv 스킬

## 5분 안에 시작하기

```
# curl -fsSL https://mimo.xiaomi.com/install | bash                          # macOS / Linux
# powershell -ep Bypass -c "irm https://mimo.xiaomi.com/install.ps1 | iex"   # Windows PowerShell
# npm install -g @mimo-ai/cli                                                # or via npm (all platforms)
# mimo
```

## 주의할 점

- 소스는 MIT이지만 별도 USE_RESTRICTIONS.md(군사 목적, 사람 감독 없는 고위험 자동 실행 등 금지)가 함께 적용되고, 샤오미 호스팅 서비스는 MiMo 이용약관을 따른다. 모델 비용은 선택한 경로(샤오미 플랫폼·Codex 구독·API 키) 기준 본인 부담. macOS 기본 Terminal.app은 미지원(iTerm2나 VS Code 터미널 권장). 음성 입력은 기본적으로 MiMo 로그인 사용자용이고(OpenRouter·자체 릴레이 경로는 별도 설정) sox가 필요하다. Windows·macOS·Linux.

## 영수증

- TESIGN이 처음 본 시각: 2026-09-13 08:16 UTC
- 출처 등록: 2026-06-10 11:52 UTC
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

[대표 이미지] https://tesign.com/img/mimo-code-321db9ebd5.jpg
