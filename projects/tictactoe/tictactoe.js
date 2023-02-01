const gameBoard = () => {
    let grid = ['X','O','X','X','O','X','O','X', 'O'];
    const createBoard = () => {
        const gameboard = document.getElementById("gameboard");
        for (let i = 0; i < 3; i++) {
            let row = document.createElement('div');
            row.classList.add('row');
            gameboard.appendChild(row);
            for (let j = 0; j < 3; j++) {
                let square = document.createElement('div');
                square.classList.add('square');
                row.appendChild(square);   
            }
            
        }
    }
    return { createBoard };
}

const players = (symbol) => {
    let turn = false;
    const getSymbol = () => symbol;

    return { turn, getSymbol };
}

const gameFlow = () => {

}

const board = gameBoard();
board.createBoard();