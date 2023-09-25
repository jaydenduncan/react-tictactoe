import React from "react";
import '../App.css';

function TicTacToe({board}){

    return (
        <div className="container">
            <h1>Tic Tac Toe</h1>
            <div className="gameboardDiv">
				<table className="gameBoard">
					<tr>
						<td>{board[0][0]}</td>
						<td class="lr">{board[0][1]}</td>
						<td>{board[0][2]}</td>
					</tr>
					<tr>
						<td class="tb">{board[1][0]}</td>
						<td class="tb lr">{board[1][1]}</td>
						<td class="tb">{board[1][2]}</td>
					</tr>
					<tr>
						<td>{board[2][0]}</td>
						<td class="lr">{board[2][1]}</td>
						<td>{board[2][2]}</td>
					</tr>
				</table>
			</div>
        </div>
    );
}

export default TicTacToe;