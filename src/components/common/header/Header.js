import React from 'react'
import { Link } from 'react-router-dom'
import { NavBar } from '../../common'

import './Header.css'

const Header = () => {

    return (
        <div className='header'>
            <section className='header-logo'>
                <Link to="/">Dulces Pétalos</Link>
            </section>
            <section className='header-navbar'>
                <NavBar />
            </section> 
        </div>
    )
    
}

export default Header