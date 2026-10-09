# Odyssey_aScene

영화 「오디세이」의 구혼자 처단 장면을 옮긴 탑뷰 도트 뱀파이어 서바이벌 웹게임.

**플레이:** https://kimbyeonghoon51.github.io/Odyssey_aScene/

- 오디세우스의 집 큰 홀, 도끼 6쌍이 일렬로 선 연회장에서 사방에서 몰려드는 구혼자를 물리친다.
- 처음엔 자동 추적 활만. 안티노오스를 잡을 때마다 검·도끼 1개씩(8스테이지 시작 시 7/7), 검 든 적은 검·도끼 든 적은 도끼를 낮은 확률로 떨어뜨린다. 검·도끼는 주위를 회전.
- 구혼자는 동서남북에서 한 명씩 들어온다. 3스테이지부터 방패병(체력 200) 등장.
- 스테이지 8개 × 구혼자 50명 + 매 스테이지 보스 안티노오스(8종). HP 100, 피격 후 2초 무적.
- 조작: 방향키 / WASD, 일시정지 ESC
- 활시위 효과음 출처: https://www.youtube.com/watch?v=a5IQCGdd_m8&list=OLAK5uy_kRTQIEg9CFPcHVIzcKKTJ3TQ_UCrb5dio&index=21
- 단일 HTML 파일, 그래픽·사운드 모두 코드로 생성(Web Audio). 글꼴: Galmuri.

## 밸런스 수정
- 모든 수치는 `balance.js` 한 파일에 있습니다.
- `balance.html`에서 표로 보고 바로 고친 뒤 **테스트 플레이**로 확인하고, **balance.js 다운로드**로 확정합니다.
  - 배포판: https://kimbyeonghoon51.github.io/Odyssey_aScene/balance.html
