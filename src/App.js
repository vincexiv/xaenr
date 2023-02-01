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
          <div className='sample-options'>
            <h1>Sample Options</h1>
            <Options buttonName="Clear Sample" options={["default", 1, 2, 3]}/>
            <Options buttonName="Next Sample" options={["default", 1, 2, 3]}/>
          </div>

          <form className='match-options'>
            <h1>Match Options</h1>
            <div className='match-option-item'>
              <input type="checkbox" id="use_plain_dataframes" name="use_plain_dataframes" value="use_plain_dataframes"/>
              <label for="vehicle1">Use plain dataframes</label>
            </div>
            <div className='match-option-item'>
              <input type="checkbox" id="include_distance" name="include_distance" value="include_distance"/>
              <label for="vehicle2">Include distance</label>
            </div>
            <div className='match-option-item'>
              <input type="checkbox" id="match_by_perspective" name="match_by_perspective" value="match_by_perspective"/>
              <label for="vehicle3">Match by perspective</label>
            </div>
            <div className='match-option-item'>
              <input type="checkbox" id="match_by_association" name="match_by_association" value="match_by_association"/>
              <label for="vehicle3">Match by association</label>
            </div>
            <input type="submit" value="Save Changes"/>
          </form>
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
