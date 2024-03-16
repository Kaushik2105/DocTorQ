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
console.log(app);

//----- Login code start
document.getElementById("login").addEventListener("click", function () {
  var email = document.getElementById("login_email").value;
  var password = document.getElementById("login_password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
      alert(user.email + " Login successfull!!!");
      openPage();
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
      alert(errorMessage);
    });
});

//goes to selected page
function openPage() {
  var gotoPage = document.getElementById("s-opt");
  var selectValue = gotoPage.value;

  if (selectValue) {
    window.open(selectValue, "_blank");
  }
}
