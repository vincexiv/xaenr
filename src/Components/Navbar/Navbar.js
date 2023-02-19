import React, {useEffect, useState} from 'react'
import NavbarDesktop from './NavbarDesktop/NavbarDesktop'
import NavbarMobile from './NavbarMobile/NavbarMobile'
import './Navbar.css'

function Navbar({activeAction, setActiveAction}){
    const [navbarMobile, setNavbarMobile] = useState(smallScreen())

    useEffect(()=>{
        window.addEventListener('resize', ()=>setNavbarMobile(smallScreen()))
    })

    function smallScreen(){
        return window.innerWidth < 930 || window.innerHeight/window.innerWidth >= 1;
    }

    return (
        <nav>
            <div className='nav-content'>
                <h1
                    className='company-name'
                    onClick={()=>setActiveAction('home')}>
                    xaenr
                </h1>

                {
                    navbarMobile ? 
                    <NavbarMobile activeAction={activeAction} setActiveAction={setActiveAction} /> :
                    <NavbarDesktop activeAction={activeAction} setActiveAction={setActiveAction} />
                }
                </div>
        </nav>
    )
}

export default Navbar