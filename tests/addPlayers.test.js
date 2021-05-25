const addPlayers = require('../src/utils/addPlayers');
const initializeInfo = require('../src/utils/initializeInfo');

const ZEH_PLAYER = "Zeh";
const WORLD_PLAYER = "<world>"

let gameInfo = {
	game: {		
		players: [],
		total_kills: 0,		
		kills: {},
		kills_by_means: {},
		ranking: {}		
	}
}

gameInfo = initializeInfo(gameInfo);

let mock_1 = {	
	kills: {},
	kills_by_means: {},
	players: [],
	total_kills: 0,	
	ranking: {}	
}

let mock_2 = {	
	kills: {
		'Zeh': 0
	},
	kills_by_means: {},
	players: [ 'Zeh'],
	total_kills: 0,	
	ranking: {}	
}

test('Not add <world> in players array', () => {   
  expect(addPlayers(WORLD_PLAYER, gameInfo)).toEqual(mock_1);  
});

test('Add Zeh in players array', () => {   
  expect(addPlayers(ZEH_PLAYER, gameInfo)).toEqual(mock_2);  
});

test('Not add zeh in players array again', () => {   
  expect(addPlayers(ZEH_PLAYER, gameInfo)).toEqual(mock_2);  
});