import React from "react";
import "./Solution.css"

function Solution({solutionArray}){
    let solutionPieces = []

    for(let i = 0; i < solutionArray?.length; i++){
        if(solutionArray?.[i]  == 1){
            solutionPieces.push(
                <div key={i} className={`piece-container`}>
                    <div className="colored piece"></div>
                </div>
            )
        }else if(solutionArray?.[i]  == 0){
            solutionPieces.push(
                <div key={i} className={`piece-container`}>
                    <div className="piece"></div>
                </div>          
            )
        }else{
            solutionPieces.push(
                <div key={i} className={`piece-container`}>
                    <div className="piece nothing"></div>
                </div>          
            )          
        }
    }

    return (
        <div id="solution" className={`length-${solutionArray?.length}`}>
            {
                solutionPieces
            }
        </div>
    )
}

export default Solution;