// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-database.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js";
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
const user = auth.currentUser;
const db = getDatabase();

onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
    //read username from database
    const usernameRef = ref(db, 'users/' + uid + '/username');
    const levelRef = ref(db, 'users/' + uid + '/level');
    onValue(usernameRef, (snapshot) => {
      const data = snapshot.val();
      document.getElementById("usergreet").innerHTML = "Welcome " + data + "!";
    });
    onValue(levelRef, (snapshot) => {
      const data = snapshot.val();
      document.getElementById("level").innerHTML = "Level: " + data;
      if(data == 1){
        document.getElementById("l1").style.color = "blue"
        document.getElementById("l1").addEventListener("click", function() {
            window.location.replace("https://www.youtube.com/watch?v=9xya0oO5WgA&ab_channel=Shir%C5%8DSagisu-Topic");
        });
      }
      else if(data == 2){
        document.getElementById("l1").style.color = "green"
        document.getElementById("l2").style.color = "blue"
        document.getElementById("l2").addEventListener("click", function() {
            window.location.replace("https://www.youtube.com/watch?v=NNn9pnytT7M&ab_channel=JoeJackson-Topic");
        });
      }
      else if(data == 3){
        document.getElementById("l1").style.color = "green"
        document.getElementById("l2").style.color = "green"
        document.getElementById("l3").style.color = "blue"
      }
      else if(data == 4){
        document.getElementById("l1").style.color = "green"
        document.getElementById("l2").style.color = "green"
        document.getElementById("l3").style.color = "green"
        document.getElementById("l4").style.color = "blue"
      }
      else if(data == 5){
        document.getElementById("l1").style.color = "green"
        document.getElementById("l2").style.color = "green"
        document.getElementById("l3").style.color = "green"
        document.getElementById("l4").style.color = "green"
        document.getElementById("l5").style.color = "blue"
      }
      else if(data == 6){
        document.getElementById("l1").style.color = "green"
        document.getElementById("l2").style.color = "green"
        document.getElementById("l3").style.color = "green"
        document.getElementById("l4").style.color = "green"
        document.getElementById("l5").style.color = "green"
        document.getElementById("l6").style.color = "blue"
      }
      else if(data == 7){
        document.getElementById("l1").style.color = "green"
        document.getElementById("l2").style.color = "green"
        document.getElementById("l3").style.color = "green"
        document.getElementById("l4").style.color = "green"
        document.getElementById("l5").style.color = "green"
        document.getElementById("l6").style.color = "green"
        document.getElementById("l7").style.color = "blue"
      }
      else if(data == 8){
        document.getElementById("l1").style.color = "green"
        document.getElementById("l2").style.color = "green"
        document.getElementById("l3").style.color = "green"
        document.getElementById("l4").style.color = "green"
        document.getElementById("l5").style.color = "green"
        document.getElementById("l6").style.color = "green"
        document.getElementById("l7").style.color = "green"
        document.getElementById("l8").style.color = "blue"
      }
      else{
        document.getElementById("l1").style.color = "green"
        document.getElementById("l2").style.color = "green"
        document.getElementById("l3").style.color = "green"
        document.getElementById("l4").style.color = "green"
        document.getElementById("l5").style.color = "green"
        document.getElementById("l6").style.color = "green"
        document.getElementById("l7").style.color = "green"
        document.getElementById("l8").style.color = "green"
        document.getElementById("l9").style.color = "blue"
      }
    });
  }
});