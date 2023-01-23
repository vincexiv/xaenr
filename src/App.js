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
              <div key={`item-and-btn-${index}`} className={activeCanvas == index? 'active item-and-btn': 'item-and-btn'}>
                  <CanvasItem  index={index}/>
                  <CanvasItemBtn index={index} activeCanvas={activeCanvas} setActiveCanvas={setActiveCanvas}/>
              </div>
            )
          })
        }
      </div>

      <div className='canvas-items'>
        {
          [4, 5, 6].map(index => {
            return (
              <div key={`item-and-btn-${index}`} className='item-and-btn'>
                <CanvasItem index={index}/>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
