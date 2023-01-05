import React, { useState } from "react";
import auth from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect } from "react";
import './Payment.css';
import Button from 'react-bootstrap/Button';
import { Form } from "react-router-dom";
import { Helmet } from "react-helmet";
import CreditCard from "./CreditCard";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(
  "pk_test_51MMoiTGFkQKcRUEsIWmYYZ7z8q87tqyLD4xHmTjn1dm53oHYoSdtjzbtVUwiHZdcFa0XMHCLFY94JNWg0RcVbbds00SPlFNy4f");

const Payment = ({ cart }) => {
  const [users, setUser] = useState({});
  const [user, loading, error] = useAuthState(auth);
  const [paymentMethod,setPaymentMethod] = useState('')
  const [paymentID,setPaymentID] = useState("");

  const email = user?.email;

  //fetch the user from the database
  useEffect(() => {
    fetch("http://localhost:5000/findUser", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ email }),
    })
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, []);

  //set the payment method
  const handlePaymentMethod = e =>{
    setPaymentMethod(e.target.value)
  }
  console.log(paymentMethod)

  let size;
  const day = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const date = new Date();
  const today =
    date.getDate() +
    " " +
    day[date.getDay()] +
    " " +
    monthNames[date.getMonth()];
  const tomorrow =
    date.getDate() +
    1 +
    " " +
    day[date.getDay() + 1] +
    " " +
    monthNames[date.getMonth()];
  const nexttmr =
    date.getDate() +
    2 +
    " " +
    day[date.getDay() + 2] +
    " " +
    monthNames[date.getMonth()];

  return (
    <div className="mt-5">
      <Helmet>
        <meta charSet='utf-8' />
        <title>Payment</title>
      </Helmet>
      <main className="d-flex justify-content-center pt-5 payment-box">
        <section>
          <div>
            <div className="deliveryDetails">
              <p className="fs-1 fw-normal">Delivery Details</p>
              <p className="fs-4">Delivery time:</p>

              <div className="d-flex">
                {/* date section */}
                <select
                  style={{ width: "250px" }}
                  className="form-select me-5"
                  aria-label="Default select example"
                >
                  <option defaultValue={today}>
                    {date.getDate()} {day[date.getDay()]},
                    {monthNames[date.getMonth()]}
                  </option>
                  <option defaultValue={tomorrow}>
                    {date.getDate() + 1} {day[date.getDay() + 1]},
                    {monthNames[date.getMonth()]}
                  </option>
                  <option defaultValue={nexttmr}>
                    {date.getDate() + 2} {day[date.getDay() + 2]},
                    {monthNames[date.getMonth()]}
                  </option>
                </select>
                {/* time section */}
                <select
                  style={{ width: "250px" }}
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option defaultValue="ASAP">ASAP</option>
                  <option defaultValue="">After 30min</option>
                  <option defaultValue=" ">After 1hour</option>
                </select>
              </div>
              <br />

              <p className="fs-4">Address Details:</p>
              <div className="d-flex">
                <select
                  size={size}
                  onClick={() => (size = 5)}
                  style={{ width: "250px" }}
                  className="form-select me-5"
                  aria-label="Default select example"
                >
                  <option defaultValue="KLG Block A">KLG Block A</option>
                  <option defaultValue="KLG Block B">KLG Block B</option>
                  <option defaultValue="KLG Block C">KLG Block C</option>
                  <option defaultValue="KDOJ XB1">KDOJ XB1</option>
                  <option defaultValue="KDOJ XB2">KDOJ XB2</option>
                  <option defaultValue="KDOJ XC1">KDOJ XC1</option>
                  <option defaultValue="KDOJ XC2">KDOJ XC2</option>
                </select>
                <input
                  type="text"
                  style={{ width: "250px" }}
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Room Number"
                ></input>
              </div>
            </div>

            <div className="mt-5 personalDetails">
              <p className="fs-1 fw-normal">Personal Details</p>
              <div className="">
                <div className="d-flex">
                  <div className="me-5">
                    <label htmlFor="">Name</label>
                    <input
                      type="text"
                      style={{ width: "250px" }}
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Name"
                    ></input>
                  </div>
                  <div>
                    <label htmlFor="">Email</label>
                    <input
                      type="text"
                      style={{ width: "250px" }}
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Email"
                    ></input>
                  </div>
                </div>
                <div className="mt-2">
                  <label htmlFor="">Phone Number</label>
                  <input
                    type="text"
                    style={{ width: "250px" }}
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Phone Number"
                  ></input>
                </div>
              </div>
            </div>
            {/* payment method container */}
            <div className="payment-container mt-5">
              <p className="fs-1 fw-normal">Payment</p>
              <div onChange={handlePaymentMethod}>
                <input className="me-3" type="radio" id="Cash on Delivery" name="age" value="Cash"/>
                <label htmlFor="Cash on Delivery"> 
                  <span className="fw-semibold">Cash on Delivery</span>
                </label><br/>
                <input className="me-3" type="radio" id="card" name="age" value="Card"/>
                <label htmlFor="card">
                  <span className="fw-semibold mb-3">Credit or Debit Card</span>
                </label><br/>  
                  
                  {
                    paymentMethod==="Card" &&paymentID==="" && <div style={{marginBottom:'15px',marginTop:'10px',marginLeft:'10px',marginRight:'130px',boxShadow:'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px', padding:'10px',borderRadius:'10px'}}><Elements  stripe={stripePromise}>
                        <CreditCard setPaymentID={setPaymentID} paymentID={paymentID}></CreditCard>
                    </Elements></div>
                    
                  }
                  
                <input className="me-3" type="radio" id="code" name="age" value="Qr Code"/>
                <label htmlFor="code">
                  <span className="fw-semibold">Qr code</span>
                </label>
              </div>
            </div> {/* end of payment method container */}
          </div>
          <div className="d-flex justify-content-center mt-5">
          <Button variant="danger">Confirm</Button>
          </div>
        </section>
        <section>

        </section>
      </main>
    </div>
  );
};

export default Payment;
