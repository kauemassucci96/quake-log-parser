const createRanking = require('../utils/createRanking');

let gameInfo =  {
    players: [
      'Dono da Bola',
      'Isgalamido',
      'Zeh',
      'Oootsimo',
      'Mal',
      'Assasinu Credi'
    ],
    total_kills: 131,
    kills: {
      'Dono da Bola': 14,
      Isgalamido: 17,
      Zeh: 19,
      Oootsimo: 22,
      Mal: 6,
      'Assasinu Credi': 19
    },
    kills_by_means: {
      MOD_ROCKET: 37,
      MOD_TRIGGER_HURT: 14,
      MOD_RAILGUN: 9,
      MOD_ROCKET_SPLASH: 60,
      MOD_MACHINEGUN: 4,
      MOD_SHOTGUN: 4,
      MOD_FALLING: 3
    },
    ranking: {}
}

let ranking_1 =  {        
    Oootsimo: 22,
    Zeh: 19,    
    'Assasinu Credi': 19,
    Isgalamido: 17,
    'Dono da Bola': 14,
    Mal: 6
  }
  
  let ranking_2 =  {        
    Oootsimo: 22,
    Zeh: 19,        
    Isgalamido: 17,
    'Assasinu Credi': 19,
    'Dono da Bola': 14,
    Mal: 6
  }
  

const compareRankingTrue = JSON.stringify(createRanking(gameInfo))===JSON.stringify(ranking_1)
const compareRankingFalse = JSON.stringify(createRanking(gameInfo))===JSON.stringify(ranking_2)

test('ranking is ordered', () => {   
  expect(compareRankingTrue).toBe(true);
});

test('ranking is not ordered', () => {   
  expect(compareRankingFalse).toBe(false);
});