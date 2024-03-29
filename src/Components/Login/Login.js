import {
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  updatePassword,
} from "firebase/auth";
import React, { useRef } from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Loading/Loading";
import "./Login.css";
import Helmet from "react-helmet";
import { useSignInWithFacebook } from "react-firebase-hooks/auth";
import useAddUserDb from "../../hooks/useAddUserDb";

const Login = () => {
  const [user, setUser] = useState();

  const emailRef = useRef();
  const passwordRef = useRef();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  let navigate = useNavigate();
  const location = useLocation();

  const [signInWithFacebook, fbUser, fbLoading, fbError] =
    useSignInWithFacebook(auth);

  useAddUserDb(fbUser?.user); //send registred user data to database

  let from = location?.state?.from?.pathname || "/";

  if (user || fbUser) {
    navigate(from, { replace: true });
  }

  if (loading || fbLoading) {
    return <Loading></Loading>;
  }

  const handleLoginForm = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);
        setLoading(false);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
        console.log(errorMessage);
        setLoading(false);
      });
  };
  const handleForgotPassword = () => {
    console.log("handle forgot password");
    sendPasswordResetEmail(auth)
      .then(() => {
        // Password reset email sent!
        // ..
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };
  const handleFacebookSignUp = async () => {
    await signInWithFacebook();
  };

  return (
    <div className="App">
      <div
      className="vh-100"
      style={{ backgroundColor: "rgba(117, 131, 136, 0.2)" }}
    >
      <Helmet>
        <meta charSet="utf-8" />
        <title>Login-Jom Tapau</title>
      </Helmet>
      <div className="d-lg-flex body-reg   login-div">
        <div className=" w-lg-50">
          <img
            className=" w-100 vh-100"
            src="https://i.ibb.co/Dg3F3FV/IMG-9325.jpg"
            alt=""
          />
        </div>
        <div className="w-75 mx-auto px-lg-5 mt-4">
          <h1
            style={{ fontSize: "80px" }}
            className="waviy text-center mt-5 mb-2 fst-italic"
          >
            <span style={{ "--i": 1 }} className="shadow-red text-white">
              J
            </span>
            <span style={{ "--i": 2 }} className="shadow-white text-danger">
              om
            </span>
            <small></small>
            <span style={{ "--i": 3 }} className="shadow-red text-white">
              Ta
            </span>
            <span style={{ "--i": 4 }} className="shadow-white text-danger">
              pa
            </span>
            <span style={{ "--i": 5 }} className="shadow-red text-white">
              u
            </span>
          </h1>
          <div style={{ "--i": 6 }} className="d-flex justify-content-center">
            <div>
              <small className="text-center text-danger mt-5 fs-3">
                Fill out the Form to login
              </small>
              <hr
                style={{
                  width: "400px",
                  color: "green",
                  border: "2px solid red",
                }}
              />
            </div>
          </div>
          <form className="w-100 " onSubmit={handleLoginForm}>
            <div className="login-container">
              <div className="did-floating-label-content">
                <input
                  ref={emailRef}
                  className="did-floating-input"
                  type="email"
                  placeholder=" "
                  size={20}
                />
                <label className="did-floating-label">Email</label>
              </div>
              <div className="did-floating-label-content did-error-input">
                <input
                  ref={passwordRef}
                  className="did-floating-input"
                  type="password"
                  placeholder=" "
                />
                <label className="did-floating-label">Password</label>
              </div>
            </div>
            <div className="d-flex  justify-content-center">
              <Button className="mb-1" variant="danger" type="submit">
                Login
              </Button>
            </div>
            <Link to="/forgotPassword">
              <small>Forgot Password?</small>
            </Link>

            {loading ? <Loading></Loading> : <div></div>}

            <p className="text-danger">
              {error ||
                (fbError && fbError.message.split("/")[1].split(")")[0])}
            </p>
            <small className="d-block text-dark">
              Don't have an Account yet?{" "}
              <Link to="/registration">Register</Link>
            </small>
          </form>
          <div className="d-flex justify-content-center ">
            <hr style={{ width: "200px", color: "red" }} />
            <p className="px-3 pt-1">or</p>
            <hr style={{ width: "200px", color: "red" }} />
          </div>
          <div className="d-flex justify-content-center">
            <Button
              onClick={handleFacebookSignUp}
              style={{ width: "200px" }}
              variant="primary"
            >
              Facebook
            </Button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};
export default Login;
