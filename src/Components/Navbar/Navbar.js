import React, {useState} from 'react'
import NavbarDesktop from './NavbarDesktop/NavbarDesktop'
import './Navbar.css'

function Navbar({activeAction, setActiveAction}){

    return (
        <NavbarDesktop activeAction={activeAction} setActiveAction={setActiveAction} />
    )
}

export default Navbar