import React, { useLayoutEffect } from 'react'
import Categories from '../Categories/Categories'
import Item from '../Item/Item'
import './Menu.css'
import Helmet from 'react-helmet';
import { useState } from 'react';
import { useEffect } from 'react';
import { Nav, Spinner } from 'react-bootstrap';



const Menu = ({handleAddtoCart}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [foods,setFood]= useState([]);
  const [foodBackup,setFoodBackup]= useState([]);

useEffect(()=>{
 setIsLoading(true);
  fetch('http://localhost:5000/food').then(res=>res.json()).then(data=>{
    setFood(data);
    setFoodBackup(data);
    setIsLoading(false);
  });

  
  

},[])

const clickDrinks= ()=>{
  setFood(foodBackup);
const Drinks =  foodBackup.filter(food=>food.category=="Drinks");
setFood(Drinks);


}

const  clickBreakFast= ()=>{
  setFood(foodBackup);
  const BreakFast = foodBackup.filter(food=>food.category=="BreakFast");
  setFood(BreakFast);
  

  }
  const  clickLunch= ()=>{
    setFood(foodBackup);
    const Lunch = foodBackup.filter(food=>food.category=="Lunch");
    setFood(Lunch);
    

    }

    const  clickAll= ()=>{
      setFood(foodBackup);
      const All = foodBackup.map(food=>{
        <p key={food._id}></p>
        return food
      });
      setFood(All);
     
  
      }
  return (
    <div className="menu">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Menu-Jom Tapau</title>
      </Helmet>

      <div >
            <Nav defaultActiveKey="#popular" className="flex-column categories">
                <Nav.Link   className='link' href="#popular">Popular</Nav.Link>
                <Nav.Link onClick={clickAll} className='link' eventKey="link-1">All Items</Nav.Link>
                <Nav.Link onClick={clickBreakFast} className='link' eventKey="link-2">BreakFast</Nav.Link>
                <Nav.Link onClick={clickLunch} className='link' eventKey="disabled">Lunch</Nav.Link>
                <Nav.Link onClick={clickDrinks} className='link'>Drinks</Nav.Link>
            </Nav>
        </div>
        {
      isLoading? 
     <div className='w-100'>
  

<div className="spinner-grow text-danger" role="status">
  <span className="sr-only">Loading...</span>
</div>
<div className="spinner-grow text-danger" role="status">
  <span className="sr-only">Loading...</span>
</div>
<div className="spinner-grow text-danger" role="status">
  <span className="sr-only">Loading...</span>
</div>
<div className="spinner-grow text-danger" role="status">
  <span className="sr-only">Loading...</span>
</div>
<div className="spinner-grow text-danger" role="status">
  <span className="sr-only">Loading...</span>
</div>
<div className="spinner-grow text-danger" role="status">
  <span className="sr-only">Loading...</span>
</div>

     </div>:<></>
  }
 
      <div className='items'>
      
        <div className='row'>
          {foods.map(food => (
            <div className='col-lg-4 col-md-6 col-sm-12'>
              <Item handleAddtoCart={handleAddtoCart} food={food} key={food._id}></Item>
            </div>
          ))}
        </div>
      </div>
     
    </div>
  );
};

export default Menu;
