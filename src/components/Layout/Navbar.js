import React from 'react'
import SignInLinks from './SignedInLinks'
import SignOutLinks from './SignedOutLinks'

const navbar = () => {
    return (
        <div>
            <SignInLinks/>
            <SignOutLinks/>
        </div>
    )
}

export default navbar