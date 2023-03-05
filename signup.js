// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
import { getDatabase, set, ref, onValue } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js";
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
        email: email,
        level: 1
      })

      const usernameRef = ref(database, 'users/' + user.uid + '/username');
      onValue(usernameRef, (snapshot) => {
        const data = snapshot.val();
        do {
          onValue(usernameRef, (snapshot) => {
            if (data != null) {
              window.location.replace("login.html");
            }
          });
        } while (data == null);  

      });
      
      alert("User Info has been created!");
      setTimeout(function () {

      }, 1000);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      alert(errorMessage);
      // ..
    });
});