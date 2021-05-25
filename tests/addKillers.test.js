const addKillers = require('../src/utils/addKillers');
const initializeInfo = require('../src/utils/initializeInfo');
const killer = "Zeh";

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
	kills: {
		'Zeh': 1,
	  },
	kills_by_means: {},
	players: [],
	total_kills: 0,	
	ranking: {}
}

let mock_2 = {	
	kills: {
		'Zeh': 2,
	  },
	kills_by_means: {},
	players: [],
	total_kills: 0,	
	ranking: {}	
}

let mock_3 = {	
	kills: {
		'Zeh': 3,
	  },
	kills_by_means: {},
	players: [],
	total_kills: 0,	
	ranking: {}	
}

gameInfo = initializeInfo(gameInfo);	

test('Set to 1 if kills is undefined', () => {   
  expect(addKillers(killer, gameInfo)).toEqual(mock_1);  
});

test('Add one kill in players array', () => {   
  expect(addKillers(killer, gameInfo)).toEqual(mock_2);
});

test('Add another kill to player', () => {   
  expect(addKillers(killer, gameInfo)).toEqual(mock_3);
});