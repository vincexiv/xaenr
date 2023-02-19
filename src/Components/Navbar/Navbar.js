import React, {useState} from 'react'
import NavbarDesktop from './NavbarDesktop/NavbarDesktop'
import NavbarMobile from './NavbarMobile/NavbarMobile'
import './Navbar.css'

function Navbar({activeAction, setActiveAction}){

    return (
        <nav>
            <div className='nav-content'>
                <h1
                    className='company-name'
                    onClick={()=>setActiveAction('home')}>
                    xaenr
                </h1>
                
                <NavbarMobile activeAction={activeAction} setActiveAction={setActiveAction} />
            </div>
        </nav>
    )
}

export default Navbar