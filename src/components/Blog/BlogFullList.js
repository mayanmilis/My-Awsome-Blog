import React from 'react'
import classes from './Blog.css'
import { connect } from 'react-redux'
import moment from 'moment'
import { Redirect } from 'react-router-dom'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import { Link } from 'react-router-dom'

const blogFullList = (props) => {
    console.log(props)
    const { blogs, auth }=props;
    if(!auth.uid) return <Redirect to='/signin'/>
        return (
            <div className={classes.BlogFullList}>
            <h5>Stories List</h5>
                <ul>
                    {blogs && blogs.map(blog => {
                        return(
                            
                            <li key={blog.id}>
                                <Link to={'/blog/' + blog.id} >
                                {blog.title}
                                </Link>
                                <p>
                                    Added on {moment(blog.createdAt.toDate()).calendar()}
                                </p>
                                </li>
                            
                            
                        ) 
                    })}
                </ul>
            </div>
        )
}


//we pass the props as second argument
const mapStateToProps = (state) => {
    return{
        blogs: state.firestore.ordered.blogs,
        auth: state.firebase.auth,
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'blogs', orderBy: ['createdAt','desc']}
    ])
    )(blogFullList)
