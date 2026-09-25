# tokentab

> 에이전트 사용자용 비용 계산 — 에이전트 세션 기록을 읽어 모델·프로젝트·날짜별 비용을 계산합니다.

- 페이지: https://tesign.com/item/tokentab/
- JSON: https://tesign.com/item/tokentab/index.json
- 영어 마크다운: https://tesign.com/en/item/tokentab/index.md
- 생성 시각: 2026-09-25 03:06 UTC

## 숫자

- 별 1,144 — GitHub에서 2026-09-19 22:58 UTC 확인
- 7일 별 증가 관측 없음 (GH Archive) (기준 2026-09-23 20:00 UTC)
- 별 총합 = GitHub에서 마지막으로 확인한 값(stars_checked_at) + 그 뒤 GH Archive에서 관측한 증가. 24h·7d·30d 증가는 GH Archive 시간별 이벤트를 기준 시각(as_of)까지 합한 값. 우리 점수는 없습니다.

## 한눈에 보는 사실

- 라이선스: MIT (허용적) — https://spdx.org/licenses/MIT.html
- 사용 범위: 상업 이용·수정·재배포 가능. 저작권 고지는 유지.
- 오픈소스: 예
- 언어: Python
- 플랫폼: cli
- 분류: 개발 도구 · 생산성
- 태그: cost · cli · agents
- 바로 쓰기: 설치해서 쓰기
- 출처: GitHub https://github.com/crwdla/tokentab
- INSTALL: https://github.com/crwdla/tokentab

## 활동

- 마지막 커밋: 2026-09-19 20:40 UTC
- 최근 릴리스: 릴리스 없음
- 기여자: 1
- 열린 이슈 (PR 포함): 4
- 만든 이: 개인
- GitHub 확인 시각: 2026-09-19 22:58 UTC

## TESIGN TAKE

에이전트 CLI를 여럿 쓰는 사람이 이번 달 비용을 한 표로 보게 해 주는, 작고 명확한 도구입니다.

## 왜 볼 만한가

에이전트 CLI를 여러 개 같이 쓰면 이번 달에 어디서 얼마를 썼는지 도구마다 따로 들여다봐야 합니다. tokentab은 Claude Code·Codex·Gemini CLI가 남긴 세션 로그를 읽어 모델별·프로젝트별·날짜별 비용으로 정리해 줍니다. 명령 한 줄로 도는 Python CLI이고 MIT 라이선스입니다. 저장소가 만들어진 지는 얼마 되지 않았습니다.

## 이걸로 무엇을 만들 수 있나

- 월별 에이전트 비용을 정리하는 사내 리포트
- 프로젝트별 비용을 붙여 보내는 고객 정산 자료
- 주간 사용량을 자동으로 뽑는 예약 작업

## 누구에게 맞나

- 1인 개발자 — 에이전트 비용이 어디서 나가는지 알고 싶을 때
- 프리랜서 — 프로젝트별 AI 비용을 정산에 붙일 때
- 팀 관리자 — 모델별 사용 비중을 월 단위로 볼 때

## 5분 안에 시작하기

```
$ git clone https://github.com/crwdla/tokentab
$ cd tokentab
$ pip install .
$ python cli.py
# 브라우저 대시보드는 python cli.py -web (localhost:4747)
```

## 주의할 점

- 가격표는 손으로 관리하는 표라 모델명이 안 맞으면 $0.00으로 나옵니다
- 작업 종류(코딩·디버깅 등) 분류는 추정값이라고 명시합니다
- Cursor 지원은 아직 미완성 스텁입니다

## 영수증

- TESIGN이 처음 본 시각: 2026-09-13 07:43 UTC
- 출처 등록: 2026-09-07 17:18 UTC
- 선정: 2026-09-13 11:32 UTC
- TESIGN 게재: 2026-09-13 11:32 UTC
- 소개 글 마지막 수정: 2026-09-15 04:36 UTC

## 읽는 법

- 이 파일은 tesign.com 항목 페이지와 같은 빌드에서 같은 데이터로 만들어졌습니다. 소개 글은 편집자가 쓴 것이고, 숫자는 저장된 관측값입니다.
- JSON의 null은 관측하지 않았다는 뜻입니다 — 0이 아닙니다. 마크다운에서는 [확인 필요]로 적습니다.
- 별 총합 = GitHub에서 마지막으로 확인한 값(stars_checked_at) + 그 뒤 GH Archive에서 관측한 증가. 24h·7d·30d 증가는 GH Archive 시간별 이벤트를 기준 시각(as_of)까지 합한 값. 우리 점수는 없습니다.
- 요약이며 법적 조언이 아닙니다.

[대표 이미지] https://tesign.com/img/tokentab-44d596e87d.png
