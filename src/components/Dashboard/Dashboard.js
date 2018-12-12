import React, { Component } from 'react'
import BlogList from '../Blog/BlogList'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import { Redirect } from 'react-router-dom'
import Notifications from './Notifications'
import classes from '../Blog/Blog.css'

class Dashboard extends Component {

    render() {
        const {blogs, auth, notifications} = this.props
        if(!auth.uid) return <Redirect to='/signin'/>
        return(
            <div>
                <div className={classes.Notifications}>
                    <Notifications notifications={notifications}/>
                </div>
                <div className={classes.BlogSummaryContainer}>
                    <div>
                    <h5 id='containerHeader'>Recetly Uploaded</h5>
                    </div>
                    <div>
                    <BlogList blogs={blogs}/>
                    </div>
                    <div>
                    <p id='containerFooter'>See full list </p>
                </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        blogs: state.firestore.ordered.blogs,
        auth: state.firebase.auth,
        notifications: state.firestore.ordered.notifications
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'blogs', orderBy: ['createdAt','desc'] },
        { collection: 'notifications',orderBy:['time', 'desc'], limit: 3}
        
    ])
)(Dashboard)