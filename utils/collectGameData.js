const addKillers = require('./addKillers');
const addPlayers = require('./addPlayers');
const addWeaponKill = require('./addWeaponKill');
const getKilledPlayer = require('./getKilledPlayer');
const getKillerPlayer = require('./getKillerPlayer');
const getWeapon = require('./getWeapon');
const reduceKillFromPlayer = require('./reduceKillFromPlayer');

// Collect all data for each game
function colectGameData(expression, gameJSON) {

	// Gets the player killed and player killer
    var killer = getKillerPlayer(expression);
    var killed = getKilledPlayer(expression);

    // Add killer players and kills on array
	gameJSON = addPlayers(killer, gameJSON);
	if(killer !== "<world>") {
		gameJSON = addKillers(killer, gameJSON);
	}

	// Add player killed on array
	addPlayers(killed, gameJSON);
    
	// Add weapon on kills by means arrat
	var weapon = getWeapon(expression);
	gameJSON = addWeaponKill(weapon, gameJSON);

	// if the killer is the world, remove a point from the dead player
	if(killer === "<world>") {
		gameJSON = reduceKillFromPlayer(expression, gameJSON);
	}
				
	gameJSON.total_kills++;		
	return gameJSON;
}

module.exports = colectGameData;