import React from "react";
import "./Solution.css"

function Solution({solutionArray}){
    let solutionPieces = []

    for(let i = 0; i < solutionArray?.length; i++){
        if(solutionArray?.[i]){
            solutionPieces.push(
                <div key={i} className={`piece-container`}>
                    <div className="colored piece"></div>
                </div>
            )
        }else{
            solutionPieces.push(
                <div key={i} className={`piece-container`}>
                    <div className="piece"></div>
                </div>          
            )
        }
    }

    console.log(solutionPieces)

    return (
        <div id="solution" className={`length-${solutionArray?.length}`}>
            {
                solutionPieces
            }
        </div>
    )
}

export default Solution;