import React, { Component } from 'react'
import classes from './CreateBlog.css'
import { storage } from '../fbConfig/fbConfig'
import { connect } from 'react-redux'
import { getFirestore } from 'redux-firestore';


class FileUpload extends Component {
    state = {
        selectedFile: null,
        url: ''
    }

     selectFile = (event) => {
         this.setState({
             selectedFile: event.target.files[0],
             url: ""
         })
        
    }

    uploadFile = (event) => {
        //create storage reference
        const image = this.state.selectedFile;
        const storageRef = storage.ref(`images/${image.name}`);
        //put the image inside the storage folder
        storageRef.put(image);

        const firestore = getFirestore();
        //get the url into setState
        storage.ref('images').child(image.name).getDownloadURL().then(url => {
            this.setState({url: url})
        })
        //make a collection on firestore
        .then(() => {
            firestore.collection('images').doc().set({
                imageName: image.name,
                imageUrl: this.state.url,

            })
        })
        
    }


    render() {
        return(
            <div className={classes.FileUpload}>
                <h5>Upload Photos</h5>
                <input type="file" onChange={this.selectFile}/>
                <button onClick={this.uploadFile}>upload</button>
                <p>{this.state.url}</p>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return{
        firebase: state.firebase
    }
}

export default connect(mapStateToProps)(FileUpload)