# PokeTokenBar

> 코딩 토큰으로 키우는 포켓몬 — AI 코딩 도구의 토큰 사용량을 읽어 포켓몬을 키우는 맥 메뉴 막대 앱 — 5시간·주간 한도도 함께 봅니다.

- 페이지: https://tesign.com/item/poketokenbar/
- JSON: https://tesign.com/item/poketokenbar/index.json
- 영어 마크다운: https://tesign.com/en/item/poketokenbar/index.md
- 생성 시각: 2026-09-17 19:00 UTC

## 숫자

- 별 442 — GitHub에서 2026-09-17 18:41 UTC 확인
- 7일 별 증가 관측 없음 (GH Archive) (기준 2026-09-17 13:00 UTC)
- Show HN 2점 — 2026-09-13 15:10 UTC 관측
- 별 총합 = GitHub에서 마지막으로 확인한 값(stars_checked_at) + 그 뒤 GH Archive에서 관측한 증가. 24h·7d·30d 증가는 GH Archive 시간별 이벤트를 기준 시각(as_of)까지 합한 값. 우리 점수는 없습니다.

## 한눈에 보는 사실

- 라이선스: MIT (허용적) — https://spdx.org/licenses/MIT.html
- 사용 범위: 상업 이용·수정·재배포 가능. 저작권 고지는 유지.
- 오픈소스: 예
- 언어: Swift
- 플랫폼: macos
- 분류: AI · 게임
- 태그: menu-bar · token-usage · claude-code · codex · pokemon · macos
- 바로 쓰기: 설치해서 쓰기
- 출처: Show HN https://github.com/chattymin/PokeTokenBar
- INSTALL: https://chattymin.github.io/PokeTokenBar

## 활동

- 마지막 커밋: 2026-09-14 03:23 UTC
- 최근 릴리스: v2.5.4 (2026-09-12)
- 기여자: 35
- 열린 이슈 (PR 포함): 54
- 만든 이: 개인
- GitHub 확인 시각: 2026-09-17 18:41 UTC

## 선정 신호와 근거

- 과거 기록

## TESIGN TAKE

사용량 추적을 매일 열어 보게 만드는 방법이 '게임화'였음을 보여 주는 앱으로, 다만 비공식 팬 프로젝트라 개인·비상업 용도로만 쓸 수 있습니다.

## 왜 볼 만한가

토큰 사용량 대시보드는 있어도 열어 보고 싶은 것은 드문데, PokeTokenBar는 Claude Code·Codex·Gemini CLI·Cursor 등 13개 도구의 로컬 로그를 읽어 쓴 토큰만큼 알을 부화시키고 진화시킵니다. 포켓몬은 PokéAPI에서 가져온 1~5세대 진화 라인(329가지 시작점) 중 공식 포획률 가중치로 뽑히고, 전설은 129분의 1 확률입니다. 그 밑에는 오늘 사용량·비용과 Claude·Codex·Antigravity의 공식 5시간/주간 한도, 리셋 카운트다운, 소진 예측이 붙은 실제 사용량 추적기가 있습니다.

## 이걸로 무엇을 만들 수 있나

- 로그를 다른 곳에 두는 도구는 설정에서 스캔 폴더를 추가해 붙일 수 있고, 새 도구 지원은 provider 구현 하나를 추가하고 등록하는 구조(CONTRIBUTING.md)라 자기 도구를 붙이는 기여가 가능합니다. 데스크톱 펫으로 빼내 항상 보이는 작은 사용량 위젯처럼 쓰는 용도도 있습니다.

## 누구에게 맞나

- AI 코딩 도구를 매일 쓰는 맥 개발자 — 메뉴 막대에서 오늘 토큰·비용과 5시간/주간 한도 확인
- 여러 도구를 섞어 쓰는 사람 — 도구별 탭과 합산 총량을 한 곳에서
- 한도에 자주 걸리는 사용자 — 리셋 카운트다운과 소진 시점 예측, 경고 알림

## 5분 안에 시작하기

```
# 요구 사항: macOS 14 이상(Apple Silicon·Intel)
# brew install --cask chattymin/tap/poke-token-bar
# 또는 최신 릴리스에서 PokeTokenBar.zip 을 내려받아 /Applications 에 넣고, 첫 실행 시 Gatekeeper 경고는 우클릭 → 열기 (또는 xattr -dr com.apple.quarantine /Applications/PokeTokenBar.app)
```

## 주의할 점

- 라이선스 MIT은 이 프로젝트의 원본 소스 코드에만 적용; 포켓몬 상표·이미지·데이터는 권리자 소유이며, 앱은 비공식·비상업 팬 프로젝트로 개인·비상업 용도 전용(닌텐도·포켓몬 컴퍼니와 무관).
- macOS 14+ 전용. 앱은 자체 서명(ad-hoc, 노터라이즈 없음)이라 수동(zip) 설치 시 첫 실행에 경고가 뜨며, Homebrew cask는 quarantine 속성을 자동 처리.
- 완전 오프라인은 아님: PokéAPI·GitHub(스프라이트)·api.anthropic.com·claude.ai·cursor.com·Google 등 12개 호스트에 요청하지만 사용 로그·프롬프트·경로는 보내지 않는다고 명시. Claude 공식 한도는 비공식 엔드포인트, Codex는 로컬 codex app-server로 조회.

## 영수증

- TESIGN이 처음 본 시각: 2026-09-13 15:10 UTC
- 출처 등록: 2026-07-16 15:48 UTC
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

[대표 이미지] https://tesign.com/img/poketokenbar-962701a111.png
