# roamux

> 에이전트를 폰에서 원격 조종 — 내 컴퓨터에서 도는 코딩 에이전트를 폰이나 브라우저로 지켜보고 조종합니다.

- 페이지: https://tesign.com/item/roamux/
- JSON: https://tesign.com/item/roamux/index.json
- 영어 마크다운: https://tesign.com/en/item/roamux/index.md
- 생성 시각: 2026-09-22 05:53 UTC

## 숫자

- 별 3 — GitHub에서 2026-09-22 00:38 UTC 확인
- 7일 별 증가 관측 없음 (GH Archive) (기준 2026-09-21 20:00 UTC)
- Show HN 2점 — 2026-09-20 05:34 UTC 관측
- 별 총합 = GitHub에서 마지막으로 확인한 값(stars_checked_at) + 그 뒤 GH Archive에서 관측한 증가. 24h·7d·30d 증가는 GH Archive 시간별 이벤트를 기준 시각(as_of)까지 합한 값. 우리 점수는 없습니다.

## 한눈에 보는 사실

- 라이선스: MIT (허용적) — https://spdx.org/licenses/MIT.html
- 사용 범위: 상업 이용·수정·재배포 가능. 저작권 고지는 유지.
- 오픈소스: 예
- 언어: TypeScript
- 플랫폼: macos · linux · cli · web
- 분류: AI · 개발 도구
- 태그: agents · remote-control · claude-code · codex
- 바로 쓰기: 설치해서 쓰기
- 출처: Show HN https://github.com/phyra-research/roamux
- INSTALL: https://remote.phyra.ai/

## 활동

- 마지막 커밋: 2026-09-21 16:11 UTC
- 최근 릴리스: v0.2.0 (2026-09-13)
- 기여자: 2
- 열린 이슈 (PR 포함): 18
- 만든 이: 조직
- GitHub 확인 시각: 2026-09-22 00:38 UTC

## 선정 신호와 근거

- 일찍 발견 · 2 ★ 처음 봤을 때
- 신규 · 생성 0h 만에 포착

## TESIGN TAKE

에이전트를 클라우드로 보내는 대신, 조종석만 밖으로 꺼낸 발상입니다.

## 왜 볼 만한가

코딩 에이전트에 긴 작업을 맡기면 승인 요청이 올 때까지 책상 앞을 떠나기 어렵습니다. roamux는 작은 호스트 데몬을 내 컴퓨터에 깔아 밖으로 연결하고, 인증된 폰이나 브라우저에서 세션을 시작하고 진행을 보고 권한 요청을 승인·거부하고 바뀐 파일을 살피게 합니다. 코드·자격 증명·모델 키는 기기를 떠나지 않고 클라우드는 라벨과 ID만 다루며, OpenCode·Claude Code·Codex를 그대로 씁니다. MIT이며 호스트는 macOS와 Linux용입니다.

## 이걸로 무엇을 만들 수 있나

- 밤새 도는 리팩터링을 폰에서 승인만 하며 지켜보는 운영 방식
- 집 컴퓨터를 에이전트 실행 호스트로 두는 외출용 작업대
- 여러 기기의 에이전트 세션을 한 화면에서 보는 팀 현황판

## 누구에게 맞나

- 에이전트 사용 개발자 — 긴 작업 중 자리를 비우고 싶을 때
- 보안에 민감한 팀 — 코드와 키를 기기 밖으로 못 내보낼 때

## 5분 안에 시작하기

```
# 먼저 OpenCode·Claude Code·Codex 중 하나를 설치하고 로그인해 둘 것
$ curl -fsSL https://remote.phyra.ai/install.sh | sh
$ roamux login
$ cd ~/your/project
$ AGENT_ADAPTER=claude-code roamux host      # or opencode | codex
# 그 다음 remote.phyra.ai를 폰이나 브라우저에서 열어 New Session
```

## 주의할 점

- 호스트는 macOS·Linux용이며 Windows는 README에 없습니다
- 에이전트가 파일 수정을 자동 승인하므로 git 저장소에서 쓰길 권합니다
- 호스트 하나에 에이전트 하나 — 여럿이면 호스트를 여러 개 띄워야 함

## 영수증

- TESIGN이 처음 본 시각: 2026-09-13 08:29 UTC
- 출처 등록: 2026-09-13 08:20 UTC
- 선정: 2026-09-14 02:41 UTC
- TESIGN 게재: 2026-09-14 02:41 UTC
- 소개 글 마지막 수정: 2026-09-15 04:36 UTC

## 읽는 법

- 이 파일은 tesign.com 항목 페이지와 같은 빌드에서 같은 데이터로 만들어졌습니다. 소개 글은 편집자가 쓴 것이고, 숫자는 저장된 관측값입니다.
- JSON의 null은 관측하지 않았다는 뜻입니다 — 0이 아닙니다. 마크다운에서는 [확인 필요]로 적습니다.
- 별 총합 = GitHub에서 마지막으로 확인한 값(stars_checked_at) + 그 뒤 GH Archive에서 관측한 증가. 24h·7d·30d 증가는 GH Archive 시간별 이벤트를 기준 시각(as_of)까지 합한 값. 우리 점수는 없습니다.
- 요약이며 법적 조언이 아닙니다.

[대표 이미지] https://tesign.com/img/og/roamux.png
