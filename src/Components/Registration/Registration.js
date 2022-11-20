import {
  useCreateUserWithEmailAndPassword,
  useSendEmailVerification,
  useSignInWithGoogle,
  useUpdateProfile,
  useSignInWithFacebook
} from 'react-firebase-hooks/auth'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Button } from 'react-bootstrap'
//  from 'react-firebase-hooks/auth'
import { React, useEffect, useRef, useState } from 'react'
import auth from '../../firebase.init'
import './Registration.css'
import Loading from '../Loading/Loading'
import Helmet from 'react-helmet'
import AddToDb from '../../hooks/AddToDb';

const Registration = () => {
  const [
    signInWithFacebook,
    fbUser,
    fbLoading,
    fbError
  ] = useSignInWithFacebook(auth)

  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error
  ] = useCreateUserWithEmailAndPassword(auth)
  const [updateProfile, updating, err] = useUpdateProfile(auth)
  const [sendEmailVerification, sending, error1] = useSendEmailVerification(
    auth
  )
  const location = useLocation()
  let from = location?.state?.from?.pathname || '/'
  const [errorMsg, setErrorMsg] = useState('')
  const [newUser,setNewUser]= useState({});
  const navigate = useNavigate()

  //useRef for input feild
  const name = useRef('')
  const email = useRef('')
  const phoneNumber = useRef('')
  const address = useRef('')
  const matric = useRef('')
  const password = useRef('')
  const role = useRef('Admin');

  // function of signup button to register an user
  const handleSignUp = async e => {
    e.preventDefault()
    const nameValue = name.current.value
    const emailValue = email.current.value
    const passwordValue = password.current.value
    const phoneNumberValue = phoneNumber.current.value
    const matricValue = matric.current.value
    const addressValue = address.current.value
    const rolevalue = role.current

    const createUser = {
      name: nameValue,
      email: emailValue,
      phone: phoneNumberValue,
      matric: matricValue,
      role: rolevalue,
      address: addressValue
    }
    console.log(createUser)
    setNewUser(createUser);
    await createUserWithEmailAndPassword(emailValue, passwordValue)
    // await updateProfile({ displayName: nameValue })
    // await sendEmailVerification();
    // navigate(from, { replace: true })

  } //end of handleSignUp button

  const handleFbSignup = async () => {
    await signInWithFacebook();
    console.log('facebook login')
  }

  if (loading || updating || sending ) {
    return <Loading></Loading>
  }
  if (fbError || error) {
    setErrorMsg(fbError?.message.split('/')[1].split(')')[0]||error?.message.split('/')[1].split(')')[0])
  }
  /* if(fbUser){
    const createUser = {
      name: fbUser.user.displayName,
      email: fbUser.user.email,
      phone: '',
      matric: '',
      role: 'user',
      address: ''
    }
    console.log('1');
    // setNewUser(createUser)
    console.log(fbUser)
    // AddToDb(newUser)//add date of fb loggedin user to database
  } */
  if(user){
    console.log('2')
    AddToDb(newUser)//add data of user to database
  }
  return (
    <div
      className='box vh-100'
      style={{ backgroundColor: 'rgba(117, 131, 136, 0.2' }}
    >
      <Helmet>
        <meta charSet='utf-8' />
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
            <span
              style={{ '--i': 1 }}
              className='animate shadow-red text-white'
            >
              J
            </span>
            <span
              style={{ '--i': 2 }}
              className='animate shadow-white text-danger'
            >
              om
            </span>
            {/* <small></small> */}
            <span
              style={{ '--i': 3 }}
              className='animate shadow-red text-white'
            >
              Ta
            </span>
            <span
              style={{ '--i': 4 }}
              className='animate shadow-white text-danger'
            >
              pa
            </span>
            <span
              style={{ '--i': 5 }}
              className='animate shadow-red text-white'
            >
              u
            </span>
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
          <form className='w-100 ' onSubmit={handleSignUp}>
            <div className='login-container '>
              <div className='did-floating-label-content'>
                <input
                  ref={name}
                  size={20}
                  className='did-floating-input'
                  type='text'
                  placeholder=' '
                />
                <label className='did-floating-label'>Name</label>
              </div>
              {/* <div className='d-lg-flex justify-content-between  '> */}
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
              {/* </div> */}
              {/* <div className='d-lg-flex justify-content-between'> */}
              <div className='did-floating-label-content did-error-input'>
                <input
                  ref={address}
                  className='did-floating-input'
                  type='text'
                  placeholder=' '
                  size={20}
                />
                <label className='did-floating-label'>Address</label>
              </div>
              <div className='did-floating-label-content did-error-input'>
                <input
                  ref={matric}
                  className='did-floating-input'
                  type='text'
                  placeholder=' '
                  size={20}
                />
                <label className='did-floating-label'>Matric No</label>
              </div>
              <div className='did-floating-label-content did-error-input'>
                <input
                  width={50}
                  ref={password}
                  className='did-floating-input'
                  type='password'
                  placeholder=' '
                  // size={15}
                />
                <label className='did-floating-label'>Password</label>
              </div>
              {/* </div> */}
            </div>
            <div className='d-flex  justify-content-center'>
              <Button
                onClick={handleSignUp}
                className='mb-3'
                variant='danger'
                type='submit'
              >
                Sign up
              </Button>
            </div>
            <p className='text-danger'>{errorMsg}</p>
          </form>

          <small>
            Already have an Account? <Link to='/login'>Login</Link>
          </small>
          <div className='d-flex justify-content-center '>
            <hr style={{ width: '200px', color: 'red' }} />
            <p className='px-3 pt-1'>or</p>
            <hr style={{ width: '200px', color: 'red' }} />
          </div>
          <div className='d-flex justify-content-center '>
            <Button
              onClick={handleFbSignup}
              style={{ width: '200px' }}
              variant='success'
            >
              Facebook Login
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Registration
