# fx

> 셸처럼 쓰는 코딩 에이전트 — Zig로 만든 6.17 MiB 단일 실행 파일 코딩 에이전트 CLI. 셸처럼 쓰고, WASM으로 다른 앱에 끼워 넣음

- 페이지: https://tesign.com/item/vercel-labs-fx/
- JSON: https://tesign.com/item/vercel-labs-fx/index.json
- 영어 마크다운: https://tesign.com/en/item/vercel-labs-fx/index.md
- 생성 시각: 2026-09-23 04:12 UTC

## 숫자

- 별 3,127 — GitHub에서 2026-09-23 01:49 UTC 확인
- 7일 별 증가 관측 없음 (GH Archive) (기준 2026-09-22 23:00 UTC)
- 별 총합 = GitHub에서 마지막으로 확인한 값(stars_checked_at) + 그 뒤 GH Archive에서 관측한 증가. 24h·7d·30d 증가는 GH Archive 시간별 이벤트를 기준 시각(as_of)까지 합한 값. 우리 점수는 없습니다.

## 한눈에 보는 사실

- 라이선스: Apache-2.0 (허용적) — https://spdx.org/licenses/Apache-2.0.html
- 사용 범위: 상업 이용·수정·재배포 가능. 고지 유지, 바꾼 부분은 표시.
- 오픈소스: 예
- 언어: Zig
- 플랫폼: macos · linux · cli
- 분류: 개발 도구 · AI
- 태그: coding-agent · cli · zig · webassembly · vercel · acp
- 바로 쓰기: 설치해서 쓰기
- 출처: GitHub https://github.com/vercel-labs/fx
- INSTALL: https://fx.sh/

## 활동

- 마지막 커밋: 2026-09-22 23:42 UTC
- 최근 릴리스: v0.0.10 (2026-09-14)
- 기여자: 21
- 열린 이슈 (PR 포함): 225
- 만든 이: 조직
- GitHub 확인 시각: 2026-09-23 01:49 UTC

## 선정 신호와 근거

- 과거 기록

## TESIGN TAKE

코딩 에이전트를 IDE가 아니라 grep처럼 작고 끼워 넣기 쉬운 유닉스 도구로 만들어 보는 실험이며, 저자들도 '실험 단계'라고 씁니다.

## 왜 볼 만한가

Vercel Labs가 만든 코딩 에이전트인데 접근이 다릅니다. Zig로 짠 6.17 MiB 네이티브 바이너리 하나이고, 인터페이스는 터미널 속 IDE가 아니라 유닉스 셸에 가깝습니다. 모델을 고정하지 않아 Vercel AI Gateway, ChatGPT 구독(Codex OAuth), Grok 구독으로 로그인하고, 같은 코어가 fx-core.wasm·fx-term.wasm으로 빌드되어 npm 패키지 libfx로 Node.js·브라우저·Next.js 앱에 들어갑니다. fx acp로 에디터 등 Agent Client Protocol 클라이언트에도 붙습니다.

## 이걸로 무엇을 만들 수 있나

- libfx로 자기 웹 앱이나 사내 도구 안에 코딩 에이전트 터미널을 넣을 수 있고(Node.js·브라우저·Next.js·Nuxt 예제 제공), 스킬·MCP·서브에이전트로 에이전트의 작업 범위를 넓힐 수 있습니다.

## 누구에게 맞나

- 터미널 중심 개발자 — 가벼운 단일 바이너리 코딩 에이전트
- 에이전트를 자기 제품에 넣으려는 팀 — libfx(WASM) 임베딩
- ACP 지원 에디터 사용자 — fx acp로 에디터 연결

## 5분 안에 시작하기

```
# curl -fsSL https://fx.sh/setup.sh | bash
# fx login          # Vercel AI Gateway (ChatGPT 구독은 fx login codex, Grok은 fx login grok)
# cd your_project
# fx
# fx ask "explain the changes in this repository"
```

## 주의할 점

- 라이선스 Apache-2.0. README 상태는 'Experimental. Use at your own risk'이고 홈페이지도 잦은 변경을 예고합니다. 모델 사용 비용은 별도: Vercel AI Gateway 키/계정, 또는 ChatGPT·Grok 유료 구독이 필요합니다. 홈페이지 표기 OS는 macOS·Linux이며 Windows 지원 여부는 [확인 필요]. WebAssembly SDK도 실험 단계, 소스 빌드에는 Zig 0.16.0 이상 필요.

## 영수증

- TESIGN이 처음 본 시각: 2026-09-13 09:42 UTC
- 출처 등록: 2026-08-11 08:57 UTC
- 선정: 2026-09-14 19:27 UTC
- TESIGN 게재: 2026-09-14 19:27 UTC
- 소개 글 마지막 수정: 2026-09-15 20:14 UTC
- ◌ 과거 기록: 과거 데이터를 되짚어 채운 항목입니다. 라이브 발견이 아닙니다.

## 읽는 법

- 이 파일은 tesign.com 항목 페이지와 같은 빌드에서 같은 데이터로 만들어졌습니다. 소개 글은 편집자가 쓴 것이고, 숫자는 저장된 관측값입니다.
- JSON의 null은 관측하지 않았다는 뜻입니다 — 0이 아닙니다. 마크다운에서는 [확인 필요]로 적습니다.
- 별 총합 = GitHub에서 마지막으로 확인한 값(stars_checked_at) + 그 뒤 GH Archive에서 관측한 증가. 24h·7d·30d 증가는 GH Archive 시간별 이벤트를 기준 시각(as_of)까지 합한 값. 우리 점수는 없습니다.
- 과거 데이터를 되짚어 채운 항목입니다. 라이브 발견이 아닙니다.
- 요약이며 법적 조언이 아닙니다.

[대표 이미지] https://tesign.com/img/vercel-labs-fx-ed809f35cb.png
