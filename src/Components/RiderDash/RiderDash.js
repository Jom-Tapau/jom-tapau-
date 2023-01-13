import React, { useEffect, useState } from "react";
import Order from "./Order";
import './RiderDash.css';
import useOrders from "../../hooks/useOrders";

const RiderDash = () => {

    const {orders} = useOrders();
    console.log(orders)

    return (
        <div className="rider-dash">

            {
                orders.map(order=><Order
                key={order._id}
                order={order}
                ></Order>)
            }
        </div>
    );
};

export default RiderDash;
