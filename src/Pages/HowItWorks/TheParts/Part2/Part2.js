import React from "react";
import Button from "../../../../Components/Button/Button";
import Pieces from "../../../../Components/Pieces/Pieces";
import NeighborPieces from "../../../../Components/NeighborPieces/NeighborPieces";
import "./Part2.css"

function Part2({changeActiveWindow}){
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
                neighbors could be white or green. However, for the other 9, 
                the relationship with their neighbors should be as follows;
            </p>

            <div className="neighbor-value-details m-15">
                {
                    values.map((value, index) => <NeighborPieces key={index} values={value}/>)
                }
            </div>

            <p className="m-15">
                Think of the value at the center as representing whether the 
                piece itself is green or white. 1 represents green, while 0 
                represents white. This is what this means for the first piece;
            </p>

            <div className="m-15">
                {
                    <NeighborPieces values={values[0]} />
                }
            </div>

            <ul className="m-15">
                <li className="m-15">The piece itself is white in color (it has a zero at the center)</li>
                <li className="m-15">The piece is surrounded by 7 pieces that are colored white, and one piece that is green located at its top right.</li>
            </ul>
        </li>
    </ol>

    <div className="m-top-1 see-solution-btn-and-text">
        <p className="text">
            Go ahead and solve the puzzle. Once you have completed, click on the 
            <span className="see-solution-span"> see solution </span> button.
        </p>
    </div>

</div>
    )
}

export default Part2