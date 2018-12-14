// import React, { Component } from 'react'
// import classes from './CreateBlog.css'
// import { storage } from '../fbConfig/fbConfig'
// import { connect } from 'react-redux'
// import { getFirestore } from 'redux-firestore';
// import { uploadFile } from '../Store/Actions/BlogActions'
// import { compose } from 'redux'
// import { firestoreConnect } from 'react-redux-firebase'


// class FileUpload extends Component {
//     // state = {
//     //     selectedFile: null,
//     //     url: ''
//     // }
//     state = {
//         selectedFile: null,
//         name: ''
//     }

//      selectFile = (event) => {
//          this.setState({
//              selectedFile: event.target.files[0]
//          })
//     }

//     addName = (event) => {
//         this.setState({
//             name: event.target.value
//         })
//     }

//     uploadFile = (event) => {
//         event.preventDefault();
//         console.log(this.state)
//         this.props.uploadFile(this.state)
//     }

//     render() {
//         const {files} = this.props;
//         return(
//             <div className={classes.FileUpload}>
//                 <h5>Upload Photos</h5>
//                 <input type='file' onChange={this.selectFile}/>
//                 <input type='text' onChange={this.addName}/>
//                 <button onClick={this.uploadFile}>upload</button>
//                 <p>{this.state.url}</p>
//             </div>
//         )
//     }
// }

// const mapDispatchToProps = (dispatch) =>{
//     return{
//         uploadFile: (file) => dispatch(uploadFile(file))
//     }
// }

// const mapStateToProps = (state) => {
//     console.log(state)
//     return{
//         files: state.firestore.ordered.files
//     }
// }

// export default compose(
//     connect(mapStateToProps, mapDispatchToProps),
//     firestoreConnect([
//         {collection: 'files'}
//     ])
//     )(FileUpload)