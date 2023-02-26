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
                image looked like. You can be as creative with the rules as you wish. Just ensure it all works
                </span>
            </p>

            <h1>The Actual Problem</h1>
            <p>
                We want to use the idea above for image recognition
            </p>
            <p>
                Check <a>this link</a> to see a "dry run" of the whole idea. Don't mind if you don't understand what's been done there. 
                You can follow along here, I will be discussing everything done there together with suitable demonstrations
            </p>
            <p>
                In our puzzle, you will always end up constructing the exact image shown previously. That's not interesting. We would love 
                it more if we could use this approach to identify flipped, rotated, or slightly distorted versions of an image. Thus, 
                we need to use rules that force the final pieces obtained to be exactly similar for all versions of an image we are interested 
                in. That is, if you pick an image and break it down using the rules, you will get the same exact pieces you will get for a rotated 
                or flipped version of that image. We would also make it such that the level of similarity between pieces obtained is correlated 
                with how much the image has been distorted in terms of color or shape
            </p>
            <p>
                The method above falls short in so many ways that I'll be discussing shortly
            </p>
        </div>
    )
}

export default Part3;