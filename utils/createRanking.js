// Ceate the ranking by kills
function createRanking(gameInfo) {     
    let orderKills = [];
    
    // Adds each player to the array of kills in the array
    for(var players in gameInfo.kills) {    
        orderKills.push([players, gameInfo.kills[players]]);
    }

    // Change the player position if he has a higher kills score
    orderKills.sort(function(a, b) {
        return b[1] - a[1];
    })    

    let ranking = {};
    // Adds only the player and the score to the ranking variable
    orderKills.forEach(function(item){
        ranking[item[0]]=item[1];
    });
    
    return ranking;
}

module.exports = createRanking;