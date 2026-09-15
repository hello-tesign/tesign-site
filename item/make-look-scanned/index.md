# make-look-scanned

> PDF를 스캔본처럼 만들기 — PDF를 실제 스캔본처럼 보이게 만드는 Go CLI·브라우저 도구 — 기울기·종이 톤·노이즈·JPEG 잡티

- 페이지: https://tesign.com/item/make-look-scanned/
- JSON: https://tesign.com/item/make-look-scanned/index.json
- 영어 마크다운: https://tesign.com/en/item/make-look-scanned/index.md
- 생성 시각: 2026-09-15 20:32 UTC

## 숫자

- 별 807 — GitHub에서 2026-09-15 19:34 UTC 확인
- 7일 별 증가 관측 없음 (GH Archive) (기준 2026-09-15 15:00 UTC)
- Show HN 155점 — 2026-09-13 15:54 UTC 관측
- 별 총합 = GitHub에서 마지막으로 확인한 값(stars_checked_at) + 그 뒤 GH Archive에서 관측한 증가. 24h·7d·30d 증가는 GH Archive 시간별 이벤트를 기준 시각(as_of)까지 합한 값. 우리 점수는 없습니다.

## 한눈에 보는 사실

- 라이선스: AGPL-3.0 (카피레프트) — https://spdx.org/licenses/AGPL-3.0.html
- 사용 범위: 사용·수정은 자유. 배포는 물론 네트워크 서비스로 제공해도 소스 공개.
- 오픈소스: 예
- 언어: Go
- 플랫폼: cli · web
- 분류: 생산성
- 태그: pdf · go · wasm · cli · document · scan
- 바로 쓰기: 설치 없이 바로
- 출처: Show HN https://github.com/overflowy/make-look-scanned · GitHub https://github.com/overflowy/make-look-scanned
- TRY: https://overflowy.github.io/make-look-scanned

## 활동

- 마지막 커밋: 2026-06-21 10:39 UTC
- 최근 릴리스: v1.1.0 (2026-06-21)
- 기여자: 1
- 열린 이슈 (PR 포함): 1
- 만든 이: 개인
- GitHub 확인 시각: 2026-09-15 19:34 UTC

## 선정 신호와 근거

- 교차 신호 · Show HN + GitHub
- 과거 기록

## TESIGN TAKE

'스캔한 것처럼'을 재현 가능하게 만든 도구다 — 같은 입력이면 바이트까지 같은 결과가 나온다.

## 왜 볼 만한가

페이지를 이미지로 래스터화해 효과를 입힌 뒤 이미지 전용 PDF로 다시 조립한다. 원본의 선택 가능한 텍스트는 사라지는데, 이것이 기본 스캐너와 같은 동작이다. 시드가 입력 파일 내용 해시에서 나오므로 같은 파일은 항상 바이트까지 같은 결과가 나오고 `--seed N`으로 다른 재현 가능한 모양을 얻는다. 브라우저 버전은 PDF.js로 래스터화한 픽셀을 같은 Go 효과 코드의 WASM에 넘기며, 파일은 업로드되지 않는다.

## 이걸로 무엇을 만들 수 있나

- TOML 프리셋으로 팀 표준 '스캔 룩'을 정의하거나, `task build:web`으로 약 8MB 단일 HTML을 만들어 오프라인 사내 도구로 배포할 수 있다.

## 누구에게 맞나

- 서류 제출용 스캔본 형태가 필요한 사람 — 프린트·스캔 없이 PDF 변환
- OCR·문서 파이프라인 개발자 — 스캔 품질 테스트 데이터 생성
- 디자이너 — 종이 문서 질감의 목업

## 5분 안에 시작하기

```
# go build -o make-look-scanned .
# make-look-scanned in.pdf                 # -> in.scanned.pdf
# make-look-scanned in.pdf --noise 0.4 --skew 2.5 --jpeg-quality 30
# make-look-scanned --preset medium in.pdf
# 브라우저 버전: https://overflowy.github.io/make-look-scanned/
```

## 주의할 점

- AGPL-3.0 — CLI가 MuPDF(go-fitz)를 정적 링크하므로 결합 바이너리를 배포하면 소스 제공 의무가 따른다. 브라우저 빌드는 MuPDF 없이 PDF.js(Apache-2.0)를 쓴다. 빌드에 Go와 C 툴체인(cgo) 필요. 출력은 이미지 전용 PDF라 텍스트 검색·선택 불가. CLI와 브라우저 결과는 시각적으로 동등하지만 바이트 동일하지는 않다. 마지막 푸시 2026-06-21.

## 영수증

- TESIGN이 처음 본 시각: 2026-09-13 08:24 UTC
- 출처 등록: 2026-06-20 18:17 UTC
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

[대표 이미지] https://tesign.com/img/make-look-scanned-bf573df87d.jpg
