// Adds players to the kill array
function addKillers(killer, gameJSON) {		
	if(gameJSON.kills[killer] === undefined) {		
		gameJSON.kills[killer] = 1;		
	} 	
	else {
		gameJSON.kills[killer]++;		
	}

	return gameJSON;
}

module.exports = addKillers;