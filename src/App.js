import './App.css';
import React, {useState} from 'react'
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';

function App() {
  const [activeAction, setActiveAction] = useState('home')

  return (
    <>
      <Navbar activeAction={activeAction} setActiveAction={setActiveAction}/>
      <Home />
    </>
  );
}

export default App;
