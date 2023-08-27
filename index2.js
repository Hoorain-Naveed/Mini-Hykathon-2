 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-app.js";
 import { getDatabase ,  set,ref } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-database.js";
 import { getAuth , signInWithEmailAndPassword  } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-auth.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyC7sikqnMQtH_02LqjFaqy-8PsVDI1er9s",
   authDomain: "mini-hykathoun.firebaseapp.com",
   projectId: "mini-hykathoun",
   storageBucket: "mini-hykathoun.appspot.com",
   messagingSenderId: "630508298169",
   appId: "1:630508298169:web:583f91a10fc46386d76068"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const database=getDatabase(app)
 const auth = getAuth();
 document.addEventListener("DOMContentLoaded", () => {
 const login = document.getElementById('login');
 

login.addEventListener("click",(e)=>{
 e.preventDefault();
 const fname=document.getElementById('fname').value
 const lname=document.getElementById('lname').value
 const email=document.getElementById('email').value
 const password=document.getElementById('password').value
 const rpass=document.getElementById('rpass').value


 signInWithEmailAndPassword(auth,password, email)
 .then((userCredential) => {
   // Signed in 
   const user = userCredential.user;
   alert(user)
   function home(){
   window.location.href="./index3.html"
 }
   // ...
   //////////////////REALTIME DATABASE SET/REF////////////////////
 set(ref(database, 'users/' + userId), {
   email: email,
   password:password,
   username: fname + ' ' + lname,

 })
 .then((userCredential) => {
   alert("User registered successfully!");

 })
 .catch((error) => {
   alert("error!");

})
 })
 .catch((error) => {
   const errorCode = error.code;
   const errorMessage = error.message;
   alert(errorMessage)
   // ..
 });
})
 })