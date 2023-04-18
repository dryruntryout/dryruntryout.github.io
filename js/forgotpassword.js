// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
import { getDatabase, ref, update } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-database.js";
import { getAuth, signInWithEmailAndPassword, signOut, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA8R0mRmt4R4SknJ9WHior8QukvH4JRcWk",
    authDomain: "entrep-101-test.firebaseapp.com",
    databaseURL: "https://entrep-101-test-default-rtdb.firebaseio.com",
    projectId: "entrep-101-test",
    storageBucket: "entrep-101-test.appspot.com",
    messagingSenderId: "1042607918270",
    appId: "1:1042607918270:web:d310c8614354cd866562ef",
    measurementId: "G-G43ZGKCQ3X"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth();

send.addEventListener('click', (e) => {
    const email = document.getElementById('email').value;
    sendPasswordResetEmail(auth, email)
        .then(() => {
            alert("Password Sent!");
            // Password reset email sent!
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert("Account is not in the server");
        });
})


onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        // ...
    } else {
        // User is signed out
        // ...
    }
});