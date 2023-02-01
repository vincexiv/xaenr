import React from "react";

function MatchOption({optionLabel}){
    return (
        <div className='match-option-item'>
            <input
                type="checkbox"
                id={optionLabel.toLowerCase().split(" ").join("_")}
                name={optionLabel.toLowerCase().split(" ").join("_")}
                value={optionLabel.toLowerCase().split(" ").join("_")}
            />

            <label
                htmlFor={optionLabel.toLowerCase().split(" ").join("_")}>
                {optionLabel}
            </label>
        </div>
    )
}

export default MatchOption