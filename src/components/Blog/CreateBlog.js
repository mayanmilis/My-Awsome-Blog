import React, { Component } from 'react'
import classes from './CreateBlog.css'
import { connect } from 'react-redux'
import { createBlog } from '../Store/Actions/BlogActions'
// import { uploadFile } from '../Store/Actions/BlogActions'
import { Redirect } from 'react-router-dom'
// import { uploadFile } from '../Store/Actions/BlogActions'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'

class CreateBlog extends Component {
    state = {
        title: '',
        content: '',
        selectedFile: null,
        name: ''
        
    }

    handelchange = (event) => {
        this.setState ({
            [event.target.id]: event.target.value 
        })
    }

    selectFile = (event) => {
        this.setState({
            selectedFile: event.target.files[0]
        })
   }

   addName = (event) => {
       this.setState({
           name: event.target.value
       })
   }

    handelSubmit = (event) => {
        event.preventDefault();
        console.log(this.props)
        this.props.createBlog(this.state)
        this.props.history.push('/')
    }

    render() {
        const {auth} = this.props;
        if(!auth.uid) return <Redirect to='/signin'/>
        return(
         <div>
            <div className={classes.Container}>
                <form onSubmit={this.handelSubmit}>
                    <h5>Create New Blog</h5>
                    <div>
                        <p htmlFor='title'>Title</p>
                        <input type='text' id='title' placeholder='Title' onChange={this.handelchange} />
                    </div>
                    <div>
                        <p htmlFor='content'>Content</p>
                        <textarea type='text' id='content' placeholder='Enter Your Story...' onChange={this.handelchange} />
                    </div>
                    <div>
                        <p>Add Picture</p>
                 <input type='file' onChange={this.selectFile}/>
                 <input type='text' onChange={this.addName} placeholder="Add picture title"/>
                        <button>Create</button>
                    </div>
                </form>
             </div>
             
         </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
       auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    console.log()
    return{
        createBlog: (blog) => dispatch(createBlog(blog)),
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateBlog)