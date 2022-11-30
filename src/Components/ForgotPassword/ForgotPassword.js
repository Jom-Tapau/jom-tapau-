import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import React from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import auth from '../../firebase.init';

const ForgotPassword = () => {
    const emailRef= useRef();
    const [emailSent, setEmailSent] = useState("");
    const handleForgotPassword=()=>{
const email = emailRef.current.value;
sendPasswordResetEmail(auth, email)
  .then(() => {
    // Password reset email sent!
    console.log('sent');
    setEmailSent("The Email has been Sent, Please Check Your Email");
    // ..
  })
  .catch((error) => {

    const errorMessage = error.message.substr(9,38);
    console.log(errorMessage);
    setEmailSent(errorMessage);
    // ..
  });
    }
    return (
        <div  style={{marginTop:"100px"}}>
      <div className='d-flex flex-column justify-content-center align-items-center'>
      <h3 className='text-danger'>Enter the email you used to Register into the system</h3>
      <div className="input-group mb-3 w-25">
  <input ref={emailRef}  type="text" class="form-control" placeholder="Enter Your Email" aria-label="Recipient's username" aria-describedby="basic-addon2"/>

</div>
<button onClick={handleForgotPassword} class="btn btn-danger" type="submit">Submit</button>
<br />

<p  className={emailSent=="The Email has been Sent, Please Check Your Email"? "text-success": "text-danger"}>{emailSent}</p>
      </div>
        </div>
    );
};

export default ForgotPassword;