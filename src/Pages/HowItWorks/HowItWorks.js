import React, {useEffect, useState} from "react";
import "./HowItWorks.css"
import NeighborPieces from "../../Components/NeighborPieces/NeighborPieces";
import Pieces from "../../Components/Pieces/Pieces";
import Button from "../../Components/Button/Button";
import Part1 from "./TheParts/Part1/Part1";
import Part2 from "./TheParts/Part2/Part2";
import Part3 from "./TheParts/Part3/Part3";
import Part4 from "./TheParts/Part4/Part4";

function HowItWorks(){
    const [activeWindow, setActiveWindow] = useState(1)

   function changeActiveWindow(newActiveWindow){
    
    const newWindow = document.querySelector(`#window-${newActiveWindow}`)
    
    if(newWindow !== null){
        document.querySelector(`#window-${activeWindow}`).classList.add('display-none')

        newWindow.classList.remove('display-none')
        setActiveWindow(newActiveWindow)
        console.log(activeWindow)
    }
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
                <div className="the-parts">
                    <Part3 />
                    <Part4 />
                </div>
            </div>

            <div className="footer-btns">
                <Button classList={['footer-btn']} message="Go Back" onClick={()=>{changeActiveWindow(activeWindow-1)}}/>
                <Button classList={['footer-btn']} message="Next" onClick={()=>{changeActiveWindow(activeWindow+1)}}/>
            </div>
        </div>
    )
}

export default HowItWorks;