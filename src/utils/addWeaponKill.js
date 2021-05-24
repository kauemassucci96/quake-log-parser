// Adds a point to the weapon that was used in the killing
function addWeaponKill(weapon, gameInfo) {	
	// if the weapon is not in the kills_by_means array, set its value to 1
	// else it adds 1 to the score
	if(gameInfo.kills_by_means[weapon] === undefined) {				
		gameInfo.kills_by_means[weapon] = 1;	
	} 	
	else {
		gameInfo.kills_by_means[weapon]++;		
	}

	return gameInfo;
}

module.exports = addWeaponKill;