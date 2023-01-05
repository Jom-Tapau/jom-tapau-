import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const CreditCard = ({ setPaymentID, paymentID }) => {
  const [users, setUser] = useState({});
  const [user, loading, userError] = useAuthState(auth);
  const [clientSecret, setClientSecret] = useState("");
  const [error,setError] = useState("");

  const stripe = useStripe();
  const elements = useElements();

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
  console.log(users)
  //form button function
  const handleSubmit = async (event) => {
    event.preventDefault();
    if(!stripe||!elements)
        return
    const card = elements.getElement(CardElement);
    if(card==null)
        return;
    
    const{error,paymentMethod} = await stripe.createPaymentMethod({
        type:'card',
        card:card
    })
    if(error)
        setError(error);
    else
        console.log(paymentMethod)
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button style={{width:'70px'}} type="button" className="btn btn-success mt-3" disabled={!stripe || clientSecret}>
          Pay
        </button>
      </form>
    </>
  );
};

export default CreditCard;
