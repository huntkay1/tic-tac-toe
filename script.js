var gameOver = "";

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

    
    //alternates player turns
    const switchPlayerTurn = () => {
        activePlayer = activePlayer === players[0] ? players[1] : players[0]
    };


    const getActivePlayer = () => activePlayer;


    //places token in the array
    const makeMove = (box) => {
        token = activePlayer.token;
        gameboard[box] = token;
    };
    
    //checks for move vailidity
    const validityCheck = (box) => {
        if (gameboard[box] === "") {
            return true;
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
        activePlayer = players[0];
    };

    //initializes and plays the game 
    const game = function (key) {

        if (!winCheck && filledSquares < 9) {
            makeMove(key);
            checkForWin();
            switchPlayerTurn();
            filledSquares++;
        }

        if (winCheck) {
            gameOver = "win";
            switchPlayerTurn(); //so that the correct winner is shown
        } else if (!winCheck && filledSquares === 9) {
            gameOver = "draw";
            switchPlayerTurn();
        }

    }

    return {getActivePlayer, game, validityCheck, resetGame}

})();



const UIController = function() {
    var gameboard = document.getElementsByClassName("box");
    gameboard = [...gameboard];
    var resetBttn = document.getElementById("resetBttn");
    var announcement = document.getElementById("announcement");

    gameboard.forEach(square => {
        square.addEventListener('click', () => {
            placeToken(square);}
        ) 
    });

    resetBttn.addEventListener('click', resetBoard);

    //adds token to UI
    function placeToken(square) {
        var box = square.id;
        var token = GameController.getActivePlayer().token;
        var boxNumber = Number(box.charAt(box.length-1));
        validMove = GameController.validityCheck(boxNumber);
        if (validMove) {
            if (token === "X") {
                square.innerHTML = square.innerHTML = "<img src='X-animation.gif?" + Math.random() + "' class='animation'/>";
                GameController.game(boxNumber);
            } else {
                square.innerHTML = square.innerHTML = "<img src='O-animation.gif?" + Math.random() + "' class='animation'/>";
                GameController.game(boxNumber);
            }
        };

        gameOverCheck();
    };

    //checks for a win or draw and disables the buttons when needed
    function gameOverCheck() {
        if (gameOver === "win" || gameOver === "draw") {
            gameboard.forEach(square => {
                square.disabled = true;
            })
        }

        if (gameOver === "win") {
            announcement.innerHTML = `${GameController.getActivePlayer().name} wins!`
        }
    };

    //clears board and resets game
    function resetBoard() {
        gameboard.forEach(square => {
            square.innerHTML = "";
            square.disabled = false;
            gameOver = "";
        });

        GameController.resetGame();
    };

}();



























