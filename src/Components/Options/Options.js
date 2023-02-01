import React from "react";
import SampleOptions from "./SampleOptions/SampleOptions";
import MatchOption from "./MatchOption/MatchOption"

function Options(){
    return (
        <>
            <div className='sample-options'>
                <h1>Sample Options</h1>
                <SampleOptions buttonName="Clear Sample" options={["default", 1, 2, 3]}/>
                <SampleOptions buttonName="Next Sample" options={["default", 1, 2, 3]}/>
            </div>

            <form className='match-options'>
                <h1>Match Options</h1>
                <MatchOption optionLabel="Use plain dataframes" />
                <MatchOption optionLabel="Include distance" />
                <MatchOption optionLabel="Match by perspective" />
                <MatchOption optionLabel="Match by association" />
                <input type="submit" value="Save Changes"/>
          </form>
        </>
    )
}

export default Options