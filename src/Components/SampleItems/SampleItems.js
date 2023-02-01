import React from "react";
import SampleItemBtn from "./SampleItemBtn/SampleItemBtn";
import "./SampleItems.css"

function SampleItems({images, sampleType, status, setStatus}){
    return (
        <div id='sample-items'>
            {
                images.map((image, index) => {
                    return (
                    <div
                        key={`item-and-btn-${index}`}
                        className={
                            (status.activeSample === index && sampleType === "sample") ?
                            'active item-and-btn': 
                            (index === 0 && sampleType === "results") ?
                            'active item-and-btn ':
                            'item-and-btn'
                        }>

                            <img
                                id={`${sampleType}-${index}`}
                                className="sample-item"
                                src={image}
                                alt="sample"/>

                            {
                                sampleType === "sample"? (
                                    <SampleItemBtn
                                    index={index}
                                    status={status}
                                    setStatus={setStatus}/>
                                ) : ""
                            }

                    </div>
                    )
                })
            }
      </div>
    )
}

export default SampleItems