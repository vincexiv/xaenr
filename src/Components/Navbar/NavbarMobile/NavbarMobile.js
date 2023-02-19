import React, {useState} from "react";
import "./NavbarMobile.css"

function NavbarMobile({activeAction, setActiveAction}){
    const [showNavbarOptions, setShowNavbarOptions] = useState(false)

    function handleCheckboxClick(e){
        setShowNavbarOptions(e.target.checked)
    }



    return (
        <div id="navbar-mobile">
            <label for="check">
                <input type="checkbox" id="check" onClick={handleCheckboxClick}/> 
                <span></span>
                <span></span>
                <span></span>
            </label>

            {
                showNavbarOptions ? 
                    <div id="navbar-mobile-options">
                        <ul className="actions">
                            <li id='nav-content-home'
                                className={activeAction == 'home'? 'active item': 'item'}
                                onClick={()=>setActiveAction('home')}>
                                Home
                            </li>

                            <li id='nav-content-how-it-works'
                                className={activeAction == 'how-it-works'? 'active item': 'item'}
                                onClick={()=>setActiveAction('how-it-works')}>
                                How It Works
                            </li>

                            <li id='nav-content-how-to-test-it'
                                className={activeAction == 'how-to-test-it'? 'active item': 'item'}
                                onClick={()=>setActiveAction('how-to-test-it')}>
                                How to Test It
                            </li>

                            <li id='nav-content-contact-info'
                                className={activeAction == 'contact-info'? 'active item': 'item'}
                                onClick={()=>setActiveAction('contact-info')}>
                                Contact Info
                            </li>
                        </ul>
                    </div> : ""
            }
        </div>
    )
}

export default NavbarMobile;