import React from "react";

function SampleOptions({buttonName, options}){
    return (
        <div className='options'>
            <button>{buttonName}</button>
            <select>
                {
                    options?.map(option => <option key={option}>{option}</option>)
                }
            </select>
        </div>
    )
}

export default SampleOptions