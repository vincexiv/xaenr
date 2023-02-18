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

            <div id="how-it-works-the-parts">
                <div id="how-it-works-1" className="part">
                    <p className="opening-paragraph m-15">
                        I came up with a new zero-shot image recognition algorithm.
                        I know that sounds preposterous and the fact that it looks
                        promising makes it super interesting.
                    </p>

                    <h2 className="m-15">The Idea</h2>
                    <p className="m-15">
                        Think of it like a jig-saw puzzle. Try to solve the following
                        puzzle and once done, click on the <span className="see-solution-span">see solution </span>
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
                                21 are light-gray. You have been told to get the pieces together 
                                to create an image whose dimensions are 5 by 5
                            </p>
                            <p className="m-15">
                                Here are the 25 pieces;
                                <div className="m-15">
                                    <Pieces allPiecesCount={25} coloredPiecesCount={4} testOrSolution="test"/>
                                </div>
                            </p>

                            <p className="m-15 first-paragraph">
                                Without further information being given, if requested to create the 
                                image using the pieces provided, all the following are valid
                                solutions to the problem
                            </p>
                        </li>
                    </ol>
                </div>

                <div id="how-it-works-2" className="part">
                        <div className="m-15">
                            <div className="m-15 solutions">
                                <Pieces allPiecesCount={25} coloredPiecesCount={4} testOrSolution="solution" />
                                <Pieces allPiecesCount={25} coloredPiecesCount={4} testOrSolution="solution" />
                                <Pieces allPiecesCount={25} coloredPiecesCount={4} testOrSolution="solution" />
                                <Pieces allPiecesCount={25} coloredPiecesCount={4} testOrSolution="solution" />
                            </div>
                        </div>
                    <ol start="2" className="m-top-1">
                        <li>
                            <p className="m-15">
                                There's another requirement that needs to be fulfilled though.
                                Out of those 25 pieces, you’ve been told that 16 don’t have 
                                any restrictive relationship with their neighbors. Their 
                                neighbors could be white or black. However, for the other 9, 
                                the relationship with their neighbors should be as follows;
                            </p>

                            <div className="neighbor-value-details m-15">
                                {
                                    values.map((value, index) => <NeighborPieces key={index} values={value}/>)
                                }
                            </div>

                            <p className="m-15">
                                Think of the value at the center as representing whether the 
                                piece itself is black or white. 1 represents black, while 0 
                                represents white. This is what this means for the first piece;
                            </p>

                            <div className="m-15">
                                {
                                    <NeighborPieces values={values[0]} />
                                }
                            </div>

                            <ul className="m-15">
                                <li className="m-15">The piece itself is white in color (it has a zero at the center)</li>
                                <li className="m-15">The piece is surrounded by 7 pieces that are colored white, and one piece that is black located at its top right.</li>
                            </ul>
                        </li>
                    </ol>

                    <div className="m-top-1 see-solution-btn-and-text">
                        <p className="text">
                            Go ahead and solve the puzzle. Once you have completed, click on the 
                            <span className="see-solution-span"> see solution </span> button.
                        </p>

                        <div className="see-solution">
                            <Button classList={['see-solution-btn']} message="See Solution"/>
                        </div>
                    </div>

                </div>

            </div>
    
        </div>
    )
}

export default HowItWorks;