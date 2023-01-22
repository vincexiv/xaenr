import React from 'react'
import "./CanvasItemBtn.css"

function CanvasItemBtn({index, activeCanvas, setActiveCanvas}){
    function makeActive(){
        setActiveCanvas(index)
    }

    return (
        <button
            className={activeCanvas == index? "canvas-item-btn active": "canvas-item-btn"}
            onClick={makeActive}
            >
            {activeCanvas == index? "Match" : "Match"}
        </button>
    )
}

export default CanvasItemBtn