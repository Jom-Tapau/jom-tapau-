import React from "react";
import Order from "./Order";
import './RiderDash.css';
import useOrders from "../../hooks/useOrders";

const RiderDash = () => {
    const {orders} = useOrders();
    let accOrderArray = [];
    orders.map(Element=>{
        if(Element?.status!=="rejected")
            accOrderArray.push(Element)
    })

    return (
        <div className="rider-dash">

            {
                accOrderArray.map(order=><Order
                key={order._id}
                order={order}
                ></Order>)
            }
        </div>
    );
};

export default RiderDash;
