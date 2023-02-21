import React from "react";
import "./Pieces.css"

function Pieces({allPiecesCount, coloredPiecesCount, testOrSolution}){
    let pieces = []
    let gridAreas = [
        'a', 'b', 'c', 'd', 'e',
        'f', 'g', 'h', 'i', 'j',
        'k', 'l', 'm', 'n', 'o',
        'p', 'q', 'r', 's', 't',
        'u', 'v', 'w', 'x', 'y'
    ]

    // Shuffle the grid areas
    gridAreas = gridAreas.sort(()=> Math.random()-0.5)


    for(let i = 0; i < allPiecesCount; i++){
        if(i < coloredPiecesCount){
            pieces.push(
                <div key={i} className={`piece-container ${gridAreas[i]}`}>
                    <div className="colored piece"></div>
                </div>
            )
        }else{
            pieces.push(
                <div key={i} className={`piece-container ${gridAreas[i]}`}>
                    <div className="piece"></div>
                </div>          
            )
        }
    }

    // Shuffle the pieces
    pieces = pieces.sort(()=> Math.random()-0.5)

    return (
        <div id="pieces" className={testOrSolution}>
            {
                pieces
            }
        </div>
    )
}

export default Pieces;