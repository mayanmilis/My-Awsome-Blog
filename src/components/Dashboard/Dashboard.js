import React, { Component } from 'react'
import BlogList from '../Blog/BlogList'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import { Redirect } from 'react-router-dom'

class Dashboard extends Component {

    render() {
        const {blogs, auth} = this.props
        if(!auth.uid) return <Redirect to='/signin'/>
        return(
            <div>
                <BlogList blogs={blogs}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        blogs: state.firestore.ordered.blogs,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'blogs', orderBy: ['createdAt','desc'] }
        
    ])
)(Dashboard)