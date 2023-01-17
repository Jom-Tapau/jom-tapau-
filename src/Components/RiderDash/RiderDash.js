import React from "react";
import Order from "./Order";
import './RiderDash.css';
import useOrders from "../../hooks/useOrders";
import { Helmet } from "react-helmet";

const RiderDash = () => {
    const {orders,otherOrder} = useOrders();
    console.log(otherOrder)

    return (
        <div className="rider-dash">
            <Helmet>
                <title>RiderDashboard</title>
            </Helmet>
            {
                otherOrder?.map(order=><Order
                key={order._id}
                order={order}
                ></Order>)
            }
        </div>
    );
};

export default RiderDash;
