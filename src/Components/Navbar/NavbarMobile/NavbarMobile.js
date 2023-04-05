import React, {useState, useRef} from "react";
import NavbarActionList from "../NavbarActionList/NavbarActionList";
import "./NavbarMobile.css"

function NavbarMobile({activeAction, setActiveAction}){
    const [showNavbarOptions, setShowNavbarOptions] = useState(false)
    const checkBox = useRef()

    function handleCheckboxClick(e){
        setTimeout(()=>setShowNavbarOptions(e.target.checked), 200)
    }

    function changeActiveAction(newActiveAction){
        setActiveAction(newActiveAction)
        checkBox.current.click()
    }

    return (
        <div id="navbar-mobile">
            <label htmlFor="check">
                <input type="checkbox" id="check" ref={checkBox} onClick={handleCheckboxClick}/> 
                <span></span>
                <span></span>
                <span></span>
            </label>

            {
                showNavbarOptions ? 
                    <div id="navbar-mobile-options">
                        <ul className="actions">
                            <NavbarActionList activeAction={activeAction} onClick={changeActiveAction}/>
                        </ul>
                    </div> : ""
            }
        </div>
    )
}

export default NavbarMobile;