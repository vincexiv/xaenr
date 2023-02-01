import React from 'react'
import "./SampleItemBtn.css"

function SampleItemBtn({index, status, setStatus}){
    function makeActive(){
        setStatus(status => ({...status, activeSample: index}))
    }

    return (
        <button
            className={status.activeSample === index? "sample-item-btn active": "sample-item-btn"}
            onClick={makeActive}
            >
            {status.activeSample === index? "Match" : "Match"}
        </button>
    )
}

export default SampleItemBtn