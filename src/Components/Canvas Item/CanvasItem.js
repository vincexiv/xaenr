import React, {useRef} from "react";
import "./CanvasItem.css"

function CanvasItem({index}){
    const canvasRef = useRef()
    let painting = false

    function startPainting(e, ctx){
        painting = true

    }

    function finishPainting(e, ctx){
        painting = false
    }

    function handleCanvas(e){
        const ctx = canvasRef.current?.getContext('2d')

        canvasRef.current?.addEventListener('mousedown', (e)=>startPainting(e, ctx))
        canvasRef.current?.addEventListener('mouseup', (e)=>finishPainting(e, ctx))
        canvasRef.current?.addEventListener('mousemove', ()=>{
            if(painting){
                console.log('painting')
            }
        })
    }

    window.addEventListener('load', handleCanvas)

    return (
        <canvas id={`canvas-item-${index}`} ref={canvasRef} className="canvas-item">

        </canvas>
    )
}

export default CanvasItem