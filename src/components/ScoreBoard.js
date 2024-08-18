import React from "react";

function ScoreBoard({playerScore, computerScore}){
    return (
        <>
            <div className="winnerMessageDiv">
                <p id="winnerMessage" className="winnerMessage"></p>
            </div>
            <div className="scoreboard">
                <div className="playerScoreDiv">
                    <p className="playerHeading">Player</p>
                    <p className="playerScore">{playerScore}</p>
                </div>
                <div className="computerScoreDiv">
                    <p className="computerHeading">Computer</p>
                    <p className="computerScore">{computerScore}</p>
                </div>
            </div>
        </>
    );
}

export default ScoreBoard;