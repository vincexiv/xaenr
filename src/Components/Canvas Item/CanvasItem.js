import React from "react";
import "./CanvasItem.css"

function CanvasItem({index}){
    return (
        <canvas id={`canvas-item-${index}`} className="canvas-item">

        </canvas>
    )
}

export default CanvasItem