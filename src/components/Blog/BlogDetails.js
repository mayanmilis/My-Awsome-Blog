import React from 'react'
import classes from './Blog.css'

const blogDetails = () => {
    return (
        <div className={classes.BlogDetails}>
            <div>
                <h5>Title</h5>
            </div>
            <div>
                <p>content</p>
            </div>
            <hr/>
            <div className={classes.BlogDetailsFooter}>
                <p>Created by</p>
                <p>Time</p>
            </div>
        </div>
    )
}

export default blogDetails