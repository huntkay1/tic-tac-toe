

//this function creates the gameboard
function Gameboard() {
    const board = ["", "", "", "", "", "", "", "", ""];

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

    //compares each winning combo with 
    const checkForWin = () => {
        winningCombos.forEach(condition => {
            let [a, b, c] = condition

            if (board[a] !== "" && (board[a] === board[b] && board[b] === board[c])) {
                alert("Win") //CHANGE THIS WHEN READY
                boardReset();
            } else {
                return false;
        }

        })
    };

    const boardReset = () => {
        board.fill("");
    }


    return {getActivePlayer, makeMove};

}



const game = GameController();










