# Alidade

> 웹 지도 만들기 — 지도 자료를 끌어다 놓고 색을 입혀 3D 지형까지 돌려 보는 웹 지도 편집기.

- 페이지: https://tesign.com/item/alidade/
- JSON: https://tesign.com/item/alidade/index.json
- 영어 마크다운: https://tesign.com/en/item/alidade/index.md
- 생성 시각: 2026-09-19 23:10 UTC

## 숫자

- 별 13 — GitHub에서 2026-09-19 22:57 UTC 확인
- 7일 별 증가 관측 없음 (GH Archive) (기준 2026-09-19 18:00 UTC)
- Show HN 2점 — 2026-09-19 01:13 UTC 관측
- 별 총합 = GitHub에서 마지막으로 확인한 값(stars_checked_at) + 그 뒤 GH Archive에서 관측한 증가. 24h·7d·30d 증가는 GH Archive 시간별 이벤트를 기준 시각(as_of)까지 합한 값. 우리 점수는 없습니다.

## 한눈에 보는 사실

- 라이선스: Apache-2.0 (허용적) — https://spdx.org/licenses/Apache-2.0.html
- 사용 범위: 상업 이용·수정·재배포 가능. 고지 유지, 바꾼 부분은 표시.
- 오픈소스: 예
- 언어: TypeScript
- 플랫폼: web
- 분류: 데이터
- 태그: 지도 · gis · 위성사진 · 오픈소스
- 바로 쓰기: 설치 없이 바로
- 출처: Show HN https://github.com/AysanZ/alidade
- TRY: https://alidade.aysanz.dev/

## 활동

- 마지막 커밋: 2026-09-17 09:12 UTC
- 최근 릴리스: v0.1.0 (2026-09-09)
- 기여자: 1
- 열린 이슈 (PR 포함): 0
- 만든 이: 개인
- GitHub 확인 시각: 2026-09-19 22:57 UTC

## 선정 신호와 근거

- 신규 · 생성 1h 만에 포착

## TESIGN TAKE

필터를 글자가 아니라 구조로 다뤄서, 화면에서 만든 조건이 그대로 SQL로도 보인다. 결과를 의심할 때 확인할 방법이 있다는 뜻이다.

## 왜 볼 만한가

지도 도구는 대개 열쇠(API 키)부터 발급받아야 하고, 무료 한도가 바뀌면 만들어 둔 지도가 멈춘다. Alidade는 키가 필요한 곳을 한 군데도 두지 않는 것을 원칙으로 삼았다. 자랑이 아니라 제약으로 택한 선택이라고 스스로 설명한다.

## 이걸로 무엇을 만들 수 있나

- 지도 한 장이 JSON 문서 하나다. 문서를 고치면 지도가 바뀌고, 배경 지도를 바꿔도 올려 둔 레이어가 사라지지 않으며 되돌리기가 60단계까지 간다. GeoJSON·셰이프파일(zip)·GeoPackage·KML·GPX를 끌어다 놓으면 PostGIS에 넣고 벡터 타일로 돌려주고, 링크나 WMS 주소를 붙여도 읽는다. 위성사진은 Cloud-Optimised GeoTIFF로 바꿔 두고 최신·가장 선명한 것 같은 규칙으로 골라 겹친다. 배경은 OpenFreeMap, 지형은 SRTM을 쓴다.

## 누구에게 맞나

- 지도 자료를 다루지만 상용 GIS 프로그램까지는 필요 없는 사람, 조사·현장 자료를 지도로 정리해야 하는 팀.

## 5분 안에 시작하기

```
# alidade.aysanz.dev에서 라이브 데모를 열고 GeoJSON 파일 하나를 끌어다 놓아 본다.
```

## 주의할 점

- 직접 설치하려면 PostGIS와 GDAL이 갖춰진 환경이 필요하다. 별이 열 개 남짓인 초기 프로젝트라 만드는 사람이 한 명일 때의 위험은 감안해야 한다.

## 영수증

- TESIGN이 처음 본 시각: 2026-09-17 08:48 UTC
- 출처 등록: 2026-09-17 06:52 UTC
- 선정: 2026-09-19 22:45 UTC
- TESIGN 게재: 2026-09-19 22:45 UTC
- 소개 글 마지막 수정: 2026-09-19 22:45 UTC

## 읽는 법

- 이 파일은 tesign.com 항목 페이지와 같은 빌드에서 같은 데이터로 만들어졌습니다. 소개 글은 편집자가 쓴 것이고, 숫자는 저장된 관측값입니다.
- JSON의 null은 관측하지 않았다는 뜻입니다 — 0이 아닙니다. 마크다운에서는 [확인 필요]로 적습니다.
- 별 총합 = GitHub에서 마지막으로 확인한 값(stars_checked_at) + 그 뒤 GH Archive에서 관측한 증가. 24h·7d·30d 증가는 GH Archive 시간별 이벤트를 기준 시각(as_of)까지 합한 값. 우리 점수는 없습니다.
- 요약이며 법적 조언이 아닙니다.

[대표 이미지] https://tesign.com/img/alidade-f3670de6ce.jpg
