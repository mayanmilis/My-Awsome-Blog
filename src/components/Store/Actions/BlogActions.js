export const createBlog = (blog) => {
    return (dispatch, getState, {getFirestore, getFirebase}) => {
        //make async call to database
        const firestore = getFirestore();
        //add the profile data from firebase to the blogs collection
        const profile = getState.firebase.profile;
        const authorId = getState.firebase.auth.uid;
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