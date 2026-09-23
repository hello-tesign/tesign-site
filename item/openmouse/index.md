# OpenMouse

> 게이머용 브라우저 마우스 설정 — 게이밍 마우스의 DPI·폴링 레이트를 브랜드 드라이버 설치 없이 브라우저(WebHID)에서 바꾸는 제어판

- 페이지: https://tesign.com/item/openmouse/
- JSON: https://tesign.com/item/openmouse/index.json
- 영어 마크다운: https://tesign.com/en/item/openmouse/index.md
- 생성 시각: 2026-09-23 02:05 UTC

## 순위

- 게임 분야 8위 · 하드웨어 분야 3위 (기준 2026-09-22 21:00 UTC)

## 숫자

- 별 1,955 — GitHub에서 2026-09-23 01:49 UTC 확인
- 7일 별 증가 관측 없음 (GH Archive) (기준 2026-09-22 21:00 UTC)
- 별 총합 = GitHub에서 마지막으로 확인한 값(stars_checked_at) + 그 뒤 GH Archive에서 관측한 증가. 24h·7d·30d 증가는 GH Archive 시간별 이벤트를 기준 시각(as_of)까지 합한 값. 우리 점수는 없습니다.

## 한눈에 보는 사실

- 라이선스: AGPL-3.0 (카피레프트) — https://spdx.org/licenses/AGPL-3.0.html
- 사용 범위: 사용·수정은 자유. 배포는 물론 네트워크 서비스로 제공해도 소스 공개.
- 오픈소스: 예
- 언어: TypeScript
- 플랫폼: web
- 분류: 하드웨어 · 게임
- 태그: webhid · gaming-mouse · dpi · polling-rate · typescript · agpl
- 바로 쓰기: 설치 없이 바로
- 출처: GitHub https://github.com/openmouse-project/openmouse
- TRY: https://openmouse.app/

## 활동

- 마지막 커밋: 2026-09-22 22:30 UTC
- 최근 릴리스: 릴리스 없음
- 기여자: 38
- 열린 이슈 (PR 포함): 28
- 만든 이: 조직
- GitHub 확인 시각: 2026-09-23 01:49 UTC

## 선정 신호와 근거

- 과거 기록

## TESIGN TAKE

브랜드마다 깔던 설정 앱을 한 웹페이지로 대체하려는 시도인데, '프로토콜 구현됨'과 '실기기 검증됨'이 다른 말이라는 점을 README가 스스로 못 박는다.

## 왜 볼 만한가

브랜드마다 따로 깔던 설정 앱 대신, 브라우저의 WebHID로 마우스에 직접 패킷을 보내 정보를 읽고 DPI·폴링 레이트 같은 설정을 바꾼다. 패킷 코덱과 드라이버는 별도 라이브러리 @openmouse/protocol에 있고, 그 README에는 Razer·Logitech·Pulsar·Lamzu·Glorious·Finalmouse·SteelSeries Rival 3 등 32개 브랜드/프로토콜 진입점이 실려 있다. 단, 프로토콜이 구현됐다는 것과 그 브랜드의 모든 기종이 동작한다는 것은 다르며, 실기기 검증 여부는 카탈로그의 verified 필드로 구분한다고 명시한다.

## 이걸로 무엇을 만들 수 있나

- @openmouse/protocol의 코덱 진입점은 WebHID 없이도 쓸 수 있어 Node.js 기반 마우스 설정 CLI나 리눅스용 자체 설정 도구를 만들 수 있다. AGPL-3.0이라 서비스 형태로 배포해도 소스 공개 의무가 있다.

## 누구에게 맞나

- 여러 브랜드 마우스를 쓰는 게이머 — 설정 앱 여러 개 대신 한 페이지
- 리눅스 사용자 — 공식 앱이 없는 환경에서 DPI·폴링 변경(hidraw udev 규칙 필요)
- 마우스 프로토콜을 리버스 엔지니어링하는 개발자 — 브랜드별 코덱 라이브러리에 기여

## 5분 안에 시작하기

```
# # 바로 쓰기: 브라우저로 https://openmouse.app 접속 후 마우스 연결
# npm install    # 로컬 개발
# npm run dev
# # 리눅스에서 'Failed to open the device'가 나오면 README의 udev 예시(VXE R1 SE+용 70-openmouse-vxe.rules)를 lsusb로 확인한 자기 기기 ID로 고쳐 넣은 뒤:
# sudo udevadm control --reload-rules
```

## 주의할 점

- AGPL-3.0 — 네트워크로 제공해도 소스 공개 의무
- WebHID 기반이며 README는 Chromium 선택창 기준으로 설명; 다른 브라우저 지원 여부 [확인 필요]. 리눅스는 hidraw 권한 udev 규칙 필요
- 지원 기기 목록은 별도 mouse-protocol 저장소에 있고, 브랜드 프로토콜 구현이 그 브랜드 전 기종 지원을 뜻하진 않음(verified 필드 확인); GitHub 릴리스 없음(웹 배포)

## 영수증

- TESIGN이 처음 본 시각: 2026-09-13 09:39 UTC
- 출처 등록: 2026-07-27 03:22 UTC
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

[대표 이미지] https://tesign.com/img/openmouse-b9bd418845.png
