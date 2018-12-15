import React from 'react'
import classes from './Blog.css'
import { connect } from 'react-redux'
import moment from 'moment'
import { Redirect } from 'react-router-dom'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'

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
                <h5>Photos</h5>
                <div className={classes.FilesContainer}>
                
                <div className={classes.File}>
                    <a href={blog.fileUrl}><img src={blog.fileUrl} /></a>
                <div>
                    <p>{blog.fileDescription}</p>
                </div>
                    </div>
                {/* <ul>
                    {blogs.map( item => {
                        return(
                            <div className={classes.File}>
                            <li key={item.key}><a href={item.fileUrl}><img src={item.fileUrl} /></a></li>
                            <div>
                            <p>Description</p>
                            </div>
                            </div>
                        )
                    })}
                </ul> */}
                
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
    console.log(ownProps)
    const id = ownProps.match.params.id; 
    const blogs = state.firestore.data.blogs;
    const blog = blogs ? blogs[id] : null;
    return{
        blog: blog,
        blogs: state.firestore.data.blogs,
        auth: state.firebase.auth,
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'blogs'}
    ])
    )(blogDetails)