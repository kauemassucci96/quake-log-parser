// Adds a point to the weapon that was used in the killing
function addWeaponKill(weapon, gameJSON) {	
	if(gameJSON.kills_by_means[weapon] === undefined) {				
		gameJSON.kills_by_means[weapon] = 1;	
	} 	
	else {
		gameJSON.kills_by_means[weapon]++;		
	}

	return gameJSON;
}

module.exports = addWeaponKill;