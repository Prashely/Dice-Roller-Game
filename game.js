let playerScoreScore = 0;
let drawScoreScore = 0;
let npcScoreScore = 0;


function rollDice(){
    const playerRoll = Math.floor(Math.random() * 6) + 1;
    const npcRoll = Math.floor(Math.random() * 6) + 1;

    const playerScore = document.getElementById("myScoreNum");
    const drawScore = document.getElementById("drawScoreNum");
    const npcScore = document.getElementById("npcScoreNum");

    const playerDiceBoard = document.getElementById("playerDiceBoard");
    const npcDiceBoard = document.getElementById("npcDiceBoard");

    if(playerRoll === npcRoll){
        drawScoreScore++;
    }
    else if(playerRoll > npcRoll){
        playerScoreScore++;
    }
    else{
        npcScoreScore++;
    }
    
    playerScore.textContent = playerScoreScore; // innerHTML also works
    drawScore.textContent = drawScoreScore;
    npcScore.textContent = npcScoreScore;

    playerDiceBoard.src =  `playerdicepics/${playerRoll}.png`
    npcDiceBoard.src = `npcdicepics/${npcRoll}.png`

}

































/*function rollDice() {
    // Generate random numbers between 1 and 6 for both player and NPC
    const playerRoll = Math.floor(Math.random() * 6) + 1;
    const npcRoll = Math.floor(Math.random() * 6) + 1;

    // Get the current scores
    const playerScoreElem = document.getElementById('myScoreNum');
    const drawScoreElem = document.getElementById('drawScoreNum');
    const npcScoreElem = document.getElementById('npcScoreNum');

    let playerScore = parseInt(playerScoreElem.textContent);
    let drawScore = parseInt(drawScoreElem.textContent);
    let npcScore = parseInt(npcScoreElem.textContent);

    // Update scores based on the rolls
    if (playerRoll > npcRoll) {
        playerScore++;
    } else if (npcRoll > playerRoll) {
        npcScore++;
    } else {
        drawScore++;
    }

    // Update the score table
    playerScoreElem.textContent = playerScore;
    drawScoreElem.textContent = drawScore;
    npcScoreElem.textContent = npcScore;

    // Update dice display
    const playerDiceBoard = document.getElementById('playerDiceBoard');
    const npcDiceBoard = document.getElementById('npcDiceBoard');
    playerDiceBoard.innerHTML = png(playerRoll);
    npcDiceBoard.innerHTML = png(npcRoll);
}

function png(number) {
    return `<img src="dicepics/dice${number}.png" alt="Dice ${number}">`;
}
*/
