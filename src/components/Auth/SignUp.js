import React, { Component } from 'react'
import classes from './Auth.css'
import { connect } from 'react-redux'
import { signUp } from '../Store/Actions/AuthActions'
import { Redirect } from 'react-router-dom'

class SignUp extends Component {
    state = {
        firstName: '',
        lastName: '',
        username: '',
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
        console.log(this.state)
        this.props.signUp(this.state)
    }

    render() {
        const {auth, authError} = this.props;
        if(auth.uid) return <Redirect to='/'/>
        return(
            <div className={classes.Container}>
                <form onSubmit={this.handelSubmit}>
                    <h5>Sign-Up</h5>
                    <div>
                        <p htmlFor='firstName'>First Name</p>
                        <input type='text' id='firstName' placeholder='Enter First Name' onChange={this.handelchange}/>
                    </div>
                    <div>
                        <p htmlFor='lastName'>Last Name</p>
                        <input type='text' id='lastName' placeholder='Enter Last Name' onChange={this.handelchange}/>
                    </div>
                    <div>
                        <p htmlFor='username'>Username</p>
                        <input type='text' id='username' placeholder='Enter Username' onChange={this.handelchange}/>
                    </div>
                    <div>
                        <p htmlFor='email'>Email</p>
                        <input type='text' id='email' placeholder='Enter Email' onChange={this.handelchange}/>
                    </div>
                    <div>
                        <p htmlFor='password'>Password</p>
                        <input type='password' id='password' placeholder='Enter Password' onChange={this.handelchange}/>
                    </div>
                    <div>
                        <button>Sign-Up</button>
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
        signUp: (newUser) => dispatch(signUp(newUser))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)