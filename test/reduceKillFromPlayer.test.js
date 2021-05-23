const initializeInfo = require('../utils/initializeInfo');
const reduceKillFromPlayer = require('../utils/reduceKillFromPlayer');
const weapon = "MOD_RAILGUN";
const kill_one = '<world> killed Mal by MOD_ROCKET';
const kill_two = '<world> killed Dono da Bola by MOD_ROCKET';
const kill_three = '<world> killed Oootsimo by MOD_ROCKET';
const kill_four = '<world> killed Zeh by MOD_ROCKET';

let gameJSON = {
	game: {		
		players: [],
		total_kills: 0,		
		kills: {},
		kills_by_means: {},
	}
}

gameJSON = initializeInfo(gameJSON);
gameJSON.kills = {    
	'Dono da Bola': 12,
    'Isgalamido': 15,
    'Zeh': 17,
    'Oootsimo': 20,
    'Assasinu Credi': 16
};

let mock_1 = {
	"game": {},
	"kills": {
        'Dono da Bola': 12,
        'Isgalamido': 15,
        'Zeh': 17,
        'Oootsimo': 20,
        'Assasinu Credi': 16,
        'Mal': -1        
    },
	"kills_by_means": {},
	"players": [],
	"total_kills": 0,
}

let mock_2 = {
	"game": {},
	"kills": {
        'Dono da Bola': 11,
        'Isgalamido': 15,
        'Zeh': 17,
        'Oootsimo': 20,
        'Assasinu Credi': 16,
        'Mal': -1        
    },
	"kills_by_means": {},
	"players": [],
	"total_kills": 0,
}

let mock_3 = {
	"game": {},
	"kills": {
        'Dono da Bola': 11,
        'Isgalamido': 15,
        'Zeh': 17,
        'Oootsimo': 19,
        'Assasinu Credi': 16,
        'Mal': -1        
    },
	"kills_by_means": {},
	"players": [],
	"total_kills": 0,
}

let mock_4 = {
	"game": {},
	"kills": {
        'Dono da Bola': 11,
        'Isgalamido': 15,
        'Zeh': 16,
        'Oootsimo': 19,
        'Assasinu Credi': 16,
        'Mal': -1        
    },
	"kills_by_means": {},
	"players": [],
	"total_kills": 0,
}

test('Subtract one point from player Mal', () => {   
  expect(reduceKillFromPlayer(kill_one, gameJSON)).toEqual(mock_1);  
});

test('Subtract another point from player Dono da Bola', () => {   
  expect(reduceKillFromPlayer(kill_two, mock_1)).toEqual(mock_2);  
});

test('Subtract another point from player Oootsimo', () => {   
  expect(reduceKillFromPlayer(kill_three, mock_2)).toEqual(mock_3);  
});

test('Subtract another point from player Zeh', () => {   
  expect(reduceKillFromPlayer(kill_four, mock_3)).toEqual(mock_4);  
});