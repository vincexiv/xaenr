import React, {useRef, useEffect, useState} from 'react'
import "./canvas.css"

function Canvas({status, setStatus, previousStatus}){
    let drawing = false
    const canvasRef = useRef()
    const [remSize, setRemSize] = useState(parseFloat(getComputedStyle(document.documentElement).fontSize))
    const [image, setImage] = useState("")

    useEffect(()=>{
        const canv = canvasRef.current
        let ctx = canv.getContext('2d')

        resize()

        window.addEventListener('resize', resize)

        canv.addEventListener('mousedown', (e)=>startedDrawing(e, ctx))
        canv.addEventListener('touchstart', (e)=>startedDrawing(e, ctx))
        
        canv.addEventListener('mouseup', (e)=>finishedDrawing(e, ctx))
        canv.addEventListener('touchend', (e)=>finishedDrawing(e, ctx))
        
        canv.addEventListener('mousemove', (e)=>draw(e, ctx))
        canv.addEventListener('touchmove', (e)=>draw(e, ctx))
    })

    function resize(ctx){
        // Size of 1 rem in pixels
        setRemSize(parseFloat(getComputedStyle(document.documentElement).fontSize))
    }

    function startedDrawing(e, ctx){
        drawing = true
        draw(e, ctx)
    }

    function finishedDrawing(e, ctx){
        drawing = false
        ctx.beginPath()
        setImage(canvasRef.current.toDataURL())
    }

    function paint(ctx, x, y){
        ctx.lineTo(x, y)
        ctx.stroke()
        ctx.beginPath()
        ctx.moveTo(x, y)
    }

    function draw(e, ctx){
        e.preventDefault()
        
        if(!drawing) return 
        const rect = ctx.canvas.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top;

        ctx.lineWidth = '10'
        ctx.lineCap = 'round'
        ctx.strokeStyle = 'black'
        ctx.fillStyle = 'black'

        if(x && y){
            paint(ctx, x, y)
        }else{
            for(const key in e.touches){
                const x = e.touches[key].clientX - rect.left
                const y = e.touches[key].clientY - rect.top

                if(x && y){

                    paint(ctx, x, y)
                }
            }
        }
    }

    function clearCanvas(){
        canvasRef.current.getContext('2d').clearRect(0, 0, canvasRef.current.width, canvasRef.current.height)
        setImage("")
    }

    function addImageToSample(){
        previousStatus.current = status
        const sampleImages = status.sampleImages

        if(status.activeSample === null){
            sampleImages.shift()
            sampleImages.push(image)
            setStatus(status => ({...status, sampleImages: sampleImages}))
        }else {
            const newImages = sampleImages.map((sampleImage, index) => {
                if(index === status.activeSample){
                    return image
                }else{
                    return sampleImage
                }
            })
            setStatus(status => ({...status, sampleImages: newImages}))
        }
        clearCanvas()
    }

    return (
        <div id='canvas-item-and-btn-container'>
            <canvas id='canvas-item' ref={canvasRef} width={remSize*26} height={remSize*26}/>
            <div className='buttons'>
                <button className='btn' onClick={clearCanvas}>Clear</button>
                <button className='btn' onClick={addImageToSample}>Add</button>
            </div>
        </div>
    )
}

export default Canvas