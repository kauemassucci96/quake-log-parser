const regexGetKiller = /.* killed/gi;

// Returns the player who killed the other player
function getKillerPlayer(line) {
	var myArray;
	while ((myArray = regexGetKiller.exec(line)) !== null) {
  		var killer = myArray[0].replace(' killed', '');
	}	
	
	return killer;
}

module.exports = getKillerPlayer;