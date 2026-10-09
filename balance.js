// =====================================================================
//  Odyssey_aScene — 밸런스 데이터 테이블 (balance.html 에서 내보냄 2026. 10. 9. 오후 7:04:32)
//  이 파일의 숫자만 바꾸면 게임에 그대로 반영됩니다.
// =====================================================================
window.BALANCE = {
  player: {
    hp: 100,  // 최대 체력
    speed: 70,  // 이동 속도 (도트/초)
    invuln: 2,  // 피격 후 무적 (초)
  },
  bow: {
    dmg: 50,  // 화살 1발 데미지
    interval: 1,  // 발사 주기 (초)
    range: 210,  // 조준 사거리
    arrowSpeed: 230,  // 화살 속도
  },
  sword: {
    dmg: 8,  // 틱당 데미지
    tick: 0.12,  // 틱 간격 (초)
    radius: 20,  // 회전 반경
    spinSpeed: 5,  // 회전 속도 (라디안/초)
    hitSize: 6,  // 판정 크기
    knockback: 2,  // 밀어내기
  },
  axe: {
    dmg: 24,  // 틱당 데미지
    tick: 0.12,  // 틱 간격 (초)
    radius: 30,  // 회전 반경
    spinSpeed: 3,  // 회전 속도 (라디안/초)
    hitSize: 9,  // 판정 크기
    knockback: 9,  // 밀어내기
  },
  drops: {
    bossSword: 1,  // 안티노오스 처치 시 얻는 검
    bossAxe: 1,  // 안티노오스 처치 시 얻는 도끼
    randomRate: 0.1,  // 검 든 적은 검, 도끼 든 적은 도끼를 떨어뜨릴 확률 (0~1, 맨주먹·창·방패는 없음)
  },
  enemies: {
    fist: { name: '맨주먹', hp: 50, dmg: 5, speed: 65 },
    sword: { name: '검', hp: 84, dmg: 8, speed: 65 },
    axe: { name: '도끼', hp: 120, dmg: 10, speed: 60 },
    swordaxe: { name: '검&도끼', hp: 150, dmg: 12, speed: 60 },
    spear: { name: '창', hp: 170, dmg: 15, speed: 65 },
    shield: { name: '방패', hp: 200, dmg: 5, speed: 60 },
  },
  // mix: 등장 종류, groupMin~groupMax: 한 무리 인원(동서남북에서 한 명씩 들어옴), spawnInterval: 무리 사이 간격, shieldRate: 방패병 비율
  stages: [
    { enemies: 20, mix: ['fist'], groupMin: 3, groupMax: 5, spawnInterval: 4.6, shieldRate: 0 },
    { enemies: 20, mix: ['fist', 'sword'], groupMin: 3, groupMax: 5, spawnInterval: 4.6, shieldRate: 0 },
    { enemies: 20, mix: ['sword'], groupMin: 3, groupMax: 5, spawnInterval: 4.8, shieldRate: 0.2 },
    { enemies: 30, mix: ['sword', 'axe'], groupMin: 5, groupMax: 8, spawnInterval: 6.4, shieldRate: 0.2 },
    { enemies: 40, mix: ['axe'], groupMin: 5, groupMax: 8, spawnInterval: 6.6, shieldRate: 0.2 },
    { enemies: 40, mix: ['swordaxe'], groupMin: 6, groupMax: 10, spawnInterval: 7.6, shieldRate: 0.2 },
    { enemies: 50, mix: ['swordaxe', 'spear'], groupMin: 6, groupMax: 10, spawnInterval: 7.6, shieldRate: 0.2 },
    { enemies: 50, mix: ['spear'], groupMin: 8, groupMax: 13, spawnInterval: 10.5, shieldRate: 0.2 },
  ],
  // patterns: dash / triple / slam / spin, dashSpin: 돌진 후 회전 베기
  bosses: [
    { name: '맨주먹의 안티노오스', hp: 500, dmg: 10, speed: 52, cooldown: 2.6, patterns: ['dash'], dashSpeed: 150, dashTime: 0.5, dashSpin: false },
    { name: '장검의 안티노오스', hp: 600, dmg: 14, speed: 52, cooldown: 2.6, patterns: ['dash'], dashSpeed: 155, dashTime: 0.5, dashSpin: false },
    { name: '쌍검의 안티노오스', hp: 1000, dmg: 16, speed: 52, cooldown: 2.6, patterns: ['dash', 'spin'], dashSpeed: 160, dashTime: 0.5, dashSpin: false },
    { name: '도끼의 안티노오스', hp: 1500, dmg: 18, speed: 52, cooldown: 2.6, patterns: ['dash', 'slam'], dashSpeed: 165, dashTime: 0.5, dashSpin: true },
    { name: '쌍도끼의 안티노오스', hp: 2000, dmg: 20, speed: 52, cooldown: 2.6, patterns: ['dash', 'slam', 'spin'], dashSpeed: 170, dashTime: 0.6, dashSpin: true },
    { name: '검과 도끼의 안티노오스', hp: 2000, dmg: 22, speed: 55, cooldown: 2.4, patterns: ['dash', 'slam'], dashSpeed: 180, dashTime: 0.6, dashSpin: true },
    { name: '창과 도끼의 안티노오스', hp: 2500, dmg: 24, speed: 55, cooldown: 2.2, patterns: ['dash', 'slam', 'spin'], dashSpeed: 190, dashTime: 0.7, dashSpin: true },
    { name: '황금 창의 안티노오스', hp: 3000, dmg: 25, speed: 55, cooldown: 2.2, patterns: ['triple', 'slam', 'spin'], dashSpeed: 200, dashTime: 0.8, dashSpin: true },
  ],
  bossPattern: {
    dashTele: 0.65,  // 돌진 예고 (초)
    tripleTele: 0.32,  // 3연속 돌진 사이 예고 (초)
    tripleCount: 3,  // 연속 돌진 횟수
    slamTele: 0.43,  // 내려찍기 예고 (초)
    slamRadius: 60,  // 충격파 최대 반경
    slamTime: 0.4,  // 충격파 퍼지는 시간 (초)
    slamWidth: 8,  // 충격파 판정 두께
    spinTele: 0.5,  // 회전 베기 예고 (초)
    spinRadius: 35,  // 회전 베기 반경
    spinTime: 2,  // 회전 베기 지속 (초)
    spinSpeedMul: 1.2,  // 회전 베기 중 추격 속도 배율
    dashSpinTime: 1,  // 돌진 직후 회전 베기 지속 (초)
  },
};
