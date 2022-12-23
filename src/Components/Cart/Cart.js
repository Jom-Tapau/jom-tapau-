import React from "react";
import CartItem from "./CartItem";
import "./Cart.css";
import { Button } from "bootstrap";



const Cart = ({cart, incrementCount, setCart}) => {
  return (
    <div style={{ margin: "100px" }}>
      <div className="cart-items">
       Cart Length:{cart.length}
       {cart.map((item)=>(
        
          <CartItem setCart={setCart} cart={cart} incrementCount={incrementCount} item={item}></CartItem>
         
       ))

       }
    
      </div>

      <hr className="line" />

      <div className="total">
          <div className="total-row">
            <span>Subtotal:</span> <span>RM 18.00</span>
          </div>
          <div className="total-row">
            <span>Delivery:</span> <span>RM 1.00</span>
          </div>
          <div className="total-row grand-total">
            <span>Total:</span> <span>RM 19.00</span>
          </div>
          <button className="checkout">Proceed to payment</button>
      </div>
    </div>
  );
};

export default Cart;
