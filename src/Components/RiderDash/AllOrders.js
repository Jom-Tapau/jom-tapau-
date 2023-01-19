import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useEffect } from "react";
import { useState } from "react";
import useCollapse from "react-collapsed";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const AllOrders = () => {
  const [riderOrders, setRiderOrders] = useState([]);
  const [riderErr, setRiderErr] = useState("");
  const [user, loading, error] = useAuthState(auth);

  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

  useEffect(() => {
    fetch("http://localhost:5000/riderOrders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ riderEmail: user?.email }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.length > 0) {
          setRiderOrders(data);
          setRiderErr("");
        } else setRiderErr("You have performed O order");
      });
  }, [user]);
  return (
    <div className="">
        <h2 className="text-center" style={{marginBottom:'30px'}}>Your Accepted Order</h2>
      {riderOrders?.length > 0 &&
        riderOrders.map((or) => (
          <div key={or._id} className="order">
            <div className="info-container">
              <div className="name-user">
                <h4>{or.name}</h4>
                <h4>{or.phoneNumber}</h4>
              </div>
              <div className="details">
                <div className="total">RM {or.total}</div>
                <div className="address">{or.deliveryAddress}</div>
              </div>
              <div>
                {
                    or.status!=="Delivered"?<div>
                        <button
                        className="deliver me-3">Deliver</button>
                        <button className="accept">Cancel</button>
                    </div>:"Food Delivered"
                }
              </div>
            </div>

            <div className="items" {...getCollapseProps()}>
              <ul className="item-list" style={{ marginLeft: "200px" }}>
                {or.orders.map((or) => (
                  <li key={or._id}>
                    {or.name} x<span>{or.quantity}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="toggle-container">
              <button className="toggle toggle-button" {...getToggleProps()}>
                {isExpanded ? (
                  <div>
                    See less <FontAwesomeIcon icon={faChevronUp} />
                  </div>
                ) : (
                  <div>
                    See more <FontAwesomeIcon icon={faChevronDown} />
                  </div>
                )}
              </button>
            </div>
            <hr />
          </div>
        ))}
    </div>
  );
};

export default AllOrders;
