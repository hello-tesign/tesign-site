# kage

> 웹사이트 오프라인 보관 사본 — 웹사이트를 헤드리스 크롬으로 렌더링한 뒤 스크립트를 전부 뺀 오프라인 사본으로 저장하는 CLI

- 페이지: https://tesign.com/item/kage/
- JSON: https://tesign.com/item/kage/index.json
- 영어 마크다운: https://tesign.com/en/item/kage/index.md
- 생성 시각: 2026-09-25 03:06 UTC

## 숫자

- 별 3,431 — GitHub에서 2026-09-25 02:59 UTC 확인
- 7일 별 증가 관측 없음 (GH Archive) (기준 2026-09-23 20:00 UTC)
- Show HN 712점 — 2026-09-13 16:05 UTC 관측
- 별 총합 = GitHub에서 마지막으로 확인한 값(stars_checked_at) + 그 뒤 GH Archive에서 관측한 증가. 24h·7d·30d 증가는 GH Archive 시간별 이벤트를 기준 시각(as_of)까지 합한 값. 우리 점수는 없습니다.

## 한눈에 보는 사실

- 라이선스: MIT (허용적) — https://spdx.org/licenses/MIT.html
- 사용 범위: 상업 이용·수정·재배포 가능. 저작권 고지는 유지.
- 오픈소스: 예
- 언어: Go
- 플랫폼: cli · macos · windows · linux
- 분류: 개발 도구
- 태그: web-archiving · offline · headless-chrome · cli · go · zim
- 바로 쓰기: 설치해서 쓰기
- 출처: Show HN https://github.com/tamnd/kage · GitHub https://github.com/tamnd/kage
- INSTALL: https://kage.tamnd.com/

## 활동

- 마지막 커밋: 2026-08-10 11:59 UTC
- 최근 릴리스: v0.3.12 (2026-08-10)
- 기여자: 7
- 열린 이슈 (PR 포함): 9
- 만든 이: 개인
- GitHub 확인 시각: 2026-09-25 02:59 UTC

## 선정 신호와 근거

- 교차 신호 · Show HN + GitHub
- 과거 기록

## TESIGN TAKE

실제 브라우저가 본 결과를 코드 없이 남긴다는 한 가지 일을, 표준 포맷(ZIM)으로 끝맺는 점이 좋습니다.

## 왜 볼 만한가

'다른 이름으로 저장'한 페이지는 몇 달 뒤 빈 화면이나 멈춘 스피너로 열리기 쉽습니다. kage는 각 페이지를 실제 헤드리스 크롬에서 열어 안정될 때까지 기다린 뒤 DOM을 스냅샷하고, 자바스크립트를 모두 지우고 CSS·이미지·폰트를 로컬 경로로 내려받습니다. `kage pack`으로 Kiwix가 쓰는 ZIM 파일 하나 또는 사이트를 스스로 서비스하는 실행 파일 하나(약 13 MiB + 사이트)로 묶을 수 있습니다.

## 이걸로 무엇을 만들 수 있나

- 사내 문서 사이트를 `--refresh`로 주기적으로 다시 렌더링해 스크립트 없는 정적 사본으로 보관하는 작업이나, 크로미움이 포함된 컨테이너 이미지로 서버에서 돌리는 아카이빙 작업을 만들 수 있습니다. 순수 Go ZIM 읽기/쓰기 패키지(zim/)는 따로 가져다 쓸 수 있습니다.

## 누구에게 맞나

- 글 모음을 오래 보관하려는 독자 — 에세이 사이트 전체를 오프라인 폴더나 ZIM 한 파일로
- 문서 담당자 — 문서 사이트를 스크립트 없는 사본으로 배포
- Go 개발자 — 순수 Go ZIM 패키지와 헤드리스 크롬 제어 코드 재사용

## 5분 안에 시작하기

```
# brew install --cask tamnd/tap/kage   # Windows: scoop bucket add tamnd https://github.com/tamnd/scoop-bucket && scoop install kage / Go: go install github.com/tamnd/kage/cmd/kage@latest
# kage clone paulgraham.com
# kage serve $HOME/data/kage/paulgraham.com
# # open http://127.0.0.1:8800
# kage pack paulgraham.com               # -> paulgraham.com.zim
```

## 주의할 점

- 라이선스 MIT. 호스트에 Chrome/Chromium이 필요(컨테이너 이미지는 크로미움 포함). 기본은 robots.txt를 따름.
- ZIM 출력은 Kiwix 자체 팩의 전문 검색 인덱스를 만들지 않아 리더 안 검색이 제한됨. 실행 파일 묶음은 사이트 크기와 무관하게 약 13 MiB가 추가됨. 네이티브 창 뷰어는 cgo 빌드 옵션.
- 무료. 최신 릴리스 v0.3.12(2026-09-15 확인), 0.x 단계.

## 영수증

- TESIGN이 처음 본 시각: 2026-09-13 08:18 UTC
- 출처 등록: 2026-06-14 11:21 UTC
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

[대표 이미지] https://tesign.com/img/kage-f2e1003e91.png
