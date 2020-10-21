import firebase from "firebase";
const config = {
    apiKey: "AIzaSyBJdaINksrY6_6gtS6xMMzRROUJ_9pIqM0",
    authDomain: "worldclicker-1a158.firebaseapp.com",
    databaseURL: "https://worldclicker-1a158.firebaseio.com",
    projectId: "worldclicker-1a158",
    storageBucket: "worldclicker-1a158.appspot.com",
    messagingSenderId: "141844872343",
    appId: "1:141844872343:web:6d0dab10b337697cbc7dd2",
    measurementId: "G-W0PESN5FCW"
  };
  // Initialize Firebase
  firebase.initializeApp(config);
  firebase.analytics();
export default config;