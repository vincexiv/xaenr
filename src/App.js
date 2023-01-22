import './App.css';
import React, {useState} from 'react'
import CanvasItem from './Components/Canvas Item/CanvasItem';
import CanvasItemBtn from './Components/Canvas Item/CanvasItemBtn';

function App() {
  const [activeCanvas, setActiveCanvas] = useState(1)

  return (
    <div className='container main-body'>
      <div className='canvas-items'>
        {
          [1, 2, 3].map(index => {
            return (
              <div className='item-and-btn'>
                  <CanvasItem key={index} index={index}/>
                  <CanvasItemBtn key={index} index={index} activeCanvas={activeCanvas} setActiveCanvas={setActiveCanvas}/>
              </div>
            )
          })
        }
      </div>

      <div className='canvas-items'>
        {
          [4, 5, 6].map(index => {
            return (
                <CanvasItem key={index} index={index}/>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
