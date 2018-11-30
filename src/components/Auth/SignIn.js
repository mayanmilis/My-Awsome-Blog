import React, { Component } from 'react'
import classes from './Auth.css'
import { connect } from 'react-redux'
import { signIn } from '../Store/Actions/AuthActions'
import { Redirect } from 'react-router-dom'

class SignIn extends Component {
    state = {
        email: '',
        password: ''
    }

    handelchange = (event) => {
        this.setState ({
            [event.target.id]: event.target.value 
        })
    }

    handelSubmit = (event) => {
        event.preventDefault();
        console.log(this.props)
        this.props.signIn(this.state)
        this.props.history.push('/')
        
    }

    render() {
        const {auth, authError} = this.props;
        if(auth.uid) return <Redirect to='/'/>
        return(
            <div className={classes.Container}>
                <form onSubmit={this.handelSubmit}>
                    <h5>Sign-In</h5>
                    <div>
                        <p htmlFor='email'>Email</p>
                        <input type='text' id='email' placeholder='Enter Email' onChange={this.handelchange} />
                    </div>
                    <div>
                        <p htmlFor='password'>Password</p>
                        <input type='password' id='password' placeholder='Enter Password' onChange={this.handelchange} />
                    </div>
                    <div>
                        <button>Sign-In</button>
                    </div>
                    {authError ? <p>{authError}</p> : null}
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        authError: state.auth.authError
    }
}

const mapDispatchToProps = (dispatch) => {
    
    return {
        signIn: (creds) => dispatch(signIn(creds))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)