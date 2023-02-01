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
                            {
                                sampleType === "sample"? (
                                    <>
                                        <img
                                        id={`${sampleType}-${index}`}
                                        className="sample-item"
                                        src={image}
                                        alt="no image added yet. Please paint something in the canvas then click 'add'"/>

                                        <SampleItemBtn
                                        index={index}
                                        status={status}
                                        setStatus={setStatus}/>
                                    </>
                                ): (
                                    <img
                                    id={`${sampleType}-${index}`}
                                    className="sample-item"
                                    src={image}
                                    alt="After matching, your results will appear here"/> 
                                )
                            }
                    </div>
                    )
                })
            }
      </div>
    )
}

export default SampleItems