import React from "react";
import Pieces from "../../../../Components/Pieces/Pieces";

function Part1(){
    return (
        <div id="how-it-works-1" className="part">
            <p className="opening-paragraph m-15">
                I am working on a one-shot image recognition algorithm 
                that would have a wide range of use. Right now I am 
                at the prototype stage. I'll be deploying the algorithm through an 
                API so people can interract with it using this 
                interface. If you are interested in how it works, feel free to read along;
            </p>

            <h2 className="m-15">The Idea</h2>
            <p className="m-15">
                Think of it like a jig-saw puzzle. Try to solve the following
                puzzle and once done, click on the <span className="see-solution-span">next </span>
                link to see the solution plus a further discussion of the idea
            </p>

            <h2 className="m-15">The Puzzle</h2>
            <p className="m-15">Here are the instructions</p>
            <ol className="m-15">
                <li>
                    <p className="m-15">
                        You have 25 differently colored pieces that you need to put 
                        together to create a whole image (just like a normal 
                        jigsaw puzzle). Four of the pieces are colored green, while 
                        21 are white. You have been told to get the pieces together 
                        to create an image whose dimensions are 5 by 5
                    </p>
                    <div className="m-15">
                        <p>
                            Here are the 25 pieces;
                        </p>
                        <div className="m-15">
                            <Pieces allPiecesCount={25} coloredPiecesCount={4} testOrSolution="test"/>
                        </div>
                    </div>

                    <p className="m-15 first-paragraph">
                        Without further information being given, there are a <b>gazillion</b> possible 
                        solutions to this problem. Here are examples;
                    </p>
                </li>
            </ol>
        </div>
    )
}

export default Part1