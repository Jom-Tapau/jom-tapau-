import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import useCollapse from "react-collapsed";
import { useAuthState } from 'react-firebase-hooks/auth';
import "./Order.css";
import auth from "../../firebase.init";

const Order = ({order}) => {
    const {_id,name,phoneNumber,email,total,deliveryAddress,orders} = order
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

    const [user, loading, error] = useAuthState(auth);
    // console.log(user?.email,user?.displayName)

    const handleAcceptOrder = id =>{
        console.log(id)
        fetch('http://localhost:5000/updateRiderOrder',{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify({
                id,
                riderEmail:user?.email,
                riderName:user?.displayName,
                status:"Accepted"
            })
        })
        .then(res=>res.json())
        .then(data=>console.log(data))
    }

    return (
        <div className="order">
            <div className="info-container">
                <div className="name-user">
                    <h4>{name}</h4>
                    <h4>{phoneNumber}</h4>
                </div>
                <div className="details">
                    <div className="total">
                        RM {total}
                    </div>
                    <div className="address">
                        {deliveryAddress}
                    </div>
                </div>
                <button onClick={()=>handleAcceptOrder(_id)} className="accept">Accept</button>
            </div>

            <div className="items" {...getCollapseProps()}>
                <ul className="item-list" style={{marginLeft:'200px'}}>
                    {
                        orders.map(or=><li key={or._id}>{or.name} x<span>{or.quantity}</span></li>)
                    }
                </ul>
            </div>

            <div className="toggle-container">
                <button className="toggle toggle-button" {...getToggleProps()}>
                    {isExpanded ? <div>See less <FontAwesomeIcon icon={faChevronUp} /></div> : <div>See more <FontAwesomeIcon icon={faChevronDown} /></div>}
                </button>
            </div>
            <hr />
        </div>
    );
};

export default Order;
