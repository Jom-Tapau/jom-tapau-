import React, { useEffect, useState } from "react";
import "./CartItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

const CartItem = (props) => {
  const { cart, setCart, setCount, count, total, setTotal } = props;
  const { _id, name, price, imgURL } = props.item;
  let { quantity } = props.item;
  let totalQuantity = 0;
  const [quan, setQuan] = useState(0);
  const handlePrice = () => {
    let totalPrice = 0;
    cart.map((item) => (totalPrice += item.quantity * item.price));
    setTotal(totalPrice);
  };

  useEffect(() => {
    setQuan(quantity);
  });
  const [itemPrice, setItemPrice] = useState(0);

  useEffect(() => {
    setItemPrice(price * quantity);
  });
  const handleIncrement = (item) => {
    item.quantity = parseInt(item.quantity) + 1;
    setItemPrice(item.quantity * price);
    setQuan(item.quantity);
    setCount(count + 1);
    setTotal(total + parseFloat(item.price));
    console.log(cart)
  };
  const handleDecrement = (foodItem) => {
  
    setItemPrice(foodItem.quantity * price);
    foodItem.quantity = parseInt(foodItem.quantity) - 1;
    setQuan(foodItem.quantity);
    setCount(count - 1);
    setItemPrice(foodItem.quantity * price);
    console.log(foodItem.quantity);
    setTotal(total - parseFloat(foodItem.price));
    if (foodItem.quantity == 0) {
      const allProducts = cart.filter((product) => product._id !== foodItem._id);
      setCart(allProducts);
      setCount(count - foodItem.quantity);
      setTotal(total - parseFloat(foodItem.quantity * price));
     }

  };

  const handleRemove = (item) => {
  
    const allProducts = cart.filter((product) => product._id !== item._id);
    setCart(allProducts);
    setCount(count - item.quantity);
    setTotal(total - parseFloat(item.quantity * price));
  };
  useEffect(() => {
    handlePrice();
  }, []);
  return (
    <div className="cart-item">
      <div className="item-name">
        <img src={imgURL} />
        <h4>{name}</h4>
      </div>

      <div className="quantity">
        <button
          onClick={() => {
            handleDecrement(props.item);
          }}
        >
          <FontAwesomeIcon icon={faMinus} />
        </button>
        <span>{quan}</span>
        <button
          onClick={() => {
            handleIncrement(props.item);
          }}
        >
          <FontAwesomeIcon icon={faPlus} />
        </button>
        <button
          onClick={() => {
            handleRemove(props.item);
          }}
        >
          remove
        </button>
      </div>

      <div className="price">
        <strong>RM {itemPrice}</strong>
      </div>
    </div>
  );
};

export default CartItem;
