var fs = require('fs');

// Return the current formatted date
function formatCurrentDate(){
    var data = new Date(),
        dia  = data.getDate().toString().padStart(2, '0'),
        mes  = (data.getMonth()+1).toString().padStart(2, '0'), //+1 pois no getMonth Janeiro começa com zero.
        ano  = data.getFullYear().toString().padStart(2, '0');
        hora = data.getHours();
        min = data.getMinutes();
        sec = data.getSeconds();
    return dia+mes+ano+'_'+hora+min+sec;
}

// Creates the file name
var file = `gameReport_${formatCurrentDate()}.txt`

// Generates the report of all games
function createReport(gamesReport) {	
    let i = 1;    
    fs.open(file, 'w', function (err, file) {
        if (err) throw err;        
      })
    
    for(games in gamesReport) {        
        fs.appendFileSync(file, '-------------------------------' + "\n", function (err) {});
        fs.appendFileSync(file, 'InitGame:' + "\n", function (err) {});        
        fs.appendFileSync(file, `   Game_${i}:  {` + "\n", function (err) {});
        fs.appendFileSync(file, `       Players: ${JSON.stringify(gamesReport[games].players)}` + "\n", function (err) {});
        fs.appendFileSync(file, `       Total Kills: ${JSON.stringify(gamesReport[games].total_kills)}` + "\n", function (err) {});
        fs.appendFileSync(file, `       Kills: ${JSON.stringify(gamesReport[games].kills)}` + "\n", function (err) {});
        fs.appendFileSync(file, `       Kills by means: ${JSON.stringify(gamesReport[games].kills_by_means)}` + "\n", function (err) {});
        fs.appendFileSync(file, `       Ranking: ${JSON.stringify(gamesReport[games].ranking)}` + "\n", function (err) {});
        fs.appendFileSync(file, '   }' + "\n", function (err) {});
        fs.appendFileSync(file, 'ShutdownGame:' + "\n", function (err) {});
        fs.appendFileSync(file, '-------------------------------' + "\n", function (err) {});
        i++;
    }
}

module.exports = createReport;