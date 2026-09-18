# colibri

> 내 컴퓨터에서 큰 모델 실행 — 큰 MoE 모델을 지금 가진 컴퓨터에서 돌립니다.

- 페이지: https://tesign.com/item/colibri/
- JSON: https://tesign.com/item/colibri/index.json
- 영어 마크다운: https://tesign.com/en/item/colibri/index.md
- 생성 시각: 2026-09-18 06:40 UTC

## 순위

- 역대 172위 · 이번 주 급상승 7위 · 인프라 분야 9위 (기준 2026-09-18 01:00 UTC)

## 숫자

- 별 35,635 — GitHub에서 2026-09-17 18:40 UTC 확인 (+16 확인 이후 관측)
- 7일 +1,012은 GH Archive 관측 (기준 2026-09-18 01:00 UTC)
- 24h +56 ★ · 30d +1,097 ★ (기준 2026-09-18 01:00 UTC)
- Show HN 937점 — 2026-09-13 15:23 UTC 관측
- 별 총합 = GitHub에서 마지막으로 확인한 값(stars_checked_at) + 그 뒤 GH Archive에서 관측한 증가. 24h·7d·30d 증가는 GH Archive 시간별 이벤트를 기준 시각(as_of)까지 합한 값. 우리 점수는 없습니다.

## 한눈에 보는 사실

- 라이선스: Apache-2.0 (허용적) — https://spdx.org/licenses/Apache-2.0.html
- 사용 범위: 상업 이용·수정·재배포 가능. 고지 유지, 바꾼 부분은 표시.
- 오픈소스: 예
- 언어: C
- 플랫폼: linux · macos · windows · cli
- 분류: AI · 인프라
- 태그: local-models · inference · c
- 바로 쓰기: 설치해서 쓰기
- 출처: Show HN https://github.com/JustVugg/colibri · GitHub https://github.com/justvugg/colibri
- RUN: https://justvugg.github.io/colibri

## 활동

- 마지막 커밋: 2026-09-17 14:41 UTC
- 최근 릴리스: v1.11.0 (2026-09-13)
- 기여자: 150
- 열린 이슈 (PR 포함): 129
- 만든 이: 개인
- GitHub 확인 시각: 2026-09-17 18:40 UTC

## 선정 신호와 근거

- 교차 신호 · Show HN + GitHub

## TESIGN TAKE

큰 모델을 메모리에 '넣는' 대신 '배치한다'는 발상이 실제로 돌아가는지 직접 재 볼 수 있는 엔진입니다.

## 왜 볼 만한가

큰 MoE 모델은 대개 메모리에 다 올릴 수 없어 장비부터 바꾸라는 답이 돌아옵니다. colibri는 전문가(expert) 가중치를 필요할 때마다 디스크에서 읽어 오는 방식으로, 이미 가진 하드웨어에서 실행하는 쪽을 택했습니다. 순수 C로 쓰였고 의존성이 없으며 Apache-2.0으로 공개돼 있습니다. 지원하는 모델 범위는 저장소 문서에서 확인해야 합니다.

## 이걸로 무엇을 만들 수 있나

- 서버 한 대에서 돌리는 사내 로컬 모델 실험대
- 의존성 없이 빌드해 제품에 붙이는 추론 바이너리
- 장비를 바꾸기 전에 성능을 재보는 비교 테스트

## 누구에게 맞나

- ML 엔지니어 — 장비를 늘리기 전에 로컬 추론 한계를 재 볼 때
- 인프라 담당자 — 사내 서버 한 대로 큰 모델을 시험할 때
- 시스템 개발자 — 순수 C 추론 코드를 읽고 고쳐 보고 싶을 때

## 5분 안에 시작하기

```
# 릴리스에서 Linux·macOS·Windows용 빌드를 받거나(Python 3 필요) 소스 빌드:
$ git clone https://github.com/JustVugg/colibri && cd colibri/c
$ ./setup.sh
# 모델(GLM-5.2 int4 약 372 GB)을 Hugging Face에서 받은 뒤:
$ COLI_MODEL=/nvme/glm52_i4 ./coli chat
$ ./coli web  --model /nvme/glm52_i4
```

## 주의할 점

- 기준 모델 GLM-5.2는 디스크 372 GB, RAM 16 GB 이상이 필요합니다
- 속도는 디스크에 좌우돼 느린 드라이브에선 초당 1토큰 미만일 수 있습니다
- 속도 보장은 없다고 밝힌 연구 성격의 엔진입니다

## 영수증

- TESIGN이 처음 본 시각: 2026-09-13 07:43 UTC
- 출처 등록: 2026-07-01 12:27 UTC
- 선정: 2026-09-13 11:32 UTC
- TESIGN 게재: 2026-09-13 11:32 UTC
- 소개 글 마지막 수정: 2026-09-15 04:36 UTC

## 읽는 법

- 이 파일은 tesign.com 항목 페이지와 같은 빌드에서 같은 데이터로 만들어졌습니다. 소개 글은 편집자가 쓴 것이고, 숫자는 저장된 관측값입니다.
- JSON의 null은 관측하지 않았다는 뜻입니다 — 0이 아닙니다. 마크다운에서는 [확인 필요]로 적습니다.
- 별 총합 = GitHub에서 마지막으로 확인한 값(stars_checked_at) + 그 뒤 GH Archive에서 관측한 증가. 24h·7d·30d 증가는 GH Archive 시간별 이벤트를 기준 시각(as_of)까지 합한 값. 우리 점수는 없습니다.
- 요약이며 법적 조언이 아닙니다.

[대표 이미지] https://tesign.com/img/colibri-cb1362e93a.png
