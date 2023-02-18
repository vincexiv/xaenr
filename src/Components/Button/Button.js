import React from "react";
import "./Button.css"

function Button({classList, onClick, message}){
    return (
        <button className={classList.join(" ")} onClick={onClick}> 
            {message}
        </button>
    )
}

export default Button