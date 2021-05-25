const getKilledPlayer = require('../src/utils/getKilledPlayer');

const PLAYER_MAL = '<world> killed Mal by MOD_TRIGGER_HURT';
const PLAYER_ZEH = '<world> killed Zeh by MOD_TRIGGER_HURT';
const PLAYER_ISGALAMIDO = 'Zeh killed Isgalamido by MOD_TRIGGER_HURT';

test('Get the player Mal', () => {   
  expect(getKilledPlayer(PLAYER_MAL)).toBe("Mal");  
});

test('Get the player Zeh', () => {   
    expect(getKilledPlayer(PLAYER_ZEH)).toBe("Zeh");  
});

test('Get the player Isgalamido', () => {   
    expect(getKilledPlayer(PLAYER_ISGALAMIDO)).toBe("Isgalamido");  
});
