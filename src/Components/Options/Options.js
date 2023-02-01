import React from "react";
import SampleOptions from "./SampleOptions/SampleOptions";

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
                <div className='match-option-item'>
                    <input type="checkbox" id="use_plain_dataframes" name="use_plain_dataframes" value="use_plain_dataframes"/>
                    <label htmlFor="vehicle1">Use plain dataframes</label>
                </div>
                <div className='match-option-item'>
                <input type="checkbox" id="include_distance" name="include_distance" value="include_distance"/>
                <label htmlFor="vehicle2">Include distance</label>
                </div>
                <div className='match-option-item'>
                <input type="checkbox" id="match_by_perspective" name="match_by_perspective" value="match_by_perspective"/>
                <label htmlFor="vehicle3">Match by perspective</label>
                </div>
                <div className='match-option-item'>
                <input type="checkbox" id="match_by_association" name="match_by_association" value="match_by_association"/>
                <label htmlFor="vehicle3">Match by association</label>
                </div>
                <input type="submit" value="Save Changes"/>
          </form>
        </>
    )
}

export default Options