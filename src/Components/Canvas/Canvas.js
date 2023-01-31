import React, {useRef, useEffect} from 'react'
import "./canvas.css"

function Canvas(){
    let drawing = false
    const canvasRef = useRef()

    useEffect(()=>{
        const canv = canvasRef.current
        let ctx = canv.getContext('2d')

        window.addEventListener('resize', ()=>{
            canv.width =  window.innerWidth * 0.09
            canv.height = window.innerWidth * 0.09
        })

        // console.log("canvas Ref width", canvasRef.current?.offsetWidth)
        // console.log("canvas Ref Height", canvasRef.current?.offsetHeight)

        canv.addEventListener('mousedown', (e)=>startedDrawing(e, ctx))
        canv.addEventListener('mouseup', (e)=>finishedDrawing(e, ctx))
        canv.addEventListener('mousemove', (e)=>draw(e, ctx))
    })

    function startedDrawing(e, ctx){
        drawing = true
        console.log("started drawing")
        draw(e, ctx)
        console.log("e: ", e)
    }

    function finishedDrawing(e, ctx){
        drawing = false
        console.log("finishd drawing")
        ctx.beginPath()
        console.log(canvasRef.current.toDataURL())

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

    return (
        <canvas ref={canvasRef}/>
    )
}

export default Canvas