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



//auth state listener
auth.onAuthStateChanged(user => {
    if (user) {

        console.log('User logged in')

} else {

    console.log('User logged out')
}
}
    )


const setReport = data => {
  if (data.length) {
  }
}


const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = loginForm['login-email'].value;                     //user email
    const password = loginForm['login-password'].value;               //user password

    signInWithEmailAndPassword(auth, email, password).then(cred => {  //login function
        const modal = document.querySelector('#modal-login');
        window.location.href = "dashboard-notification.html"

    }).catch(function(error) {                                        //error handler
    let code = error.code;
    let message = error.message;

    if (code == 'auth/invalid-email') {
      alert('Invalid Email');   
  } else if (code === 'auth/wrong-password') {
      alert('Incorrect Password');
  } else {
      alert(message);
  }
});
    });



