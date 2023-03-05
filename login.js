// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
import { getDatabase, ref, update } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-database.js";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js";
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

login.addEventListener('click',(e) => {
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    const dt = new Date();

    update(ref(database, 'users/' + user.uid), {
      last_login: dt,
    })

    alert("Log In Successfully!");
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

    alert(errorMessage);
  });

});

const user = auth.currentUser;
onAuthStateChanged(auth, (user) => {
  if (user) {
    window.location.href("index.html");
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    // ...
  } else {
    // User is signed out
    // ...
  }
});