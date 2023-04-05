import React from "react";
import NavbarActionList from "../NavbarActionList/NavbarActionList";
import "./NavbarDesktop.css"


function NavbarDesktop({activeAction, setActiveAction}){

    return (
        <ul id="navbar-desktop" className='actions'>
            <NavbarActionList activeAction={activeAction} onClick={setActiveAction}/>
        </ul>
    )
}

export default NavbarDesktop;