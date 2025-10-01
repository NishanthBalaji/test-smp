import React from 'react'
import { HashLink } from 'react-router-hash-link'

import { useNavigate } from 'react-router-dom'

import '../styles/Navbar.css'

const Navbar = ({ navTitle, navTo, hashLink, color }) => {

    const navigate = useNavigate()


    return (
        <div className='navbar' style={{ backgroundColor: color }}>

            {hashLink && <HashLink to={hashLink} smooth>く</HashLink>}

            {navTo && <button style={{ backgroundColor: color }} onClick={() => navigate(navTo)}>
                く
            </button>}


            <p>{navTitle}</p>
        </div>
    )
}

export default Navbar