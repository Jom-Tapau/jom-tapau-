import React, { useState } from "react";
import "./CartItem.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

const CartItem = (props) => {
const {incrementCount, cart,setCart}=props;
  const { name, description, price, imgURL } = props.item;
  let {quantity} = props.item;
  const newPrice = parseFloat(price);
  const [count, setCount] = useState(1);
  const [totalPrice, setTotalPrice] = useState(newPrice);
 const [quan, setQuan]=useState(quantity);
const handleIncrement=(item)=>{
item.quantity=parseInt(item.quantity)+1;
 setQuan(item.quantity);

}
const handleDecrement=(foodItem)=>{
  foodItem.quantity=parseInt(foodItem.quantity)-1;
   setQuan(foodItem.quantity);
   if(foodItem.quantity==0)
{
  const newCart=  cart.filter((item)=>(item._id !=foodItem._id ));
  
setCart(newCart);
}  
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
      </div>

      <div className="price">
        <strong>RM {totalPrice}</strong>
      </div>
    </div>
  );
};

export default CartItem;
