import * as firebase from "firebase";

var config = {
    apiKey: "AIzaSyAXujgxlIAWpDSpjR-txtUoUWX-XLubHuM",
    authDomain: "umyu-4a1d9.firebaseapp.com",
    databaseURL: "https://umyu-4a1d9.firebaseio.com",
    projectId: "umyu-4a1d9",
    storageBucket: "umyu-4a1d9.appspot.com",
    messagingSenderId: "77612250104",
    appId: "1:77612250104:web:23b959a426edf3cb47dc0d",
    measurementId: "G-GCZ3TYBDEP"
  };

  if(!firebase.apps.length){
      firebase.initializeApp(config)
  }

  const db = firebase.firestore()

  export {
      db, firebase
  }