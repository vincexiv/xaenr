import React from "react";
import "./Home.css"

function Home({setActiveAction}){
  function goToHowItWorks(){
    setActiveAction('how-it-works')
  }

  return (
    <div id="home" className="container">
      <div className="home-content">
        <h3 id="hello-there">Hello there,</h3>
        <h1 id="welcome-to-xaenr">Welcome to Xaenr</h1>
        <p>There's nothing much to show for now</p>
        <p>See <span className="link" onClick={goToHowItWorks}>how it works</span></p>
      </div>
    </div>
  )
}

export default Home