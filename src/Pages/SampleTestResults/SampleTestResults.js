import React from "react";
import { useNavigate } from "react-router-dom";
import "./SampleTestResults.css"


function SampleTestResults({setActiveAction}){
    return (
        <div id="sample-test-results" className="container">
            <h1>Sample Results</h1>
            <p>Here are sample results obtained by doodling stuff on
                <span onClick={()=>setActiveAction('test-it')}> this page</span>
            </p>
            <p>
                I encouraged doodling absolutely random stuff to prove that the 
                algorithm wasn't trained on any data. It simply matches one image 
                with another that has the closest match to it from a group of images. 
                It does this by first assuming that the pieces obtained after 
                breaking down the two images are similar. You can check the page I 
                dedicated to explain <span onClick={()=>setActiveAction('how-it-works')}> 
                how the algorithm works </span> to find out more. That being said, after 
                breaking down the images, it tries to map the pieces from one image to the 
                pieces obtained in another. An image is considered the best match if after 
                mapping, pieces that were close in the original image are mapped into a 
                region in another image that makes those pieces close again.
            </p>

            <ul id="sample-result-list">
                <li>
                    <p>Which of the remaining two look like the first one?</p>
                    <img src="/Images/image-1.png"/>
                </li>
                <li>
                    <p>Which of the remaining two look like the second one?</p>
                    <img src="/Images/image-2.png"/>
                </li>
                <li>
                    <p>Which of the remaining two look like the last one?</p>
                    <img src="/Images/image-3.png"/>
                </li>
            </ul>
        </div>
    )
}

export default SampleTestResults;