import React, {useState} from "react";
import UploadImage from "../../Components/UploadImage/UploadImage";
import "./GetStarted.css"

function GetStarted(){
    const [results, setResults] = useState({available: false, data: {}})

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
                    <p>A user will be able to upload image obtained from samples 
                        This could be those ones obtained from scanning electron
                        microscope
                    </p>
                </div>
            </div>
        </div>
    )
}

export default GetStarted;