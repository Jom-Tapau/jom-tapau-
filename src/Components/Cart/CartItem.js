import React, { useState } from "react";
import "./CartItem.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

const CartItem = (props) => {
const { cart,setCart, setCount, count,handleRemove}=props;
  const {_id, name, description, price, imgURL } = props.item;
  let {quantity} = props.item;

 const [quan, setQuan]=useState(quantity);
 const [itemPrice, setItemPrice]= useState(price);

const handleIncrement=(item)=>{
item.quantity=parseInt(item.quantity)+1;

//setItemPrice(item.quantity*price);
 setQuan(item.quantity);
 setCount(count+1);


}
const handleDecrement=(foodItem)=>{
  if(foodItem.quantity==1)
  {
   
   setQuan(1);
   return;
  }
 // setItemPrice(foodItem.quantity*price); 
  foodItem.quantity=parseInt(foodItem.quantity)-1;
   setQuan(foodItem.quantity);
   setCount(count-1);
   setItemPrice(foodItem.quantity*price); 
   console.log(foodItem.quantity);
  
  
  }


  return (
    <div className="cart-item">
      <div className="item-name">
        <img src={imgURL} />
        <h4>{name}</h4>
      </div>

      <div className="quantity">
        <button onClick={()=>{
          handleDecrement(props.item)
        }}><FontAwesomeIcon icon={faMinus} /></button>
        <span>{quan}</span>
        <button  onClick={()=>{
          handleIncrement(props.item)
        }}><FontAwesomeIcon icon={faPlus} /></button>
        <button onClick={handleRemove
        }>remove</button>
      </div>

      <div className="price">
        <strong>RM {itemPrice}</strong>
      </div>
    </div>
  );
};

export default CartItem;
