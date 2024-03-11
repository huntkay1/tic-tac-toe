const winningCombos = [
    [0,1,2], 
    [3,4,5], 
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

function Gameboard() {
    const board = [];
    const rows = 3;
    const columns = 3;

    // creates a 2D array for the gameboard (3x3)
    for (let i = 0; i < rows; i++) {
        board[i] = [];
        for (let j = 0; j < columns; j++) {
            board[i].push(0);
        }
    }

    // makes the board accessible
    const getBoard = () => console.log(board);

    return {getBoard}
}





