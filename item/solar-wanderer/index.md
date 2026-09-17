# Solar Wanderer

> 브라우저 1:1 실시간 태양계 — NASA JPL 천체력으로 지금 이 순간의 행성 위치를 1:1 축척으로 브라우저에서 돌아보는 태양계 탐험

- 페이지: https://tesign.com/item/solar-wanderer/
- JSON: https://tesign.com/item/solar-wanderer/index.json
- 영어 마크다운: https://tesign.com/en/item/solar-wanderer/index.md
- 생성 시각: 2026-09-17 01:30 UTC

## 숫자

- 별 739 — GitHub에서 2026-09-15 19:34 UTC 확인
- 7일 별 증가 관측 없음 (GH Archive) (기준 2026-09-16 21:00 UTC)
- 별 총합 = GitHub에서 마지막으로 확인한 값(stars_checked_at) + 그 뒤 GH Archive에서 관측한 증가. 24h·7d·30d 증가는 GH Archive 시간별 이벤트를 기준 시각(as_of)까지 합한 값. 우리 점수는 없습니다.

## 한눈에 보는 사실

- 라이선스: MIT (허용적) — https://spdx.org/licenses/MIT.html
- 사용 범위: 상업 이용·수정·재배포 가능. 저작권 고지는 유지.
- 오픈소스: 예
- 언어: JavaScript
- 플랫폼: web
- 분류: 교육 · 과학
- 태그: astronomy · threejs · webgl · education · simulation · nasa
- 바로 쓰기: 설치 없이 바로
- 출처: GitHub https://github.com/hyqzz/solar-wanderer
- TRY: https://sw.icodestar.net/

## 활동

- 마지막 커밋: 2026-08-23 16:05 UTC
- 최근 릴리스: v2.2.0 (2026-06-21)
- 기여자: 4
- 열린 이슈 (PR 포함): 1
- 만든 이: 개인
- GitHub 확인 시각: 2026-09-15 19:34 UTC

## 선정 신호와 근거

- 과거 기록

## TESIGN TAKE

정확도 표를 README에 적고 검증 스크립트까지 넣은 점이, 보기만 좋은 태양계 앱들과 갈라지는 지점입니다.

## 왜 볼 만한가

우주 앱은 보통 과학적 정확도와 몰입감 중 하나를 고르지만, 이 프로젝트는 둘을 웹 페이지 하나에 넣었습니다. README의 정확도 표는 행성 위치 오차 0.0007°~0.074°(NASA JPL Horizons 대조), 달 0.12°, 위성 21개는 10일 후 0.22° 이하이며, `npm run verify`로 직접 대조할 수 있습니다. 태양에서 100,000 AU 오르트 구름까지 1:1 km 축척이고, JS는 gzip 기준 약 200 kB, 휴대폰 터치도 지원합니다.

## 이걸로 무엇을 만들 수 있나

- 천체력 계층이 순수 함수(Node에서 테스트 가능)로 분리되어 있어 자기 천문 시각화나 수업 자료에 가져다 쓸 수 있고, 로드맵의 '안내 투어·수업' 항목은 교육 콘텐츠 기여 자리입니다. MIT라 상업 이용도 자유롭지만 텍스처는 CC-BY-4.0 등 출처 표기가 따릅니다.

## 누구에게 맞나

- 교사·학생 — 달에 내려 지구를 올려다보는 수업, 축척 감각 익히기
- 천문 애호가 — 오늘 날짜의 실제 행성 배치, TNO 28개·혜성 4개
- 웹 3D 개발자 — floating-origin 렌더링과 로그 깊이 버퍼로 1:1 km 축척 구현 참고

## 5분 안에 시작하기

```
# # 설치 없이: https://sw.icodestar.net 열기
# git clone https://github.com/hyqzz/Solar-Wanderer.git
# cd Solar-Wanderer
# npm install
# npm run dev      # → http://localhost:5173
```

## 주의할 점

- 라이선스 MIT(코드). 텍스처는 Solar System Scope CC-BY-4.0, Steve Albers SOS, NASA JPL Photojournal(퍼블릭 도메인) 등 출처별 조건 적용.
- WebGL2 브라우저 필요. 계정·백엔드 없이 무료. 인터페이스는 중국어·영어(홈페이지 확인).
- 달 위치는 축약 ELP로 0.12° 오차. 실제 지형(DEM)·일식 그림자·VR은 로드맵 단계로 아직 없음. 별 737개.

## 영수증

- TESIGN이 처음 본 시각: 2026-09-13 08:29 UTC
- 출처 등록: 2026-06-12 06:25 UTC
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

[대표 이미지] https://tesign.com/img/solar-wanderer-da83ecda5c.jpg
