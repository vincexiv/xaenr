import React from "react";
import SampleItemBtn from "./SampleItemBtn/SampleItemBtn";
import "./SampleItems.css"

function SampleItems({images, sampleType, status, setStatus, previousStatus}){
    return (
        <>
            {
                images.map((image, index) => {
                    return (
                    <div
                        id={`${sampleType}-item-and-btn-${index}`}
                        key={`item-and-btn-${index}`}
                        className={
                            (status.activeSample === index && sampleType === "sample") ?
                            'active sample-items-item-and-btn': 
                            (index === 0 && sampleType === "results") ?
                            'active sample-items-item-and-btn ':
                            'sample-items-item-and-btn'
                        }>
                            {
                                sampleType === "sample"? (
                                    <>
                                        <img
                                        id={`${sampleType}-${index}`}
                                        className="sample-items-sample-item"
                                        src={image}
                                        alt="no image added yet. Please paint something in the canvas then click 'add'"/>

                                        <SampleItemBtn
                                        index={index}
                                        status={status}
                                        setStatus={setStatus}
                                        previousStatus={previousStatus}/>
                                    </>
                                ): (
                                    <img
                                    id={`${sampleType}-${index}`}
                                    className="sample-items-sample-item"
                                    src={image}
                                    alt="After matching, your results will appear here"/> 
                                )
                            }
                    </div>
                    )
                })
            }
      </>
    )
}

export default SampleItems