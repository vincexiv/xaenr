import React from "react";
import "./NavbarDesktop.css"


function NavbarDesktop({activeAction, setActiveAction}){

    return (
        <nav>
            <div className='nav-content'>
                <h1
                    className='company-name'
                    onClick={()=>setActiveAction('home')}>
                    xaenr
                </h1>
                
                <div className='actions'>
                    <p id='nav-content-home'
                        className={activeAction == 'home'? 'active item': 'item'}
                        onClick={()=>setActiveAction('home')}>
                        Home
                    </p>

                    <p id='nav-content-how-it-works'
                        className={activeAction == 'how-it-works'? 'active item': 'item'}
                        onClick={()=>setActiveAction('how-it-works')}>
                        How It Works
                    </p>

                    <p id='nav-content-how-to-test-it'
                        className={activeAction == 'how-to-test-it'? 'active item': 'item'}
                        onClick={()=>setActiveAction('how-to-test-it')}>
                        How to Test It
                    </p>

                    <p id='nav-content-contact-info'
                        className={activeAction == 'contact-info'? 'active item': 'item'}
                        onClick={()=>setActiveAction('contact-info')}>
                        Contact Info
                    </p>

                </div>
            </div>
        </nav>
    )
}

export default NavbarDesktop;