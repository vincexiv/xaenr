import './App.css';
import React, {useState} from 'react'
import Navbar from './Components/Navbar/Navbar';
import Canvas from './Components/Canvas/Canvas'
import SampleItems from './Components/SampleItems/SampleItems';

function App() {
  const defaultState = {
    activeSample: null,
    sampleImages: [1, 2, 3],
    resultImages: [1, 2],
    painting: true
  }
  const [status, setStatus] = useState(defaultState)

  function clearInputs(){
    setStatus(defaultState)
  }

  console.log("status: ", status)

  return (
    <>
      <Navbar />

      <div className='container'>
        <div className='canvas-item-container'>
          <Canvas status={status} setStatus={setStatus}/>
        </div>
  
        <div className='sample-items-container'>
          <SampleItems
            images={status.sampleImages}
            sampleType="sample"
            status={status}
            setStatus={setStatus}/>

          <div className='start-match-container'>
          </div>

          <div id='results-and-buttons'>
            <div id='matching-btn-container'>
              <button id='matching-btn'>Start Matching</button>
              <button id='matching-btn' onClick={clearInputs}>
                Clear Inputs
              </button>
            </div>

            <SampleItems
              images={status.resultImages}
              sampleType="results"
              status={status}
              setStatus={setStatus}/>
          </div>

 
        </div>
      </div>
    </>
  );
}

export default App;
