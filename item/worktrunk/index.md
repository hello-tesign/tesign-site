# Worktrunk

> 병렬 에이전트 작업 폴더 — 에이전트를 병렬로 돌릴 때 쓰는 Git worktree를 정리해 줍니다.

- 페이지: https://tesign.com/item/worktrunk/
- JSON: https://tesign.com/item/worktrunk/index.json
- 영어 마크다운: https://tesign.com/en/item/worktrunk/index.md
- 생성 시각: 2026-09-22 07:26 UTC

## 숫자

- 별 8,296 — GitHub에서 2026-09-22 00:37 UTC 확인
- 7일 +25은 GH Archive 관측 (기준 2026-09-22 03:00 UTC)
- 별 총합 = GitHub에서 마지막으로 확인한 값(stars_checked_at) + 그 뒤 GH Archive에서 관측한 증가. 24h·7d·30d 증가는 GH Archive 시간별 이벤트를 기준 시각(as_of)까지 합한 값. 우리 점수는 없습니다.

## 한눈에 보는 사실

- 라이선스: 라이선스 미확인
- 사용 범위: 미확인 — 쓰기 전에 살펴보세요.
- 언어: Rust
- 플랫폼: macos · linux · windows · cli
- 분류: 개발 도구
- 태그: git · worktrees · agents
- 바로 쓰기: 설치해서 쓰기
- 출처: GitHub https://github.com/max-sixty/worktrunk
- INSTALL: https://worktrunk.dev/

## 활동

- 마지막 커밋: 2026-09-21 23:18 UTC
- 최근 릴리스: v0.79.0 (2026-09-21)
- 기여자: 75
- 열린 이슈 (PR 포함): 39
- 만든 이: 개인
- GitHub 확인 시각: 2026-09-22 00:37 UTC

## TESIGN TAKE

브랜치 이름만으로 worktree를 만들고 지우게 해서, 병렬 에이전트 작업의 진짜 걸림돌을 치웁니다.

## 왜 볼 만한가

에이전트를 여러 개 동시에 붙이면 브랜치와 작업 폴더가 서로를 덮어쓰기 시작합니다. worktrunk는 Git worktree를 만들고 옮기고 지우는 일을 명령 한 줄로 줄여, 에이전트마다 독립된 작업 폴더를 주는 흐름을 전제로 만들어졌습니다. Rust로 쓰인 CLI이고, 저장소에 라이선스가 표기돼 있지 않아 도입 전에 확인이 필요합니다.

## 이걸로 무엇을 만들 수 있나

- 에이전트마다 작업 폴더를 떼어 주는 사내 개발 흐름
- 끝난 병렬 작업을 걷어 내는 하루 마감 스크립트

## 누구에게 맞나

- 1인 개발자 — 에이전트마다 작업 폴더를 따로 주고 싶을 때
- 팀 개발자 — PR 브랜치를 바로 worktree로 열어 검토할 때

## 5분 안에 시작하기

```
# macOS·Linux(Homebrew):
$ brew install worktrunk && wt config shell install
# Windows(winget, 명령은 git-wt):
$ winget install max-sixty.worktrunk
$ git-wt config shell install
$ wt switch --create feature-auth
```

## 주의할 점

- GitHub 메타데이터엔 라이선스가 없지만 README 배지는 MIT OR Apache-2.0입니다
- 셸 통합(wt config shell install)을 해야 디렉터리 이동이 됩니다
- Windows에선 wt가 Windows Terminal과 겹쳐 git-wt로 설치됩니다

## 영수증

- TESIGN이 처음 본 시각: 2026-09-13 07:43 UTC
- 출처 등록: 2025-10-17 22:13 UTC
- 선정: 2026-09-13 11:32 UTC
- TESIGN 게재: 2026-09-13 11:32 UTC
- 소개 글 마지막 수정: 2026-09-15 04:36 UTC

## 읽는 법

- 이 파일은 tesign.com 항목 페이지와 같은 빌드에서 같은 데이터로 만들어졌습니다. 소개 글은 편집자가 쓴 것이고, 숫자는 저장된 관측값입니다.
- JSON의 null은 관측하지 않았다는 뜻입니다 — 0이 아닙니다. 마크다운에서는 [확인 필요]로 적습니다.
- 별 총합 = GitHub에서 마지막으로 확인한 값(stars_checked_at) + 그 뒤 GH Archive에서 관측한 증가. 24h·7d·30d 증가는 GH Archive 시간별 이벤트를 기준 시각(as_of)까지 합한 값. 우리 점수는 없습니다.
- 요약이며 법적 조언이 아닙니다.

[대표 이미지] https://tesign.com/img/worktrunk-47fd19d15d.png
