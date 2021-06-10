import firebase from 'firebase';
require('@firebase/firestore')


   // Your web app's Firebase configuration
   var firebaseConfig = {
    apiKey: "AIzaSyCnb8HRz0juoGaXAqnBhAyOB7iRT3ePFcY",
    authDomain: "barter-app-2df97.firebaseapp.com",
    projectId: "barter-app-2df97",
    storageBucket: "barter-app-2df97.appspot.com",
    messagingSenderId: "693697052257",
    appId: "1:693697052257:web:8b64c7eaf36f40983b7420"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
