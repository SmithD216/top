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
            result = "It's a draw you both picked rock!";
        }else if(cpu == "paper"){
            result = "You lose! Paper beats rock!"
        }else{
            result = "You win! Rock beats scissors!"
        }
    } else if(player == "paper"){
        if(cpu == "rock"){
            result = "You win! Paper beats rock!";
        }else if(cpu == "paper"){
            result = "It's a draw you both picked paper!";
        } else {
            result = "You lose! Scissors beats paper!";
        }
    } else {
        if(cpu == "rock"){
            result = "You lose! Rock beats scissors!";
        }else if(cpu == "paper"){
            result = "You win! Scissors beats paper!";
        } else {
            result = "It's a draw you both picked scissors!";
        }
    }
    return result;
}

function playGame(){
    for (let i = 0; i < 5; i++) { 
        let computerSelection = getComputerChoice();
        const playerSelection = prompt("Choose rock paper or scissors");
        playRound(playerSelection, computerSelection);
     }
}
