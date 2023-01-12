import React, { useEffect, useState } from "react";
import Order from "./Order";
import './RiderDash.css';

const RiderDash = () => {

    const [orders,setOrders] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/allOrders')
        .then(res=>res.json())
        .then(data=>setOrders(data))
    },[])

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
