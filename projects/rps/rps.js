let playerScore = 0;
let cpuScore = 0;
playGame();

function getComputerChoice(){
    let x = Math.floor((Math.random() * 3)+1);
    let result = "";
    if(x == 1){
        result = "rock";
    } else if(x == 2){
        result = "paper";
    } else {
        result = "scissors";
    }
    return result;
}

function playRound(player, cpu){
    console.log("You picked " + player);
    console.log("The cpu picked " + cpu);
    let result = "";
    if(player.toLowerCase() == "rock"){
        if(cpu == "rock"){
            playerScore++;
            cpuScore++;
            result = "It's a draw you both picked rock!";
        }else if(cpu == "paper"){
            cpuScore++;
            result = "You lose! Paper beats rock!";
        }else{
            playerScore++;
            result = "You win! Rock beats scissors!";
        }
    } else if(player == "paper"){
        if(cpu == "rock"){
            playerScore++;
            result = "You win! Paper beats rock!";
        }else if(cpu == "paper"){
            playerScore++;
            cpuScore++;
            result = "It's a draw you both picked paper!";
        } else {
            cpuScore++;
            result = "You lose! Scissors beats paper!";
        }
    } else {
        if(cpu == "rock"){
            cpuScore++;
            result = "You lose! Rock beats scissors!";
        }else if(cpu == "paper"){
            playerScore++;
            result = "You win! Scissors beats paper!";
        } else {
            playerScore++;
            cpuScore++;
            result = "It's a draw you both picked scissors!";
        }
    }
    console.log(result);
    printScore(playerScore, cpuScore);
}
function printScore(player, cpu){
    console.log("The score is " + player + " to the player and " + cpu + " to the cpu");
}

function declareWinner(playerScore, cpuScore){
    if(playerScore > cpuScore){
        console.log("You wn the whole game!")
    } else if (cpuScore > playerScore){
        console.log("You lose, better luck next time!")
    } else {
        console.log("It's a draw!");
    }
}

function playGame(){
    for (let i = 0; i < 5; i++) { 
        let computerSelection = getComputerChoice();
        let playerSelection = prompt("Choose rock paper or scissors");
        playRound(playerSelection, computerSelection);
     }
     declareWinner(playerScore, cpuScore);
}
