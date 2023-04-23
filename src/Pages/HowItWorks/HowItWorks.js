import React from "react";
import "./HowItWorks.css"


function HowItWorks(){
    return (
        <div id="how-it-works" className="container">
            <div id="more-info">
                <p>Find more of the work <a href="https://github.com/VinceXIV/open-image" target={"_blank"}>on github</a></p>
            </div>

            <iframe
                src="./HowItWorks.html"
                width={"80%"}
                height={"100%"}
                >
            </iframe>
            
        </div>
    )
}

export default HowItWorks;