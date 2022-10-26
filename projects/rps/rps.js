let playerScore = 0;
let cpuScore = 0;

const container = document.querySelector('#container');
const results = document.createElement('div');
const para = document.createElement('p');
const finalscore = document.createElement('p');
container.appendChild(para);
results.classList.add('content');
results.textContent = 'The score is 0 - 0';
document.querySelector('body').appendChild(results);

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
    if(player.toLowerCase() == "rock"){
        if(cpu == "rock"){
            playerScore++;
            cpuScore++;
            results.textContent =  "It's a draw you both picked rock!";
        }else if(cpu == "paper"){
            cpuScore++;
            results.textContent  = "You lose! Paper beats rock!";
        }else{
            playerScore++;
            results.textContent = "You win! Rock beats scissors!";
        }
    } else if(player == "paper"){
        if(cpu == "rock"){
            playerScore++;
            results.textContent =  "You win! Paper beats rock!";
        }else if(cpu == "paper"){
            playerScore++;
            cpuScore++;
            results.textContent = "It's a draw you both picked paper!";
        } else {
            cpuScore++;
            results.textContent =  "You lose! Scissors beats paper!";
        }
    } else {
        if(cpu == "rock"){
            cpuScore++;
            results.textContent =  "You lose! Rock beats scissors!";
        }else if(cpu == "paper"){
            playerScore++;
            results.textContent =  "You win! Scissors beats paper!";
        } else {
            playerScore++;
            cpuScore++;
            results.textContent =  "It's a draw you both picked scissors!";
        }
    }
    printScore(playerScore, cpuScore);
}
function printScore(player, cpu){
    para.textContent = "The score is " + player + " to the player and " + cpu + " to the cpu";
}

function declareWinner(playerScore, cpuScore){
    if(playerScore > cpuScore){
        finalscore.textContent = "You win the whole game!";
    } else if (cpuScore > playerScore){
        finalscore.textContent = "You lose, better luck next time!";
    } else {
        finalscore.textContent = "It's a draw!";
    }
    results.appendChild(finalscore);
}

function playGame(playerSelection){
    let computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    if((playerScore == 5) || (cpuScore == 5)){
        declareWinner(playerScore, cpuScore);
        playerScore = 0;
        cpuScore = 0;
    }
}

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
        button.addEventListener('click', () => {
        playGame(button.id);
    });
});

