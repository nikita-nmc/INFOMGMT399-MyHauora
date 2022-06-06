    // Import the functions you need from the SDKs you need
    import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";
    import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-analytics.js";
    import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged} from "https://www.gstatic.com/firebasejs/9.8.1/firebase-auth.js";
    import { getFirestore, collection, getDocs, query, where, doc } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-firestore.js"

    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries

    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {

      apiKey: "AIzaSyBnY54hU2rQL1ug9Paz6cRMwuNLaAVwBrQ",

      authDomain: "myhauora.firebaseapp.com",

      projectId: "myhauora",

      storageBucket: "myhauora.appspot.com",

      messagingSenderId: "387271610528",

      appId: "1:387271610528:web:4cfd06cca2c244fd46b9c5",

      measurementId: "G-NGRR8L4ZB5"

    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    const auth = getAuth(app);
    const db = getFirestore(app);


//auth state listener
auth.onAuthStateChanged(user => {
    if (user) {
        setReport(user);
        console.log('User logged in')
} else {
    console.log('User logged out')
}
}
    )


const setReport = user => {
let stringID = user.uid + "";
let iframeBox = document.querySelector("#iframeLink");
const q = query(collection(db, "Reports"), where("UID", "==", stringID));

getDocs(q).then((snapshot) => {
  if (snapshot.docs.length === 0) {
    document.getElementById("iframeDiv").innerHTML = "<div></div><h1> Your medical provider has not enabled this feature yet.</h1>"
  }
  snapshot.docs.forEach(doc => {
    console.log(doc.data().UID === null);
    iframeBox.setAttribute("src", doc.data().PowerBI)
  })
  })
}

  
// logout
const logout = document.querySelector('#logoutbutton');
console.log("clicked");
logout.addEventListener('click', (e) => {
  e.preventDefault();
  auth.signOut();
  window.location.href = "index.html";
  console.log("user signed out")
});


const clearNotification1 = document.querySelector('#closebutton1');
const clearNotification2 = document.querySelector('#closebutton2');
const clearNotification3 = document.querySelector('#closebutton3');

clearNotification1.addEventListener('click', (e) => {
  document.getElementById('not1').innerHTML="";
})


clearNotification2.addEventListener('click', (f) => {
  document.getElementById('not2').innerHTML="";
})


clearNotification3.addEventListener('click', (g) => {
  document.getElementById('not3').innerHTML="";
})


const settingsForm = document.querySelector('#userSave');    

settingsForm.addEventListener('click', (e) => {
    e.preventDefault();

    //get user info
    const username = document.getElementById("usernameInput").value;
    const modal = document.querySelector('#userDisplay');
    modal.innerHTML = username;

});



