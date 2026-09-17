# anydoc

> LLM에 넣을 사무 문서 변환 — Word·PPT·Excel·PDF·EPUB 등을 마크다운으로 바꾸는 Firecrawl의 Rust 변환기 — npx 한 줄 또는 브라우저에서 로컬 변환

- 페이지: https://tesign.com/item/anydoc/
- JSON: https://tesign.com/item/anydoc/index.json
- 영어 마크다운: https://tesign.com/en/item/anydoc/index.md
- 생성 시각: 2026-09-17 19:00 UTC

## 순위

- 생산성 분야 20위 (기준 2026-09-17 13:00 UTC)

## 숫자

- 별 21,673 — GitHub에서 2026-09-17 18:40 UTC 확인
- 7일 +40은 GH Archive 관측 (기준 2026-09-17 13:00 UTC)
- 별 총합 = GitHub에서 마지막으로 확인한 값(stars_checked_at) + 그 뒤 GH Archive에서 관측한 증가. 24h·7d·30d 증가는 GH Archive 시간별 이벤트를 기준 시각(as_of)까지 합한 값. 우리 점수는 없습니다.

## 한눈에 보는 사실

- 라이선스: MIT (허용적) — https://spdx.org/licenses/MIT.html
- 사용 범위: 상업 이용·수정·재배포 가능. 저작권 고지는 유지.
- 오픈소스: 예
- 언어: Rust
- 플랫폼: cli · web
- 분류: 생산성 · 개발 도구
- 태그: markdown · document-conversion · rust · wasm · cli · docx
- 바로 쓰기: 설치 없이 바로
- 출처: GitHub https://github.com/firecrawl/anydoc
- TRY: https://firecrawl.github.io/anydoc

## 활동

- 마지막 커밋: 2026-08-28 02:13 UTC
- 최근 릴리스: v0.2.4 (2026-08-27)
- 기여자: 5
- 열린 이슈 (PR 포함): 94
- 만든 이: 조직
- GitHub 확인 시각: 2026-09-17 18:40 UTC

## TESIGN TAKE

라이브러리가 본체지만 npx 한 줄과 브라우저 데모 덕에 개발자가 아니어도 바로 쓸 수 있다 — 스캔 PDF는 --ocr hosted를 켰을 때만 Firecrawl 서버로 나간다는 점을 기억하면 된다.

## 왜 볼 만한가

anydoc은 .doc/.docx, .ppt/.pptx, .xls/.xlsx, OpenDocument, RTF, EPUB, CSV, PDF를 하나의 문서 모델로 파싱해 같은 GFM 직렬화기로 출력하므로 어떤 형식이 들어와도 표·각주·수식(LaTeX) 처리가 같다. 100개 실문서 벤치마크에서 문서당 중앙값 4.4ms로 변환했고 14개 형식을 모두 지원한 유일한 도구였다고 README는 밝힌다(품질 판정은 LLM 심판). 브라우저 데모는 WebAssembly로 돌아가 파일이 기기를 떠나지 않는다.

## 이걸로 무엇을 만들 수 있나

- 거래처가 보내는 견적서·상품표(xlsx·docx·pdf)를 npx 한 줄로 마크다운으로 바꿔 검색 가능한 문서 저장소나 LLM 입력으로 쓰는 배치를 만들 수 있고, WASM 패키지로 서버 없이 브라우저에서 변환하는 업로드 도구도 만들 수 있다.

## 누구에게 맞나

- 사무 문서를 LLM에 넣는 사람 — docx·pptx·xlsx를 깨끗한 마크다운으로
- RAG·에이전트 개발자 — Node·Python·Rust·WASM 바인딩과 Agent Skill 제공
- 개인정보가 걱정되는 사용자 — 브라우저 데모로 파일을 올리지 않고 변환

## 5분 안에 시작하기

```
# npx @firecrawl/anydoc report.docx               # Markdown to stdout
# npx @firecrawl/anydoc slides.pptx -o slides.md  # or to a file
# npm install -g @firecrawl/anydoc
# pip install firecrawl-anydoc
```

## 주의할 점

- MIT. 텍스트 기반 PDF는 로컬 변환, 스캔·이미지 PDF는 OCR이 없어 NeedsOcr 오류가 나며 --ocr hosted를 켜면 문서 전체가 Firecrawl Parse 서버로 전송된다(가입 불필요, 키를 넣으면 한도 상승).
- 이미지는 마크다운에 alt 텍스트로만 남고 원본 바이트는 문서 모델에서 따로 꺼내야 한다.
- 벤치마크 코퍼스는 재배포 불가라 저장소에 없다.

## 영수증

- TESIGN이 처음 본 시각: 2026-09-13 07:43 UTC
- 출처 등록: 2026-08-03 16:36 UTC
- 선정: 2026-09-14 19:27 UTC
- TESIGN 게재: 2026-09-14 19:27 UTC
- 소개 글 마지막 수정: 2026-09-15 04:36 UTC

## 읽는 법

- 이 파일은 tesign.com 항목 페이지와 같은 빌드에서 같은 데이터로 만들어졌습니다. 소개 글은 편집자가 쓴 것이고, 숫자는 저장된 관측값입니다.
- JSON의 null은 관측하지 않았다는 뜻입니다 — 0이 아닙니다. 마크다운에서는 [확인 필요]로 적습니다.
- 별 총합 = GitHub에서 마지막으로 확인한 값(stars_checked_at) + 그 뒤 GH Archive에서 관측한 증가. 24h·7d·30d 증가는 GH Archive 시간별 이벤트를 기준 시각(as_of)까지 합한 값. 우리 점수는 없습니다.
- 요약이며 법적 조언이 아닙니다.

[대표 이미지] https://tesign.com/img/anydoc-272a346a4a.png
