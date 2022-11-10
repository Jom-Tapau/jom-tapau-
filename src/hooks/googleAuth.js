import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../firebase.init";

const handleGoogleSignIn=()=>{
let errorCode;
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    window.location='/home';
    // ...
  }).catch((error) => {
    // Handle Errors here.
     errorCode = error.code;
 
    
    // ...
  });
return{errorCode}

  
}
export default handleGoogleSignIn;