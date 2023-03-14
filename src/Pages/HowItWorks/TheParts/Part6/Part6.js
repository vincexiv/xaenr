import React from "react";
import Solution from "../../../../Components/Solved/Solution";
import ToThreePixels from "../../../../Components/ToThreePixels/ToThreePixels";
import "./Part6.css"

function Part6(){
    return (
        <div id="how-it-works--part-6">
            <p>
                I'll take you back to where we started and that is creating the original image 
                using only the information in the pieces provided. Here is another puzzle you 
                might want to try to solve before proceeding to read
            </p>
            <p>
                First, we will be representing the pieces using numbers, and these numbers will 
                be sorted. For instance, both the two pieces below have values [0, 0, 1]
            </p>
            <div className="solution-sample">
                <Solution solutionArray={[-1, 1, 0, 0]}/>
                <Solution solutionArray={[1, -1, 0, 0]}/>
            </div>
            <p>
                Now, you have 16 groups of 4 of such pieces and are told to reconstruct the original 
                image
            </p>
            <div className="the-pieces">
                <ToThreePixels fourNumberArray={[0, 0, 0, 0]}/>
                <ToThreePixels fourNumberArray={[0, 0, 0, 1]}/>
                <ToThreePixels fourNumberArray={[0, 0, 1, 1]}/>
                <ToThreePixels fourNumberArray={[0, 0, 1, 0]}/>

                <ToThreePixels fourNumberArray={[0, 0, 0, 0]}/>
                <ToThreePixels fourNumberArray={[0, 1, 0, 0]}/>
                <ToThreePixels fourNumberArray={[1, 1, 0, 1]}/>
                <ToThreePixels fourNumberArray={[1, 0, 1, 0]}/>

                <ToThreePixels fourNumberArray={[0, 0, 0, 0]}/>
                <ToThreePixels fourNumberArray={[0, 0, 0, 0]}/>
                <ToThreePixels fourNumberArray={[0, 1, 0, 1]}/>
                <ToThreePixels fourNumberArray={[1, 0, 1, 0]}/>

                <ToThreePixels fourNumberArray={[0, 0, 0, 0]}/>
                <ToThreePixels fourNumberArray={[0, 0, 0, 0]}/>
                <ToThreePixels fourNumberArray={[0, 1, 0, 0]}/>
                <ToThreePixels fourNumberArray={[1, 0, 0, 0]}/>
            </div>
            <p>
                You are told that each group of 4, can be used to create a 4 pixels piece, that will in turn be used 
                to recreate the original image.
            </p>
            <h2>To be continued...</h2>
        </div>
    )
}

export default Part6;