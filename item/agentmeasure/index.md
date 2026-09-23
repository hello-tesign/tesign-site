# AgentMeasure

> 에이전트 기록 점검 — Codex·Claude Code 세션 기록을 읽어 반복 실패와 재시도를 증거와 함께 찾아 주는 점검 도구.

- 페이지: https://tesign.com/item/agentmeasure/
- JSON: https://tesign.com/item/agentmeasure/index.json
- 영어 마크다운: https://tesign.com/en/item/agentmeasure/index.md
- 생성 시각: 2026-09-23 04:12 UTC

## 숫자

- 별 216 — GitHub에서 2026-09-23 01:47 UTC 확인
- 7일 별 증가 관측 없음 (GH Archive) (기준 2026-09-22 23:00 UTC)
- Show HN 2점 — 2026-09-23 02:25 UTC 관측
- 별 총합 = GitHub에서 마지막으로 확인한 값(stars_checked_at) + 그 뒤 GH Archive에서 관측한 증가. 24h·7d·30d 증가는 GH Archive 시간별 이벤트를 기준 시각(as_of)까지 합한 값. 우리 점수는 없습니다.

## 한눈에 보는 사실

- 라이선스: MIT (허용적) — https://spdx.org/licenses/MIT.html
- 사용 범위: 상업 이용·수정·재배포 가능. 저작권 고지는 유지.
- 오픈소스: 예
- 언어: Python
- 플랫폼: cli
- 분류: 개발 도구 · AI
- 태그: 에이전트 점검 · claude code · codex · 로컬 분석
- 바로 쓰기: 설치해서 쓰기
- 출처: Show HN https://github.com/roy-tong/AgentMeasure
- INSTALL: https://roy-tong.github.io/AgentMeasure

## 활동

- 마지막 커밋: 2026-09-22 22:23 UTC
- 최근 릴리스: v0.4.1 (2026-09-22)
- 기여자: 9
- 열린 이슈 (PR 포함): 10
- 만든 이: 개인
- GitHub 확인 시각: 2026-09-23 01:47 UTC

## 선정 신호와 근거

- 신규 · 생성 0h 만에 포착

## TESIGN TAKE

증거가 없는 항목을 조용히 0으로 채우지 않고 UNPROVABLE이라고 따로 적는다는 원칙이 이 도구를 믿을 만하게 만든다.

## 왜 볼 만한가

에이전트가 같은 파일을 몇 번이나 다시 고치고 도구 호출이 잇따라 실패해도, 로그 안에 묻혀 있으면 알아채기 어렵다. AgentMeasure는 이미 있는 세션 로그를 읽어 중복 기록·재시도 사슬·연속 도구 실패를 찾아내고, 증거가 없으면 "모른다"고 적을지언정 0으로 지어내지 않는다.

## 이걸로 무엇을 만들 수 있나

- 파이썬으로 만들었고 PyPI에 올라 있어 저장소를 내려받지 않고 pipx로 바로 돌린다. 개인 로그 없이 써 보는 데모 모드, 최근 7일 세션을 점검하는 check, Claude Code 어댑터를 지정하는 옵션이 있다. 분석은 전부 로컬에서 이뤄지고 네트워크 호출이 없다. 결과는 터미널 요약과 로컬 HTML 보고서로 나온다.

## 누구에게 맞나

- Codex·Claude Code를 매일 쓰는 개발자, 에이전트 도구를 점검하고 고치는 사람.

## 5분 안에 시작하기

```
# pipx run agentmeasure demo로 합성 예제부터 먼저 돌려 본다.
```

## 주의할 점

- 코덱스·클로드 코드가 남긴 로그 형식에 맞춰 만들어져 다른 도구의 세션은 다루지 않는다. 결제·정산 관련 기능(settle)은 아직 개념 단계라고 저장소가 밝힌다.

## 영수증

- TESIGN이 처음 본 시각: 2026-09-19 10:09 UTC
- 출처 등록: 2026-09-19 09:16 UTC
- 선정: 2026-09-22 05:53 UTC
- TESIGN 게재: 2026-09-22 05:53 UTC
- 소개 글 마지막 수정: 2026-09-22 05:53 UTC

## 읽는 법

- 이 파일은 tesign.com 항목 페이지와 같은 빌드에서 같은 데이터로 만들어졌습니다. 소개 글은 편집자가 쓴 것이고, 숫자는 저장된 관측값입니다.
- JSON의 null은 관측하지 않았다는 뜻입니다 — 0이 아닙니다. 마크다운에서는 [확인 필요]로 적습니다.
- 별 총합 = GitHub에서 마지막으로 확인한 값(stars_checked_at) + 그 뒤 GH Archive에서 관측한 증가. 24h·7d·30d 증가는 GH Archive 시간별 이벤트를 기준 시각(as_of)까지 합한 값. 우리 점수는 없습니다.
- 요약이며 법적 조언이 아닙니다.

[대표 이미지] https://tesign.com/img/agentmeasure-50e9355166.png
