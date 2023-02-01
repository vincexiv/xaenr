import './App.css';
import React, {useState} from 'react'
import SampleItem from './Components/Canvas Item/SampleItem';
import SampleItemBtn from './Components/Canvas Item/SampleItemBtn';
import Navbar from './Components/Navbar/Navbar';
import Canvas from './Components/Canvas/Canvas'
import Options from './Components/Options/Options';

function App() {
  const [activeSample, setActiveSample] = useState(1)

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

        <div className='sample-items-body'>
          <div className='sample-items'>
            {
              [1, 2, 3].map(index => {
                return (
                  <div key={`item-and-btn-${index}`} className={activeSample ===+ index? 'active item-and-btn': 'item-and-btn'}>
                      <SampleItem  index={index}/>
                      <SampleItemBtn index={index} activeSample={activeSample} setActiveSample={setActiveSample}/>
                  </div>
                )
              })
            }
          </div>

          <div className='sample-items'>
            {
              [4, 5, 6].map(index => {
                return (
                  <div key={`item-and-btn-${index}`} className={index === 4 ? 'active item-and-btn': 'item-and-btn'}>
                    <SampleItem index={index}/>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
