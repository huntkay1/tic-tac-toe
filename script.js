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


    let filledSquares = 0;
    let winCheck = false;
    let activePlayer = players[0];
    const gameboard = ["", "", "", "", "", "", "", "", ""];


    // makes the board accessible
    const getBoard = () => gameboard;

    
    //alternates player turns
    const switchPlayerTurn = () => {
        activePlayer = activePlayer === players[0] ? players[1] : players[0]
    };


    const getActivePlayer = () => activePlayer;


    //makes valid move by placing player's token in array 
    const makeMove = () => {
        token = activePlayer.token;

        box = prompt("box: ");

        //checks move validity
        if (gameboard[box] === "") {
            gameboard[box] = token;
        } else {
            alert("Can't move there!")
        };

    };


    //compares each winning combo with a board row at those indexes 
    const checkForWin = () => {
        winningCombos.forEach(condition => {
            let [a, b, c] = condition

            if (gameboard[a] !== "" && (gameboard[a] === gameboard[b] && gameboard[b] === gameboard[c])) {
                winCheck = true;
            }

        });
    };

    
    //resets manipulated elements
    const resetGame = () => {
        gameboard.fill("");
        filledSquares = 0;
        winCheck = false;
    };

    //initializes and plays the game 
    const game = function () {
        while (!winCheck && filledSquares < 9) {
            makeMove();
            checkForWin();
            console.log(gameboard);
            switchPlayerTurn();
            filledSquares++;
        }

        if (winCheck) {
            alert("Win")
        } else if (!winCheck && filledSquares === 9) {
            alert("Draw")
        }

        resetGame();
        console.log(gameboard);
    }


    return {getBoard, getActivePlayer, makeMove, game}

})();





















