// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXAJqI4j8xCd9M8GQ2qZYeFFEBuxY8oN8",
  authDomain: "doctorq-auth.firebaseapp.com",
  projectId: "doctorq-auth",
  storageBucket: "doctorq-auth.appspot.com",
  messagingSenderId: "636175233233",
  appId: "1:636175233233:web:a7471dd71c0a559b8f55f0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
console.log(auth);

//----- New Registration code start
document.getElementById("signup").addEventListener("click", function () {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  //For new registration
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
      alert("Registration successfull!!");
      openLogged();
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
      console.log(errorMessage);
      alert(error);
    });
});
//----- End

function openLogged() {
  window.location = "/index.html";
}
