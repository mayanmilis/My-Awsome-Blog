import React from 'react'
import BlogSummary from './BlogSummary'
import classes from './Blog.css'

const blogList = ({blogs}) => {
    return (
        <div className={classes.BlogList}>
            <ul>
                {blogs && blogs.map(blog => {
                    return(
                        <BlogSummary blog={blog} key={blog.id}/>
                    ) 
                })}
            </ul>
        </div>
    )
}

export default blogList