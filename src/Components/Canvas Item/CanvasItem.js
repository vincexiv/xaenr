import React, {useRef} from "react";
import "./CanvasItem.css"

function CanvasItem({index}){
    let drawing = false

    window.addEventListener('load', handleCanvas)  

    function startedDrawing(e, ctx){
        drawing = true
        console.log("started drawing")
        draw(e, ctx)
    }

    function finishedDrawing(e, ctx){
        drawing = false
        console.log("finishd drawing")
        ctx.beginPath()
    }

    function draw(e, ctx){
        if(!drawing) return 

        console.log("x and y", e.clientX, e.clientY)
        ctx.lineWidth ='20'
        ctx.lineCap = 'round'
        ctx.strokeStyle = 'black'
        ctx.fillStyle = 'black'

        ctx.lineTo(e.clientX, e.clientY)
        ctx.stroke()
        ctx.beginPath()
        ctx.moveTo(e.clientX, e.clientY)
    }

    function handleCanvas(e){
        const canv = document.getElementById(`canvas-item-${index}`)
        let ctx = canv?.getContext('2d')

        if(ctx){
            ctx.width =  canv?.offsetWidth
            ctx.height = canv?.offsetHeight
            
            window.addEventListener('resize', ()=>{
                ctx.width =  canv?.offsetWidth
                ctx.height = canv?.offsetHeight
            })
        }

        // console.log("canvas Ref width", canvasRef.current?.offsetWidth)
        // console.log("canvas Ref Height", canvasRef.current?.offsetHeight)

        canv.addEventListener('mousedown', (e)=>startedDrawing(e, ctx))
        canv.addEventListener('mouseup', (e)=>finishedDrawing(e, ctx))
        canv.addEventListener('mousemove', (e)=>draw(e, ctx))
    }


    return (
        <canvas id={`canvas-item-${index}`} className="canvas-item">

        </canvas>
    )
}

export default CanvasItem