// Adds players to the kill array
function addKillers(killer, gameInfo) {		
	// If the killers is not in the kills array, set its value to 1
	// else adds a kill for the killer player
	if(gameInfo.kills[killer] === undefined) {		
		gameInfo.kills[killer] = 1;		
	} 	
	else {
		gameInfo.kills[killer]++;		
	}

	return gameInfo;
}

module.exports = addKillers;