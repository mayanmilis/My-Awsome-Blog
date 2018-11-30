import React from 'react'
import SignInLinks from './SignedInLinks'
import SignOutLinks from './SignedOutLinks'
import classes from './Navbar.css'
import { NavLink } from 'react-router-dom'
import {connect } from 'react-redux'


const navbar = (props) => {
    const {profile, auth} = props;
    const links = auth.uid ? <SignInLinks profile={profile}/> : <SignOutLinks/>
    return (
        <nav className={classes.Navbar}>
        <NavLink to="/" className={classes.Main}>My Awsome Blog</NavLink>
        {links}
        </nav>
    )
}

const mapStateToProps = (state) => {
    return {
        profile: state.firebase.profile,
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(navbar)