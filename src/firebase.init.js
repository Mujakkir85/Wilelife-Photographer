// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBNtPHtI9vgeyXOAWMCQN-kfCqT-hQInWA",
    authDomain: "wildlife-photographr-7be05.firebaseapp.com",
    projectId: "wildlife-photographr-7be05",
    storageBucket: "wildlife-photographr-7be05.appspot.com",
    messagingSenderId: "727316182847",
    appId: "1:727316182847:web:8712cabd46093f50bb458a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;