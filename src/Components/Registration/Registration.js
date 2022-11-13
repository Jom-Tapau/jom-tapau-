import {
  useCreateUserWithEmailAndPassword,
  useSendEmailVerification,
  useUpdateProfile
} from 'react-firebase-hooks/auth';
import { React, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { Button } from 'react-bootstrap';
import auth from '../../firebase.init';
import './Registration.css'
import Loading from '../Loading/Loading';
import handleGoogleSignIn from '../../hooks/googleAuth';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import Helmet from 'react-helmet';

const Registration = () => {

  const [createUserWithEmailAndPassword,
    user,
    loading,
    error] = useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating, err] = useUpdateProfile(auth);
  const [sendEmailVerification, sending, error1] = useSendEmailVerification(
    auth
  );
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();
  const name = useRef("");
  const email = useRef("");
  const password = useRef("");
  const confirmPass = useRef("");
  const phoneNumber = useRef("");
 
  //google signin
  const handleGoogleSignUp = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {

        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        window.location = '/menu';
        // ...
      }).catch((error) => {
        // Handle Errors here.
        
        setErrorMsg(error.message);


        // ...
      });

  }
  // function of signup button to register an user
  const handleSignUp = async e => {
    e.preventDefault();
    const nameValue = name.current.value;
    const emailValue = email.current.value;
    const passwordValue = password.current.value;
    const phoneNumberValue = phoneNumber.current.value;
    const confirmPassValue = confirmPass.current.value;

    console.log(nameValue, emailValue, passwordValue, phoneNumberValue,confirmPassValue);

    await createUserWithEmailAndPassword(emailValue, passwordValue);
    await updateProfile({ displayName: nameValue });
    await sendEmailVerification();
    if(error)
    {
      console.log(error.message);
      setErrorMsg(error.message);
    }

  }
  if (user) {
    navigate('/menu');
    console.log(user);
  }
  if (loading || updating || sending) {
    return <Loading></Loading>
  }

  return (
    <div className='vh-100' style={{ backgroundColor: 'rgba(117, 131, 136, 0.2' }}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Registration-Jom Tapau</title>
      </Helmet>
      <div className='d-lg-flex body-reg   login-div'>
      <div className=' w-lg-50'>
          <img
            className=' w-100 vh-100'
            src='https://i.ibb.co/Dg3F3FV/IMG-9325.jpg'
            alt=''
          />
        </div>

        <div className='w-75 mx-auto px-lg-5 mt-5'>
          <h1
            style={{ fontSize: '80px' }}
            className='text-center mt-4 mb-2 fst-italic waviy'
          >
            <span style={{ '--i': 1 }} className='animate shadow-red text-white'>J</span>
            <span style={{ '--i': 2 }} className='animate shadow-white text-danger'>om</span>
            {/* <small></small> */}
            <span style={{ '--i': 3 }} className='animate shadow-red text-white'>Ta</span>
            <span style={{ '--i': 4 }} className='animate shadow-white text-danger'>pa</span>
            <span style={{ '--i': 5 }} className='animate shadow-red text-white'>u</span>
          </h1>
          <div className='d-flex justify-content-center'>
            <div>
              <small className='text-center text-danger mt-5 fs-3'>
                Please Register
              </small>
              <hr
                style={{
                  width: '400px',
                  color: 'green',
                  border: '2px solid red'
                }}
              />
            </div>
          </div>
          <form className='w-100 ' onSubmit={handleSignUp} >
            <div className='login-container  w-75'>
              <div className='did-floating-label-content'>
                <input
                  ref={name}
                  className='did-floating-input'
                  type='text'
                  placeholder=' '
                  
                />
                <label className='did-floating-label'>Name</label>
              </div>
       <div  className='d-lg-flex justify-content-between  '>
       <div className='did-floating-label-content'>
                <input
                  ref={email}
                  className='did-floating-input'
                  type='email'
                  placeholder=' '
                  size={20}
                />
                <label className='did-floating-label'>Email</label>
              </div>
              <div className='did-floating-label-content'>
                <input
                  ref={phoneNumber}
                  className='did-floating-input'
                  type='text'
                  placeholder=' '
                  size={15}
                />
                <label className='did-floating-label'>Phone Number</label>
              </div>
       </div>
   <div className='d-lg-flex justify-content-between'>
   <div className='did-floating-label-content did-error-input'>
                <input
                  ref={password}
                  className='did-floating-input'
                  type='password'
                  placeholder=' '
                  size={15}
                />
                <label className='did-floating-label'>Password</label>
              </div>
              <div className='did-floating-label-content did-error-input'>
                <input
                  ref={confirmPass}
                  className='did-floating-input'
                  type='password'
                  placeholder=' '
                  size={20}
                />
                <label className='did-floating-label'>Confirm Password</label>
              </div>
   </div>
            </div>
            <div className='d-flex  justify-content-center'>
              <Button onClick={handleSignUp} className='mb-3' variant='danger' type='submit'>
                Sign up
              </Button>
            </div>
            <p className='text-danger'>{errorMsg}</p>
            
          
          </form>

          <small>Already have an Account? <Link to="/login">Login</Link></small>
          <div className='d-flex justify-content-center '>
            <hr style={{ width: '200px', color: 'red' }} />
            <p className='px-3 pt-1'>or</p>
            <hr style={{ width: '200px', color: 'red' }} />
          </div>
          <div className='d-flex justify-content-center '>
            <Button onClick={handleGoogleSignUp} style={{ width: '200px' }} variant="success">Google Sign</Button>

          </div>

        </div>

      </div>
    </div>
  );
};

export default Registration;