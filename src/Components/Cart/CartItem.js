import React from "react";
import "./CartItem.css";

const CartItem = (props) => {
  const { name, description, price, imgSrc } = props.food;

  return (
    <div className="cart-item">
      <div className="item-name">
        <img src={imgSrc} />
        <h4>{name}</h4>
      </div>
      
    </div>
  );
};

export default CartItem;
