import React, {useEffect, useState} from "react";
import "./HowItWorks.css"
import NeighborPieces from "../../Components/NeighborPieces/NeighborPieces";
import Pieces from "../../Components/Pieces/Pieces";
import Button from "../../Components/Button/Button";
import Part1 from "./TheParts/Part1/Part1";
import Part2 from "./TheParts/Part2/Part2";
import Part3 from "./TheParts/Part3/Part3";

function HowItWorks(){
    const [activeWindow, setActiveWindow] = useState("window-1")

   function changeActiveWindow(newActiveWindow){
    document.querySelector(`#${activeWindow}`).classList.add('display-none')
    document.querySelector(`#${newActiveWindow}`).classList.remove('display-none')
    setActiveWindow(newActiveWindow)
   }

    return (
        <div id="how-it-works" className="container">
            <div id="window-1" className="window">
                <h1 className="m-15">What's Up</h1>
                <div className="the-parts">
                    <Part1 />
                    <Part2 changeActiveWindow={changeActiveWindow}/>
                </div>
            </div>
            
            <div id="window-2" className="window display-none">
                <h1 className="m-15">The Solution</h1>
                <div id="window-1" className="window">
                    <Part3 />
                </div>
            </div>
        </div>
    )
}

export default HowItWorks;