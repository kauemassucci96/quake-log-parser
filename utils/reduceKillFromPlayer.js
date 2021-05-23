const getKilledPlayer = require('./getKilledPlayer');

// Subtracts a point from the player who was killed
function reduceKillFromPlayer(line, gameJSON) {		
	var killed = getKilledPlayer(line);

	if(gameJSON.kills[killed] === undefined) {		
		gameJSON.kills[killed] = -1;		
	} 
	else {
		gameJSON.kills[killed] = gameJSON.kills[killed]-1;		
	}	

	return gameJSON;
} 

module.exports = reduceKillFromPlayer;