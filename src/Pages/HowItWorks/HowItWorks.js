import React from "react";
import "./HowItWorks.css"
import NeighborPieces from "../../Components/NeighborPieces/NeighborPieces";
import Pieces from "../../Components/Pieces/Pieces";
import Button from "../../Components/Button/Button";
import Part1 from "./TheParts/Part1/Part1";
import Part2 from "./TheParts/Part2/Part2";

function HowItWorks(){
    return (
        <div id="how-it-works" className="container">
            <h1 className="m-15">What's Up?</h1>

            <div id="how-it-works-the-parts">
                <Part1 />
                <Part2 />
            </div>
    
        </div>
    )
}

export default HowItWorks;