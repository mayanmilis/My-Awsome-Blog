import React from 'react'
import { NavLink } from 'react-router-dom'

const signedOutLinks = () => {
    return (
        <ul>
            <li><NavLink to='/'>Sign-In</NavLink></li>
            <li><NavLink to='/'>Sign-Up</NavLink></li>
        </ul>
    )
}

export default signedOutLinks