import React, { useEffect, useState } from "react";
import "./HowToTestIt.css"

function HowToTestIt(){
    const [widthAndHeight, setWidthAndHeight] = useState({width: getWidth(), height: getHeight()})

    useEffect(()=>{
        window.addEventListener('resize', ()=>{
            setWidthAndHeight({width: getWidth(), height: getHeight()})
        })
    }, [])

    function getWidth(){
        return 0.75*window.innerWidth
    }

    function getHeight(){
        return 0.8*window.innerHeight
    }
    
    return (
        <div id="how-to-test-it-section" className="container">
            <div className="wrapper">
            <iframe src="https://drive.google.com/file/d/1g_6kL3ZdQG5PXfeGYaQhvrbrktxR6vMK/preview"
                    width={widthAndHeight.width}
                    height={widthAndHeight.height}
                    allow="autoplay">
                </iframe>
            </div>
        </div>
    )
}

export default HowToTestIt;