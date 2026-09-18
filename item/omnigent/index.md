# Omnigent

> 코딩 에이전트 통합 제어층 — Claude Code·Codex·Cursor 등 코딩 에이전트를 한 층 위에서 묶어 터미널→브라우저→폰으로 세션을 이어가는 메타 하네스

- 페이지: https://tesign.com/item/omnigent/
- JSON: https://tesign.com/item/omnigent/index.json
- 영어 마크다운: https://tesign.com/en/item/omnigent/index.md
- 생성 시각: 2026-09-18 06:40 UTC

## 숫자

- 별 10,043 — GitHub에서 2026-09-17 18:40 UTC 확인
- 7일 +8은 GH Archive 관측 (기준 2026-09-18 01:00 UTC)
- 별 총합 = GitHub에서 마지막으로 확인한 값(stars_checked_at) + 그 뒤 GH Archive에서 관측한 증가. 24h·7d·30d 증가는 GH Archive 시간별 이벤트를 기준 시각(as_of)까지 합한 값. 우리 점수는 없습니다.

## 한눈에 보는 사실

- 라이선스: Apache-2.0 (허용적) — https://spdx.org/licenses/Apache-2.0.html
- 사용 범위: 상업 이용·수정·재배포 가능. 고지 유지, 바꾼 부분은 표시.
- 오픈소스: 예
- 언어: Python
- 플랫폼: cli · macos · linux · windows · web
- 분류: AI · 개발 도구
- 태그: ai-agents · orchestration · claude-code · codex · multi-agent · python
- 바로 쓰기: 설치해서 쓰기
- 출처: GitHub https://github.com/omnigent-ai/omnigent
- INSTALL: https://omnigent.ai/

## 활동

- 마지막 커밋: 2026-09-17 18:40 UTC
- 최근 릴리스: v0.14.0 (2026-09-15)
- 기여자: 259
- 열린 이슈 (PR 포함): 1,386
- 만든 이: 조직
- GitHub 확인 시각: 2026-09-17 18:40 UTC

## 선정 신호와 근거

- 과거 기록

## TESIGN TAKE

에이전트를 하나 더 만드는 대신 이미 쓰는 에이전트들을 갈아 끼우고 감독하는 층을 두겠다는 설계다 — 알파라는 표시를 함께 봐야 한다.

## 왜 볼 만한가

세션이 사람을 따라간다 — 터미널에서 시작한 대화를 브라우저(localhost:6767)나 같은 네트워크의 폰에서 이어받고, 메시지·서브에이전트·터미널·파일이 동기화된다. 에이전트는 YAML 한 장(프롬프트·도구·서브에이전트)이고, 정책으로 셸 실행 전 승인, 세션당 도구 호출 수, 달러 지출 상한(예: max_cost_usd 5.00)을 서버·에이전트·세션 3단계로 겹쳐 건다. 예시 에이전트 Polly는 코딩 서브에이전트에 일을 나누고 리뷰는 작성자와 다른 벤더 모델에 맡긴다.

## 이걸로 무엇을 만들 수 있나

- Polly처럼 '작성자와 다른 벤더가 리뷰'하는 멀티 에이전트 코딩 파이프라인이나, 지출 상한과 초대 전용 가입을 건 팀 공용 에이전트 서버(docker compose)를 세울 수 있다.

## 누구에게 맞나

- 여러 코딩 에이전트를 병행하는 개발자 — 한 세션에서 Claude Code·Codex 혼용
- 팀 리드 — 지출 상한·승인 정책을 건 공용 에이전트 서버
- 이동이 많은 사람 — 노트북에서 돌리는 에이전트를 폰에서 이어 보기

## 5분 안에 시작하기

```
# curl -fsSL https://raw.githubusercontent.com/omnigent-ai/omnigent/main/scripts/install_oss.sh | sh   # 방법 1(권장 설치 스크립트)
# uv tool install omnigent        # 또는: 수동 설치 (pip install "omnigent"도 가능)
# brew install omnigent-ai/tap/omnigent   # 또는: Homebrew
# omnigent
# omnigent claude                      # Claude Code, in a session your team can join
```

## 주의할 점

- Apache-2.0. README 배지와 홈페이지 모두 status alpha. 익명 사용 텔레메트리가 기본으로 켜져 있고 옵트아웃은 별도 문서. Python 3.12+, Node.js 22+, tmux 필요, Linux는 bubblewrap 필수. Windows는 '저하 모드'(tmux 터미널 래퍼 없음, 파일시스템·네트워크 샌드박스 없음). macOS 데스크톱 앱 제공. 모델 비용은 본인 키·구독 기준.

## 영수증

- TESIGN이 처음 본 시각: 2026-09-13 08:16 UTC
- 출처 등록: 2026-06-11 12:18 UTC
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

[대표 이미지] https://tesign.com/img/omnigent-7e2847f0a5.png
