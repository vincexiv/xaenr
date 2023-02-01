import React from "react";

function Options({buttonName, options}){
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

export default Options