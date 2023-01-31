// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBMC12bcnmTtzAMXZocb6X6MaL3gwOfNfA",
    authDomain: "genius-car-client-e79f8.firebaseapp.com",
    projectId: "genius-car-client-e79f8",
    storageBucket: "genius-car-client-e79f8.appspot.com",
    messagingSenderId: "1022629838971",
    appId: "1:1022629838971:web:658899ab563856b556a2de"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;