import React, { Component } from 'react'
import classes from './CreateBlog.css'
import { connect } from 'react-redux'
import { createBlog } from '../Store/Actions/BlogActions'
// import { uploadFile } from '../Store/Actions/BlogActions'
import { Redirect } from 'react-router-dom'
// import FileUpload from './FileUpload'

class CreateBlog extends Component {
    state = {
        title: '',
        content: '',
        
    }

    handelchange = (event) => {
        this.setState ({
            [event.target.id]: event.target.value 
        })
    }

    selectFile = (event) => {
        this.setState({
            selectedFile: event.target.files[0],
            url: 'hey'
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
                    <input type='file' onChange={this.selectFile}/>
                    <button onClick={this.uploadFile}>upload</button>
                        <button>Create</button>
                    </div>
                </form>
             </div>
                     {/* <div className={classes.FileUpload}>
                        <FileUpload/>
                    </div> */}
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
        // uploadFile: (file) => dispatch(uploadFile(file))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateBlog)