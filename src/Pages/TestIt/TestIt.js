import React, {useRef, useState} from "react";
import Canvas from '../../Components/Canvas/Canvas'
import SampleItems from '../../Components/SampleItems/SampleItems';
import Button from "../../Components/Button/Button";
import "./TestIt.css"

function TestIt({setActiveAction}){
    const defaultState = {
        activeSample: null,
        sampleImages: [1, 2, 3],
        resultImages: [1, 2],
        painting: true
      }
      const previousStatus = useRef(defaultState)
      const [status, setStatus] = useState(defaultState)


    function changeBtnColor(e){
        e.target.classList.add('visited')
        setTimeout(()=>{
          e.target.classList.remove('visited')
        }, 200)
    }
    
    function clearInputs(e){
        changeBtnColor(e)
        previousStatus.current = status
    
        if(status.activeSample === null){
          setStatus(defaultState)
        }else {
          const newSampleImages = status.sampleImages.map((sampleImage, index) => {
            if(status.activeSample === index){
              return status.activeSample
            }else {
              return sampleImage
            }
          })
    
          setStatus(status => ({...status, sampleImages: newSampleImages }))
        }

        updateResultImages()
    }
    
    function undoChange(e){
        changeBtnColor(e)
        setStatus(previousStatus.current)
    }

    function updateResultImages(){
      const newImage = status.sampleImages[status.activeSample]
      setStatus(status => {
        return (
          {
            ...status,
            resultImages: [newImage, 2]
          }
        )
      })
    }
      
    return (
      <>
      <div className="container">
        <div>
          <Button classList={['btn', 'go-to-how-to-test-it']} onClick={()=>setActiveAction('how-to-test-it')} message="See How to Test It"/>
        </div>
      </div>
      <div id="test-it" className='container'>
        <div className='canvas-item-container'>
          <Canvas
            status={status}
            setStatus={setStatus}
            previousStatus={previousStatus}/>
        </div>

          <SampleItems
            images={status.sampleImages}
            sampleType="sample"
            status={status}
            setStatus={setStatus}
            previousStatus={previousStatus}/>

          <div className='decorative'></div>
        {/* <div className='sample-items-container'>

        </div> */}

        <div id='matching-btn-container'>
            <Button classList={['btn', 'clear-btn']} onClick={clearInputs} message="Clear"/>
            <Button classList={['btn', 'undo-btn']} onClick={undoChange} message="Undo"/>
            <Button classList={['btn', 'start-matching-btn']} message="Test" onClick={updateResultImages}/>
        </div>

          <SampleItems
            images={status.resultImages}
            sampleType="results"
            status={status}
            setStatus={setStatus}/>
        {/* <div id='results-container'>

        </div> */}
      </div>
      </>
    )
}

export default TestIt;