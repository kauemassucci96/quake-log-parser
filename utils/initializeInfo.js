module.exports = initializeInfo;

// Initializes the game variable
function initializeInfo(gameJSON) {	
	gameJSON.game = {};
	gameJSON.players = [];
	gameJSON.total_kills = 0;
	gameJSON.kills = {};
	gameJSON.kills_by_means = {};
	return gameJSON;
}