# Odyssey_aScene

영화 「오디세이」의 구혼자 처단 장면을 옮긴 탑뷰 도트 뱀파이어 서바이벌 웹게임.

**플레이:** https://kimbyeonghoon51.github.io/Odyssey_aScene/

- 오디세우스의 집 큰 홀, 도끼 6쌍이 일렬로 선 연회장에서 사방에서 몰려드는 구혼자를 물리친다.
- 처음엔 자동 추적 활(25, 1.2초마다)만. 검(틱당 8, 가까이·빠르게)과 도끼(틱당 16, 멀리·느리게)를 주우면 주위를 회전한다. 스테이지마다 검·도끼 1개씩 확정 + 무기 든 구혼자 10% 드랍.
- 스테이지 8개 × 구혼자 50명 + 매 스테이지 보스 안티노오스(8종). HP 100, 피격 후 2초 무적.
- 조작: 방향키 / WASD, 일시정지 ESC
- 단일 HTML 파일, 그래픽·사운드 모두 코드로 생성(Web Audio). 글꼴: Galmuri.

## 밸런스 수정
- 모든 수치는 `balance.js` 한 파일에 있습니다.
- `balance.html`에서 표로 보고 바로 고친 뒤 **테스트 플레이**로 확인하고, **balance.js 다운로드**로 확정합니다.
  - 배포판: https://kimbyeonghoon51.github.io/Odyssey_aScene/balance.html
