import './App.css';
import React, {useEffect, useState} from 'react'
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import { Routes, Route, useNavigate} from 'react-router-dom';

function App() {
  const navigate = useNavigate()
  const [activeAction, setActiveAction] = useState('home')

  useEffect(()=>{
    navigate(activeAction)
  }, [activeAction])

  return (
    <>
      <Navbar activeAction={activeAction} setActiveAction={setActiveAction}/>
      <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
