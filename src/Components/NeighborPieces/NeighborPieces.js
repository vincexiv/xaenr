import React from "react";
import "./NeighborPieces.css"

function NeighborPieces({values}){
    console.log(values)
    return (
        <div id="neighbor-pieces">
            {
                values.map((value, index) => {
                    return <div key={index}>{value}</div>
                })
            }
        </div>
    )
}

export default NeighborPieces;