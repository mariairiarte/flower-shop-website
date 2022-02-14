import React from 'react'
import { Link } from 'react-router-dom'

import './Navbar.css'

const Navbar = () => {

    return(
       <section className='navbar'>
            <Link to="/">Home</Link>
            <Link to="/">About</Link>
       </section>
    )

}

export default Navbar