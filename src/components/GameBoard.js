import React from "react";

function GameBoard({gameboard, gameEnded, placeMarkPlayer}){
    return (
        <>
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
        </>
    );
}

export default GameBoard;