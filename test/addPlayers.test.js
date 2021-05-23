const addPlayers = require('../utils/addPlayers');
const initializeInfo = require('../utils/initializeInfo');

const ZEH_PLAYER = "Zeh";
const WORLD_PLAYER = "<world>"

let gameJSON = {
	game: {		
		players: [],
		total_kills: 0,		
		kills: {},
		kills_by_means: {},
	}
}

gameJSON = initializeInfo(gameJSON);

let mock_1 = {
	"game": {},
	"kills": {},
	"kills_by_means": {},
	"players": [],
	"total_kills": 0,
}

let mock_2 = {
	"game": {},
	"kills": { "Zeh": 0},
	"kills_by_means": {},
	"players": [ "Zeh" ],
	"total_kills": 0,
}
	
test('Not add <world> in players array', () => {   
  expect(addPlayers(WORLD_PLAYER, gameJSON)).toEqual(mock_1);  
});

test('Add Zeh in players array', () => {   
  expect(addPlayers(ZEH_PLAYER, gameJSON)).toEqual(mock_2);  
});

test('Not add zeh in players array again', () => {   
  expect(addPlayers(ZEH_PLAYER, gameJSON)).toEqual(mock_2);  
});