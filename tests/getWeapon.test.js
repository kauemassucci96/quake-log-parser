const getWeapon = require('../src/utils/getWeapon');

const WEAPON_MOD_TRIGGER_HURT = '<world> killed Mal by MOD_TRIGGER_HURT';
const WEAPON_MOD_ROCKET_SPLASH = '<world> killed Mal by MOD_ROCKET_SPLASH';
const WEAPON_MOD_MACHINEGUN = '<world> killed Mal by MOD_MACHINEGUN';

test('Get the weapon MOD_TRIGGER_HURT', () => {   
  expect(getWeapon(WEAPON_MOD_TRIGGER_HURT)).toBe("MOD_TRIGGER_HURT");  
});

test('Get the weapon MOD_ROCKET_SPLASH', () => {   
    expect(getWeapon(WEAPON_MOD_ROCKET_SPLASH)).toBe("MOD_ROCKET_SPLASH");  
});

test('Get the weapon MOD_MACHINEGUN', () => {   
    expect(getWeapon(WEAPON_MOD_MACHINEGUN)).toBe("MOD_MACHINEGUN");  
});