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
            {/* <iframe src="https://www.youtube.com/watch?v=IvLfpaILdlY"
                    width={widthAndHeight.width}
                    height={widthAndHeight.height}
                    allow="autoplay">
            </iframe> */}

            <iframe
                width={widthAndHeight.width}
                height={widthAndHeight.height}
                src="https://www.youtube.com/embed/IvLfpaILdlY?si=ois-UX85RHKx9b3H"
                title="How to Test It"
                frameborder="0"
                allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        </div>
    )
}

export default HowToTestIt;