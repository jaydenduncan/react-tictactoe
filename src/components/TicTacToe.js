import React, {useState, useEffect} from "react";
import '../App.css';

function TicTacToe({board, playerChar, comChar}){
	const [gameboard, setGameboard] = useState(board);
	const [playerTurn, setPlayerTurn] = useState(true);
	const [gameStarted, setGameStarted] = useState(false);
	const [gameEnded, setGameEnded] = useState(false);

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
		
		// Place mark for com on its turn if there are open spots
		if(!playerTurn && openSquares.length > 0)
			placeMarkCom(openSquares);

		// End game if all spots are occupied
		if(openSquares.length <= 0){
			setGameEnded(true);
		}
	}

	function placeMarkPlayer(row, column) {
		setGameStarted(true); // start the game

		// Update state of gameboard
		let boardState = gameboard.slice(); // create copy of gameboard state
		boardState[row][column].val = playerChar; // fill square with player mark
		boardState[row][column].clicked = true; // square has been clicked
		document.getElementById("square"+row+column).style.cursor = "default";
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
		document.getElementById("square"+square.row+square.column).style.cursor = "default";
		setGameboard(boardState);

		// Toggle turn
		toggle();
	}

	// Update list of open squares when the gameboard state changes
	useEffect(() => {
		updateOpenSquares();
	}, [gameboard]);

    return (
        <div className="container">
            <h1>Tic Tac Toe</h1>
            <div className="gameboardDiv">
				<table className="gameBoard">
					<tbody>
						<tr>
							<td id="square00" onClick={!gameboard[0][0].clicked ? () => placeMarkPlayer(0, 0) : null}>{gameboard[0][0].val}</td>
							<td id="square01" className="lr" onClick={!gameboard[0][1].clicked ? () => placeMarkPlayer(0, 1) : null}>{gameboard[0][1].val}</td>
							<td id="square02" onClick={!gameboard[0][2].clicked ? () => placeMarkPlayer(0, 2) : null}>{gameboard[0][2].val}</td>
						</tr>
					</tbody>
					<tbody>
						<tr>
							<td id="square10" className="tb" onClick={!gameboard[1][0].clicked ? () => placeMarkPlayer(1, 0) : null}>{gameboard[1][0].val}</td>
							<td id="square11" className="tb lr" onClick={!gameboard[1][1].clicked ? () => placeMarkPlayer(1, 1) : null}>{gameboard[1][1].val}</td>
							<td id="square12" className="tb" onClick={!gameboard[1][2].clicked ? () => placeMarkPlayer(1, 2) : null}>{gameboard[1][2].val}</td>
						</tr>
					</tbody>
					<tbody>
						<tr>
							<td id="square20" onClick={!gameboard[2][0].clicked ? () => placeMarkPlayer(2, 0) : null}>{gameboard[2][0].val}</td>
							<td id="square21" className="lr" onClick={!gameboard[2][1].clicked ? () => placeMarkPlayer(2, 1) : null}>{gameboard[2][1].val}</td>
							<td id="square22" onClick={!gameboard[2][2].clicked ? () => placeMarkPlayer(2, 2) : null}>{gameboard[2][2].val}</td>
						</tr>
					</tbody>
				</table>
			</div>
        </div>
    );
}

export default TicTacToe;