import React from "react";
import "./HowItWorks.css"


function HowItWorks(){
    return (
        <div id="how-it-works" className="container">
            <div id="more-info">
                <p>
                    Checkout <a href="https://www.youtube.com/watch?v=j656VXJ3udY"
                    className="link"
                    target="_blank"> this video </a> 
                    to find out a summary of how it works in practice 
                </p>
                <p>Find more of the work <a href="https://github.com/VinceXIV/open-image"
                    target={"_blank"}
                    className="link"
                    rel="noreferrer">on github</a>
                </p>
            </div>

            <iframe
                loading="lazy"
                title="how-it-works-iframe"
                src="./HowItWorks.html"
                >
            </iframe>
            
        </div>
    )
}

export default HowItWorks;