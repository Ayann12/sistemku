import firebase from 'firebase'
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA6D1Lmh2PlznLsYG_6Csw7C4e33HhtmjM",
    authDomain: "sistemku-1d46f.firebaseapp.com",
    projectId: "sistemku-1d46f",
    storageBucket: "sistemku-1d46f.appspot.com",
    messagingSenderId: "671265252657",
    appId: "1:671265252657:web:4af4904b8330c9127c7c10"
};

// Initialize Firebase
const init = firebase.initializeApp(firebaseConfig);
export const authFB = init.auth();