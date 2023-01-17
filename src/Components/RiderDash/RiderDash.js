import React, { useState } from "react";
import Order from "./Order";
import "./RiderDash.css";
import useOrders from "../../hooks/useOrders";
import { Helmet } from "react-helmet";
import { Button } from "react-bootstrap";

const RiderDash = () => {
  const { orders, otherOrder } = useOrders();
  const [addRider, setAddRider] = useState(false);
  const [appBtn, setAppBtn] = useState(false);
  const handleAddRider = () => {
    setAddRider(!addRider);
    setAppBtn(false);
  };
  const handleApplicants = () => {
    setAppBtn(!appBtn);
    setAddRider(false);
  };

  return (
    <div className="rider-dash">
      <Helmet>
        <title>RiderDashboard</title>
      </Helmet>
      <div className="mb-4">
        <Button
          onClick={handleAddRider}
          className="me-4"
          variant={addRider ? "danger" : "outline-danger"}
          size={"sm"}
        >
          Add Rider
        </Button>

        <Button
          onClick={handleApplicants}
          variant={appBtn ? "danger" : "outline-danger"}
          size={"sm"}
        >
          Applicants
        </Button>
      </div>

      {otherOrder?.map((order) => (
        <Order key={order._id} order={order}></Order>
      ))}
    </div>
  );
};

export default RiderDash;
