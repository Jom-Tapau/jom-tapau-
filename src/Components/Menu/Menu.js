import React, { useLayoutEffect } from 'react'
import Categories from '../Categories/Categories'
import Item from '../Item/Item'
import './Menu.css'
import Helmet from 'react-helmet';
import { useState } from 'react';
import { useEffect } from 'react';
import { Nav } from 'react-bootstrap';

// const foods = [
//   {
//     name: 'Food',
//     description:
//       'Arcu non odio euismod lacinia at quis risus sed vulputate odio ut enim blandit volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque in dictum',
//     price: '15.5',
//     imgSrc:
//       'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80'
//   },
//   {
//     name: 'Food',
//     description:
//       'Arcu non odio euismod lacinia at quis risus sed vulputate odio ut enim blandit volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque in dictum',
//     price: '15.5',
//     imgSrc:
//       'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80'
//   },
//   {
//     name: 'Food',
//     description:
//       'Arcu non odio euismod lacinia at quis risus sed vulputate odio ut enim blandit volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque in dictum',
//     price: '15.5',
//     imgSrc:
//       'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80'
//   },
//   {
//     name: 'Food',
//     description:
//       'Arcu non odio euismod lacinia at quis risus sed vulputate odio ut enim blandit volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque in dictum',
//     price: '15.5',
//     imgSrc:
//       'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80'
//   },
//   {
//     name: 'Food',
//     description:
//       'Arcu non odio euismod lacinia at quis risus sed vulputate odio ut enim blandit volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque in dictum',
//     price: '15.5',
//     imgSrc:
//       'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80'
//   },
//   {
//     name: 'Food',
//     description:
//       'Arcu non odio euismod lacinia at quis risus sed vulputate odio ut enim blandit volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque in dictum',
//     price: '15.5',
//     imgSrc:
//       'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80'
//   },
//   {
//     name: 'Food',
//     description:
//       'Arcu non odio euismod lacinia at quis risus sed vulputate odio ut enim blandit volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque in dictum',
//     price: '15.5',
//     imgSrc:
//       'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80'
//   },
//   {
//     name: 'Food',
//     description:
//       'Arcu non odio euismod lacinia at quis risus sed vulputate odio ut enim blandit volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque in dictum',
//     price: '15.5',
//     imgSrc:
//       'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80'
//   },
//   {
//     name: 'Food',
//     description:
//       'Arcu non odio euismod lacinia at quis risus sed vulputate odio ut enim blandit volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque in dictum',
//     price: '15.5',
//     imgSrc:
//       'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80'
//   },
//   {
//     name: 'Food',
//     description:
//       'Arcu non odio euismod lacinia at quis risus sed vulputate odio ut enim blandit volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque in dictum',
//     price: '15.5',
//     imgSrc:
//       'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80'
//   },
//   {
//     name: 'Food',
//     description:
//       'Arcu non odio euismod lacinia at quis risus sed vulputate odio ut enim blandit volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque in dictum',
//     price: '15.5',
//     imgSrc:
//       'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80'
//   },
//   {
//     name: 'Food',
//     description:
//       'Arcu non odio euismod lacinia at quis risus sed vulputate odio ut enim blandit volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque in dictum',
//     price: '15.5',
//     imgSrc:
//       'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80'
//   }
// ]

const Menu = () => {
  const [foods,setFood]= useState([]);
  const [isLoading,setLoading]= useState(true);


useEffect(()=>{
  setLoading(true);
  fetch('https://jom-tapau-backend.onrender.com/food').then(res=>res.json()).then(data=>setFood(data));
  setLoading(false);

},[isLoading])

const clickDrinks=()=>{


  var drink = "Drinks";
const Drinks = foods.filter(food=>food.category==drink);
setFood(Drinks);

}

  const  clickLunch= ()=>{

  

  var lunch ="Lunch";
  const Lunch = foods.filter(food=>food.category==lunch);
  setFood(Lunch);


  
  
    }

  return (
    <div className="menu">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Menu-Jom Tapau</title>
      </Helmet>
   
      <div >
            <Nav defaultActiveKey="#popular" className="flex-column categories">
                <Nav.Link className='link' href="#popular">Popular</Nav.Link>
                <Nav.Link  className='link' eventKey="link-1">All Items</Nav.Link>
                <Nav.Link className='link' eventKey="link-2">BreakFast</Nav.Link>
                <Nav.Link onClick={clickLunch} className='link' eventKey="disabled">Lunch</Nav.Link>
                <Nav.Link onClick={clickDrinks} className='link'>Drinks</Nav.Link>
            </Nav>
        </div>
      <div className='items'>
        <div className='row'>
          {foods.map(food => (
            <div className='col-lg-4 col-md-6 col-sm-12'>
              <Item food={food}></Item>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu
