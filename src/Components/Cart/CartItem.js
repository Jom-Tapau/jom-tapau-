import React, { useState } from "react";
import "./CartItem.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

const CartItem = (props) => {

  const { name, description, price, imgURL } = props.item;
  const newPrice = parseFloat(price);
  const [count, setCount] = useState(1);
  const [totalPrice, setTotalPrice] = useState(newPrice);

  const incrementCount = () => {
    if (count < 10) {
      setCount(prevCount => prevCount + 1);
      setTotalPrice(prevPrice => prevPrice + newPrice);
    }
  }

  const decrementCount = () => {
    if (count > 0) {
      setCount(prevCount => prevCount - 1);
      setTotalPrice(prevPrice => prevPrice - newPrice);
    }
  }

  return (
    <div className="cart-item">
      <div className="item-name">
        <img src={imgURL} />
        <h4>{name}</h4>
      </div>

      <div className="quantity">
        <button onClick={decrementCount}><FontAwesomeIcon icon={faMinus} /></button>
        <span>{count}</span>
        <button onClick={incrementCount}><FontAwesomeIcon icon={faPlus} /></button>
      </div>

      <div className="price">
        <strong>RM {totalPrice}</strong>
      </div>
    </div>
  );
};

export default CartItem;
