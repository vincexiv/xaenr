import React from "react";
import "./HowItWorks.css"


function HowItWorks(){
    return (
        <div id="how-it-works" className="container">
            <div id="more-info">
                <p>
                    We are building a one-shot image recognition algorithm that is explainable by design.
                    So far, we've almost completed the first stage, which involved testing on random doodles and MNIST
                    digits. The next stage will involve scaling it so that it can work with bigger images.
                </p>
                <p>
                    The project will be available for contribution soon. To get acquainted with what we've 
                    accomplished so far, visit the links provided below
                </p>
                <p>
                    Checkout <a href="https://www.youtube.com/watch?v=j656VXJ3udY"
                    className="link"
                    target="_blank"> this video </a> to get a very rough watered-down version
                    of the project.
                </p>
                <p>
                    Checkout <a href="https://youtu.be/a9EtLw6IjTg?feature=shared"
                    className="link"
                    target="_blank"> this video </a> 
                    to find out how to test the project. It is worth noting that it is not deployed 
                    at this point so you will need to follow the processes outlined in the github 
                    repo mentioned below to set it up on your machine and run it.
                </p>
                <p> Here is the github repo; <a href="https://github.com/Xaenr-com/open-image"
                    target={"_blank"}
                    className="link"
                    rel="noreferrer">, you can use it to find out more about the code</a>
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