var lineReader = require('line-reader');

const initializeInfo = require('./utils/initializeInfo');
const collectGameData = require('./utils/collectGameData');
const createRanking = require('./utils/createRanking');

const regexInitGame = /InitGame/gi;
const regexKill = /.*Kill.*: /gi;
const regexShutdownGame = /------------------------------------------------------------/gi;

let quantityGame = 0;
let quantityKills = 0;

//Collect game data
function colectGameInfo() {
  let gameInfo = []
  let gameJSON = {};

  lineReader.eachLine('./log/qgames.log', function(line, last) {  
        // Start of each game
		if(regexInitGame.test(line) == true) {			
            quantityKills = 0;
            quantityGame++;	        
            gameJSON = initializeInfo(gameJSON, quantityGame);					
		}

		// Death event
		else if(regexKill.test(line) == true) {
			var expression = line.replace(regexKill, '');
			gameJSON = collectGameData(expression, gameJSON);			
		}
		
		// End of each game
		else if(regexShutdownGame.test(line) == true) {	
			if(Object.keys(gameJSON).length !== 0) {
        		gameJSON.ranking = createRanking(gameJSON);
        		gameInfo[`game_${quantityGame}`] = gameJSON;
      		}
		}
		
		//End of the log file
		if(last) {							
			console.log(gameInfo);			
			return;										
		}
	});
}

colectGameInfo();