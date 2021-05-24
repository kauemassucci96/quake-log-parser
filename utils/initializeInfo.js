// Initializes the game variable
function initializeInfo() {		
	return {
		players: [],
    total_kills: 0,
    kills: {},
    kills_by_means: {},
    ranking: {}
	}
}

module.exports = initializeInfo;