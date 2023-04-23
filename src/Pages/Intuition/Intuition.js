import React, {useState} from "react";
import "./Intuition.css"
import Button from "../../Components/Button/Button";
import Part1 from "./TheParts/Part1/Part1";
import Part2 from "./TheParts/Part2/Part2";
import Part3 from "./TheParts/Part3/Part3";
import Part4 from "./TheParts/Part4/Part4";
import Part5 from "./TheParts/Part5/Part5";
import Part6 from "./TheParts/Part6/Part6";
import Part8 from "./TheParts/Part8/Part8";
import Part7 from "./TheParts/Part7/Part7";

function Intuition(){
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
        <div id="intuition" className="container">
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

            <div id="window-3" className="window display-none">
                <h1 className="m-15">The Solution</h1>
                <div className="the-parts">
                    <Part5 />
                    <Part6 />
                </div>
            </div>

            <div id="window-4" className="window display-none">
                <h1 className="m-15">The Solution</h1>
                <div className="the-parts">
                    <Part7 />
                    <Part8 />
                </div>
            </div>

            <div className="footer-btns">
                <Button classList={['footer-btn']} message="Go Back" onClick={()=>{changeActiveWindow(activeWindow-1)}}/>
                <Button classList={['footer-btn']} message="Next" onClick={()=>{changeActiveWindow(activeWindow+1)}}/>
            </div>
        </div>
    )
}

export default Intuition;