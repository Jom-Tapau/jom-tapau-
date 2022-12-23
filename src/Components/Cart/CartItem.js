import React, { useEffect, useState } from "react";
import "./CartItem.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

const CartItem = (props) => {
const { cart,setCart, setCount, count}=props;
  const {_id, name, description, price, imgURL } = props.item;
  let {quantity} = props.item;

 const [quan, setQuan]=useState(0);

 const [itemPrice, setItemPrice]= useState(price);
useEffect(()=>{
  setQuan(quantity);
})
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
  setItemPrice(foodItem.quantity*price); 
  foodItem.quantity=parseInt(foodItem.quantity)-1;
   setQuan(foodItem.quantity);
   setCount(count-1);
   setItemPrice(foodItem.quantity*price); 
   console.log(foodItem.quantity);
  
  
  }


    const handleRemove=(item)=>{
      let productArr=[];
      const allProducts=cart.filter(product=> (product._id!==item._id  ));
     
      
  


      setCart(allProducts)
  
    }
    const valChange=(product)=>{
        
     
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
        <button onClick={()=>{handleRemove(props.item)
        } 
        }>remove</button>
      </div>

      <div className="price">
        <strong>RM {itemPrice}</strong>
      </div>
    </div>
  );
};

export default CartItem;
