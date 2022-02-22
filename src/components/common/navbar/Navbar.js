import React from 'react'
import { Link } from 'react-router-dom'

import './NavBar.css'

const NavBar = () => {

    return(
       <section className='navbar'>
            <section className='navbar-item'>
                <Link to="/">Home</Link>
            </section>
            <section className='navbar-item'>
                <Link to="/">About</Link>
            </section>
       </section>
    )

}

export default NavBar