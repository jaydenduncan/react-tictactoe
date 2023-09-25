import React from "react";
import '../App.css';

function TicTacToe({board}){

    return (
        <div className="container">
            <h1>Tic Tac Toe</h1>
            <div className="gameboardDiv">
				<table className="gameBoard">
					<tbody>
						<tr>
							<td>{board[0][0]}</td>
							<td className="lr">{board[0][1]}</td>
							<td>{board[0][2]}</td>
						</tr>
					</tbody>
					<tbody>
						<tr>
							<td className="tb">{board[1][0]}</td>
							<td className="tb lr">{board[1][1]}</td>
							<td className="tb">{board[1][2]}</td>
						</tr>
					</tbody>
					<tbody>
						<tr>
							<td>{board[2][0]}</td>
							<td className="lr">{board[2][1]}</td>
							<td>{board[2][2]}</td>
						</tr>
					</tbody>
				</table>
			</div>
        </div>
    );
}

export default TicTacToe;