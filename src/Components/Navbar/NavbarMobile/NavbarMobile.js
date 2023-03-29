import React, {useState, useRef} from "react";
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
                            <li id='nav-content-home'
                                className={activeAction === 'home'? 'active item': 'item'}
                                onClick={()=>changeActiveAction('home')}>
                                Home
                            </li>

                            <li id='nav-content-how-it-works'
                                className={activeAction === 'how-it-works'? 'active item': 'item'}
                                onClick={()=>changeActiveAction('how-it-works')}>
                                How It Works
                            </li>

                            <li id='nav-content-how-to-test-it'
                                className={activeAction === 'how-to-test-it'? 'active item': 'item'}
                                onClick={()=>changeActiveAction('how-to-test-it')}>
                                How to Test It
                            </li>

                            <li id='nav-content-test-it'
                                className={activeAction === 'test-it'? 'active item': 'item'}
                                onClick={()=>changeActiveAction('test-it')}>
                                Test It
                            </li>

                            <li id='nav-content-contact-info'
                                className={activeAction === 'contact-info'? 'active item': 'item'}
                                onClick={()=>changeActiveAction('contact-info')}>
                                Contact Info
                            </li>
                        </ul>
                    </div> : ""
            }
        </div>
    )
}

export default NavbarMobile;