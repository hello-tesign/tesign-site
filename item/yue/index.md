# YuE2

> 가사·스타일로 노래 생성 — 곡을 만들고, 기존 곡을 다시 부르게 하고, 부분만 고칩니다.

- 페이지: https://tesign.com/item/yue/
- JSON: https://tesign.com/item/yue/index.json
- 영어 마크다운: https://tesign.com/en/item/yue/index.md
- 생성 시각: 2026-09-22 07:26 UTC

## 순위

- 미디어 분야 15위 (기준 2026-09-22 03:00 UTC)

## 숫자

- 별 10,002 — GitHub에서 2026-09-22 00:37 UTC 확인
- 7일 +107은 GH Archive 관측 (기준 2026-09-22 03:00 UTC)
- 별 총합 = GitHub에서 마지막으로 확인한 값(stars_checked_at) + 그 뒤 GH Archive에서 관측한 증가. 24h·7d·30d 증가는 GH Archive 시간별 이벤트를 기준 시각(as_of)까지 합한 값. 우리 점수는 없습니다.

## 한눈에 보는 사실

- 라이선스: Apache-2.0 (허용적) — https://spdx.org/licenses/Apache-2.0.html
- 사용 범위: 상업 이용·수정·재배포 가능. 고지 유지, 바꾼 부분은 표시.
- 오픈소스: 예
- 언어: Python
- 플랫폼: linux
- 분류: AI · 미디어
- 태그: music · audio · models
- 바로 쓰기: 설치해서 쓰기
- 출처: GitHub https://github.com/multimodal-art-projection/yue
- RUN: https://map-yue2.github.io/

## 활동

- 마지막 커밋: 2026-09-20 14:04 UTC
- 최근 릴리스: yue2-v0.1.6 (2026-09-09)
- 기여자: 9
- 열린 이슈 (PR 포함): 33
- 만든 이: 조직
- GitHub 확인 시각: 2026-09-22 00:37 UTC

## TESIGN TAKE

곡을 먼저 악보로 계획하고 그 악보를 고쳐 다시 만들 수 있다는 점이, 뽑고 끝나는 생성기와 다릅니다.

## 왜 볼 만한가

음악 생성 도구는 한 번 뽑고 나면 일부만 고치기가 어렵습니다. YuE2는 곡 구조를 기호로 먼저 계획한 다음 생성하고, 제로샷 커버와 에이전트 방식 편집까지 같은 흐름 안에 둡니다. Python으로 쓰였고 Apache-2.0으로 공개돼 있으며 데모 페이지가 따로 있습니다. 직접 돌리는 모델이라 실행 환경은 준비해야 합니다.

## 이걸로 무엇을 만들 수 있나

- 영상에 붙일 배경 음악을 직접 만드는 제작 라인
- 기존 곡을 다른 목소리로 다시 부르게 하는 실험

## 누구에게 맞나

- 영상 제작자 — 배경 음악을 직접 만들어 쓰고 싶을 때(비상업 한정)
- 음악 연구자 — 기호 계획과 오디오 생성을 함께 다룰 때
- ML 엔지니어 — GPU 서버에서 음악 모델을 돌려 볼 때

## 5분 안에 시작하기

```
$ git clone https://github.com/multimodal-art-projection/YuE.git
$ cd YuE
$ python3.12 -m venv .venv
$ source .venv/bin/activate
$ python -m pip install .
$ python examples/generate.py --output outputs/first-song
```

## 주의할 점

- Linux·Python 3.12·NVIDIA GPU(VRAM 24 GB)가 필요합니다
- 코드는 Apache-2.0이지만 모델 가중치는 CC BY-NC 4.0(비상업)입니다
- 첫 실행 때 Hugging Face에서 모델 파일을 내려받습니다

## 영수증

- TESIGN이 처음 본 시각: 2026-09-13 07:43 UTC
- 출처 등록: 2025-01-23 06:21 UTC
- 선정: 2026-09-13 11:32 UTC
- TESIGN 게재: 2026-09-13 11:32 UTC
- 소개 글 마지막 수정: 2026-09-15 04:36 UTC

## 읽는 법

- 이 파일은 tesign.com 항목 페이지와 같은 빌드에서 같은 데이터로 만들어졌습니다. 소개 글은 편집자가 쓴 것이고, 숫자는 저장된 관측값입니다.
- JSON의 null은 관측하지 않았다는 뜻입니다 — 0이 아닙니다. 마크다운에서는 [확인 필요]로 적습니다.
- 별 총합 = GitHub에서 마지막으로 확인한 값(stars_checked_at) + 그 뒤 GH Archive에서 관측한 증가. 24h·7d·30d 증가는 GH Archive 시간별 이벤트를 기준 시각(as_of)까지 합한 값. 우리 점수는 없습니다.
- 요약이며 법적 조언이 아닙니다.

[대표 이미지] https://tesign.com/img/yue-9a684df443.png
