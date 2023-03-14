import React from "react";

function ToThreePixels({fourNumberArray}){
    const array1 = [fourNumberArray[0], fourNumberArray[1], fourNumberArray[2]].sort()
    const array2 = [fourNumberArray[1], fourNumberArray[2], fourNumberArray[3]].sort()
    const array3 = [fourNumberArray[2], fourNumberArray[3], fourNumberArray[0]].sort()
    const array4 = [fourNumberArray[3], fourNumberArray[0], fourNumberArray[1]].sort()

    return (
        <div>
            <p>{array1.join(", ")}</p>
            <p>{array2.join(", ")}</p>
            <p>{array3.join(", ")}</p>
            <p>{array4.join(", ")}</p>
        </div>
    )
}

export default ToThreePixels;