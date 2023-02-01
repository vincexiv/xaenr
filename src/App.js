import './App.css';
import React, {useState} from 'react'
import Navbar from './Components/Navbar/Navbar';
import Canvas from './Components/Canvas/Canvas'
import Options from './Components/Options/Options';
import SampleItems from './Components/SampleItems/SampleItems';

function App() {
  const [status, setStatus] = useState({
    activeSample: null,
    sampleImages: [1, 2, 3],
    resultImages: [1, 2],
    painting: false
  })

  function togglePainting(){
    setStatus(status => ({...status, painting: !status.painting}))
  }

  return (
    <>
      <Navbar />

      <div className='container'>
        {
          status.painting? (
            <div className='canvas-item-container'>
              <Canvas />
            </div>
          ) : (
            <div className='options-container'>
              <Options />
            </div>
          )
        }


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
              <button id='matching-btn' onClick={togglePainting}>
                {
                  status.painting? "More Options" : "Go to Canvas"
                }
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
