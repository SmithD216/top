const playerSelection = "paper";
const computerSelection = getComputerChoice();
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
    if(player.toLowerCase() == "rock"){
        if(cpu == "rock"){
            console.log("It's a draw you both picked rock!")
        }else if(cpu == "paper"){
            console.log("You lose! Paper beats rock!")
        }else{
            console.log("You win! Rock beats scissors!")
        }
    } else if(player == "paper"){
        if(cpu == "rock"){
            console.log("You win! Paper beats rock!");
        }else if(cpu == "paper"){
            console.log("It's a draw you both picked paper!")
        } else {
            console.log("You lose! Scissors beats paper!");
        }
    } else {
        if(cpu == "rock"){
            console.log("You lose! Rock beats scissors!");
        }else if(cpu == "paper"){
            console.log("You win! Scissors beats paper!");
        } else {
            console.log("It's a draw you both picked scissors!");
        }
    }
}

console.log(playRound(playerSelection, computerSelection));
