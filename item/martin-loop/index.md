# MartinLoop

> 에이전트 실행 통제 — 코딩 에이전트에게 예산 한도와 검증 절차를 채워, "완료했다"는 말 대신 증거가 붙은 영수증을 받게 만듭니다.

- 페이지: https://tesign.com/item/martin-loop/
- JSON: https://tesign.com/item/martin-loop/index.json
- 영어 마크다운: https://tesign.com/en/item/martin-loop/index.md
- 생성 시각: 2026-09-19 23:10 UTC

## 숫자

- 별 190 — GitHub에서 2026-09-19 22:59 UTC 확인
- 7일 +25은 GH Archive 관측 (기준 2026-09-19 18:00 UTC)
- 별 총합 = GitHub에서 마지막으로 확인한 값(stars_checked_at) + 그 뒤 GH Archive에서 관측한 증가. 24h·7d·30d 증가는 GH Archive 시간별 이벤트를 기준 시각(as_of)까지 합한 값. 우리 점수는 없습니다.

## 한눈에 보는 사실

- 라이선스: Apache-2.0 (허용적) — https://spdx.org/licenses/Apache-2.0.html
- 사용 범위: 상업 이용·수정·재배포 가능. 고지 유지, 바꾼 부분은 표시.
- 오픈소스: 예
- 언어: TypeScript
- 플랫폼: cli
- 분류: 개발 도구 · AI
- 태그: ai-agents · coding-agent · governance · budget-control · cli
- 출처: GitHub https://github.com/keesan12/martin-loop
- TRY: https://martinloop.com/

## 활동

- 마지막 커밋: 2026-09-19 02:58 UTC
- 최근 릴리스: v0.6.5 (2026-09-19)
- 기여자: 5
- 열린 이슈 (PR 포함): 0
- 만든 이: 개인
- GitHub 확인 시각: 2026-09-19 22:59 UTC

## TESIGN TAKE

코딩 에이전트를 더 똑똑하게 만드는 도구가 아니라, "이미 똑똑한 에이전트가 통제 없이 도는 것"이 문제라고 짚은 관점이 눈에 띕니다.

## 왜 볼 만한가

작은 수정처럼 보이던 작업이 수십 번의 재시도와 예산 초과, 아무도 못 믿는 diff로 끝나는 일이 흔합니다. MartinLoop는 목표·검증 명령·예산·시도 횟수를 하나의 실행 계약으로 묶어, Claude Code·Codex 같은 코딩 에이전트를 감쌉니다. 완료 판정은 그 실행과 작업공간에 묶인 새 검증 증거가 있어야만 나오고("VERIFIED"는 코드가 버그 없다는 뜻이 아니라 설정한 검사를 통과했다는 뜻), 모든 실행은 martin dossier로 다시 확인할 수 있는 영수증을 남깁니다.

## 이걸로 무엇을 만들 수 있나

- 코딩 에이전트에게 맡긴 작업에 하드 예산·시도 한도를 걸어 폭주를 막기
- 완료 주장에 독립 검증 명령(예: npm test)을 묶어, 통과 증거 없이는 끝나지 않게 하기
- 여러 에이전트의 실행 결과를 같은 영수증 형식으로 비교하기

## 누구에게 맞나

- 코딩 에이전트에게 작업을 맡기고 결과를 검토해야 하는 개발자
- 에이전트 실행 비용이 예측 밖으로 튄 걸 겪어 본 팀
- 여러 에이전트·모델의 실행을 같은 기준으로 비교하고 싶은 사람

## 5분 안에 시작하기

```
# 바로 써보기:
$ npx -y martin-loop@latest start
$ npx -y martin-loop@latest demo
$ cd martin-loop-demo && npm install
$ npx -y martin-loop@latest run "작업 설명" --verify "npm test" --budget-usd 2 --max-iterations 1
$ npx -y martin-loop@latest dossier --latest
```

## 주의할 점

- Apache-2.0 · Node.js 20 이상 필요
- 호스팅 대시보드와 팀 기능은 아직 얼리 액세스 단계입니다(공식 홈페이지 기준)
- "VERIFIED"는 설정한 검증 명령을 통과했다는 뜻일 뿐, 코드가 안전하다는 보증은 아니라고 README가 직접 밝힙니다

## 영수증

- TESIGN이 처음 본 시각: 2026-09-15 23:33 UTC
- 출처 등록: 2026-04-04 05:34 UTC
- 선정: 2026-09-17 01:24 UTC
- TESIGN 게재: 2026-09-17 01:24 UTC
- 소개 글 마지막 수정: 2026-09-17 01:26 UTC

## 읽는 법

- 이 파일은 tesign.com 항목 페이지와 같은 빌드에서 같은 데이터로 만들어졌습니다. 소개 글은 편집자가 쓴 것이고, 숫자는 저장된 관측값입니다.
- JSON의 null은 관측하지 않았다는 뜻입니다 — 0이 아닙니다. 마크다운에서는 [확인 필요]로 적습니다.
- 별 총합 = GitHub에서 마지막으로 확인한 값(stars_checked_at) + 그 뒤 GH Archive에서 관측한 증가. 24h·7d·30d 증가는 GH Archive 시간별 이벤트를 기준 시각(as_of)까지 합한 값. 우리 점수는 없습니다.
- 요약이며 법적 조언이 아닙니다.

[대표 이미지] https://tesign.com/img/martin-loop-a1cb6e24d0.png
