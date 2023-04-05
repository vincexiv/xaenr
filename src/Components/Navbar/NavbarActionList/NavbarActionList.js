import React from "react";

function NavbarActionList({activeAction, onClick}){
    return (
        <>
            <li id='nav-content-home'
                className={activeAction === 'home'? 'active item': 'item'}
                onClick={()=>onClick('home')}>
                Home
            </li>

            <li id='nav-content-get-started'
                className={activeAction === 'get-started'? 'active item': 'item'}
                onClick={()=>onClick('get-started')}>
                Get Started
            </li>

            {/* <li id='nav-content-how-it-works'
                className={activeAction === 'how-it-works'? 'active item': 'item'}
                onClick={()=>setActiveAction('how-it-works')}>
                How It Works
            </li>

            <li id='nav-content-how-to-test-it'
                className={activeAction === 'how-to-test-it'? 'active item': 'item'}
                onClick={()=>setActiveAction('how-to-test-it')}>
                How to Test It
            </li>

            <li id='nav-content-test-it'
                className={activeAction === 'test-it'? 'active item': 'item'}
                onClick={()=>setActiveAction('test-it')}>
                Test It
            </li> */}

            <li id='nav-content-contact-info'
                className={activeAction === 'contact-info'? 'active item': 'item'}
                onClick={()=>onClick('contact-info')}>
                Contact Info
            </li>
        </>
    )
}

export default NavbarActionList