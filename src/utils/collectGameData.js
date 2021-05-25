const addKillers = require('./addKillers');
const addPlayers = require('./addPlayers');
const addWeaponKill = require('./addWeaponKill');
const getKilledPlayer = require('./getKilledPlayer');
const getKillerPlayer = require('./getKillerPlayer');
const getWeapon = require('./getWeapon');
const reduceKillFromPlayer = require('./reduceKillFromPlayer');

// Collect all data for each game
function colectGameData(expression, gameInfo) {
	// Gets the player killed and player killer
    var killer = getKillerPlayer(expression);
    var killed = getKilledPlayer(expression);

    // Add players on array
	gameInfo = addPlayers(killer, gameInfo);

	// Add a kill if the killer is different from <world> or if the player did not commit suicide
	if(killer !== "<world>" && killer !== killed) {
		gameInfo = addKillers(killer, gameInfo);
	}

	// Add player killed on array
	gameInfo = addPlayers(killed, gameInfo);
    
	// Add weapon on kills by means arrat
	var weapon = getWeapon(expression);
	gameInfo = addWeaponKill(weapon, gameInfo);

	// if the killer is the world, remove a point from the dead player
	if(killer === "<world>") {
		gameInfo = reduceKillFromPlayer(expression, gameInfo);
	}
				
	gameInfo.total_kills++;		
	return gameInfo;
}

module.exports = colectGameData;