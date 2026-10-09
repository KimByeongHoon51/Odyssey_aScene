// =====================================================================
//  Odyssey_aScene — 밸런스 데이터 테이블
//  이 파일의 숫자만 바꾸면 게임에 그대로 반영됩니다.
//  보기 편한 표·즉석 수정·테스트 플레이는 balance.html 에서 할 수 있습니다.
//  단위: 시간 = 초, 거리·반경 = 도트(px, 화면 가로 320 기준), 속도 = 도트/초
// =====================================================================
window.BALANCE = {
  // ---------------- 플레이어 ----------------
  player: {
    hp: 100,          // 최대 체력
    speed: 70,        // 이동 속도
    invuln: 2,        // 피격 후 무적 시간
  },

  // ---------------- 플레이어 무기 ----------------
  bow: {
    dmg: 25,          // 화살 1발 데미지
    interval: 1.2,    // 발사 주기 (초마다 1발)
    range: 210,       // 조준 사거리
    arrowSpeed: 230,  // 화살 속도
  },
  sword: {
    dmg: 8,           // 틱당 데미지
    tick: 0.12,       // 같은 적을 다시 때리기까지 간격
    radius: 22,       // 회전 반경 (가까이)
    spinSpeed: 4.6,   // 회전 속도 (라디안/초, 빠르게)
    hitSize: 7,       // 판정 크기
    knockback: 2,     // 밀어내기
  },
  axe: {
    dmg: 16,
    tick: 0.12,
    radius: 42,       // 멀리
    spinSpeed: 2.2,   // 느리게
    hitSize: 9,
    knockback: 9,
  },

  // ---------------- 무기 드랍 ----------------
  drops: {
    guaranteedKills: [3, 15],  // 이 처치 수에서 검 1개 + 도끼 1개 확정 드랍 (순서는 랜덤)
    randomRate: 0.10,          // 검·도끼를 든 구혼자가 처치될 때 그 무기를 떨어뜨릴 확률
  },

  // ---------------- 구혼자 ----------------
  enemies: {
    fist:     { name: '맨주먹',    hp: 60,  dmg: 5,  speed: 70 },
    sword:    { name: '검',        hp: 84,  dmg: 8,  speed: 70 },
    axe:      { name: '도끼',      hp: 120, dmg: 12, speed: 60 },
    swordaxe: { name: '검&도끼',   hp: 156, dmg: 15, speed: 60 },
    spear:    { name: '창',        hp: 120, dmg: 18, speed: 77 },
  },

  // ---------------- 스테이지 ----------------
  // mix: 등장하는 구혼자 종류 (같은 확률로 섞임)
  // groupMin~groupMax: 한 번에 몰려오는 인원, spawnInterval: 무리 사이 간격
  stages: [
    { enemies: 50, mix: ['fist'],              groupMin: 3, groupMax: 5,  spawnInterval: 4.6 },
    { enemies: 50, mix: ['fist', 'sword'],     groupMin: 3, groupMax: 5,  spawnInterval: 4.6 },
    { enemies: 50, mix: ['sword'],             groupMin: 3, groupMax: 5,  spawnInterval: 4.8 },
    { enemies: 50, mix: ['sword', 'axe'],      groupMin: 5, groupMax: 8,  spawnInterval: 6.4 },
    { enemies: 50, mix: ['axe'],               groupMin: 5, groupMax: 8,  spawnInterval: 6.6 },
    { enemies: 50, mix: ['swordaxe'],          groupMin: 6, groupMax: 10, spawnInterval: 7.6 },
    { enemies: 50, mix: ['swordaxe', 'spear'], groupMin: 6, groupMax: 10, spawnInterval: 7.6 },
    { enemies: 50, mix: ['spear'],             groupMin: 8, groupMax: 13, spawnInterval: 10.5 },
  ],

  // ---------------- 보스: 안티노오스 ----------------
  // patterns: dash(돌진) / triple(3연속 돌진) / slam(내려찍기 충격파) / spin(회전 베기)
  // cooldown: 패턴 사이 간격, dashSpeed×dashTime = 돌진 거리, dashSpin: 돌진 후 회전 베기
  bosses: [
    { name: '맨주먹의 안티노오스',    hp: 500,  dmg: 10, speed: 52, cooldown: 3.0, patterns: ['dash'],                   dashSpeed: 200, dashTime: 0.40, dashSpin: false },
    { name: '장검의 안티노오스',      hp: 650,  dmg: 14, speed: 52, cooldown: 2.6, patterns: ['dash'],                   dashSpeed: 215, dashTime: 0.42, dashSpin: false },
    { name: '쌍검의 안티노오스',      hp: 800,  dmg: 16, speed: 52, cooldown: 2.6, patterns: ['dash', 'spin'],           dashSpeed: 230, dashTime: 0.44, dashSpin: false },
    { name: '도끼의 안티노오스',      hp: 950,  dmg: 18, speed: 48, cooldown: 2.6, patterns: ['dash', 'slam'],           dashSpeed: 250, dashTime: 0.46, dashSpin: true },
    { name: '쌍도끼의 안티노오스',    hp: 1100, dmg: 20, speed: 48, cooldown: 2.5, patterns: ['dash', 'slam', 'spin'],   dashSpeed: 265, dashTime: 0.48, dashSpin: true },
    { name: '검과 도끼의 안티노오스', hp: 1250, dmg: 22, speed: 50, cooldown: 2.4, patterns: ['dash', 'slam'],           dashSpeed: 280, dashTime: 0.50, dashSpin: true },
    { name: '창과 도끼의 안티노오스', hp: 1400, dmg: 24, speed: 52, cooldown: 2.2, patterns: ['dash', 'slam', 'spin'],   dashSpeed: 300, dashTime: 0.52, dashSpin: true },
    { name: '황금 창의 안티노오스',   hp: 1600, dmg: 25, speed: 58, cooldown: 2.2, patterns: ['triple', 'slam', 'spin'], dashSpeed: 320, dashTime: 0.55, dashSpin: true },
  ],
  // 보스 패턴 공통 수치 (dash 외 패턴은 1차 대비 범위 ×1.5, 시전 ×1/1.5)
  bossPattern: {
    dashTele: 0.65,      // 돌진 예고 시간
    tripleTele: 0.32,    // 3연속 돌진 사이 예고
    tripleCount: 3,
    slamTele: 0.43,      // 내려찍기 예고 (1차 0.65)
    slamRadius: 105,     // 충격파 최대 반경 (1차 70)
    slamTime: 0.35,      // 충격파 퍼지는 시간 (1차 0.45)
    slamWidth: 9,        // 충격파 판정 두께 (1차 7)
    spinTele: 0.33,      // 회전 베기 예고 (1차 0.5)
    spinRadius: 39,      // 회전 베기 반경 (1차 26)
    spinTime: 2.1,       // 회전 베기 지속 (1차 1.4)
    spinSpeedMul: 1.35,  // 회전 베기 중 추격 속도 배율 (1차 0.9)
    dashSpinTime: 0.9,   // 돌진 직후 회전 베기 지속
  },
};
