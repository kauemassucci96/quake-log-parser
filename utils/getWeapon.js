const regexGetWeapon = /by.*/gi;

// Returns the weapon that was used to kill
function getWeapon(line) {
	var myArray;	
		while ((myArray = regexGetWeapon.exec(line)) !== null) {
  		var weapon = myArray[0].replace('by ', '');		  		
	}
	
	return weapon;
}

module.exports = getWeapon;