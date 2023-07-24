import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";

const firebaseApp = initializeApp({
    apiKey: "AIzaSyAHljuQ6yh9ll8KQqocjM1goaeFPmDoEZ0",
    authDomain: "fir-app-9ce37.firebaseapp.com",
    projectId: "fir-app-9ce37",
    storageBucket: "fir-app-9ce37.appspot.com",
    messagingSenderId: "488551681698",
    appId: "1:488551681698:web:bbcfd22d6ca90c118991fb"
})



const auth = getAuth(firebaseApp);


console.log("firebase loaded /Desktop/");


document.getElementById('submit').addEventListener("click", function(){
    
    var email =  document.getElementById("email").value;
    var password = document.getElementById("password").value;




    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
  // Signed in 
    const user = userCredential.user;
    //alert('USER LOGGED');//
    location.replace("/Desktop/Dashbord/dashbord.html"); 
    
    
  // ...
})
.catch((error) => {
  const errorCode = error.code;
  const errorMessage = error.message;
  console.log(errorMessage);
  alert(errorMessage);
});		  		  
});
    ////