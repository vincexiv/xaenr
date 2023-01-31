import React from 'react'
import "./SampleItemBtn.css"

function SampleItemBtn({index, activeSample, setActiveSample}){
    function makeActive(){
        setActiveSample(index)
    }

    return (
        <button
            className={activeSample === index? "sample-item-btn active": "sample-item-btn"}
            onClick={makeActive}
            >
            {activeSample === index? "Match" : "Match"}
        </button>
    )
}

export default SampleItemBtn