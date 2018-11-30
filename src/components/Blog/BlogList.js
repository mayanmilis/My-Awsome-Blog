import React from 'react'
import BlogSummary from './BlogSummary'
import classes from './Blog.css'
import { Link } from 'react-router-dom'

const blogList = ({blogs}) => {
    return (
        <div className={classes.BlogList}>
            <ul>
                {blogs && blogs.map(blog => {
                    return(
                        <Link to={'/blog/' + blog.id} key={blog.id}>
                        <BlogSummary blog={blog} />
                        </Link>
                    ) 
                }).slice(0,3)}
            </ul>
        </div>
    )
}

export default blogList