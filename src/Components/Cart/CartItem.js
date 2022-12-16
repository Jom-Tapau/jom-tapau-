import React, { useState } from "react";
import "./CartItem.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

const CartItem = (props) => {
  const { name, description, price, imgSrc } = props.food;
  const [count, setCount] = useState(1);
  var totalPrice = price;

  return (
    <div className="cart-item">
      <div className="item-name">
        <img src={imgSrc} />
        <h4>{name}</h4>
      </div>

      <div className="quantity">
        <button><FontAwesomeIcon icon={faMinus} /></button>
        <span>{count}</span>
        <button><FontAwesomeIcon icon={faPlus} /></button>
      </div>

      <div className="price">
        <strong>RM 13.5{/*{price}*/}</strong>
      </div>
    </div>
  );
};

export default CartItem;
