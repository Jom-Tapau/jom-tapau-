import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const CreditCard = ({ setPaymentID, paymentID,total }) => {
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

  //get the payment-intent
  useEffect(()=>{
    fetch('http://localhost:5000/create-payment-intent',{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify({total})
    })
    .then(res=>res.json())
    .then(data=>{
        if(data?.ClientSecret){
            setClientSecret(data?.ClientSecret)
        }
    })
  },[])

  //form button function
  const handleSubmit = async (event) => {
    event.preventDefault();
    if(!stripe||!elements)
        return
    const card = elements.getElement(CardElement);
    if(card==null)
        return;
    console.log(card)
    const{error,paymentMethod} = await stripe.createPaymentMethod({
        type:'card',
        card:card
    })
    if(error)
        setError(error);
    else{
        setError('')
    }

    const {paymentIntent,error:intentError} = await stripe.confirmCardPayment(
        clientSecret,
        {
            payment_method: {
              card: card,
              billing_details: {
                name: user.displayName,
                email:user.email
              },
            },
          },
    )
    if(intentError)
        console.log(intentError)
    else{
        setPaymentID(paymentIntent.id)
    }
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
        <button style={{width:'70px'}} type="submit" className="btn btn-success mt-3" disabled={!stripe || !clientSecret}>
          Pay
        </button>
      </form>

      {
        error&& <p className="mt-2 mb-0 text-danger fw-semibold fs-4 text-center">{error}</p>
      }
    </>
  );
};

export default CreditCard;
