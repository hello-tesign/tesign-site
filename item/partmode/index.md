# PartMode

> 설치 없는 브라우저 CAD — 설치 없이 브라우저에서 구속 스케치·피처 히스토리·어셈블리·도면·STEP 입출력을 하는 오픈소스 파라메트릭 기계 CAD

- 페이지: https://tesign.com/item/partmode/
- JSON: https://tesign.com/item/partmode/index.json
- 영어 마크다운: https://tesign.com/en/item/partmode/index.md
- 생성 시각: 2026-09-17 19:00 UTC

## 숫자

- 별 527 — GitHub에서 2026-09-17 18:41 UTC 확인
- 7일 별 증가 관측 없음 (GH Archive) (기준 2026-09-17 13:00 UTC)
- 별 총합 = GitHub에서 마지막으로 확인한 값(stars_checked_at) + 그 뒤 GH Archive에서 관측한 증가. 24h·7d·30d 증가는 GH Archive 시간별 이벤트를 기준 시각(as_of)까지 합한 값. 우리 점수는 없습니다.

## 한눈에 보는 사실

- 라이선스: AGPL-3.0 (카피레프트) — https://spdx.org/licenses/AGPL-3.0.html
- 사용 범위: 사용·수정은 자유. 배포는 물론 네트워크 서비스로 제공해도 소스 공개.
- 오픈소스: 예
- 언어: JavaScript
- 플랫폼: web
- 분류: 디자인
- 태그: cad · parametric · opencascade · webassembly · step · mcp
- 바로 쓰기: 설치 없이 바로
- 출처: GitHub https://github.com/bomwiki/partmode
- TRY: https://partmode.com/

## 활동

- 마지막 커밋: 2026-08-17 16:55 UTC
- 최근 릴리스: source-snapshot-2026-08-11 (2026-08-10) · 프리릴리스
- 기여자: 1
- 열린 이슈 (PR 포함): 11
- 만든 이: 조직
- GitHub 확인 시각: 2026-09-17 18:41 UTC

## 선정 신호와 근거

- 과거 기록

## TESIGN TAKE

브라우저 CAD에서 정확한 B-rep과 STEP 교환까지 갖춘 프로젝트입니다. 에이전트 연동은 사람 승인이 기본입니다.

## 왜 볼 만한가

PartMode에서 화면에 보이는 three.js 장면은 결과를 비추는 창일 뿐이고, 형상은 OpenCascade WebAssembly가 정확한 B-rep으로 계산합니다. 구속 스케치, 편집 가능한 피처 히스토리, 어셈블리 메이트, 은선 처리 도면(SVG·PDF), STEP 가져오기·내보내기와 STL·AMF·3MF 출력을 데스크톱 CAD 설치 없이 제공합니다. partmode.com에서 계정 없이 쓰고 프로젝트는 브라우저 저장소에 남으며, 코딩 에이전트는 같은 문서 모델에 타입 지정 명령으로 접근하되 브라우저 세션에서는 사람이 승인한 변경만 커밋하고, 무인 작업용 헤드리스 권한은 계정 소유자가 따로 명시해 발급합니다.

## 이걸로 무엇을 만들 수 있나

- 포장 지그·브래킷·부품 케이스처럼 치수만 바뀌는 부품을 템플릿으로 만들어 두고 STEP으로 가공 업체에 넘기는 흐름, 또는 MCP로 코딩 에이전트에 치수를 받아 미리보기 → 승인 → 내보내기까지 이어지는 자동화를 꾸릴 수 있습니다.

## 누구에게 맞나

- 소규모 제조·시제품 제작자 — 설치 없이 부품을 모델링해 STEP으로 가공 업체 전달
- 메이커·3D 프린터 사용자 — 스케치 → 솔리드 → STL/3MF 출력
- 에이전트 개발자 — MCP로 타입 지정 CAD 조작 자동화

## 5분 안에 시작하기

```
# # 설치 없이: https://partmode.com (계정 불필요)
# git clone https://github.com/BOMWiki/partmode.git
# cd partmode
# npm ci
# npm run build
# npm start   # http://127.0.0.1:4401
```

## 주의할 점

- 라이선스 AGPL-3.0-only — 수정해 네트워크 서비스로 제공하면 소스 공개 의무가 따릅니다. partmode.com은 계정 없이 쓰되 프로젝트가 브라우저 저장소에만 남으므로 백업은 본인 몫입니다.
- 자체 호스팅은 Node.js 22.13 이상. 에이전트(MCP) 연결은 계정·취소 가능한 키가 필요하고, 호스팅 릴레이는 종단간 암호화가 아니라고 README가 밝힙니다.
- 시뮬레이션·CAM·DWG 작성·인증 GD&T는 없고, 가져온 STEP은 원본 피처 히스토리를 복원하지 않습니다. 저작권 표기는 Sphinx(2026).

## 영수증

- TESIGN이 처음 본 시각: 2026-09-13 09:14 UTC
- 출처 등록: 2026-08-06 04:51 UTC
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

[대표 이미지] https://tesign.com/img/partmode-fbd032813a.png
