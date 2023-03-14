import React from "react";
import "./Part4.css"
import Solution from "../../../../Components/Solved/Solution";

function Part4(){
    const solutionArray = [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0]

    return (
        <div id="how-it-works--part-3">
            <p>
                This is only one way to break down the image. It was a very simplistic approach and it falls short in so
                 many ways that I'll be discussing shortly
            </p>
            <p>
                One of its weaknesses is that one will end up constructing an upright 7 value like the solution provided 
                previously. That's not interesting. We would love it more if we could use this approach to identify flipped, 
                rotated, or slightly distorted versions of an image. Thus, we need to use rules that force the final pieces 
                obtained to be exactly similar for all versions of an image we are interested in.
            </p>
            <h2>Approach 1</h2>
            <p>
                Here, we are trying to make it possible to reconstruct a rotated version of the original image given the pieces. 
                One approach is to break down the image into overlapping pieces of four pixes in stead of 9 followed by the steps
                 that will be shown shortly.
            </p>
            <p>
                First, we break down the image into overlapping pieces of 4 pixels
            </p>
            <div className="problem-and-solution">
                <div>
                    <Solution solutionArray={solutionArray}/>
                </div>
                <div className="arrow-and-content">

                    <div className="arrow-down"> &#8594;</div>
                    <div className="two-by-two-examples">
                        <Solution solutionArray={[0, 0, 0, 0]}/>
                        <Solution solutionArray={[0, 0, 0, 1]}/>
                        <Solution solutionArray={[0, 0, 1, 1]}/>
                        <Solution solutionArray={[0, 0, 1, 0]}/>

                        <Solution solutionArray={[0, 0, 0, 0]}/>
                        <Solution solutionArray={[0, 1, 0, 0]}/>
                        <Solution solutionArray={[1, 1, 0, 1]}/>
                        <Solution solutionArray={[1, 0, 1, 0]}/>

                        <Solution solutionArray={[0, 0, 0, 0]}/>
                        <Solution solutionArray={[0, 0, 0, 0]}/>
                        <Solution solutionArray={[0, 1, 0, 1]}/>
                        <Solution solutionArray={[1, 0, 1, 0]}/>

                        <Solution solutionArray={[0, 0, 0, 0]}/>
                        <Solution solutionArray={[0, 0, 0, 0]}/>
                        <Solution solutionArray={[0, 1, 0, 0]}/>
                        <Solution solutionArray={[1, 0, 0, 0]}/>

                    </div>
                </div>
            </div>
            <p>
                Then we break down the pieces further into overlapping pieces of 3 pixels. Here is an example
            </p>
            <div className="problem-and-solution">
                <Solution solutionArray={[1, 1, 0, 0]}/>
                <div className="arrow-and-content">

                <div className="arrow-down"> &#8594;</div>
                <div className="two-by-two-examples">
                <Solution solutionArray={[-1, 1, 0, 0]}/>
                <Solution solutionArray={[1, -1, 0, 0]}/>
                <Solution solutionArray={[1, 1, -1, 0]}/>
                <Solution solutionArray={[1, 1, 0, -1]}/>
                </div>
                </div>

            </div>
            <p>
                Then we find the sum of the values in each piece
            </p>
            <h2>To be continued...</h2>
        </div>

    )
}

export default Part4