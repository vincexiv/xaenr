import React, {useRef, useEffect, useState} from 'react'
import "./canvas.css"

function Canvas(){
    let drawing = false
    const canvasRef = useRef()
    const [remSize, setRemSize] = useState(12)

    useEffect(()=>{
        const canv = canvasRef.current
        let ctx = canv.getContext('2d')

        resize()

        window.addEventListener('resize', resize)

        canv.addEventListener('mousedown', (e)=>startedDrawing(e, ctx))
        canv.addEventListener('mouseup', (e)=>finishedDrawing(e, ctx))
        canv.addEventListener('mousemove', (e)=>draw(e, ctx))
    })

    function resize(ctx){
        // Size of 1 rem in pixels
        setRemSize(parseFloat(getComputedStyle(document.documentElement).fontSize))
    }

    function startedDrawing(e, ctx){
        drawing = true
        console.log("started drawing")
        draw(e, ctx)
    }

    function finishedDrawing(e, ctx){
        drawing = false
        console.log("finishd drawing")
        ctx.beginPath()
        // console.log(canvasRef.current.toDataURL())
        // console.log(ctx.canvas)
        // ctx.strokeRect(20, 20, 40, 40)
    }

    function draw(e, ctx){
        if(!drawing) return 
        const rect = ctx.canvas.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top;

        console.log("x and y", x, y)

        ctx.lineWidth = '30'
        ctx.lineCap = 'round'
        ctx.strokeStyle = 'black'
        ctx.fillStyle = 'black'

        ctx.lineTo(x, y)
        ctx.stroke()
        ctx.beginPath()
        ctx.moveTo(x, y)
    }

    function clearCanvas(){
        canvasRef.current.getContext('2d').clearRect(0, 0, canvasRef.current.width, canvasRef.current.height)
    }

    return (
        <div>
            <canvas id='canvas-item' ref={canvasRef} width={remSize*24} height={remSize*24}/>
            <div className='buttons'>
                <button className='btn' onClick={clearCanvas}>Clear</button>
                <button className='btn'>Add</button>
            </div>
        </div>
    )
}

export default Canvas