// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-database.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDMEG6AYXdzY_ofi2Xid4hHGcdV9kHu4nM",
    authDomain: "entrep-101.firebaseapp.com",
    databaseURL: "https://entrep-101-default-rtdb.firebaseio.com",
    projectId: "entrep-101",
    storageBucket: "entrep-101.appspot.com",
    messagingSenderId: "550757236624",
    appId: "1:550757236624:web:1e2e89ee127c583cb7bd15"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth();

const user = auth.currentUser;
onAuthStateChanged(auth, (user) => {
    if (user) {
        const uid = user.uid;
        // ...
    } else {
        window.location.href("signupFIREBASE.html");
    }
});

logout.addEventListener('click', (e) => {
    const auth = getAuth();
    signOut(auth).then(() => {
        alert("Sign Out Successfully");
        // Sign-out successful.
    }).catch((error) => {
        alert("Error, Please try again");
        // An error happened.
    });

});