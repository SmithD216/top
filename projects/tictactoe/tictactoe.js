const grid = ["Y", "Y", "Y", "Y", "Y", "Y", "Y", "Y", "Y"];
let turnCount = 0;

const player = (symbol) => {
    let turn = true;
    const getSymbol = () => symbol;
    let score = 0;
    let gameStart = false;
    return { turn, getSymbol, score };
  };

const player1 = player("x");
const player2 = player("O");


const gameBoard = () => {
  const createBoard = () => {
        const gameboard = document.getElementById("gameboard");
        gameboard.innerHTML = "";
        const row1 = document.createElement("div");
        row1.classList.add("row1");
        const row2 = document.createElement("div");
        row2.classList.add("row2");
        const row3 = document.createElement("div");
        row3.classList.add("row3");
        for (const [index, value] of grid.entries()) {
            const square = document.createElement('div');
            square.setAttribute('data-index', `${index}`);
            square.classList.add('square');
            square.addEventListener("click", squareClick);
            if(square.dataset.index == "0" || square.dataset.index == "1" || square.dataset.index == "2"){
                row1.appendChild(square);
            } else if (square.dataset.index == "3" || square.dataset.index == "4" || square.dataset.index == "5"){
                row2.appendChild(square);
            } else if (square.dataset.index == "6" || square.dataset.index == "7" || square.dataset.index == "8"){
                row3.appendChild(square);
            }
            gameboard.appendChild(row1);
            gameboard.appendChild(row2);
            gameboard.appendChild(row3);
              
        } 
  };
  return { createBoard };
};

const board = gameBoard();

function displayScore(){
    const scoreBoard = document.getElementById("scoreboard");
    scoreBoard.innerHTML = `<h1>Score X: ${player1.score} | O: ${player2.score} </h1>`
    const turnIndicator = document.getElementById("turn-indicator");
    let playerIndicator = ""
    if (player1.turn){
        playerIndicator = "Player One"
    } else if (player1.turn === false){
        playerIndicator = "Player Two"
    }
    turnIndicator.innerHTML = `<h2>${playerIndicator}</h2>`
}

function playGame(){
    board.createBoard();
    displayScore();
    player1.gameStart = true;
    
}

function squareClick(event){
    if(!player1.gameStart){
        return;
    }
    const markSquare = event.target;

    if(markSquare === null){
        return;
    }

    if (player1.turn && (markSquare.innerHTML === "")){
        markSquare.innerHTML = `<div class = "marker">${player1.getSymbol()}</div>`;
        grid[event.target.dataset.index] = player1.getSymbol();
        player1.turn = false;
        player2.turn = true;
    } else if (player2.turn && (markSquare.innerHTML === "")){
        markSquare.innerHTML = `<div class = "marker">${player2.getSymbol()}</div>`;
        grid[event.target.dataset.index] = player2.getSymbol();
        player1.turn = true;
        player2.turn = false;
    }
    displayScore();
} 