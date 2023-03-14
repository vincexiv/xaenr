import React, { useEffect, useState } from "react";
import "./HowToTestIt.css"

function HowToTestIt(){
    const [width, setWidth] = useState(getWidth())

    useEffect(()=>{
        window.addEventListener('resize', ()=>{
            setWidth(getWidth())
        })
    }, [])

    function getWidth(){
        return 0.75*window.innerWidth
    }
    
    return (
        <div id="how-to-test-it-section" className="container">
            <div className="wrapper">
            <iframe src="https://drive.google.com/file/d/1g_6kL3ZdQG5PXfeGYaQhvrbrktxR6vMK/preview"
                    width={width}
                    height="480"
                    allow="autoplay">
                </iframe>
            </div>
        </div>
    )
}

export default HowToTestIt;