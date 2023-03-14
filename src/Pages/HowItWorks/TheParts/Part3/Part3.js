import React from "react";
import Solution from "../../../../Components/Solved/Solution";
import "./Part3.css"

function Part3(){
    const solutionArray = [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0]

    return (
        <div>
            <p>
                So, what was your solution? Did you get a 7, as shown below?
            </p>

            <div>
                <Solution solutionArray={solutionArray}/>
            </div>

            <p>
                great!
            </p>

            <p>
                That's the whole idea summarized
            </p>

            <p>
                The idea is that you can <span className="key-info"> break down any image using certain rules such that given the rules, you 
                will always end up recreating the original image (or a modified version of it). A person needs not to know how the original 
                image looked like to end up recreating it using the pieces.
                </span>
            </p>

            <h1>The Actual Problem</h1>
            <p>
                So far we know that we can break down any image and keep some information regarding its relationship with other
                pieces such that in each of the pieces that will guide someone in constructing the original image.
            </p>
            <p>
                We want to use the idea above for image recognition
            </p>
            <p>
                If you haven't noticed, the puzzle you solved was centered on breaking the image down into overlapping pieces of 9 pixels. 
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
        </div>
    )
}

export default Part3;