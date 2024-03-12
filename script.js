

//this function creates the gameboard
function Gameboard() {
    const board = ["X", "", "X", "", "X", "", "", "", "", ];

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
    ];
    
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

        box = prompt("box: ")
        //checks move validity
        if (board[box] === "") {
            board[box] = token;
            switchPlayerTurn();
            checkForWin();
        } else {
            alert("Can't move there!")
        }

        console.log(board); //DELETE WHEN READY
    };


    const checkForWin = () => {
        winningCombos.forEach(condition => {
            let [a, b, c] = condition

            if (board[a] !== "" && (board[a] === board[b] && board[b] == board[c])) {
                alert("Win")
            } else {
                return false;
        }

        })
    };


    return {getActivePlayer, makeMove, checkForWin};

}



const game = GameController();










