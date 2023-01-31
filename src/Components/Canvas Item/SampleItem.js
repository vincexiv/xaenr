import React, {useEffect, useRef} from "react";
import "./SampleItem.css"

function SampleItem({index}){

    return (
        <div id={`sample-item-${index}`} className="sample-item"></div>
    )
}

export default SampleItem