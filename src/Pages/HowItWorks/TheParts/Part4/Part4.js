import React from "react";
import "./Part4.css"
import Solution from "../../../../Components/Solved/Solution";

function Part4(){
    return (
        <div>
            <p>
                If you haven't noticed, the problem above was centered on breaking the image down into overlapping pieces of 9 pixels. 
                Here are some of the pieces obtained
            </p>

            <div className="three-by-three-examples">
                <Solution solutionArray={[0, 0, 0, 0, 0, 1, 0, 0, 0]}/>
                <Solution solutionArray={[0, 0, 0, 0, 1, 1, 0, 0, 1]}/>
                <Solution solutionArray={[0, 0, 0, 1, 1, 0, 0, 1, 0]}/>
                <Solution solutionArray={[0, 0, 1, 0, 0, 0, 0, 0, 0]}/>
                <Solution solutionArray={[0, 1, 1, 0, 0, 1, 0, 0, 1]}/>
                <Solution solutionArray={[1, 1, 0, 0, 1, 0, 0, 1, 0]}/>
                <Solution solutionArray={[0, 0, 0, 0, 0, 0, 0, 0, 0]}/>
                <Solution solutionArray={[0, 1, 0, 0, 1, 0, 0, 0, 0]}/>
                <Solution solutionArray={[1, 0, 0, 1, 0, 0, 0, 0, 0]}/>
            </div>
            <h2>To be continued...</h2>
        </div>

    )
}

export default Part4