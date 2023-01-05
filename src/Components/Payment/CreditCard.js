import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useState } from "react";

const CreditCard = ({ setPaymentID, paymentID }) => {
  const [clientSecret, setClientSecret] = useState("");
  const [error,setError] = useState("");
  const stripe = useStripe();
  const elements = useElements();
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
