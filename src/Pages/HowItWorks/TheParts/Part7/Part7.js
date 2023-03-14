import React from "react";
import "./Part7.css"
import ToThreePixels from "../../../../Components/ToThreePixels/ToThreePixels";
import Solution from "../../../../Components/Solved/Solution";

function Part7(){
    return (
        <div id="how-it-works--part-7">
            <p>
                Here is a sample solution, or generally what is expected of you
            </p>
            <p>
                The second group of 4 has values as shown below
            </p>
            <ToThreePixels fourNumberArray={[0, 1, 0, 0]}/>
            <p>
                This, as you can see, translate to any of the following four;
            </p>
            <div className="sample-solutions">
                <Solution solutionArray={[1, 0, 0, 0]}/>
                <Solution solutionArray={[0, 1, 0, 0]}/>
                <Solution solutionArray={[0, 0, 1, 0]}/>
                <Solution solutionArray={[0, 0, 0, 1]}/>
            </div>
            <p>
                Do that for each of the items and try to reconstruct the image. I'll wait...
            </p>
            <h2>To be continued...</h2>
        </div>
    )
}

export default Part7;