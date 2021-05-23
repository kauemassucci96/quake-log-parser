const regexGetKilled = /killed.*by/gi;

// Returns the player who was killed
function getKilledPlayer(line) {
	var myArray;
		while ((myArray = regexGetKilled.exec(line)) !== null) {
  		var killed = myArray[0].replace('killed ', '');
  		killed = killed.replace(' by', '');  		
	}

	return killed;
}

module.exports = getKilledPlayer;