import React, { useState } from "react";
import "./CartItem.css";

const CartItem = (props) => {
  const { name, description, price, imgSrc } = props.food;
  const [count, setCount] = useState(1);

  return (
    <div className="cart-item">
      <div className="item-name">
        <img src={imgSrc} />
        <h4>{name}</h4>
      </div>

      <div className="quantity">
        <button>-</button>
        <span>{count}</span>
        <button>+</button>
      </div>

      <div className="price">
        <strong>RM {price}</strong>
      </div>
    </div>
  );
};

export default CartItem;
