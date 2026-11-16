function createCharacters(){
    let characters = [
        {   name: "Mario", level: 2, health: 300},
        {   name: "Loan", level: 3, health: 5000},
        {   name: "Player", level: 4, health: 4000}
    ]
    
    let characterPowerUp = characters.map(element => {
        return {
            name: element.name.toUpperCase(),
            level: element.level*2,
            health: element.health*3
        }

    });
    console.log('characterPowerUp results: \n', characterPowerUp);

    let possibleWinners = characters.filter(element => element.health > 1000)
    console.log('possibleWinners result: \n', possibleWinners);
}
createCharacters();


function printLeaderboard(players){
    let sortPlayers = players.sort((a, b) => b.score - a.score);
    
    let leaderBoardwMedal = sortPlayers.map((player, index) => {
        let medal = "";

        if (index === 0) {
            medal = "🥇 1. ";
        } else if (index === 1) {
            medal = "🥈 2. ";
        } else if (index === 2) {
            medal = "🥉 3. ";
        } else {
            medal = `   ${index + 1}. `;
        }
        return `${medal} ${player.name} - Score: ${player.score}`
    });
    return leaderBoardwMedal;
}
const players = [
    {name: "Mario", score: 1000},
    {name: "Peach", score: 850},
    {name: "Phong", score: 500},
    {name: "Luigi", score: 900},
    {name: "Yoshi", score: 800},
    
]
console.log(printLeaderboard(players));

