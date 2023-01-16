import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import useCollapse from "react-collapsed";
import "./Order.css";

const Order = ({order}) => {
    const {name} = order
    console.log(order)
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

    return (
        <div className="order">
            <div className="info-container">
                <div className="name-user">
                    <h4>{name}</h4>
                </div>
                <div className="details">
                    <div className="total">
                        RM 29.50
                    </div>
                    <div className="address">
                        KLG Campus Resicence, Taman Sri Pulai.
                    </div>
                </div>
                <button className="accept">Accept</button>
            </div>

            <div className="items" {...getCollapseProps()}>
                <ul className="item-list">
                    <li>Nasi goreng ayam x<span>1</span></li>
                    <li>Ice Lemon Tea x<span>1</span></li>
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
