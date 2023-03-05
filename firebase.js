// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
import { getDatabase, set, ref, update, onValue } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut} from "https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js";
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

signup.addEventListener('click', (e) => {

  var username = document.getElementById('username').value;
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;

      set(ref(database, 'users/' + user.uid), {
        username: username,
        email: email
      })
      alert("User Info has been created!");
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      alert(errorMessage);
      // ..
    });
});

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
        alert("User Signed In");
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      // ...
    } else {
        alert("User Signed Out");
      // User is signed out
      // ...
    }
  });