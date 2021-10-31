import React from 'react'

export default function ScoreBoard({score}) {
    return (
    <div className="score-board" style={{display:"flex", paddingLeft:"15px"}}>
        <h2 style={{paddingRight:"6px"}}>Score: </h2>
        <h2>{score}</h2>
      </div>
    )
}
