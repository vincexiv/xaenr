import React from "react";
import "./NavbarDesktop.css"


function NavbarDesktop({activeAction, setActiveAction}){

    return (
        <ul id="navbar-desktop" className='actions'>
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

            <li id='nav-content-test-it'
                className={activeAction == 'test-it'? 'active item': 'item'}
                onClick={()=>setActiveAction('test-it')}>
                Test It
            </li>

            <li id='nav-content-contact-info'
                className={activeAction == 'contact-info'? 'active item': 'item'}
                onClick={()=>setActiveAction('contact-info')}>
                Contact Info
            </li>
        </ul>
    )
}

export default NavbarDesktop;