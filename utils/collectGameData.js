const addPlayers = require('./addPlayers');
const addWeaponKill = require('./addWeaponKill');
const getKilledPlayer = require('./getKilledPlayer');
const getKillerPlayer = require('./getKillerPlayer');
const getWeapon = require('./getWeapon');

// Collect all data for each game
function colectGameData(expression, gameJSON) {

	// Gets the player killed and player killer
    var killer = getKillerPlayer(expression);
    var killed = getKilledPlayer(expression);

    // Add killer players and kills on array
	gameJSON = addPlayers(killer, gameJSON);
    
	// Add weapon on kills by means arrat
	var weapon = getWeapon(expression);
	gameJSON = addWeaponKill(weapon, gameJSON);

	return gameJSON;

}

module.exports = colectGameData;