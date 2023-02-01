import React from "react";
import "./SampleOptions.css"

function SampleOptions({buttonName, options}){
    return (
        <div className='sample-option-item'>
            <select>
                {
                    options?.map(option => <option key={option}>{option}</option>)
                }
            </select>
            <button>{buttonName}</button>
        </div>
    )
}

export default SampleOptions