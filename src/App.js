import './App.css';
import React, {useState, useRef} from 'react'
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';

function App() {
  const defaultState = {
    activeSample: null,
    sampleImages: [1, 2, 3],
    resultImages: [1, 2],
    painting: true
  }
  const previousStatus = useRef(defaultState)
  const [status, setStatus] = useState(defaultState)

  return (
    <>
      <Navbar />
      <Home defaultState={defaultState} status={status} setStatus={setStatus} previousStatus={previousStatus}/>
    </>
  );
}

export default App;
