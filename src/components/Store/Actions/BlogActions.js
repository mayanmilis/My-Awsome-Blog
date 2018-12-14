export const createBlog = (blog) => {
    return (dispatch, getState, {getFirestore, getFirebase}) => {
        //make async call to database
        const firestore = getFirestore();
        const firebase = getFirebase();
        //add the profile data from firebase to the blogs collection
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;
        let fileUrl = null;
        const description = blog.name;
         //create storage reference
         const storageRef = firebase.storage().ref(`files/${blog.selectedFile.name}`);
         //put the image inside the storage folder
         storageRef.put(blog.selectedFile);
         //get the url into setState
         firebase.storage().ref('files').child(blog.selectedFile.name).getDownloadURL().then(url => {
             return fileUrl = url
         }).then(() => {
            firestore.collection('blogs').add({
                title: blog.title,
                content: blog.content,
                authorFirstName: profile.firstName, //from firebase.profile 
                authorLastName: profile.lastName, //from firebas.profile
                authorId: authorId, //from firebase.auth.uid,
                fileUrl: fileUrl,
                fileDescription: description,
                createdAt: new Date()
            }).then(() => {
            dispatch({ type: 'CREATE_BLOG', blog}) //dispach
            }).catch((err) => {      //dispatch error
                dispatch({type: 'CREATE_BLOG_ERROR', err})
            })
         })
        //create a collection in firestore
         
    }
}

// export const uploadFile = (file) => {
//     return (dispatch, getState, {getFirebase, getFirestore}) => {
//         //make async call
//         const firebase = getFirebase();
//         const firestore = getFirestore();
//         let fileUrl = null;
//         const description = file.name;
//         //create storage reference
//         const storageRef = firebase.storage().ref(`files/${file.selectedFile.name}`);
//         //put the image inside the storage folder
//         storageRef.put(file.selectedFile);
//         //get the url into setState
//         firebase.storage().ref('files').child(file.selectedFile.name).getDownloadURL().then(url => {
//             return fileUrl = url
//         })
//         //make a collection on firestore
//         .then(() => {
//             firestore.collection('files').doc().set({
//                 fileName: file.selectedFile.name,
//                 fileUrl: fileUrl,
//                 fileDescription: description

//             })
//         }).then(()=> {
//             //dispatch
//         dispatch({ type: 'UPLOAD_SUCCESS'})
//         }).catch((err) => {
//             dispatch({ type: 'UPLOAD_ERROR', err})
//         })
        
//     }
// }