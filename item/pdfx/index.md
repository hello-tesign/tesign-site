# PDFx

> 여러 PDF를 한 파일로 묶기 — PDF 여러 개를 하나의 유효한 PDF로 묶고, 전용 뷰어에서는 원본 문서별로 다시 펼치는 데스크톱 뷰어

- 페이지: https://tesign.com/item/pdfx/
- JSON: https://tesign.com/item/pdfx/index.json
- 영어 마크다운: https://tesign.com/en/item/pdfx/index.md
- 생성 시각: 2026-09-19 23:10 UTC

## 숫자

- 별 1,065 — GitHub에서 2026-09-19 22:58 UTC 확인
- 7일 별 증가 관측 없음 (GH Archive) (기준 2026-09-19 18:00 UTC)
- Show HN 1점 — 2026-09-13 15:40 UTC 관측
- 별 총합 = GitHub에서 마지막으로 확인한 값(stars_checked_at) + 그 뒤 GH Archive에서 관측한 증가. 24h·7d·30d 증가는 GH Archive 시간별 이벤트를 기준 시각(as_of)까지 합한 값. 우리 점수는 없습니다.

## 한눈에 보는 사실

- 라이선스: MIT (허용적) — https://spdx.org/licenses/MIT.html
- 사용 범위: 상업 이용·수정·재배포 가능. 저작권 고지는 유지.
- 오픈소스: 예
- 언어: TypeScript
- 플랫폼: macos · windows · linux · web
- 분류: 생산성
- 태그: pdf · electron · file-format · document-bundle · pdfjs
- 바로 쓰기: 설치 없이 바로
- 출처: GitHub https://github.com/alexandrosgounis/pdfx · Show HN https://github.com/alexandrosgounis/pdfx/
- TRY: https://pdfx.zip/

## 활동

- 마지막 커밋: 2026-09-19 14:27 UTC
- 최근 릴리스: v0.2.0 (2026-08-10)
- 기여자: 5
- 열린 이슈 (PR 포함): 3
- 만든 이: 개인
- GitHub 확인 시각: 2026-09-19 22:58 UTC

## 선정 신호와 근거

- 교차 신호 · GitHub + Show HN
- 과거 기록

## TESIGN TAKE

새 파일 형식이 아니라 PDF 안에 JSON 한 장을 얹은 것이어서, 받는 쪽이 아무것도 설치하지 않아도 된다는 점이 핵심이다.

## 왜 볼 만한가

형식 확장의 전부가 `pdfx-manifest.json`이라는 임베디드 파일 첨부 하나다(SPEC.md 1.0 draft). 그래서 어떤 PDF 뷰어에서 열어도 모든 페이지가 순서대로 보이고, PDFx에서 열면 문서 경계가 복원된다. 뷰어는 Electron·pdf.js·pdf-lib 기반으로 macOS·Windows·Linux를 지원하며, PDF·이미지·폴더를 드래그해 넣으면 문서마다 가로 페이지 띠로, 문서들은 세로로 쌓여 순서를 바꾸고 Export PDF로 한 파일로 저장한다.

## 이걸로 무엇을 만들 수 있나

- 규격이 매니페스트 JSON 하나라 자기 도구에 PDFx 읽기·쓰기를 붙이기 쉽다 — 예를 들어 청구서·계약서 묶음을 한 파일로 내보내는 백오피스 기능.

## 누구에게 맞나

- 문서를 묶어 보내는 사무직 — 검토 패킷을 한 파일로
- 개발자 — 매니페스트 규격으로 자기 앱에 묶음 PDF 지원 추가
- PDF 도구 사용자 — 캔버스에서 문서 순서를 바꾸고 Export

## 5분 안에 시작하기

```
# yarn              # install
# yarn dev          # run in development
# yarn dev:web      # run on the web
# yarn build:mac    # build:win for windows, build:linux for linux
# 라이브 데모: https://pdfx.zip
```

## 주의할 점

- MIT. 뷰어는 macOS·Windows·Linux(Electron)이지만 README의 다운로드 링크는 Apple 마크 하나뿐이고, Windows·Linux는 build:win / build:linux 빌드 명령만 안내한다(미리 빌드된 배포 여부 [확인 필요]). 선택 기능인 AI 어시스턴트는 본인 제공자 API 키(Google·Anthropic·OpenAI)가 필요해 사용량 비용은 본인 부담. 규격은 1.0 draft. 마지막 푸시 2026-08-16.

## 영수증

- TESIGN이 처음 본 시각: 2026-09-13 08:30 UTC
- 출처 등록: 2026-06-29 16:17 UTC
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

[대표 이미지] https://tesign.com/img/pdfx-c0957268ce.webp
