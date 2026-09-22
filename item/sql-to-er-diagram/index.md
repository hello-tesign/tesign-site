# SQL to ER Diagram

> SQL 스키마를 ER 도표로 — CREATE TABLE 문을 붙여 넣으면 브라우저 안에서만 동작하는 인터랙티브 ER 다이어그램이 그려지는 정적 페이지

- 페이지: https://tesign.com/item/sql-to-er-diagram/
- JSON: https://tesign.com/item/sql-to-er-diagram/index.json
- 영어 마크다운: https://tesign.com/en/item/sql-to-er-diagram/index.md
- 생성 시각: 2026-09-22 06:54 UTC

## 숫자

- 별 623 — GitHub에서 2026-09-22 00:38 UTC 확인
- 7일 별 증가 관측 없음 (GH Archive) (기준 2026-09-21 20:00 UTC)
- 별 총합 = GitHub에서 마지막으로 확인한 값(stars_checked_at) + 그 뒤 GH Archive에서 관측한 증가. 24h·7d·30d 증가는 GH Archive 시간별 이벤트를 기준 시각(as_of)까지 합한 값. 우리 점수는 없습니다.

## 한눈에 보는 사실

- 라이선스: MIT (허용적) — https://spdx.org/licenses/MIT.html
- 사용 범위: 상업 이용·수정·재배포 가능. 저작권 고지는 유지.
- 오픈소스: 예
- 언어: HTML
- 플랫폼: web
- 분류: 데이터 · 개발 도구
- 태그: erd · sql · database · diagram · canvas · static-site
- 바로 쓰기: 설치 없이 바로
- 출처: GitHub https://github.com/royalbhati/sqltoerdiagram
- TRY: https://sqltoerdiagram.com./

## 활동

- 마지막 커밋: 2026-07-17 16:17 UTC
- 최근 릴리스: 릴리스 없음
- 기여자: 2
- 열린 이슈 (PR 포함): 1
- 만든 이: 개인
- GitHub 확인 시각: 2026-09-22 00:38 UTC

## 선정 신호와 근거

- 과거 기록

## TESIGN TAKE

SQL 파일이 정본이고 다이어그램은 그것을 양방향으로 편집하는 화면이라는 설계가 핵심이다.

## 왜 볼 만한가

서버가 없어 스키마가 기기를 떠나지 않고, 공유 링크는 프로젝트 전체(SQL·배치·카메라·방언)를 gzip+base64로 URL 해시에 담는다. 캔버스 렌더러(비트맵 캐시+뷰포트 컬링)는 300 테이블·593 FK를 확대·축소할 때 약 120fps로 벤치마크됐고, 캔버스에서 테이블·컬럼 이름을 더블클릭해 고치면 주석과 서식을 보존한 채 SQL 원문에 반영된다. 의존성 2개, 번들 32KB gzip.

## 이걸로 무엇을 만들 수 있나

- dist/가 정적 파일이라 사내 위키나 GitHub Pages에 올려 팀 스키마 문서로 쓸 수 있고, MIT라 자기 SQL 방언 파서를 추가해 포크해도 된다.

## 누구에게 맞나

- 백엔드 개발자 — 마이그레이션 파일을 붙여 넣어 관계 확인
- 데이터 분석가 — BigQuery WITH 쿼리의 CTE 의존 관계 시각화
- 팀 리드 — 계정 없이 링크 하나로 스키마 리뷰 공유

## 5분 안에 시작하기

```
# npm install
# npm run dev      # http://localhost:5173
# npm run build    # outputs static files to dist/
# npm run preview  # preview the production build locally
# 설치 없이 쓰려면: https://sqltoerdiagram.com
```

## 주의할 점

- MIT. 순수 브라우저 앱. README 기준 지원 방언은 PostgreSQL·MySQL·SQLite·SQL Server·Snowflake와 BigQuery 모드(라이브 사이트는 Oracle·MariaDB·Prisma·DBML 등도 나열하지만 README에는 없음). 파서는 CREATE/ALTER TABLE과 PK·FK·UNIQUE 제약 중심이라 뷰·인덱스·트리거는 지원 목록에 없다. 마지막 푸시 2026-07-17.

## 영수증

- TESIGN이 처음 본 시각: 2026-09-13 08:17 UTC
- 출처 등록: 2026-06-14 04:12 UTC
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

[대표 이미지] https://tesign.com/img/sql-to-er-diagram-ee5a44a02c.png
