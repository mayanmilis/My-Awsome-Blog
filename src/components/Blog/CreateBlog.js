import React, { Component } from 'react'
import classes from '../Auth/Auth.css'
import { connect } from 'react-redux'
import { createBlog } from '../Store/Actions/BlogActions'

class CreateBlog extends Component {
    state = {
        title: '',
        content: ''
    }

    handelchange = (event) => {
        this.setState ({
            [event.target.id]: event.target.value 
        })
    }

    handelSubmit = (event) => {
        event.preventDefault();
        console.log(this.props)
        this.props.createBlog(this.state)
    }

    render() {
        return(
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
                        <button>Create</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
       
    }
}

const mapDispatchToProps = (dispatch) => {
    console.log()
    return{
        createBlog: (blog) => dispatch(createBlog(blog))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateBlog)