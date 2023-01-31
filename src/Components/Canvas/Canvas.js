import React, {useRef, useEffect} from 'react'
import "./canvas.css"

function Canvas(){
    let drawing = false
    const canvasRef = useRef()

    useEffect(()=>{
        const canv = canvasRef.current
        // canv.width =  window.innerWidth * 0.09
        // canv.height = window.innerWidth * 0.09

        let ctx = canv.getContext('2d')

        // window.addEventListener('resize', ()=>{
        //     canv.width =  window.innerWidth * 0.09
        //     canv.height = window.innerWidth * 0.09
        // })

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
    }

    function finishedDrawing(e, ctx){
        drawing = false
        console.log("finishd drawing")
        ctx.beginPath()
        console.log(canvasRef.current.toDataURL())

    }

    function draw(e, ctx){
        if(!drawing) return 
        const rect = canvasRef.current.getBoundingClientRect(),
        x = e.clientX - rect.left,
        y = e.clientY - rect.top;

        console.log("x and y", x, y)

        ctx.lineWidth ='20'
        ctx.lineCap = 'round'
        ctx.strokeStyle = 'black'
        ctx.fillStyle = 'black'

        ctx.lineTo(x, y)
        ctx.stroke()
        ctx.beginPath()
        ctx.moveTo(x, y)
    }

    return (

            <canvas id='canvas-item' ref={canvasRef}/>
    )
}

export default Canvas