const getKilledPlayer = require('./getKilledPlayer');

// Subtracts a point from the player who was killed
function reduceKillFromPlayer(line, gameInfo) {		
	var killed = getKilledPlayer(line);

	// if the player is not yet in the kills array, set the value to -1
	// else subtract 1 kill from him
	if(gameInfo.kills[killed] === undefined) {		
		gameInfo.kills[killed] = -1;		
	} 
	else {
		gameInfo.kills[killed] = gameInfo.kills[killed]-1;		
	}	

	return gameInfo;
} 

module.exports = reduceKillFromPlayer;