// code of firebase for fetching data of users given
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyC5A1JzftcqYMdLuKLvCVKUaceK_hZFGe4",
  authDomain: "patient-e9843.firebaseapp.com",
  projectId: "patient-e9843",
  storageBucket: "patient-e9843.appspot.com",
  messagingSenderId: "34651306879",
  appId: "1:34651306879:web:41873e682398c11b91b84a",
});

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

const saveData = () => {
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email").value;
  const selectedValue = document.querySelector(
    '.gender[name="gender"]:checked'
  );
  const age = document.getElementById("age").value;
  const address = document.getElementById("address").value;

  db.collection("Patient-info")
    .add({
      name: name,
      phone: phone,
      email: email,
      gender: selectedValue,
      age: age,
      address: address,
    })
    .then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
      console.log("Error adding document: ", error);
    });
};

function openPage() {
  window.location = "/payment details/index.html";
}
