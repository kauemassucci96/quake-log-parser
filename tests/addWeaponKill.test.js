const addWeaponKill = require('../src/utils/addWeaponKill');
const initializeInfo = require('../src/utils/initializeInfo');

const weapon = "MOD_RAILGUN";

let gameInfo = {
	game: {		
		players: [],
		total_kills: 0,		
		kills: {},
		kills_by_means: {},
		ranking: {}
	}
}

let mock_1 = {	
	kills: {},
	kills_by_means: { MOD_RAILGUN: 1},
	players: [],
	total_kills: 0,	
	ranking: {}	
}

let mock_2 = {	
	kills: {},
	kills_by_means: { MOD_RAILGUN: 2 },
	players: [],
	total_kills: 0,	
	ranking: {}	
}

gameInfo = initializeInfo(gameInfo);	

test('Add weapon kill when the variable is not initialize', () => {   
  expect(addWeaponKill(weapon, gameInfo)).toEqual(mock_1);
});

test('Add weapon kill when the variable was initialize', () => {   
  expect(addWeaponKill(weapon, gameInfo)).toEqual(mock_2);
});

