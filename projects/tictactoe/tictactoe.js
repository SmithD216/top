const gameBoard = () => {
  const grid = ["X", "O", "X", "X", "O", "X", "O", "X", "O"];
  const createBoard = () => {
        const gameboard = document.getElementById("gameboard");
        const row1 = document.createElement("div");
        row1.classList.add("row1");
        const row2 = document.createElement("div");
        row2.classList.add("row2");
        const row3 = document.createElement("div");
        row3.classList.add("row3");
        for (const [index, value] of grid.entries()) {
            const square = document.createElement('div');
            square.setAttribute('id', `square-${index}`);
            square.classList.add('square');
            if(square.id == "square-0" || square.id == "square-1" || square.id == "square-2"){
                row1.appendChild(square);
            } else if (square.id == "square-3" || square.id == "square-4" || square.id == "square-5"){
                row2.appendChild(square);
            } else if (square.id == "square-6" || square.id == "square-7" || square.id == "square-8"){
                row3.appendChild(square);
            }
            gameboard.appendChild(row1);
            gameboard.appendChild(row2);
            gameboard.appendChild(row3);
              
        } 
  };
  return { createBoard };
};

const players = (symbol) => {
  let turn = false;
  const getSymbol = () => symbol;

  return { turn, getSymbol };
};

const gameFlow = () => {};

const board = gameBoard();
const game = gameFlow();
board.createBoard();
