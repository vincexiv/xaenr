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
        <p>
          We are building a one-shot image recognition algorithm that is explainable by design.
          So far, we've almost completed the first stage, which involved testing on random doodles and MNIST
          digits. The next stage will involve scaling it so that it can work with bigger images.
        </p>
        <p>
          The project will be available for contribution soon. To get acquainted with what we've 
          accomplished so far, visit the links provided below
        </p>
        <ul>
          <li>
            <p><span className="link" onClick={()=>goTo('how-it-works')}>how it works</span></p>
          </li>
          {/* <li>
            <p><span className="link" onClick={()=>goTo('intuition')}>intuition behind it</span></p>
          </li> */}
          <li>
            <p><span className="link" onClick={()=>goTo('how-to-test-it')}>how to test it</span></p>
          </li>
          {/* <li>
            <p><span className="link" onClick={()=>goTo('sample-test-results')}>sample results</span></p>
          </li>
          <li>
            <p><span className="link" onClick={()=>goTo('test-it')}>test it</span></p>
          </li> */}
        </ul>
        <div id="btn-container">
          <Button classList={["get-started-btn"]} message="Get Started" onClick={()=>goTo('how-it-works')}/>
        </div>
      </div>
    </div>
  )
}

export default Home