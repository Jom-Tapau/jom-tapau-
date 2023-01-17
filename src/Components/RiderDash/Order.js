import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import useCollapse from "react-collapsed";
import "./Order.css";

const Order = ({order}) => {
    const {name,phoneNumber,email,total,deliveryAddress,orders} = order
    console.log(order)
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

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
                <button className="accept">Accept</button>
            </div>

            <div className="items" {...getCollapseProps()}>
                <ul className="item-list" style={{marginLeft:'200px'}}>
                    {
                        orders.map(or=><li>{or.name} x<span>{or.quantity}</span></li>)
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
