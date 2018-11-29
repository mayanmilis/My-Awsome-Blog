import React, { Component } from 'react'
import BlogList from '../Blog/BlogList'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'

class Dashboard extends Component {

    render() {
        const {blogs} = this.props
        
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
        blogs: state.firestore.ordered.blogs
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'blogs'}
        
    ])
)(Dashboard)