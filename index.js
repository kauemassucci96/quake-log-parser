var lineReader = require('line-reader');

const initializeInfo = require('./utils/initializeInfo');

const regexInitGame = /InitGame/gi;
const regexKill = /.*Kill.*: /gi;
const regexShutdownGame = /ShutdownGame/gi;

var quantityGame = 0;
var quantityKills = 0;

let gameJSON = {
	game: {
		players: [],
		total_kills: 0,		
		kills: {},
		kills_by_means: {},
	}
}

//Collect game data
function colectGameInfo() {
	lineReader.eachLine('./log/qgames.log', function(line, last) {
        // Start of each game
		if(regexInitGame.test(line) == true) {
			gameJSON = initializeInfo(gameJSON);			
			quantityKills = 0;	
			quantityGame++;
			gameJSON.game = 'game_' + quantityGame;				
		}

		// Death event
		else if(regexKill.test(line) == true) {
			
		}
		
		// End of each game
		else if(regexShutdownGame.test(line) == true) {														
			
		}
		
		//End of the log file
		if(last) {					
			return;										
		}
	});

}

colectGameInfo();