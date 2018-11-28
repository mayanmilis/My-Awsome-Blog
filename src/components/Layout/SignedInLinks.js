import React from 'react'
import { NavLink } from 'react-router-dom'

const signedInLinks = () => {
    return (
        <ul>
            <li><NavLink to='/'>Create New Blog</NavLink></li>
            <li><NavLink to='/'>Ign-Out</NavLink></li>
            <li><NavLink to='/'>Initials</NavLink></li>
        </ul>
    )
}

export default signedInLinks