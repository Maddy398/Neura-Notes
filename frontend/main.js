
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { getAuth ,GoogleAuthProvider ,signInWithPopup} from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";

const firebaseConfig = {

  apiKey: "AIzaSyCW9xHl_TTYk1-D1ibThhOhnL0DyX_La98",

  authDomain: "neuranotes-96365.firebaseapp.com",

  projectId: "neuranotes-96365",

  storageBucket: "neuranotes-96365.firebasestorage.app",

  messagingSenderId: "902560300435",

  appId: "1:902560300435:web:22f3519732ddc7515bbc66"

};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
auth.languageCode = 'en';

const provider= new GoogleAuthProvider();
const googleLogin = document.getElementById("google-login-btn");
googleLogin.addEventListener("click",function(){
  signInWithPopup(auth, provider)
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const user = result.user;
    console.log(user);
    window.location.href = "http://localhost:5173/";
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
});
