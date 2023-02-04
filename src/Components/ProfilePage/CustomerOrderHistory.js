import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useEffect } from "react";
import CustomerOrder from "./CustomerOrder";
import { Helmet } from "react-helmet";

const CustomerOrderHistory = () => {
  const [riderOrders, setRiderOrders] = useState([]);
  const [riderErr, setRiderErr] = useState("");
  const [user, loading, error] = useAuthState(auth);


  useEffect(() => {
    fetch("https://jom-tapau-backend.onrender.com/findUserOrder", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ email: user?.email }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.length > 0) {
            const newData = data.reverse();
            console.log(newData)
          setRiderOrders(data);
          setRiderErr("");
        } else setRiderErr("You have performed O order");
      });
  }, [user]);
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>My Order</title>
      </Helmet>
      <div className="" style={{ marginTop: "85px" }}>
        <h2 className="text-center" style={{ marginBottom: "30px" }}>
          My Order
        </h2>
        {riderOrders?.length > 0 ? (
          riderOrders.map((or) => (
            <CustomerOrder key={or._id} order={or}></CustomerOrder>
          ))
        ) : (
          <div>
            <h5 className="text-center">You Accepted order: 0</h5>
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomerOrderHistory;
