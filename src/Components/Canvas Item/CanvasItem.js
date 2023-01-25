import React from "react";
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

        console.log('context: ', ctx)
        console.log("x and y", e.clientX, e.clientY)
        ctx.lineWidth ='1'
        ctx.lineCap = 'round'
        ctx.strokeStyle = 'red'
        ctx.fillStyle = 'red'

        ctx.lineTo(e.clientX, e.clientY)
        ctx.stroke()
        ctx.beginPath()
        ctx.moveTo(e.clientX, e.clientY)
    }

    function handleCanvas(e){
        const canv = document.getElementById(`canvas-item-${index}`)
        let ctx = canv?.getContext('2d')

        if(ctx){
            ctx.width =  window.innerHeight * 9/100
            ctx.height = window.innerHeight * 9/100
            
            window.addEventListener('resize', ()=>{
                ctx.width =  window.innerHeight * 9/100
                ctx.height = window.innerHeight * 9/100
            })
        }

        canv.addEventListener('mousedown', (e)=>startedDrawing(e, ctx))
        canv.addEventListener('mouseup', (e)=>finishedDrawing(e, ctx))
    }


    return (
        <canvas id={`canvas-item-${index}`} className="canvas-item">

        </canvas>
    )
}

export default CanvasItem