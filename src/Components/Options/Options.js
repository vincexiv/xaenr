import React from "react";
import SampleOptions from "./SampleOptions/SampleOptions";
import MatchOption from "./MatchOption/MatchOption"
import "./Options.css"

function Options(){
    return (
        <div id="options">
            <div className="option-items">
                <div className='sample-options'>
                    <h1>Sample Options</h1>
                    <SampleOptions buttonName="Clear Sample" options={["auto", "first", "second", "third"]}/>
                    <SampleOptions buttonName="Next Sample" options={["auto", "first", "second", "third"]}/>
                </div>

                <form className='match-options'>
                    <h1>Match Options</h1>
                    <MatchOption optionLabel="Use plain dataframes" />
                    <MatchOption optionLabel="Include distance" />
                    <MatchOption optionLabel="Match by perspective" />
                    <MatchOption optionLabel="Match by association" />
                    <input id='save-changes-btn' type="submit" value="Save Changes"/>
                </form>
            </div>
        </div>
    )
}

export default Options