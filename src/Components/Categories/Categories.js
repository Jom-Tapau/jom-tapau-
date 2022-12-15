import React, { useEffect, useState } from 'react';
import { Nav } from 'react-bootstrap';
import Item from '../Item/Item';
import "./Categories.css";

const Categories = () => {
    const [foods,setFood]= useState([]);

    const clickDrinks=()=>{
        foods.filter(food=>food.category=="Drinks"?  <div className='col-lg-4 col-md-6 col-sm-12'>
        <Item food={food}></Item>
      </div>:<></>)
    }
    return (
        <div >
            <Nav defaultActiveKey="#popular" className="flex-column categories">
                <Nav.Link className='link' href="#popular">Popular</Nav.Link>
                <Nav.Link className='link' eventKey="link-1">Set Meals</Nav.Link>
                <Nav.Link className='link' eventKey="link-2">BreakFast</Nav.Link>
                <Nav.Link className='link' eventKey="disabled">Lunch</Nav.Link>
                <Nav.Link onClick={clickDrinks} className='link'>Drinks</Nav.Link>
            </Nav>
        </div>
    );
};

export default Categories;