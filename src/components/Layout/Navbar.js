import React from 'react'
import SignInLinks from './SignedInLinks'
import SignOutLinks from './SignedOutLinks'
import classes from './Navbar.css'
import { NavLink } from 'react-router-dom'


const navbar = () => {
    return (
        <nav className={classes.Navbar}>
        <NavLink to="/" className={classes.Main}>My Awsome Blog</NavLink>
        
        
           <div>
            <SignInLinks/>
            </div>
            <div>
            <SignOutLinks/>
            </div>

        </nav>
    )
}

export default navbar