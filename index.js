var lineReader = require('line-reader');

const regexInitGame = /InitGame/gi;
const regexKill = /.*Kill.*: /gi;
const regexShutdownGame = /ShutdownGame/gi;

//Collect game data
function colectGameInfo() {
	lineReader.eachLine('./log/qgames.log', function(line, last) {
        // Start of each game
		if(regexInitGame.test(line) == true) {
			
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