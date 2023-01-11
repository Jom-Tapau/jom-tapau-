import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import useCollapse from "react-collapsed";
import "./Order.css";

const Order = () => {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

    return (
        <div className="order">
            <div className="info-container">
                <div className="name-user">
                    <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" />
                    <h4>GM Shaheen Shah</h4>
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
                <hr />
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
