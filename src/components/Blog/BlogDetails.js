import React from 'react'
import classes from './Blog.css'
import { connect } from 'react-redux'
import moment from 'moment'
import { Redirect } from 'react-router-dom'

const blogDetails = (props) => {
    console.log(props)
    const { blog, auth }=props;
    if(!auth.uid) return <Redirect to='/signin'/>
    if(blog){
        return (
            <div className={classes.BlogDetails}>
                <div>
                    <h5>{blog.title}</h5>
                </div>
                <div>
                    <p>{blog.content}</p>
                </div>
                <hr/>
                <div className={classes.BlogDetailsFooter}>
                    <p>Created by {blog.authorFirstName} {blog.authorLastName}</p>
                    <p>{moment(blog.createdAt.toDate()).calendar()}</p>
                </div>
            </div>
        )
    }else{
        return(
            <div>
                <p>Loading...</p>
            </div>
        )
    }
}


//we pass the props as second argument
const mapStateToProps = (state, ownProps) => {
    console.log(state)
    const id = ownProps.match.params.id; 
    const blogs = state.firestore.data.blogs;
    const blog = blogs ? blogs[id] : null;
    return{
        blog: blog,
        blogs: state.firestore.data.blogs,
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(blogDetails)