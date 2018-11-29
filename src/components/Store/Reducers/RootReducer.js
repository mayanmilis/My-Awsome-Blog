import { combineReducers } from 'redux'
import AuthReducer from './AuthReducer'
import BlogReducer from './BlogReducer'
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
    auth: AuthReducer,
    blog: BlogReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
})

export default rootReducer