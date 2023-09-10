import React from "react";
import "./HowItWorks.css"


function HowItWorks(){
    return (
        <div id="how-it-works" className="container">
            <div id="more-info">
                <p>
                    {/* Checkout <a href="https://www.youtube.com/watch?v=j656VXJ3udY"
                    className="link"
                    target="_blank"> this video </a>  */}
                    Checkout <a href="https://youtu.be/a9EtLw6IjTg?feature=shared"
                    className="link"
                    target="_blank"> this video </a> 
                    to find out how to test it
                </p>
                <p>Find more of the work <a href="https://github.com/Xaenr-com/open-image"
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