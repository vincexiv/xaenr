import './App.css';
import React, {useEffect, useState} from 'react'
import { Routes, Route, useNavigate, useLocation} from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import HowItWorks from './Pages/HowItWorks/HowItWorks';
import HowToTestIt from './Pages/HowToTestIt/HowToTestIt';
import TestIt from './Pages/TestIt/TestIt';
import ContactInfo from './Pages/ContactInfo/ContactInfo';
import GetStarted from './Pages/GetStarted/GetStarted';
import SampleTestResults from './Pages/SampleTestResults/SampleTestResults';
import Intuition from './Pages/Intuition/Intuition';

function App() {
  const navigate = useNavigate()
  const location = useLocation()
  const [activeAction, setActiveAction] = useState(location.pathname || localStorage.getItem('activeAction') || 'home')
  localStorage.setItem('activeAction', activeAction)

  useEffect(()=>{
    navigate(activeAction)
  }, [activeAction, navigate])

  return (
    <>
      <Navbar activeAction={activeAction} setActiveAction={setActiveAction}/>
      <Routes>
          <Route exact path="/home" element={<Home setActiveAction={setActiveAction}/>} />
          <Route exact path="/how-it-works" element={<HowItWorks />} />
          <Route exact path="/intuition" element={<Intuition />} />
          <Route exact path="/how-to-test-it" element={<HowToTestIt />} />
          <Route exact path="/test-it" element={<TestIt setActiveAction={setActiveAction}/>} />
          <Route exact path="/get-started" element={<GetStarted setActiveAction={setActiveAction}/>} />
          <Route exact path="/contact-info" element={<ContactInfo />} />
          <Route exact path="/sample-test-results" element={<SampleTestResults setActiveAction={setActiveAction} />} />
          <Route path="/" element={<Home setActiveAction={setActiveAction} />} />
      </Routes>
    </>
  );
}

export default App;
