// Add players to the array
function addPlayers(player, gameInfo) {		
	// If the array is empty, initialize it
	if(gameInfo.players === undefined) {				
		gameInfo.players = [];		
	} 

	// Adds the player to the array if it does not exist and is not <world>
	if(gameInfo.players.indexOf(player) === -1 && player !== "<world>") {
		gameInfo.players.push(player);
		gameInfo.kills[player] = 0;			
	}	

    return gameInfo;
}

module.exports = addPlayers;