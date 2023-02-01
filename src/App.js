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
    resultImages: [1, 2, 3]
  })

  return (
    <>
      <Navbar />

      <div className='container'>
        <div className='canvas-item-container'>
          <Canvas />
        </div>

        <div className='options-container display-hidden'>
          <Options />
        </div>

        <div className='sample-items-container'>
          <SampleItems
            images={[1, 2, 3]}
            sampleType="sample"
            status={status}
            setStatus={setStatus}/>

          <div className='start-match-container'>
          </div>

          <SampleItems
            images={[1, 2, 3]}
            sampleType="results"
            status={status}
            setStatus={setStatus}/>
        </div>
      </div>
    </>
  );
}

export default App;
