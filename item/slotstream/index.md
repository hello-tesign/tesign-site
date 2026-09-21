# Slotstream

> 맥에서 대형 모델 로컬 실행 — 48GB 맥에서 105GB Qwen3.8-Flash-Next 모델을 SSD 스트리밍으로 돌리는 로컬 LLM 런타임, Ollama 호환 API

- 페이지: https://tesign.com/item/slotstream/
- JSON: https://tesign.com/item/slotstream/index.json
- 영어 마크다운: https://tesign.com/en/item/slotstream/index.md
- 생성 시각: 2026-09-21 05:13 UTC

## 숫자

- 별 382 — GitHub에서 2026-09-19 22:59 UTC 확인
- 7일 별 증가 관측 없음 (GH Archive) (기준 2026-09-21 00:00 UTC)
- Show HN 240점 — 2026-09-13 13:59 UTC 관측
- 별 총합 = GitHub에서 마지막으로 확인한 값(stars_checked_at) + 그 뒤 GH Archive에서 관측한 증가. 24h·7d·30d 증가는 GH Archive 시간별 이벤트를 기준 시각(as_of)까지 합한 값. 우리 점수는 없습니다.

## 한눈에 보는 사실

- 라이선스: MIT (허용적) — https://spdx.org/licenses/MIT.html
- 사용 범위: 상업 이용·수정·재배포 가능. 저작권 고지는 유지.
- 오픈소스: 예
- 언어: Swift
- 플랫폼: macos · cli
- 분류: AI
- 태그: local-llm · apple-silicon · mixture-of-experts · mlx · ollama · swift
- 바로 쓰기: 설치해서 쓰기
- 출처: Show HN https://github.com/carloslfu/slotstream
- INSTALL: https://sevrahq.com/

## 활동

- 마지막 커밋: 2026-09-18 21:50 UTC
- 최근 릴리스: v0.2.22 (2026-09-18)
- 기여자: 3
- 열린 이슈 (PR 포함): 14
- 만든 이: 개인
- GitHub 확인 시각: 2026-09-19 22:59 UTC

## 선정 신호와 근거

- 과거 기록

## TESIGN TAKE

RAM보다 큰 모델을 SSD에서 흘려보내는 발상은 실제로 돌아가지만, 지원 모델은 이것 하나뿐이고 속도는 기기마다 크게 다르다.

## 왜 볼 만한가

Qwen3.8-Flash-Next는 README 기준 105GB짜리 MoE(전문가 혼합) 모델인데, Slotstream은 공유 가중치만 메모리에 두고 필요한 전문가를 SSD에서 읽어 와 캐시한다. 개발자의 48GB M5 Pro에서 워밍업 후 13.47 tok/s를 측정했고(0.2.16 사전 릴리스 벤치마크), 16GB M2 Mac mini 커뮤니티 보고는 1.41 tok/s였다. 한 번 내려받으면 오프라인으로 동작하고 Python이나 클라우드 계정이 필요 없다.

## 이걸로 무엇을 만들 수 있나

- OpenAI·Ollama 호환 API에 Open WebUI 같은 채팅 앱이나 Hermes·fx 같은 에이전트를 붙이면, 인터넷 없이 문서·이미지 질문에 답하는 개인용 AI 서버를 맥 한 대로 만들 수 있다. Swift 라이브러리로 맥 앱에 직접 내장하는 길도 있다.

## 누구에게 맞나

- 애플 실리콘 맥 사용자 — 대형 모델을 클라우드 계정 없이 로컬 실행
- 개인정보에 민감한 사용자 — 문서·이미지 질문을 기기 안에서 처리
- 로컬 LLM 개발자 — MLX+Swift로 만든 MoE 전문가 스트리밍 구현 참고

## 5분 안에 시작하기

```
# curl -fsSL https://raw.githubusercontent.com/carloslfu/slotstream/main/install.sh | sh
# slotstream doctor
# slotstream run --prompt "Why is the sky blue?"
```

## 주의할 점

- MIT(코드). 모델 가중치는 별도의 Qwen 커뮤니티 라이선스를 따른다.
- 애플 실리콘 맥 + 메모리 16GB 이상 + macOS 14 이상 + 여유 SSD 약 110GB 필수. 8GB 맥은 시작을 거부하고 Windows·Linux·인텔 맥은 미지원.
- 모델 다운로드는 수 시간 걸릴 수 있고, 긴 프롬프트는 첫 응답까지 수 분이 걸리며 한 번에 하나의 생성만 처리한다.

## 영수증

- TESIGN이 처음 본 시각: 2026-09-13 13:59 UTC
- 출처 등록: 2026-09-01 16:42 UTC
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

[대표 이미지] https://tesign.com/img/og/slotstream.png
