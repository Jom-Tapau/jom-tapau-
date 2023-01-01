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
                    <h4>Name</h4>
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

            <div className="items" {...getCollapseProps()}></div>

            <div className="toggle-container">
                <button className="toggle toggle-button" {...getToggleProps()}>
                    {isExpanded ? "See less" : "See more"}
                </button>
            </div>
        </div>
    );
};

export default Order;
