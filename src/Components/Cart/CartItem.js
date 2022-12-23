import React, { useState } from "react";
import "./CartItem.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

const CartItem = (props) => {

  const { name, description, price, imgURL,quantity } = props.item;
  const newPrice = parseFloat(price);
  const [count, setCount] = useState(1);
  const [totalPrice, setTotalPrice] = useState(newPrice);

  return (
    <div className="cart-item">
      <div className="item-name">
        <img src={imgURL} />
        <h4>{name}</h4>
      </div>

      <div className="quantity">
        <button ><FontAwesomeIcon icon={faMinus} /></button>
        <span>{quantity}</span>
        <button ><FontAwesomeIcon icon={faPlus} /></button>
      </div>

      <div className="price">
        <strong>RM {totalPrice}</strong>
      </div>
    </div>
  );
};

export default CartItem;
