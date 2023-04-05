import React, {useState} from "react";
import UploadImage from "../../Components/UploadImage/UploadImage";
import "./GetStarted.css"

function GetStarted({setActiveAction}){
    const [results, setResults] = useState({available: true, data: {}})

    return (
        <div id="get-started" className={results.available ? "container results-available": "container"}>
            <div id="get-started-items">
                <div id="uploaded-images-and-upload-btn">
                    <div id="uploaded-images">

                    </div>
                    <UploadImage setResults={setResults} />
                </div>
                <div id="results">
                    <h1>Results</h1>
                    <p>A user will be able to upload image obtained from samples. 
                        This could be obtained through, for instance, images of 
                        blood samples taken using scanning electron
                        microscope. We know that blood has different "fingerprints" 
                        in terms of the concentration of different biomolecules, 
                        blood cells, and even microoganisms. We'll be taking advantage 
                        of this to diagnose presence of certain diseases. By comparing 
                        uploaded images against those considered positive of certain 
                        diseases. Blood sample characteristics vary widely. One sample 
                        obtained from a user may differ considerably from another sample 
                        taken in virtually the same time in terms of concentration 
                        of certain blood cells. Therefore, we allow for multiple images to be 
                        uploaded. They will also be compared with multiple other images where 
                        owners were tested and found positive of certain diseases.
                    </p>
                    <p>
                        The results shown here will include what parts of the uploaded image 
                        were mapped onto what parts of the images that exist in our database. 
                        This will aid in determining why a test has been considered positive 
                        or not
                    </p>
                    <p>
                        For now, we are still on prototype stage. You can test the algorithm
                        <span onClick={()=>setActiveAction("test-it")}> here</span>. 
                        Also, you can find sample result for testing the 
                        prototype <span onClick={()=>setActiveAction("sample-test-results")}> 
                        in this page</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default GetStarted;