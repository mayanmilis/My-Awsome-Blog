

export const createBlog = (blog) => {
    return (dispatch, getState, {getFirestore, getFirebase}) => {
        //make async call to database
        const firestore = getFirestore();
        //add the profile data from firebase to the blogs collection
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;
        //create a collection in firestore
        firestore.collection('blogs').add({
            ...blog,
            authorFirstName: profile.firstName, //from firebase.profile 
            authorLastName: profile.lastName, //from firebas.profile
            authorId: authorId, //from firebase.auth.uid
            createdAt: new Date()
        }).then(() => {
        dispatch({ type: 'CREATE_BLOG', blog}) //dispach
        }).catch((err) => {      //dispatch error
            dispatch({type: 'CREATE_BLOG_ERROR', err})
        }) 
    }
}

export const uploadFile = (file) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        //make async call
        const firebase = getFirebase();
        const firestore = getFirestore();
        let fileUrl = null;
        //create storage reference
        const storageRef = firebase.storage().ref(`files/${file.name}`);
        //put the image inside the storage folder
        storageRef.put(file);
        //get the url into setState
        firebase.storage().ref('files').child(file.name).getDownloadURL().then(url => {
            return fileUrl = url
        })
        //make a collection on firestore
        .then(() => {
            firestore.collection('files').doc().set({
                fileName: file.name,
                fileUrl: fileUrl,
            })
        }).then(()=> {
            //dispatch
        dispatch({ type: 'UPLOAD_SUCCESS'})
        }).catch((err) => {
            dispatch({ type: 'UPLOAD_ERROR', err})
        })
        
    }
}
