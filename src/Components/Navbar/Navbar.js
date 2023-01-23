import React from 'react'
import './Navbar.css'

function Navbar(){
    return (
        <nav>
            <div className='nav-content'>
                <h1 className='company-name'>xaenr</h1>
                <div className='actions'>
                    <p id='how-it-works' className='item'>How It Works</p>
                    <p id='how-to-test-it' className='item'>How to Test It</p>
                    <p id='contact-info' className='item'>Contact Info</p>
                </div>
            </div>
        </nav>
    )
}

export default Navbar