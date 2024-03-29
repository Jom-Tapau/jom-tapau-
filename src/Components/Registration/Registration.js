import {
  useCreateUserWithEmailAndPassword,
  useSendEmailVerification,
  useUpdateProfile,
  useSignInWithFacebook,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { React, useRef, useState } from "react";
import auth from "../../firebase.init";
import "./Registration.css";
import Loading from "../Loading/Loading";
import Helmet from "react-helmet";
import useAddUserDb from "../../hooks/useAddUserDb";

const Registration = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth); //create user with email and password

  const [signInWithFacebook, fbUser, fbLoading, fbError] =
    useSignInWithFacebook(auth);

  const [updateProfile, updating, err] = useUpdateProfile(auth);

  const [sendEmailVerification, sending, error1] =
    useSendEmailVerification(auth);

  const location = useLocation();
  let from = location?.state?.from?.pathname || "/";

  //use Sate
  const [newUser, setUser] = useState();
  const [errorMsg, setErrorMsg] = useState("");

  const navigate = useNavigate();
  const name = useRef("");
  const email = useRef("");
  const password = useRef("");
  const matric = useRef("");
  const phoneNumber = useRef("");

  useAddUserDb(newUser || fbUser?.user); //send registred user data to database

  // function of signup button to register an user
  const handleSignUp = async (e) => {
    e.preventDefault();
    const nameValue = name.current.value;
    const emailValue = email.current.value;
    const passwordValue = password.current.value;
    const phoneNumberValue = phoneNumber.current.value;
    const matricValue = matric.current.value;
    const createUser = {
      name: nameValue,
      email: emailValue.toLocaleLowerCase(),
      phoneNumber: phoneNumberValue,
      matricValue: matricValue,
    };
    setUser(createUser);
    await createUserWithEmailAndPassword(emailValue, passwordValue);
    await updateProfile({ displayName: nameValue });
    await sendEmailVerification();
    // navigate(from, {replace:true});
  };

  const handleFacebookSignUp = async () => {
    await signInWithFacebook();
    if (fbUser) {
      const createUser = {
        name: fbUser.user.displayName,
        email: fbUser.user.email,
        phoneNumber: "",
        matricValue: "",
      };
    }
  };

  if (loading || updating || sending || fbLoading) {
    return <Loading></Loading>;
  }
  if (newUser || fbUser) {
    navigate('/home');
  }
  //add user data to the database
  return (
    <div className="App">
      <div
        style={{ backgroundColor: "rgba(117, 131, 136, 0.2" ,height:"calc(100vh + 0px)"}}
      >
        <Helmet>
          <meta charSet="utf-8" />
          <title>Registration-Jom Tapau</title>
        </Helmet>

        <div className="d-lg-flex body-reg   login-div">
          <div className=" w-lg-50">
            <img
              className=" w-100"
              style={{height:"calc(100vh + 0px)"}}
              src="https://i.ibb.co/Dg3F3FV/IMG-9325.jpg"
              alt=""
            />
          </div>

          <div className="w-75 mx-auto px-lg-5 mt-5">
            <h1
              style={{ fontSize: "80px" }}
              className="text-center mt-4 mb-2 fst-italic waviy"
            >
              <span
                style={{ "--i": 1 }}
                className="animate shadow-red text-white"
              >
                J
              </span>
              <span
                style={{ "--i": 2 }}
                className="animate shadow-white text-danger"
              >
                om
              </span>

              <span
                style={{ "--i": 3 }}
                className="animate shadow-red text-white"
              >
                Ta
              </span>
              <span
                style={{ "--i": 4 }}
                className="animate shadow-white text-danger"
              >
                pa
              </span>
              <span
                style={{ "--i": 5 }}
                className="animate shadow-red text-white"
              >
                u
              </span>
            </h1>
            <div className="d-flex justify-content-center">
              <div>
                <small className="text-center text-danger  fs-3">
                  Please Register
                </small>
              </div>
            </div>
            <form className="w-100 pb-4" onSubmit={handleSignUp}>
              <div className="login-container">
                <div className="did-floating-label-content">
                  <input
                    ref={name}
                    size={20}
                    className="did-floating-input"
                    type="text"
                    placeholder=" "
                  />
                  <label className="did-floating-label">Name</label>
                </div>
                {/* <div className='d-lg-flex justify-content-between  '> */}
                <div className="did-floating-label-content">
                  <input
                    ref={email}
                    className="did-floating-input"
                    type="email"
                    placeholder=" "
                    size={20}
                  />
                  <label className="did-floating-label">Email</label>
                </div>
                <div className="did-floating-label-content">
                  <input
                    ref={phoneNumber}
                    className="did-floating-input"
                    type="text"
                    placeholder=" "
                    size={15}
                  />
                  <label className="did-floating-label">Phone Number</label>
                </div>
                {/* </div> */}
                {/* <div className='d-lg-flex justify-content-between'> */}
                <div className="did-floating-label-content did-error-input">
                  <input
                    width={50}
                    ref={matric}
                    className="did-floating-input"
                    type="text"
                    placeholder=" "
                    // size={15}
                  />
                  <label className="did-floating-label">Matric</label>
                </div>
                {/* <div className="did-floating-label-content did-error-input">
                  <input
                    width={50}
                    ref={address}
                    className="did-floating-input"
                    type="text"
                    placeholder=" "
                    // size={15}
                  />
                  <label className="did-floating-label">Address</label>
                </div> */}
                <div className="did-floating-label-content did-error-input">
                  <input
                    width={50}
                    ref={password}
                    className="did-floating-input"
                    type="password"
                    placeholder=" "
                    // size={15}
                  />
                  <label className="did-floating-label">Password</label>
                </div>
                {/* </div> */}
              </div>
              <div >
                <div style={{marginTop:'-15px'}}>
                  <Button
                   style={{width:'150px'}}
                    onClick={handleSignUp}
                    variant="danger"
                    type="submit"
                  >
                    Sign up
                  </Button>
                </div>
                ------------------- or -------------------
                <div className="d-flex justify-content-center">
                  <Button style={{width:'150px'}} onClick={handleFacebookSignUp} variant="primary">
                    FaceBook
                  </Button>
                </div>
              </div>

            </form>
              <div>
              <p className="text-danger fs-5" style={{marginTop:'-16px'}}>
                {(error && error.message.split("/")[1].split(")")[0]) ||
                  (fbError && fbError.message.split("/")[1].split(")")[0]) ||
                  (errorMsg && errorMsg)}
              </p>
              <p style={{marginTop:'-16px'}} className="fs-6">
                Already have an Account? <Link to="/login">Login</Link>
              </p>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
