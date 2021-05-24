const getKillerPlayer = require('../utils/getKillerPlayer');

const PLAYER_WORLD = '<world> killed Mal by MOD_TRIGGER_HURT';
const PLAYER_DONO_DA_BOLA = 'Dono da Bola killed Zeh by MOD_TRIGGER_HURT';
const PLAYER_ASSASINU_CREDI = 'Assasinu Credi killed Isgalamido by MOD_TRIGGER_HURT';

test('Get the player <world>', () => {   
  expect(getKillerPlayer(PLAYER_WORLD)).toBe("<world>");  
});

test('Get the player Dono da Bola', () => {   
    expect(getKillerPlayer(PLAYER_DONO_DA_BOLA)).toBe("Dono da Bola");  
});

test('Get the player Assasinu Credi', () => {   
    expect(getKillerPlayer(PLAYER_ASSASINU_CREDI)).toBe("Assasinu Credi");  
});  