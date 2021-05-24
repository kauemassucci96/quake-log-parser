//create the ranking by kills
function createRanking(gameJSON) {     
    let orderKills = [];
    
    for(var players in gameJSON.kills) {    
        orderKills.push([players, gameJSON.kills[players]]);
    }

    orderKills.sort(function(a, b) {
        return b[1] - a[1];
    })    

    let ranking = {};
    orderKills.forEach(function(item){
        ranking[item[0]]=item[1];
    });
        
    return ranking;
}

module.exports = createRanking;