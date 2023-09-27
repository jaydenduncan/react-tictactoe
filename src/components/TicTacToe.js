import React, {useState, useEffect} from "react";
import '../App.css';

function TicTacToe({board, playerChar, comChar}){
	const initialBoard = [
		[{val: "", clicked: false}, {val: "", clicked: false}, {val: "", clicked: false}], 
		[{val: "", clicked: false}, {val: "", clicked: false}, {val: "", clicked: false}], 
		[{val: "", clicked: false}, {val: "", clicked: false}, {val: "", clicked: false}]
	]; // represents initial state of the board

	const [gameboard, setGameboard] = useState(board); // Dynamically changes during the game
	const [playerTurn, setPlayerTurn] = useState(true);
	const [gameStarted, setGameStarted] = useState(false);
	const [gameEnded, setGameEnded] = useState(false);
	const [restartClicked, setRestartClicked] = useState(false);

	const User = {
		PLAYER: "Player",
		COMPUTER: "Computer"
	};

	function toggle() {
		setPlayerTurn(!playerTurn);
	}

	function updateOpenSquares(){
		let openSquares = [];

		// Generate list of open squares
		for(let i=0; i<3; i++){

			for(let j=0; j<3; j++){
				if(gameboard[i][j].val === ""){
					openSquares.push({row: i, column: j});
				}
			}

		}

		// Determine if there is a winner
		let winner = determineWinner();
		if(winner){
			document.getElementById("winnerMessage").innerHTML = winner + " wins!";
			setGameEnded(true);
		}

		// End game if all spots are occupied
		else if(openSquares.length <= 0){
			document.getElementById("winnerMessage").innerHTML = "It was a draw.";
			setGameEnded(true);
		}
		
		// Place mark for com on its turn if there is no winner and there are open spots
		else if(!playerTurn && openSquares.length > 0)
			placeMarkCom(openSquares);
	}

	function determineWinner() {
		// Check horizontal and vertical spaces
		for(let i=0; i<gameboard.length; i++){
			let horizontal = gameboard[i][0].val + gameboard[i][1].val + gameboard[i][2].val;
			let vertical = gameboard[0][i].val + gameboard[1][i].val + gameboard[2][i].val;
			if(horizontal === playerChar.repeat(3) || vertical === playerChar.repeat(3)){
				return User.PLAYER;
			}
			else if(horizontal === comChar.repeat(3) || vertical === comChar.repeat(3)){
				return User.COMPUTER;
			}
		}

		// Check diagonal spaces
		let LToRDiag = gameboard[0][0].val + gameboard[1][1].val + gameboard[2][2].val;
		let RToLDiag = gameboard[0][2].val + gameboard[1][1].val + gameboard[2][0].val;

		if(LToRDiag === playerChar.repeat(3) || RToLDiag === playerChar.repeat(3)){
			return User.PLAYER;
		}
		else if(LToRDiag === comChar.repeat(3) || RToLDiag === comChar.repeat(3)){
			return User.COMPUTER;
		}

		return null;
	}

	function endGame() {
		document.getElementById("restartBtn").style.display = "inline-block";
	}

	function handleRestart() {
		setRestartClicked(true);
	}

	function restartGame() {
		if(restartClicked){
			setGameboard(initialBoard);
			setPlayerTurn(true);
			setGameStarted(false);
			setGameEnded(false);
			document.getElementById("winnerMessage").innerHTML = "";
			document.getElementById("restartBtn").style.display = "none";

			setRestartClicked(false);
		}
	}

	function placeMarkPlayer(row, column) {
		setGameStarted(true); // start the game

		// Update state of gameboard
		let boardState = gameboard.slice(); // create copy of gameboard state
		boardState[row][column].val = playerChar; // fill square with player mark
		boardState[row][column].clicked = true; // square has been clicked
		setGameboard(boardState);

		// Toggle turn
		toggle();
	}

	function placeMarkCom(openSquares) {
		// Find random open square for computer
		let squareIdx = Math.floor(Math.random() * (openSquares.length-1));
		let square = openSquares[squareIdx];

		// Update state of gameboard
		let boardState = gameboard.slice();
		boardState[square.row][square.column].val = comChar;
		boardState[square.row][square.column].clicked = true;
		setGameboard(boardState);

		// Toggle turn
		toggle();
	}

	// Update list of open squares when the gameboard state changes
	useEffect(() => {
		updateOpenSquares();
	}, [gameboard]);

	// End the game when the gameEnded state changes
	useEffect(() => {
		if(gameStarted)
			endGame();
	}, [gameEnded]);

	// Restart the game when the restart button is clicked
	useEffect(() => {
		restartGame();
	}, [restartClicked]);

    return (
        <div className="container">
            <h1>Tic Tac Toe</h1>
			<p id="winnerMessage"></p>
            <div className="gameboardDiv">
				<table className="gameBoard">
					<tbody>
						<tr>
							<td id="square00" onClick={!gameboard[0][0].clicked && !gameEnded ? () => placeMarkPlayer(0, 0) : null}>{gameboard[0][0].val}</td>
							<td id="square01" className="lr" onClick={!gameboard[0][1].clicked && !gameEnded ? () => placeMarkPlayer(0, 1) : null}>{gameboard[0][1].val}</td>
							<td id="square02" onClick={!gameboard[0][2].clicked && !gameEnded ? () => placeMarkPlayer(0, 2) : null}>{gameboard[0][2].val}</td>
						</tr>
					</tbody>
					<tbody>
						<tr>
							<td id="square10" className="tb" onClick={!gameboard[1][0].clicked && !gameEnded ? () => placeMarkPlayer(1, 0) : null}>{gameboard[1][0].val}</td>
							<td id="square11" className="tb lr" onClick={!gameboard[1][1].clicked && !gameEnded ? () => placeMarkPlayer(1, 1) : null}>{gameboard[1][1].val}</td>
							<td id="square12" className="tb" onClick={!gameboard[1][2].clicked && !gameEnded ? () => placeMarkPlayer(1, 2) : null}>{gameboard[1][2].val}</td>
						</tr>
					</tbody>
					<tbody>
						<tr>
							<td id="square20" onClick={!gameboard[2][0].clicked && !gameEnded ? () => placeMarkPlayer(2, 0) : null}>{gameboard[2][0].val}</td>
							<td id="square21" className="lr" onClick={!gameboard[2][1].clicked && !gameEnded ? () => placeMarkPlayer(2, 1) : null}>{gameboard[2][1].val}</td>
							<td id="square22" onClick={!gameboard[2][2].clicked && !gameEnded ? () => placeMarkPlayer(2, 2) : null}>{gameboard[2][2].val}</td>
						</tr>
					</tbody>
				</table>
			</div>

			<button id="restartBtn" className="restartBtn" onClick={handleRestart}>PLAY AGAIN</button>
        </div>
    );
}

export default TicTacToe;