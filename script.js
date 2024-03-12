

//this function creates the gameboard
function Gameboard() {
    const board = [["", "", ""], ["", "", ""], ["", "", ""]];
    const rows = 3;
    const columns = 3;

    // makes the board accessible
    const getBoard = () => board;

    return {getBoard}
}



// switches between players for each turn and keeps track of active player.
// adds token to array with each player's move 
function GameController(playerOneName = "Player One", playerTwoName = "Player Two" ) {
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
    
    const players = [
        {
            name: playerOneName,
            token: "X"
        }, 
        {
            name: playerTwoName,
            token: "O"
        }
    ];

    
    //alternates player turns
    let activePlayer = players[0];
    const switchPlayerTurn = () => {
        activePlayer = activePlayer === players[0] ? players[1] : players[0]
    };


    const getActivePlayer = () => activePlayer;

    //makes move by placing player's token in array 
    const board = Gameboard().getBoard();
    const makeMove = () => {
        token = activePlayer.token;

        column = prompt("column: ");
        row = prompt("row: ");

        //checks move validity
        if (board[column][row] === "") {
            board[column][row] = token;
            switchPlayerTurn();
        } else {
            alert("Can't move there!")
        }

        console.log(board); 
    }

    
    const checkForWin = () => {
        winningCombos.forEach(row => {
            
        } )
    }


    return {getActivePlayer, makeMove, checkForWin};

}



const game = GameController();










