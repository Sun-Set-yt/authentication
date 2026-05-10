console.log("🔥 connected");

//setting up firebase with our website
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDp_NHuDUAbombE232ElUZBtyq_3yuolGM",
  authDomain: "auth-form-3983f.firebaseapp.com",
  projectId: "auth-form-3983f",
  storageBucket: "auth-form-3983f.firebasestorage.app",
  messagingSenderId: "201135136045",
  appId: "1:201135136045:web:96d49a1adeb2130bba47a4",
  measurementId: "G-NFY2C27LW9"
 });
   const db = firebaseApp.firestore();
   const auth = firebaseApp.auth();

// Sign up function
function signUp() {
   const email = document.getElementById("email").value;
   const password = document.getElementById("password").value;

   firebase.auth().createUserWithEmailAndPassword(email, password)
     .then((result) => {
       alert("You are Signed Up 🎉");
       console.log(result);
     })
     .catch((error) => {
       console.log(error.message);
     });
}

// Sign In function
function signIn() {
   const email = document.getElementById("email").value;
   const password = document.getElementById("password").value;

   firebase.auth().signInWithEmailAndPassword(email, password)
     .then((result) => {
       alert("You are Signed In 🔥");
       console.log(result);
     })
     .catch((error) => {
       console.log(error.message);
     });
}