import './App.css';
import React, {useState} from 'react'
import Navbar from './Components/Navbar/Navbar';
import Canvas from './Components/Canvas/Canvas'
import Options from './Components/Options/Options';
import SampleItems from './Components/SampleItems/SampleItems';

function App() {
  const [activeSample, setActiveSample] = useState(null)

  return (
    <>
      <Navbar />

      <div className='container'>
        <div className='canvas-item-container'>
          <Canvas />
        </div>

        <div className='options-container'>
          <Options />
        </div>

        <div className='sample-items-container'>
          <SampleItems
            images={[1, 2, 3]}
            sampleType="sample"
            activeSample={activeSample}
            setActiveSample={setActiveSample}/>

          <SampleItems
            images={[1, 2, 3]}
            sampleType="results"
            activeSample={activeSample}
            setActiveSample={setActiveSample}/>
        </div>
      </div>
    </>
  );
}

export default App;
