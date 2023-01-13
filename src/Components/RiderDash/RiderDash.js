import React, { useEffect, useState } from "react";
import Order from "./Order";
import './RiderDash.css';
import useOrders from "../../hooks/useOrders";

const RiderDash = () => {
    const [acpOrders,setAcpOrders] = useState([]);
    const {orders} = useOrders();
    let accOrderArray = [];
    orders.map(Element=>{
        if(Element?.status==="")
            accOrderArray.push(Element)
    })
    console.log(accOrderArray)

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
