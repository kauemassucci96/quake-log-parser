const initializeInfo = require('../src/utils/initializeInfo');

let gameInfo = {};

let gameMock = {
    players: [],
    total_kills: 0,
    kills: {},
    kills_by_means: {},
    ranking: {}
}

test('Initialize game info', () => {   
  expect(initializeInfo(gameInfo)).toEqual(gameMock);  
});