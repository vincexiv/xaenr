import React from 'react'
import "./SampleItemBtn.css"

function SampleItemBtn({index, status, setStatus}){
    function makeActive(){
        if(status.activeSample !== index){
            setStatus(status => ({...status, activeSample: index}))
        }else{
            setStatus(status => ({...status, activeSample: null}))
        }
    }

    return (
        <button
            className={status.activeSample === index? "sample-item-btn active": "sample-item-btn"}
            onClick={makeActive}
            >
            {status.activeSample === index? "Selected" : "Select"}
        </button>
    )
}

export default SampleItemBtn