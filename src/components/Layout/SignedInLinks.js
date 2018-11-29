import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../Store/Actions/AuthActions'

const signedInLinks = (props) => {
    return (
        <ul>
            <li><NavLink to='/create'>Create New Blog</NavLink></li>
            <li><NavLink onClick={props.signOut} to='/'>Sign-Out</NavLink></li>
            <li type='initials'><NavLink to='/' >Initials</NavLink></li>
        </ul>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(signedInLinks)