
const GameController = (function(playerOneName = "Player One", playerTwoName = "Player Two" ) {

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


    let count = 0;
    let winCheck = false;
    let activePlayer = players[0];
    const board = ["", "", "", "", "", "", "", "", ""];


    // makes the board accessible
    const getBoard = () => board;

    
    //alternates player turns
    const switchPlayerTurn = () => {
        activePlayer = activePlayer === players[0] ? players[1] : players[0]
    };


    const getActivePlayer = () => activePlayer;


    //makes move by placing player's token in array 
    
    const makeMove = () => {
        token = activePlayer.token;

        box = prompt("box: ");

        //checks move validity
        if (board[box] === "") {
            board[box] = token;
        } else {
            alert("Can't move there!")
        };

    };


    //compares each winning combo with a board row at those indexes 
    //if a each element in that row is the same, it's a win and board is reset
    const checkForWin = () => {
        winningCombos.forEach(condition => {
            let [a, b, c] = condition

            if (board[a] !== "" && (board[a] === board[b] && board[b] === board[c])) {
                winCheck = true;
            }
        });
    };

    
    //resets manipulated elements
    const boardReset = () => {
        board.fill("");
        count = 0;
        winCheck = false;
    };

    //started loop. Need to check for win each time 
    const game = function () {
        while (!winCheck && count < 9) {
            makeMove();
            checkForWin();
            console.log(winCheck);
            console.log(board);
            switchPlayerTurn();
            count++;
        }

        if (winCheck) {
            alert("Win")
        } else if (!winCheck && count === 9) {
            alert("Draw")
        }

        boardReset();
        console.log(board);
    }


    return {getBoard, getActivePlayer, makeMove, game}

})();





















