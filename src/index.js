var lineReader = require('line-reader');

const fs = require('fs');
const initializeInfo = require('./utils/initializeInfo');
const collectGameData = require('./utils/collectGameData');
const createRanking = require('./utils/createRanking');
const createReport = require('./utils/createReport');

// Contains the regex to get the events from the log
const regexInitGame = /InitGame/gi;
const regexKill = /.*Kill.*: /gi;
const regexShutdownGame = /------------------------------------------------------------/gi;

// Initializes game and death variables
let quantityGame = 0;
let quantityKills = 0;

// Collect game data
function colectGameInfo() {
  let gamesReport = [];
  let gameInfo = {};

//   Returns line by line from the log file
  lineReader.eachLine('./quakeLog/qgames.log', function(line, last) {  
        // Start of each game
		if(regexInitGame.test(line) == true) {			
            quantityKills = 0;
            quantityGame++;  
            gameInfo = initializeInfo(gameInfo, quantityGame);					
		}

		// Death event
		else if(regexKill.test(line) == true) {
			var expression = line.replace(regexKill, '');
			gameInfo = collectGameData(expression, gameInfo);			
		}
		
		// End of each game
		else if(regexShutdownGame.test(line) == true) {	
			if(Object.keys(gameInfo).length !== 0) {
        		gameInfo.ranking = createRanking(gameInfo);				
        		gamesReport[`game_${quantityGame}`] = gameInfo;						
      		}
		}
		
		//End of the log file and display all informations
		if(last) {		
			createReport(gamesReport);
			return;										
		}
	});
}

colectGameInfo();