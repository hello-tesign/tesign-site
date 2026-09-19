# Let's Seal

> 누구나 검증하는 파일 봉인 — PDF·사진·영상 등 어떤 파일이든 '변조 없음 + 이 날짜에 존재'를 증명해 주는 무료 봉인 웹앱과 공개 표준 SEAL

- 페이지: https://tesign.com/item/lets-seal/
- JSON: https://tesign.com/item/lets-seal/index.json
- 영어 마크다운: https://tesign.com/en/item/lets-seal/index.md
- 생성 시각: 2026-09-19 23:10 UTC

## 숫자

- 별 371 — GitHub에서 2026-09-19 22:59 UTC 확인
- 7일 별 증가 관측 없음 (GH Archive) (기준 2026-09-19 18:00 UTC)
- Show HN 94점 — 2026-09-13 14:52 UTC 관측
- 별 총합 = GitHub에서 마지막으로 확인한 값(stars_checked_at) + 그 뒤 GH Archive에서 관측한 증가. 24h·7d·30d 증가는 GH Archive 시간별 이벤트를 기준 시각(as_of)까지 합한 값. 우리 점수는 없습니다.

## 한눈에 보는 사실

- 라이선스: Apache-2.0 (허용적) — https://spdx.org/licenses/Apache-2.0.html
- 사용 범위: 상업 이용·수정·재배포 가능. 고지 유지, 바꾼 부분은 표시.
- 오픈소스: 예
- 언어: JavaScript
- 플랫폼: web · cli
- 분류: 보안
- 태그: digital-signature · c2pa · pades · opentimestamps · document-authentication · open-standard
- 바로 쓰기: 설치 없이 바로
- 출처: Show HN https://github.com/letsseal/letsseal
- TRY: https://letsseal.org/

## 활동

- 마지막 커밋: 2026-09-14 23:57 UTC
- 최근 릴리스: v0.1.0 (2026-07-23)
- 기여자: 2
- 열린 이슈 (PR 포함): 18
- 만든 이: 개인
- GitHub 확인 시각: 2026-09-19 22:59 UTC

## 선정 신호와 근거

- 과거 기록

## TESIGN TAKE

유료 '전자 인감' 서비스가 하던 일을 표준 형식으로, 무료로 열어 둔 프로젝트입니다. 단, 공증이나 신원 확인은 아닙니다.

## 왜 볼 만한가

견적서·계약서·납품 사진을 보낸 뒤 '원본 그대로인지, 언제 만든 것인지'를 나중에 증명할 방법이 마땅치 않았습니다. Let's Seal은 PDF에는 PAdES 서명, 사진·영상·오디오에는 C2PA 매니페스트를 파일 안에 심고, 시각은 OpenTimestamps로 비트코인에 고정하며, 모든 봉인을 RFC 6962 투명성 로그에 남깁니다. 봉인·검증이 모두 무료이고, 검증은 계정 없이 verify.letsseal.org나 오프라인 표준 도구로 할 수 있습니다.

## 이걸로 무엇을 만들 수 있나

- 발송 전 PDF·이미지를 자동 봉인하는 단계를 REST API나 sealbot CLI로 기존 업무 흐름에 붙일 수 있고, 제공되는 GitHub Action으로 CI에서 빌드 산출물에 서명과 SBOM 증명을 첨부하는 파이프라인도 만들 수 있습니다.

## 누구에게 맞나

- 소상공인·프리랜서 — 견적서·계약서 PDF를 봉인해 '원본 그대로'임을 증명
- 개발팀 — CI에서 빌드 산출물·컨테이너에 서명과 SBOM 증명 첨부
- 사진·영상 제작자 — C2PA 콘텐츠 자격 증명을 파일에 삽입

## 5분 안에 시작하기

```
# # 설치 없이: https://app.letsseal.org 에서 봉인, https://verify.letsseal.org 에서 검증
# npm i -g sealbot
# sealbot seal contract.pdf          # seal a PDF or any file
# sealbot verify contract.sealed.pdf # verify a seal, offline
# python spec/verify.py sealed.pdf sealed.pdf.ots
```

## 주의할 점

- 라이선스 Apache-2.0(SEAL 규격도 자유 구현). 증명 범위는 무결성·시각·발급 인증서까지이며, 공증이나 개인의 법적 신원 확인은 아니라고 README가 명시합니다.
- 자체 호스팅은 CA 구성 + Python 서명 서비스 + Next.js/Prisma 웹앱을 직접 운영해야 하고, 외부 PDF 리더의 자동 '녹색 체크'까지 원하면 유료 AATL/eIDAS 인증서(.p12)를 따로 넣어야 합니다.
- 2026-07에 시작된 재단 산하 공익 프로젝트라 밝히고 있으며, 장기 운영 실적은 [확인 필요].

## 영수증

- TESIGN이 처음 본 시각: 2026-09-13 14:52 UTC
- 출처 등록: 2026-07-27 15:52 UTC
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

[대표 이미지] https://tesign.com/img/lets-seal-91fec09c76.png
