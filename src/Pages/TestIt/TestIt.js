import React, {useRef, useState} from "react";
import Canvas from '../../Components/Canvas/Canvas'
import SampleItems from '../../Components/SampleItems/SampleItems';
import Button from "../../Components/Button/Button";
import { apiHost } from "../../variables";
import "./TestIt.css"

function TestIt(){
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
    }
    
    function undoChange(e){
        changeBtnColor(e)
        setStatus(previousStatus.current)
    }

    function getMatch(activeSample, refSample, testSamples){
      setStatus(status => ({...status, activeSample: activeSample,
        resultImages: [status.sampleImages[activeSample], 2]}))          

      fetch(`${apiHost}/get-match`, {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
          ref_sample: refSample,
          test_samples: testSamples
        })
      })
      .then(res => {
        const newResultImages = [status.sampleImages[activeSample]]
        try {
          if(res.ok){
            res.json().then(data => {
              setStatus(status => ({...status, activeSample: activeSample,
                                    resultImages: [...newResultImages, data]}))
            })
          }else{
            res.json().then(error => {
              console.warn(error)
              setStatus(status => ({...status, activeSample: activeSample,
                                    resultImages: [...newResultImages, 2]}))
            })
          }        
        } catch (error) {
          console.warn(error)
        }
      })
    }

    function handleTestClick(){
      if(!status.activeSample){
        status.sampleImages.find((image, firstImageIndex) => {
          if(typeof(image) === 'string'){
              const refSample = status.sampleImages.find((sammpleImage, index) => index === firstImageIndex)
              const testSamples = status.sampleImages.filter((sammpleImage, index) => index !== firstImageIndex)
              getMatch(firstImageIndex, refSample, testSamples)
              return true
          }else{
            return false
          }
        })
      }else{
        const refSample = status.sampleImages.find((sammpleImage, index) => index === status.activeSample)
        const testSamples = status.sampleImages.filter((sammpleImage, index) => index !== status.activeSample)  
        getMatch(status.activeSample, refSample, testSamples)         
      }      
    }
      
    return (
      <>
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
            <Button classList={['btn', 'start-matching-btn']} message="Test" onClick={handleTestClick}/>
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