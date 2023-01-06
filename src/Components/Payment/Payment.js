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

  const [ackID,setAckID] = useState(false)

  const [deliveryDate,setDeliveryDate] = useState(today) //guseState of delivery data
  const [deliveryTime,setDeliveryTime] = useState("ASAP") //useState of delivery time
  const [deliveryAddress,setDeliveryAddress] = useState("KLG Block A")//useState of delivery Address
  const [roomNumber,setRoomNumber] = useState(""); //useState of the room Number
  const[phonenumber,setPhonenumber] = useState('')//useState of the phone number
  const [users, setUser] = useState({}); //useState of user data
  const [user, loading, userError] = useAuthState(auth);
  const [paymentMethod,setPaymentMethod] = useState('')
  const [paymentID,setPaymentID] = useState("");
  
  const email = user?.email
  
  //fetch the user from the database
  useEffect(() => {
    fetch("http://localhost:5000/findUser", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify( {email} ),
    })
      .then((response) => response.json())
      .then((data) => {
        setUser(data)
        setPhonenumber(data.phoneNumber)
      });
  }, [user]);

  //calculate the total price of the food
  let total = 1.0;
  cart.forEach(food => {
    const price = parseFloat(food.price)
    const quantity = parseInt(food.quantity)
    const result = price*quantity;
    total = total+result;
  })

  //set the payment method
  const handlePaymentMethod = e =>{
    setPaymentMethod(e.target.value)
  }

  //get delivery data
  const handleDeliveryDate =e =>{
    setDeliveryDate(e.target.value)
  }

  //get delivery time
  const handleDeliveryTime = e =>{
    setDeliveryTime(e.target.value)
  }

  //get the address of the delivery
  const handelDeliveryAddress = e =>{
    setDeliveryAddress(e.target.value)
  }

  //get the room number
  const handleRoomNumber = e =>{
    setRoomNumber(e.target.value)
  }

  //get phone number
  const handlePhoneNUmber = e =>{
    setPhonenumber(e.target.value)
  }
  // handle confirm button
  const handleConfirm = () =>{
    const newOrder={
      email:user.email,
      phoneNumber:phonenumber,
      deliveryDate:deliveryDate,
      deliveryTime:deliveryTime,
      deliveryAddress:deliveryAddress,
      roomNumber:roomNumber,
      transactionID: paymentID,
      paymentMethod:paymentMethod,
      total:total,
      orders:cart
    }
    fetch('http://localhost:5000/postOrder',{
      method:"POST",
      headers:{
        "content-type": "application/json",
      },
      body:JSON.stringify({newOrder})
    })
    .then(res=>res.json())
    .then(data=>{
      if(data.acknowledged)
      setAckID(true)
    })
  }
  

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
                  onChange={handleDeliveryDate}
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
                  onChange={handleDeliveryTime}
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
                  onChange={handelDeliveryAddress}
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
                  onChange={handleRoomNumber}
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
                      defaultValue={user?.displayName}
                      readOnly
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
                      defaultValue={user?.email}
                      readOnly
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
                    onChange={handlePhoneNUmber}
                    defaultValue={phonenumber}
                  ></input>
                </div>
              </div>
            </div>
            {/* payment method container */}
            <div className="payment-container mt-5">
              <p className="fs-1 fw-normal">Payment</p>
              {paymentID&&<p className="mb-2 fs-5 text-success">Money Paid</p>}
              {
                cart.length==0&& <p className="mb-2 text-danger">NO Food Added</p>
              }
              {
                paymentID==""&&cart.length!=0&&<div onChange={handlePaymentMethod}>
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
                        <CreditCard user={user} setPaymentID={setPaymentID} paymentID={paymentID} total={total}></CreditCard>
                    </Elements></div>
                    
                  }
                  {
                    paymentMethod==="Card" &&paymentID!=""&&<p> <span className="text-success">Payment Successful.Transaction id</span> :{paymentID}</p>
                  }
              </div>
              }
            </div> {/* end of payment method container */}
          </div>
          
          <div className="d-flex justify-content-center mt-5">
            <Button variant="danger" onClick={handleConfirm} disabled={!paymentID}>Confirm</Button>
          </div>
          
        </section>
        <section>

        </section>
      </main>
    </div>
  );
};

export default Payment;
