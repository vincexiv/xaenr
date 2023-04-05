import React, {useState} from "react";
import UploadImage from "../../Components/UploadImage/UploadImage";
import "./GetStarted.css"

function GetStarted(){
    const [results, setResults] = useState({available: false, data: {}})

    return (
        <div id="get-started" className={results.available ? "container results-available": "container"}>
            <UploadImage setResults={setResults}/>
            <div id="results">

            </div>
        </div>
    )
}

export default GetStarted;