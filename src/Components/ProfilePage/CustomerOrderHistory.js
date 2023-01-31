import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from "../../firebase.init";
import { useEffect } from "react";
import useCollapse from "react-collapsed";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { Badge } from 'react-bootstrap';
import CustomerOrder from './CustomerOrder';

const CustomerOrderHistory = () => {

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
    }, [user, riderOrders]);
    return (
        <div>
            <div className="">
                <h2 className="text-center" style={{ marginBottom: '30px' }}>Your Accepted Order</h2>
                {riderOrders?.length > 0 ?
                    riderOrders.map((or) => (
                       <CustomerOrder key={or.map} order={or}></CustomerOrder>
                    )) : <div>
                        <h5 className="text-center">You Accepted order: 0</h5>
                    </div>}
            </div>
        </div>
    );
};

export default CustomerOrderHistory;