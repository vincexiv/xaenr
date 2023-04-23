import React from "react";
import Button from "../../Components/Button/Button";
import "./Home.css"

function Home({setActiveAction}){
  function goTo(page){
    setActiveAction(page)
  }

  return (
    <div id="home" className="container">
      <div className="home-content">
        <h3 id="hello-there">Hello there,</h3>
        <h1 id="welcome-to-xaenr">Welcome to Xaenr</h1>
        <p>There's nothing much to show for now</p>
        <p>See <span className="link" onClick={()=>goTo('how-it-works')}>how it works</span></p>
        <p><span className="link" onClick={()=>goTo('intuition')}>intuition</span></p>
        <p><span className="link" onClick={()=>goTo('how-to-test-it')}>how to test it</span></p>
        <p><span className="link" onClick={()=>goTo('sample-test-results')}>sample results</span></p>
        <p><span className="link" onClick={()=>goTo('test-it')}>test it</span></p>
        <div id="btn-container">
          <Button classList={["get-started-btn"]} message="Get Started" onClick={()=>goTo('get-started')}/>
        </div>
      </div>
    </div>
  )
}

export default Home