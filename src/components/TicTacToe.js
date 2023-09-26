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
				if(gameboard[i][j] === ""){
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
		setGameStarted(true);
		let boardState = gameboard.slice(); // create copy of gameboard state
		boardState[row][column] = playerChar;
		setGameboard(boardState);
		toggle();
	}

	function placeMarkCom(openSquares) {
		// Find random open square for computer
		let squareIdx = Math.floor(Math.random() * (openSquares.length-1));
		let square = openSquares[squareIdx];

		let boardState = gameboard.slice();
		boardState[square.row][square.column] = comChar;
		setGameboard(boardState);
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
							<td id="square00" onClick={() => placeMarkPlayer(0, 0)}>{gameboard[0][0]}</td>
							<td id="square01" className="lr" onClick={() => placeMarkPlayer(0, 1)}>{gameboard[0][1]}</td>
							<td id="square02" onClick={() => placeMarkPlayer(0, 2)}>{gameboard[0][2]}</td>
						</tr>
					</tbody>
					<tbody>
						<tr>
							<td id="square10" className="tb" onClick={() => placeMarkPlayer(1, 0)}>{gameboard[1][0]}</td>
							<td id="square11" className="tb lr" onClick={() => placeMarkPlayer(1, 1)}>{gameboard[1][1]}</td>
							<td id="square12" className="tb" onClick={() => placeMarkPlayer(1, 2)}>{gameboard[1][2]}</td>
						</tr>
					</tbody>
					<tbody>
						<tr>
							<td id="square20" onClick={() => placeMarkPlayer(2, 0)}>{gameboard[2][0]}</td>
							<td id="square21" className="lr" onClick={() => placeMarkPlayer(2, 1)}>{gameboard[2][1]}</td>
							<td id="square22" onClick={() => placeMarkPlayer(2, 2)}>{gameboard[2][2]}</td>
						</tr>
					</tbody>
				</table>
			</div>
        </div>
    );
}

export default TicTacToe;