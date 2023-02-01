import React from "react";
import SampleItemBtn from "./SampleItemBtn/SampleItemBtn";
import "./SampleItems.css"

function SampleItems({images, sampleType, activeSample, setActiveSample}){
    return (
        <div id='sample-items'>
            {
                images.map((image, index) => {
                    return (
                    <div
                        key={`item-and-btn-${index}`}
                        className={activeSample ===+ index? 'active item-and-btn': 'item-and-btn'}>

                            <div
                                id={`${sampleType}-${index}`}
                                className="sample-item">
                                </div>

                            {
                                sampleType === "sample"? (
                                    <SampleItemBtn
                                    index={index}
                                    activeSample={activeSample}
                                    setActiveSample={setActiveSample}/>
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