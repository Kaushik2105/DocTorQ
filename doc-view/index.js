//navbar items
const navbarToggler = document.querySelector('.navbar-toggler');
    const closeBton = document.querySelector('.close-button');
    const navbarCollapse = document.querySelector('.navbar-collapse');

    navbarToggler.addEventListener('click', function() {
      navbarCollapse.classList.add('show');
      closeBton.style.display = 'block';
    });

    closeBton.addEventListener('click', function() {
      navbarCollapse.classList.remove('show');
      closeBton.style.display = 'none';
    });

//appointment details
/* imports configurations */
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getFirestore, doc, getDoc, getDocs, onSnapshot, collection } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

const firebaseConfig = {
    // Your Firebase project configuration
    apiKey: "AIzaSyC5A1JzftcqYMdLuKLvCVKUaceK_hZFGe4",
    authDomain: "patient-e9843.firebaseapp.com",
    projectId: "patient-e9843",
    storageBucket: "patient-e9843.appspot.com",
    messagingSenderId: "34651306879",
    appId: "1:34651306879:web:41873e682398c11b91b84a"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
console.log(db);

// Rest of your code...
//this part fills the table 
var stdNo = 0;
var tbody = document.getElementById('tbody1');

function AddItemToTable(name, age, email, phone, address) {
    var trow = document.createElement('tr');
    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    var td3 = document.createElement('td');
    var td4 = document.createElement('td');
    var td5 = document.createElement('td');
    var td6 = document.createElement('td');

    td1.innerHTML = ++stdNo;
    td2.innerHTML = name;
    td3.innerHTML = age;
    td4.innerHTML = email;
    td5.innerHTML = phone;
    td6.innerHTML = address;

    trow.appendChild(td1);
    trow.appendChild(td2);
    trow.appendChild(td3);
    trow.appendChild(td4);
    trow.appendChild(td5);
    trow.appendChild(td6);

    tbody.appendChild(trow);
}

function AddAllItemsToTable(PatientDocsList) {
    stdNo = 0;
    tbody.innerHTML = "";
    PatientDocsList.forEach(element => {
        console.log(element.name);
        console.log(element.address);
        AddItemToTable(element.name, element.age, element.email, element.phone, element.address)
    });
}

// get all data
async function GetAllDataOnce() {
    try {
        const querySnapshot = await getDocs(collection(db, "Patient-info"));

        var patients = [];

        querySnapshot.forEach(doc => {
            patients.push(doc.data());
        });

        AddAllItemsToTable(patients);
    } catch (error) {
        console.log(error);
    }

}

async function GetAllDataRealtime() {
    try {
        const dbRef = await getDocs(collection(db, "Patient-info"));
        let patients = [];
        console.log(1);
        console.log(dbRef);
        dbRef.forEach((doc) => {
            console.log(doc.data());
            patients.push(doc.data());
        })
        AddAllItemsToTable(patients)
        console.log(3);
    } catch (error) {
        console.log(error);
    }

}

window.onload = GetAllDataRealtime;