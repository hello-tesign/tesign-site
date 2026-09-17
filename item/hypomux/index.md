# HypoMux

> 윈도우용 여러 회선 합쳐 받기 — Steam·IDM 같은 다중 연결 다운로드를 유선·Wi-Fi·핫스팟·USB 테더링에 나눠 태우는 윈도우 도구

- 페이지: https://tesign.com/item/hypomux/
- JSON: https://tesign.com/item/hypomux/index.json
- 영어 마크다운: https://tesign.com/en/item/hypomux/index.md
- 생성 시각: 2026-09-17 01:30 UTC

## 숫자

- 별 3,521 — GitHub에서 2026-09-15 19:35 UTC 확인
- 7일 +2은 GH Archive 관측 (기준 2026-09-16 21:00 UTC)
- 별 총합 = GitHub에서 마지막으로 확인한 값(stars_checked_at) + 그 뒤 GH Archive에서 관측한 증가. 24h·7d·30d 증가는 GH Archive 시간별 이벤트를 기준 시각(as_of)까지 합한 값. 우리 점수는 없습니다.

## 한눈에 보는 사실

- 라이선스: AGPL-3.0 (카피레프트) — https://spdx.org/licenses/AGPL-3.0.html
- 사용 범위: 사용·수정은 자유. 배포는 물론 네트워크 서비스로 제공해도 소스 공개.
- 오픈소스: 예
- 언어: Go
- 플랫폼: windows
- 분류: 인프라
- 태그: windows · networking · multi-wan · load-balancing · go · wails
- 바로 쓰기: 설치해서 쓰기
- 출처: GitHub https://github.com/hypostasis-cat/hypomux
- INSTALL: https://hypomux.com/

## 활동

- 마지막 커밋: 2026-09-15 16:37 UTC
- 최근 릴리스: v2.6.0 (2026-09-13)
- 기여자: 7
- 열린 이슈 (PR 포함): 12
- 만든 이: 개인
- GitHub 확인 시각: 2026-09-15 19:35 UTC

## 선정 신호와 근거

- 과거 기록

## TESIGN TAKE

'연결 하나를 빠르게 하는 게 아니라 연결들을 나눠 태운다'고 README가 먼저 선을 그은 점이 이 도구를 믿게 합니다.

## 왜 볼 만한가

PC에 회선이 여러 개 있어도 보통 하나만 쓰입니다. HypoMux는 새 연결마다 나갈 어댑터를 골라(소스 주소 바인딩 + IP_UNICAST_IF) Steam 업데이트, IDM, 게임 런처처럼 연결을 많이 여는 다운로드를 여러 회선에 분산합니다. README는 독립된 연결들을 분배하는 것이며 TCP 연결 하나를 쪼개지는 못한다고 먼저 밝히고, 2.5.0에서 Go + Wails v3로 옮겼고, 공식 설치 파일은 SignPath 코드 서명을 받습니다.

## 이걸로 무엇을 만들 수 있나

- UI는 일반 사용자 권한으로 돌고 TUN·WFP·라우팅·DNS는 독립된 Go 코어 서비스가 맡는 최소 권한 구조라, 윈도우 네트워크 도구를 만들 때 참고할 수 있습니다. AGPL-3.0이므로 네트워크로 제공하는 변형도 소스 공개 대상입니다.

## 누구에게 맞나

- 회선이 둘 이상인 윈도우 게이머 — Steam·게임 런처 업데이트 분산
- IDM 등 다중 스레드 다운로더 사용자 — 시스템 프록시 모드로 가볍게
- 윈도우 네트워크 도구 개발자 — Wintun·sing-box·WFP 기반 분할 라우팅 구조 참고

## 5분 안에 시작하기

```
# 1. GitHub Releases에서 HypoMux_Setup_*.exe 내려받아 설치(게시자: SignPath Foundation)
# 2. PC를 두 개 이상 네트워크에 연결(예: 유선 + Wi-Fi, 광대역 + USB/모바일 테더링)
# 3. HypoMux 실행 → 홈 화면 새로 고침 → 풀에 넣을 어댑터 선택
# 4. Network Health 실행: 각 회선의 IPv4·게이트웨이·DNS·소스 바인딩 확인
# 5. System Proxy 또는 Virtual NIC 모드 선택 → 집계 엔진 켜고 다운로드 시작(Steam은 안내에 따라 재시작)
```

## 주의할 점

- 라이선스 AGPL-3.0. 무료(위챗·알리페이 후원 안내).
- Windows 10/11 전용. TCP 연결 하나를 쪼개지 못하고 지연 시간을 낮추는 도구가 아님(경쟁 게임·음성 채팅은 직접 연결 규칙에 넣으라고 README가 권고). Virtual NIC 모드는 Wintun/WFP와 코어 서비스가 필요하고 다른 TUN/VPN이 기본 경로를 쥐고 있으면 시작이 차단됨.
- 중국어 우선 프로젝트(영문 README 제공). 현재 2.6.0. 개발자는 학생 1인.

## 영수증

- TESIGN이 처음 본 시각: 2026-09-13 09:42 UTC
- 출처 등록: 2026-06-11 06:38 UTC
- 선정: 2026-09-14 19:27 UTC
- TESIGN 게재: 2026-09-14 19:27 UTC
- 소개 글 마지막 수정: 2026-09-15 04:36 UTC
- ◌ 과거 기록: 과거 데이터를 되짚어 채운 항목입니다. 라이브 발견이 아닙니다.

## 읽는 법

- 이 파일은 tesign.com 항목 페이지와 같은 빌드에서 같은 데이터로 만들어졌습니다. 소개 글은 편집자가 쓴 것이고, 숫자는 저장된 관측값입니다.
- JSON의 null은 관측하지 않았다는 뜻입니다 — 0이 아닙니다. 마크다운에서는 [확인 필요]로 적습니다.
- 별 총합 = GitHub에서 마지막으로 확인한 값(stars_checked_at) + 그 뒤 GH Archive에서 관측한 증가. 24h·7d·30d 증가는 GH Archive 시간별 이벤트를 기준 시각(as_of)까지 합한 값. 우리 점수는 없습니다.
- 과거 데이터를 되짚어 채운 항목입니다. 라이브 발견이 아닙니다.
- 요약이며 법적 조언이 아닙니다.

[대표 이미지] https://tesign.com/img/hypomux-e3bd36f578.png
