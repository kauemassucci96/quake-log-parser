const addKillers = require('../utils/addKillers');
const initializeInfo = require('../utils/initializeInfo');
const killer = "Zeh";

let gameJSON = {
	game: {		
		players: [],
		total_kills: 0,		
		kills: {},
		kills_by_means: {},
	}
}

let mock_1 = {
	"game": {},
	"kills": { "Zeh": 1 },
	"kills_by_means": {},
	"players": [],
	"total_kills": 0,
}

let mock_2 = {
	"game": {},
	"kills": { "Zeh": 2 },
	"kills_by_means": {},
	"players": [],
	"total_kills": 0,
}

let mock_3 = {
	"game": {},
	"kills": { "Zeh": 3 },
	"kills_by_means": {},
	"players": [],
	"total_kills": 0,
}

gameJSON = initializeInfo(gameJSON);	

test('Set to 1 if kills is undefined', () => {   
  expect(addKillers(killer, gameJSON)).toEqual(mock_1);  
});

test('Add one kill in players array', () => {   
  expect(addKillers(killer, gameJSON)).toEqual(mock_2);
});

test('Add another kill to player', () => {   
  expect(addKillers(killer, gameJSON)).toEqual(mock_3);
});