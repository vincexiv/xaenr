import React from "react";
import Solution from "../../../../Components/Solved/Solution";

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
                The idea is that you can <span className="key-info"> break down any image using certain rules such that anyone will always 
                end up recreating the original image if given the pieces and the rules.
                </span>
            </p>

            <p>
                In our example above, you will always end up constructing the exact image shown above given the rules. That's not interesting.
                We would love it more if we could use this approach to identify flipped and/or rotated images. Thus, we need to be a little more 
                creative with the rules we use
            </p>
        </div>
    )
}

export default Part3;