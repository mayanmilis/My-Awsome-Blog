import React from 'react'
import classes from './Blog.css'
import moment from 'moment'

const blogSummary = ({blog}) => {
    return (
        <div className={classes.BlogSummary}>
        <div>
        <h5>{blog.title}</h5>
        </div>
            <div>
                <p>{blog.content}</p>
            </div>
            <hr/>
            <div type='footer'>
                <p>Created by {blog.firstName} {blog.lastName}</p>
                <p>{moment(blog.createdAt.toDate()).calendar()}</p>
            </div>
        </div>
    )
}

export default blogSummary