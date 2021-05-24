const collectGameData = require('../utils/collectGameData');
const initializeInfo = require('../utils/initializeInfo');

const expression = '<world> killed Mal by MOD_TRIGGER_HURT';

let gameInfo = {};
gameInfo = initializeInfo();

let mock_1 = {	
	kills: {
		'Mal': -1,
	  },
	kills_by_means: { MOD_TRIGGER_HURT: 1},
	players: [ 'Mal'],
	total_kills: 1,	
	ranking: {}
}

test('should collect game data info', () => {   
  expect(collectGameData(expression, gameInfo)).toEqual(mock_1);  
});