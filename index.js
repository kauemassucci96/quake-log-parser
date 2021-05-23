var lineReader = require('line-reader');

//Collect game data
function colectGameInfo() {
	lineReader.eachLine('./log/qgames.log', function(line, last) {
        // console.log(line);
	});

}

colectGameInfo();