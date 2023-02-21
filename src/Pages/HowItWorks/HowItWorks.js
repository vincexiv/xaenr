import React from "react";
import "./HowItWorks.css"
import NeighborPieces from "../../Components/NeighborPieces/NeighborPieces";
import Pieces from "../../Components/Pieces/Pieces";
import Button from "../../Components/Button/Button";

function HowItWorks(){
    const values = [
        [0, 0, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 1, 0, 0, 1, 0],
        [0, 0, 0, 0, 0, 1, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 0, 0, 1],
        [1, 1, 0, 0, 1, 0, 0, 1, 0],
        [0, 1, 0, 0, 1, 0, 0, 0, 0],
        [0, 1, 1, 0, 0, 1, 0, 0, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0, 1, 0, 0, 0]
    ]


    return (
        <div id="how-it-works" className="container">
            <h1 className="m-15">What's Up?</h1>
            <div id="how-it-works-the-content">
                <div className="item">
                    <p className="opening-paragraph m-15">
                        I am working on a zero-shot image recognition algorithm 
                        that I am intending to use for medical diagnosis. Right now I am 
                        at the prototype stage. I'll be deploying the algorithm through an 
                        API so people can interract with it using this 
                        interface. If you are interested in how it works, feel free to read along;
                    </p>
                </div>

                <div className="item">
                    <h2 className="m-15">The Idea</h2>
                    <p className="m-15">
                        Think of it like a jig-saw puzzle. Try to solve the following
                        puzzle and once done, click on the <span className="see-solution-span">see solution </span>
                        link to see the solution plus a further discussion of the idea
                    </p>
                </div>

                <div className="item">
                    <h2 className="m-15">The Puzzle</h2>
                    <p className="m-15">Here are the instructions</p>
                </div>

                <div className="item">
                    <p className="m-15">
                        <ol>
                            <li>                                
                                You have 25 differently colored pieces that you need to put 
                                together to create a whole image (just like a normal 
                                jigsaw puzzle). Four of the pieces are colored green, while 
                                21 are white. You have been told to get the pieces together 
                                to create an image whose dimensions are 5 by 5
                            </li>
                        </ol>
                    </p>
                </div>

                <div className="item">
                    <p> Here are the 25 pieces; </p>
                    <div className="m-15 item">
                        <div className="m-15">
                            <Pieces allPiecesCount={25} coloredPiecesCount={4} testOrSolution="test"/>
                        </div>
                    </div>
                </div>

                <div className="item">
                    <p className="m-15 first-paragraph">
                        Without further information being given, there are a <b>gazillion</b> possible 
                        solutions to this problem. Here are examples;
                    </p>
                </div>

                <div className="m-15 item">
                    <div className="m-15 solutions">
                        <Pieces allPiecesCount={25} coloredPiecesCount={4} testOrSolution="solution" />
                        <Pieces allPiecesCount={25} coloredPiecesCount={4} testOrSolution="solution" />
                        <Pieces allPiecesCount={25} coloredPiecesCount={4} testOrSolution="solution" />
                        <Pieces allPiecesCount={25} coloredPiecesCount={4} testOrSolution="solution" />
                    </div>
                </div>

                <div className="item">
                    <ol start={2} className="m-15">
                        <li>
                            There's another requirement that needs to be fulfilled though.
                            Out of those 25 pieces, you’ve been told that 16 don’t have 
                            any restrictive relationship with their neighbors. Their 
                            neighbors could be white or green. However, for the other 9, 
                            the relationship with their neighbors should be as follows;
                        </li>
                    </ol>
                </div>


                <div className="neighbor-value-details m-15 item">
                    {
                        values.map((value, index) => <NeighborPieces key={index} values={value}/>)
                    }
                </div>

                <div className="item">
                    <p className="m-15">
                        Think of the value at the center as representing whether the 
                        piece itself is green or white. 1 represents green, while 0 
                        represents white. This is what this means for the first piece;
                    </p>
                </div>

                <div className="m-15 item">
                    {
                        <NeighborPieces values={values[0]} />
                    }
                </div>

                <div className="item">
                    <ul className="m-15">
                        <li className="m-15">The piece itself is white in color (it has a zero at the center)</li>
                        <li className="m-15">The piece is surrounded by 7 pieces that are colored white, and one piece that is green located at its top right.</li>
                    </ul>
                </div>

                <div className="item">
                    <p className="text">
                        Go ahead and solve the puzzle. Once you have completed, click on the 
                        <span className="see-solution-span"> see solution </span> button.
                    </p>
                </div>

                <div className="see-solution item">
                    <Button classList={['see-solution-btn']} message="See Solution"/>
                </div>
            </div>
        </div>
    )
}

export default HowItWorks;