const addWeaponKill = require('../utils/addWeaponKill');
const initializeInfo = require('../utils/initializeInfo');

const weapon = "MOD_RAILGUN";

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
	"kills": {},
	"kills_by_means": { "MOD_RAILGUN": 1 },
	"players": [],
	"total_kills": 0,
}

let mock_2 = {
	"game": {},
	"kills": {},
	"kills_by_means": { "MOD_RAILGUN": 2 },
	"players": [],
	"total_kills": 0,
}

gameJSON = initializeInfo(gameJSON);	

test('Add weapon kill when the variable is not initialize', () => {   
  expect(addWeaponKill(weapon, gameJSON)).toEqual(mock_1);
});

test('Add weapon kill when the variable was initialize', () => {   
  expect(addWeaponKill(weapon, gameJSON)).toEqual(mock_2);
});

