// Add players to the array
function addPlayers(player, gameJSON) {	
	// Add players in array if not is world
	if(gameJSON.players === undefined) {				
		gameJSON.players = [];		
	} 

	if(gameJSON.players.indexOf(player) === -1 && player !== "<world>") {
		gameJSON.players.push(player);
		gameJSON.kills[player] = 0;			
	}	

    return gameJSON;
}

module.exports = addPlayers;