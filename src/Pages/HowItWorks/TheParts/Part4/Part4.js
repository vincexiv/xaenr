import React from "react";
import "./Part4.css"
import Solution from "../../../../Components/Solved/Solution";

function Part4(){
    return (
        <div>
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
            <h2>To be continued...</h2>
        </div>

    )
}

export default Part4