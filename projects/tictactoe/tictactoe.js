function createGameBoard() {
    const gameboard = document.getElementById('gameboard');
    for (let i = 0; i <3; i++) {
        let row = document.createElement('div');
        row.classList.add('row');
        gameboard.appendChild(row);
        for (let i = 0; i <3; i++){
            let square = document.createElement('div');
            square.classList.add('square');
            row.appendChild(square);
        }
    }
}

createGameBoard();