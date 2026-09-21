# Headroom

> 에이전트가 읽는 것 압축 — 도구 출력과 로그를 모델에 넣기 전에 줄여 둡니다.

- 페이지: https://tesign.com/item/headroom/
- JSON: https://tesign.com/item/headroom/index.json
- 영어 마크다운: https://tesign.com/en/item/headroom/index.md
- 생성 시각: 2026-09-21 05:58 UTC

## 순위

- 역대 74위 (기준 2026-09-21 00:00 UTC)

## 숫자

- 별 73,097 — GitHub에서 2026-09-19 22:58 UTC 확인
- 7일 +53은 GH Archive 관측 (기준 2026-09-21 00:00 UTC)
- 별 총합 = GitHub에서 마지막으로 확인한 값(stars_checked_at) + 그 뒤 GH Archive에서 관측한 증가. 24h·7d·30d 증가는 GH Archive 시간별 이벤트를 기준 시각(as_of)까지 합한 값. 우리 점수는 없습니다.

## 한눈에 보는 사실

- 라이선스: Apache-2.0 (허용적) — https://spdx.org/licenses/Apache-2.0.html
- 사용 범위: 상업 이용·수정·재배포 가능. 고지 유지, 바꾼 부분은 표시.
- 오픈소스: 예
- 언어: Python
- 플랫폼: windows · macos · linux · cli
- 분류: AI · 라이브러리
- 태그: context · tokens · mcp
- 바로 쓰기: 개발자용
- 출처: GitHub https://github.com/headroomlabs-ai/headroom
- USE PACKAGE: https://docs.headroomlabs.ai/docs

## 활동

- 마지막 커밋: 2026-09-19 19:07 UTC
- 최근 릴리스: v0.37.0 (2026-08-27)
- 기여자: 268
- 열린 이슈 (PR 포함): 685
- 만든 이: 조직
- GitHub 확인 시각: 2026-09-19 22:58 UTC

## TESIGN TAKE

에이전트 코드를 안 고치고 프록시로 끼울 수 있어서, 절감 효과를 자기 트래픽으로 먼저 재 보기 좋습니다.

## 왜 볼 만한가

도구 출력과 로그는 대개 그대로 모델에 들어가서, 정작 중요한 맥락이 창 밖으로 밀려납니다. headroom은 그 앞단에 붙어 도구 출력·로그·파일·RAG 청크를 줄인 다음 넘깁니다. 라이브러리·프록시·MCP 서버 세 가지 형태로 붙일 수 있고 Apache-2.0으로 공개돼 있습니다. 저장소 설명은 코딩 에이전트 20%, JSON 60~95% 절감을 내걸지만 이는 저장소 쪽 수치입니다.

## 이걸로 무엇을 만들 수 있나

- 긴 로그를 줄여 넘기는 에이전트 앞단 프록시
- 토큰 비용을 낮추는 사내 RAG 전처리 단계

## 누구에게 맞나

- 개발자 — 긴 로그·도구 출력이 컨텍스트를 밀어낼 때
- 인프라 담당자 — 팀 전체 토큰 비용을 앞단에서 줄일 때
- RAG 개발자 — 검색 청크를 모델에 넣기 전에 줄일 때

## 5분 안에 시작하기

```
$ pip install "headroom-ai[all]"
$ headroom wrap claude
$ headroom doctor
# 코드 수정 없는 프록시 모드:
$ headroom proxy --port 8787
```

## 주의할 점

- wrap 명령은 Serena를 사용자 범위에 함께 설치합니다(--code-memory none으로 생략)
- Intel 맥은 네이티브 휠이 없어 Docker 설치를 권합니다
- 절감 수치는 저장소 자체 벤치마크이며 반복적인 데이터일수록 큽니다

## 영수증

- TESIGN이 처음 본 시각: 2026-09-13 07:43 UTC
- 출처 등록: 2026-01-07 19:58 UTC
- 선정: 2026-09-13 11:32 UTC
- TESIGN 게재: 2026-09-13 11:32 UTC
- 소개 글 마지막 수정: 2026-09-15 04:36 UTC

## 읽는 법

- 이 파일은 tesign.com 항목 페이지와 같은 빌드에서 같은 데이터로 만들어졌습니다. 소개 글은 편집자가 쓴 것이고, 숫자는 저장된 관측값입니다.
- JSON의 null은 관측하지 않았다는 뜻입니다 — 0이 아닙니다. 마크다운에서는 [확인 필요]로 적습니다.
- 별 총합 = GitHub에서 마지막으로 확인한 값(stars_checked_at) + 그 뒤 GH Archive에서 관측한 증가. 24h·7d·30d 증가는 GH Archive 시간별 이벤트를 기준 시각(as_of)까지 합한 값. 우리 점수는 없습니다.
- 요약이며 법적 조언이 아닙니다.

[대표 이미지] https://tesign.com/img/headroom-9b4b13570c.png
