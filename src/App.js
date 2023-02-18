import './App.css';
import React, {useEffect, useState} from 'react'
import { Routes, Route, useNavigate} from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import HowItWorks from './Pages/HowItWorks/HowItWorks';
import HowToTestIt from './Pages/HowToTestIt/HowToTestIt';
import ContactInfo from './Pages/ContactInfo/ContactInfo';

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
          <Route exact path="how-it-works" element={<HowItWorks />} />
          <Route exact path="how-to-test-it" element={<HowToTestIt />} />
          <Route exact path="contact-info" element={<ContactInfo />} />
          <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
