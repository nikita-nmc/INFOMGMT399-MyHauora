
    // Import the functions you need from the SDKs you need
    import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";
    import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-analytics.js";
    import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged} from "https://www.gstatic.com/firebasejs/9.8.1/firebase-auth.js";
    import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-firestore.js"

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


//signup
const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', (e) => {
   e.preventDefault();

   //get user info
    const email = signupForm['signup-email'].value;
    const password = signupForm['signup-password'].value;

    console.log(email, password);
    //sign up the user
    createUserWithEmailAndPassword(auth, email, password).then((cred) => {
        console.log(cred);
        const modal = document.querySelector('#modal-signup');
        window.location.href = "dashboard-notification.html"

    })

});
