# DeskComm CRM

> 채팅 판매 사업자용 CRM — 채팅으로 파는 영업을 CRM과 AI 상담으로 묶어 운영합니다.

- 페이지: https://tesign.com/item/deskcommcrm/
- JSON: https://tesign.com/item/deskcommcrm/index.json
- 영어 마크다운: https://tesign.com/en/item/deskcommcrm/index.md
- 생성 시각: 2026-09-15 19:35 UTC

## 순위

- 이번 주 급상승 20위 · 커머스 분야 3위 (기준 2026-09-15 15:00 UTC)

## 숫자

- 별 2,735 — GitHub에서 2026-09-15 19:33 UTC 확인
- 7일 +310은 GH Archive 관측 (기준 2026-09-15 15:00 UTC)
- 24h +20 ★ · 30d +312 ★ (기준 2026-09-15 15:00 UTC)
- 별 총합 = GitHub에서 마지막으로 확인한 값(stars_checked_at) + 그 뒤 GH Archive에서 관측한 증가. 24h·7d·30d 증가는 GH Archive 시간별 이벤트를 기준 시각(as_of)까지 합한 값. 우리 점수는 없습니다.

## 한눈에 보는 사실

- 라이선스: MIT (허용적) — https://spdx.org/licenses/MIT.html
- 사용 범위: 상업 이용·수정·재배포 가능. 저작권 고지는 유지.
- 오픈소스: 예
- 언어: TypeScript
- 플랫폼: web
- 분류: 커머스 · AI
- 태그: crm · chat · self-host
- 바로 쓰기: 직접 서버에
- 출처: GitHub https://github.com/melgarafael/deskcommcrm
- SELF-HOST: https://deskcomm.com.br/

## 활동

- 마지막 커밋: 2026-09-15 18:48 UTC
- 최근 릴리스: v1.27.2 (2026-09-15)
- 기여자: 59
- 열린 이슈 (PR 포함): 134
- 만든 이: 개인
- GitHub 확인 시각: 2026-09-15 19:33 UTC

## TESIGN TAKE

채팅으로 파는 가게를 위한 CRM인데, 설치 스크립트가 도메인·DB·키까지 묻는 방식이라 직접 운영할 각오는 필요합니다.

## 왜 볼 만한가

채팅으로 주문을 받는 곳은 대화 기록과 고객 정보가 메신저와 스프레드시트로 갈라져 남습니다. deskcommcrm은 CRM과 AI 에이전트, WhatsApp 연동을 한 묶음으로 두고 직접 설치해 운영하게 합니다. 다중 테넌트 구조에 MCP 연동을 지원하고 TypeScript·MIT로 공개돼 있습니다. 홈페이지 주소와 LGPD 표기로 보아 브라질 시장을 기준으로 만들어졌습니다.

## 이걸로 무엇을 만들 수 있나

- 채팅 주문을 받아 고객 기록까지 남기는 사내 CRM
- 1차 문의를 받아 넘기는 채팅 상담 자동화

## 누구에게 맞나

- 온라인 셀러 — WhatsApp 문의와 주문을 한 곳에 기록할 때
- 소규모 영업팀 — 1차 응대를 AI에 맡기고 기록을 남길 때
- 브라질 시장 사업자 — LGPD를 고려한 셀프호스팅 CRM이 필요할 때

## 5분 안에 시작하기

```
# Docker가 되는 VPS(권장 4 GB RAM)·도메인·Supabase 계정·LLM 키 준비
$ ssh -p PORTA root@SEU_IP
$ git clone https://github.com/melgarafael/DeskcommCRM.git
$ cd DeskcommCRM
$ bash hostgator-setup-kit/install.sh
# 설치 후 https://<도메인>으로 접속해 WhatsApp QR을 스캔합니다
```

## 주의할 점

- 문서와 화면이 포르투갈어 기준입니다(영어·스페인어 README 있음)
- VPS·도메인·Supabase·LLM 키·WhatsApp 번호를 모두 직접 준비합니다
- README가 특정 호스팅(HostGator) 제휴 링크를 앞세웁니다

## 영수증

- TESIGN이 처음 본 시각: 2026-09-13 07:43 UTC
- 출처 등록: 2026-04-28 20:00 UTC
- 선정: 2026-09-13 11:32 UTC
- TESIGN 게재: 2026-09-13 11:32 UTC
- 소개 글 마지막 수정: 2026-09-15 04:36 UTC

## 읽는 법

- 이 파일은 tesign.com 항목 페이지와 같은 빌드에서 같은 데이터로 만들어졌습니다. 소개 글은 편집자가 쓴 것이고, 숫자는 저장된 관측값입니다.
- JSON의 null은 관측하지 않았다는 뜻입니다 — 0이 아닙니다. 마크다운에서는 [확인 필요]로 적습니다.
- 별 총합 = GitHub에서 마지막으로 확인한 값(stars_checked_at) + 그 뒤 GH Archive에서 관측한 증가. 24h·7d·30d 증가는 GH Archive 시간별 이벤트를 기준 시각(as_of)까지 합한 값. 우리 점수는 없습니다.
- 요약이며 법적 조언이 아닙니다.

[대표 이미지] https://tesign.com/img/deskcommcrm-355ea2b95c.png
