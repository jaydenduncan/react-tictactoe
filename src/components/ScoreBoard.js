import React from "react";

function ScoreBoard({playerScore, computerScore}){
    return (
        <>
            <span className="scores">{playerScore} - {computerScore}</span>
        </>
    );
}

export default ScoreBoard;