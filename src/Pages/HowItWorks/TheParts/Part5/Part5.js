import React from "react";
import Solution from "../../../../Components/Solved/Solution";
import "./Part5.css"

function Part5(){
    return (
        <div id="how-it-works--part-5">
            <div className="solutions">
                <div className="solution-and-sum">
                    <Solution solutionArray={[-1, 1, 0, 0]}/>
                    <p> = </p>
                    <p> 1 </p>
                </div>
                <div className="solution-and-sum">
                    <Solution solutionArray={[1, -1, 0, 0]}/>
                    <p> = </p>
                    <p> 1 </p>                   
                </div>
                <div className="solution-and-sum">
                    <Solution solutionArray={[1, 1, -1, 0]}/>
                    <p> = </p>
                    <p> 2 </p>
                </div>
                <div className="solution-and-sum">
                    <Solution solutionArray={[1, 1, 0, -1]}/>
                    <p> = </p>
                    <p> 2 </p>
                </div>
            </div>
            <p>
                Therefore, the initial four pixels piece can be summarized using the numbers [1, 1, 2, 2]
            </p>
            <div className="solution-and-array">
                <Solution solutionArray={[1, 1, 0, 0]}/>
                <div className="arrow-and-content">
                    <div className="arrow-down"> &#8594;</div>
                    <div>
                        [1, 1, 2, 2]
                    </div>
                </div>
            </div>
            <p>
                We can then sort this value in either ascending or descending order. If we want to compare a piece of 
                4 pixels with another, we can just do a Pearson's correlation
            </p>
            <p>
                Notice that the following all map to [1, 1, 2, 2] when broken down in the way we have described and the 
                array sorted
            </p>
            <div className="solutions-sample">
                <Solution solutionArray={[1, 1, 0, 0]}/>
                <Solution solutionArray={[1, 0, 1, 0]}/>
                <Solution solutionArray={[1, 1, 0, 0]}/>
                <Solution solutionArray={[1, 1, 0, 0]}/>
            </div>
            <p>
                The interesting finding in this approach is, there will be a high correlation value if the pieces have 
                similar orientation whether there has been rotation or flipping of the original image.
            </p>
            <p>
                The approach above is robust in terms of taking care of rotation and flipping of images. However, it is 
                still not the best approach.
            </p>
            <p>
                In any case, I'll continue discussing how this approach can be used for image recognition and build on it 
                to create a better approach
            </p>
        </div>
    )
}

export default Part5