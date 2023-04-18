// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
import { getDatabase, ref, update } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-database.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js";
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

login.addEventListener('click', (e) => {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            const dt = new Date();

            //update database
            update(ref(database, 'users/' + user.uid), {
                last_login: dt,
            })

            alert("Log In Successfully!");
            window.location.replace("dashboard.html");
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            alert(errorMessage);
        });

});