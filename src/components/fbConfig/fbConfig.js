import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyD6_8a64cfuQl5B7o-JBXQcTALwkhVywh0",
    authDomain: "my-awsome-blog-79c66.firebaseapp.com",
    databaseURL: "https://my-awsome-blog-79c66.firebaseio.com",
    projectId: "my-awsome-blog-79c66",
    storageBucket: "",
    messagingSenderId: "508905045361"
  };
  firebase.initializeApp(config);
  firebase.firestore().settings({ timestampsInSnapshots: true });

  export default firebase