const addPlayers = require('./addPlayers');
const getKilledPlayer = require('./getKilledPlayer');
const getKillerPlayer = require('./getKillerPlayer');

// Collect all data for each game
function colectGameData(expression, gameJSON) {

	// Gets the player killed and player killer
    var killer = getKillerPlayer(expression);
    var killed = getKilledPlayer(expression);

    // Add killer players and kills on array
	gameJSON = addPlayers(killer, gameJSON);
    
	return gameJSON;

}

module.exports = colectGameData;