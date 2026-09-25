# package-doctor

> 취약 패키지 점검 — 파이썬 의존성 중 실제로 뚫리고 있는 것과 고칠 사람이 없는 것을 가려내는 점검 도구.

- 페이지: https://tesign.com/item/package-doctor/
- JSON: https://tesign.com/item/package-doctor/index.json
- 영어 마크다운: https://tesign.com/en/item/package-doctor/index.md
- 생성 시각: 2026-09-25 03:06 UTC

## 숫자

- 별 9 — GitHub에서 2026-09-25 02:57 UTC 확인
- 7일 별 증가 관측 없음 (GH Archive) (기준 2026-09-23 20:00 UTC)
- Show HN 4점 — 2026-09-23 03:26 UTC 관측
- 별 총합 = GitHub에서 마지막으로 확인한 값(stars_checked_at) + 그 뒤 GH Archive에서 관측한 증가. 24h·7d·30d 증가는 GH Archive 시간별 이벤트를 기준 시각(as_of)까지 합한 값. 우리 점수는 없습니다.

## 한눈에 보는 사실

- 라이선스: MIT (허용적) — https://spdx.org/licenses/MIT.html
- 사용 범위: 상업 이용·수정·재배포 가능. 저작권 고지는 유지.
- 오픈소스: 예
- 언어: Python
- 플랫폼: cli
- 분류: 보안 · 개발 도구
- 태그: 보안 점검 · 파이썬 · 의존성 · claude code 훅
- 바로 쓰기: 설치해서 쓰기
- 출처: Show HN https://github.com/binuka200/package-doctor
- INSTALL: https://pypi.org/project/package-doctor

## 활동

- 마지막 커밋: 2026-09-25 00:40 UTC
- 최근 릴리스: v1.0.5 (2026-09-24)
- 기여자: 3
- 열린 이슈 (PR 포함): 0
- 만든 이: 개인
- GitHub 확인 시각: 2026-09-25 02:57 UTC

## 선정 신호와 근거

- 신규 · 생성 1h 만에 포착

## TESIGN TAKE

취약점 수를 그냥 나열하지 않고 "지금 뚫려 있는가·고칠 사람이 있는가" 두 축으로 걸러 낸다는 점이 다른 스캐너와 갈린다.

## 왜 볼 만한가

의존성 하나에 취약점 경고가 수십 개씩 쌓이면 뭐부터 봐야 할지 알기 어렵다. package-doctor는 CISA의 실제 악용 목록과 EPSS 점수로 순서를 매기고, 신뢰 경계(외부 입력을 다루는 자리)에 있으면서 고칠 사람도 없는 패키지만 "교체" 대상으로 올린다. 나머지는 "조용함"으로 넘긴다.

## 이걸로 무엇을 만들 수 있나

- 파이썬으로 만들었고 pip install package-doctor로 받는다. uv.lock·poetry.lock·Pipfile.lock·requirements.txt 등을 읽고, 약 1,500개 패키지를 사람이 직접 검토한 지도를 근거로 신뢰 경계 여부를 판단한다. Claude Code 훅으로 쓰면 에이전트가 새 패키지를 설치하려 할 때 지어낸 이름·최근 등록·위험 패키지를 막는다. CI·pre-commit·SARIF 출력도 지원한다.

## 누구에게 맞나

- 파이썬 프로젝트를 운영하는 개발자, AI 코딩 에이전트가 마음대로 패키지를 넣는 걸 막고 싶은 팀.

## 5분 안에 시작하기

```
# pip install package-doctor로 설치하고 package-doctor scan을 실행한다.
```

## 주의할 점

- 신뢰 경계 판단은 사람이 검토한 약 1,500개 패키지 지도에 의존하므로, 그 목록에 없는 패키지는 "확인 안 됨"으로 남는다. 파이썬 프로젝트 전용이다.

## 영수증

- TESIGN이 처음 본 시각: 2026-09-19 02:09 UTC
- 출처 등록: 2026-09-19 00:27 UTC
- 선정: 2026-09-22 05:53 UTC
- TESIGN 게재: 2026-09-22 05:53 UTC
- 소개 글 마지막 수정: 2026-09-22 05:53 UTC

## 읽는 법

- 이 파일은 tesign.com 항목 페이지와 같은 빌드에서 같은 데이터로 만들어졌습니다. 소개 글은 편집자가 쓴 것이고, 숫자는 저장된 관측값입니다.
- JSON의 null은 관측하지 않았다는 뜻입니다 — 0이 아닙니다. 마크다운에서는 [확인 필요]로 적습니다.
- 별 총합 = GitHub에서 마지막으로 확인한 값(stars_checked_at) + 그 뒤 GH Archive에서 관측한 증가. 24h·7d·30d 증가는 GH Archive 시간별 이벤트를 기준 시각(as_of)까지 합한 값. 우리 점수는 없습니다.
- 요약이며 법적 조언이 아닙니다.

[대표 이미지] https://tesign.com/img/package-doctor-888d02a454.png
