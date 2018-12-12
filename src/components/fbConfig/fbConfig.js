import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyD6_8a64cfuQl5B7o-JBXQcTALwkhVywh0",
    authDomain: "my-awsome-blog-79c66.firebaseapp.com",
    databaseURL: "https://my-awsome-blog-79c66.firebaseio.com",
    projectId: "my-awsome-blog-79c66",
    storageBucket: "my-awsome-blog-79c66.appspot.com",
    messagingSenderId: "508905045361"
  };
  firebase.initializeApp(config);
  firebase.firestore().settings({ timestampsInSnapshots: true });

  const storage = firebase.storage();

  export {
    storage, firebase as default
  }