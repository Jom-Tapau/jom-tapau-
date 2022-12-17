import React from "react";
import CartItem from "./CartItem";
import './Cart.css'

const foods = [
  {
    name: "Food",
    description:
      "Arcu non odio euismod lacinia at quis risus sed vulputate odio ut enim blandit volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque in dictum",
    price: "15.5",
    imgSrc:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80",
  },
  {
    name: "Food 2",
    description:
      "Arcu non odio euismod lacinia at quis risus sed vulputate odio ut enim blandit volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque in dictum",
    price: "19.5",
    imgSrc:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80",
  },
];

const Cart = () => {
  return (
    <div style={{ margin: "100px" }}>
      <div className="cart-items">
        <CartItem food={foods[0]}></CartItem>
        <CartItem food={foods[1]}></CartItem>
      </div>
    </div>
  );
};

export default Cart;
