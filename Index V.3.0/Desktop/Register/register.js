logout.addEventListener("click", myFunction);

    function myFunction(){
        location.replace('/index.html')
    }
;


back.addEventListener("click", Goback);

    function Goback(){
        location.replace('/Desktop/Dashbord/dashbord.html')
    }
;

console.log('register.js /Desktop/ Loaded');


import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js';
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js";



const firebaseApp = initializeApp({
    apiKey: "AIzaSyAHljuQ6yh9ll8KQqocjM1goaeFPmDoEZ0",
    authDomain: "fir-app-9ce37.firebaseapp.com",
    projectId: "fir-app-9ce37",
    storageBucket: "fir-app-9ce37.appspot.com",
    messagingSenderId: "488551681698",
    appId: "1:488551681698:web:bbcfd22d6ca90c118991fb"
})



const auth = getAuth(firebaseApp);


onAuthStateChanged(auth, user =>{
    if(user = null){
        console.log('');

    }else{
        console.log('firebase loded.good-job')
    }
});

document.addEventListener('click', function(){
    var email = document.getElementById('email').value; 
    var password = document.getElementById('password').value;
    
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        alert('User Registered');
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        
      });		  		  
      });
         


