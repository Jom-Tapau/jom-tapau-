import React from "react";
import Order from "./Order";
import './RiderDash.css';

const RiderDash = () => {
    return (
        <div className="rider-dash">
            <Order />
            <Order />
            <Order />
        </div>
    );
};

export default RiderDash;
