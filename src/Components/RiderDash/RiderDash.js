import React, { useState } from "react";
import Order from "./Order";
import "./RiderDash.css";
import useOrders from "../../hooks/useOrders";
import { Helmet } from "react-helmet";
import { NavLink, Outlet } from "react-router-dom";

const RiderDash = () => {
  
  return (
    <div className="rider-dash">
      <Helmet>
        <title>RiderDashboard</title>
      </Helmet>
      <div className="mb-4 d-flex">
        <NavLink 
          className="me-3 hello" 
          to='/riderDash/Orders'
          style={({ isActive }) => {
            return {
              margin: "1rem 0",
              color: isActive ? "red" : "",
              borderBottom:isActive?"1px solid red":""
            };
          }}
        >
          Orders
        </NavLink>
        <NavLink 
        className="hello"
          style={({ isActive }) => {
            return {
              margin: "1rem 0",
              color: isActive ? "red" : "",
              borderBottom:isActive?"1px solid red":""
            };
          }}
        to='/riderDash/acceptedOrder'>
          Order
        </NavLink>
      </div>
    <Outlet />
    </div>
  );
};

export default RiderDash;
