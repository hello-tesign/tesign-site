# Roborock Local Server

> 로봇청소기 인터넷 없이 — 로보락 로봇청소기의 클라우드를 집 안 서버로 대신해, 인터넷 없이도 지도와 제어를 쓰게 하는 프로그램.

- 페이지: https://tesign.com/item/roborock-local-server/
- JSON: https://tesign.com/item/roborock-local-server/index.json
- 영어 마크다운: https://tesign.com/en/item/roborock-local-server/index.md
- 생성 시각: 2026-10-06 02:30 UTC

## 숫자

- 별 876 — GitHub에서 2026-10-06 02:15 UTC 확인
- 7일 별 증가 관측 없음 (GH Archive) (기준 2026-10-05 20:00 UTC)
- Show HN 2점 — 2026-10-05 03:58 UTC 관측
- 별 총합 = GitHub에서 마지막으로 확인한 값(stars_checked_at) + 그 뒤 GH Archive에서 관측한 증가. 24h·7d·30d 증가는 GH Archive 시간별 이벤트를 기준 시각(as_of)까지 합한 값. 우리 점수는 없습니다.

## 한눈에 보는 사실

- 라이선스: MIT (허용적) — https://spdx.org/licenses/MIT.html
- 사용 범위: 상업 이용·수정·재배포 가능. 저작권 고지는 유지.
- 오픈소스: 예
- 언어: Python
- 플랫폼: [확인 필요]
- 분류: 하드웨어
- 태그: 스마트홈 · 로봇청소기 · 자체 호스팅 · 개인정보
- 바로 쓰기: 직접 서버에
- 출처: Show HN https://github.com/Python-roborock/local_roborock_server
- SELF-HOST: https://python-roborock.github.io/local_roborock_server

## 활동

- 마지막 커밋: 2026-10-02 12:49 UTC
- 최근 릴리스: v1.2.0 (2026-09-27)
- 기여자: 19
- 열린 이슈 (PR 포함): 32
- 만든 이: 조직
- GitHub 확인 시각: 2026-10-06 02:15 UTC

## 선정 신호와 근거

- 신규 · 생성 0h 만에 포착

## TESIGN TAKE

기기를 뜯지 않고 소프트웨어만으로 클라우드 의존을 끊는다는 점이 다르다.

## 왜 볼 만한가

로보락 청소기는 지도를 기기에 저장하면서도 지도 데이터를 반드시 로보락 클라우드로 보내고, 클라우드에 닿지 못하면 네트워크를 계속 다시 시작한다. 그래서 인터넷을 끊으면 제대로 쓸 수 없었다.

## 이걸로 무엇을 만들 수 있나

- 집 안 네트워크에 HTTPS·MQTT 서버를 띄우고 DNS를 돌려, 청소기가 로보락 대신 이 서버에 붙게 한다. 분해·납땜·부트로더 해제 같은 기기 개조가 필요 없고, 클라우드에 등록한 적 없는 새 청소기도 지원한다. 도커 컴포즈나 Home Assistant 애드온으로 설치한다.

## 누구에게 맞나

- 로보락 청소기를 인터넷과 분리해 쓰고 싶은 Home Assistant 사용자.

## 5분 안에 시작하기

```
# 문서의 설치 안내에서 네트워크 조건을 확인하고, 도커 컴포즈나 Home Assistant 애드온으로 서버를 띄운 뒤 다른 컴퓨터에서 온보딩을 실행한다.
```

## 주의할 점

- DNS 변경과 인증서 설정 등 집 네트워크를 직접 다뤄야 한다. 로보락이 인증 방식을 바꾸면 영향을 받을 수 있다고 README도 밝힌다.

## 영수증

- TESIGN이 처음 본 시각: 2026-09-28 13:44 UTC
- 출처 등록: 2026-09-28 12:52 UTC
- 선정: 2026-09-29 02:28 UTC
- TESIGN 게재: 2026-09-29 02:28 UTC
- 소개 글 마지막 수정: 2026-09-29 02:28 UTC

## 읽는 법

- 이 파일은 tesign.com 항목 페이지와 같은 빌드에서 같은 데이터로 만들어졌습니다. 소개 글은 편집자가 쓴 것이고, 숫자는 저장된 관측값입니다.
- JSON의 null은 관측하지 않았다는 뜻입니다 — 0이 아닙니다. 마크다운에서는 [확인 필요]로 적습니다.
- 별 총합 = GitHub에서 마지막으로 확인한 값(stars_checked_at) + 그 뒤 GH Archive에서 관측한 증가. 24h·7d·30d 증가는 GH Archive 시간별 이벤트를 기준 시각(as_of)까지 합한 값. 우리 점수는 없습니다.
- 요약이며 법적 조언이 아닙니다.

[대표 이미지] https://tesign.com/img/roborock-local-server-cc5eb99970.png
