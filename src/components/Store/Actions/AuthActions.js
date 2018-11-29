export const signIn = (credentials) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        //make async call
        const firebase = getFirebase();
        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(() => {
         //dispatch
        dispatch({ type: 'SIGNIN_SUCCESS' })
        }).catch((err) => {
            dispatch({ type: 'SIGNIN_ERROR', err})
        })
    }
}

export const signOut = () => {
    return (dispatch, getState, {getFirebase}) => {
        //make async all
        const firebase = getFirebase();
        firebase.auth().signOut().then(() => {
        //dispatch
        dispatch({ type: 'SIGNOUT_SUCCEESS' }) 
        })
       
    }
}

export const signUp = (newUser) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        //make async call
        const firebase = getFirebase();
        const firestore = getFirestore();

        //create user in firebase
        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
            //create users collection in firestore with the same uid as in firebase
        ).then((resp) => {
            firestore.collection('users').doc(resp.user.uid).set({
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                initials: newUser.firstName[0] + newUser.lastName[0]
            })
        }).then(()=> {
            //dispatch
        dispatch({ type: 'SIGNUP_SUCCESS'})
        }).catch((err) => {
            dispatch({ type: 'SIGNUP_ERRPR', err})
        })
    }
}