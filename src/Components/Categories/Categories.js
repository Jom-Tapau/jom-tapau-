import React from 'react';
import { Nav } from 'react-bootstrap';
import "./Categories.css";

const Categories = () => {
    return (
        <div >
            <Nav defaultActiveKey="#popular" className="flex-column categories">
                <Nav.Link className='link' href="#popular">Popular</Nav.Link>
                <Nav.Link className='link' eventKey="link-1">Set Meals</Nav.Link>
                <Nav.Link className='link' eventKey="link-2">BreakFast</Nav.Link>
                <Nav.Link className='link' eventKey="disabled">Lunch</Nav.Link>
                <Nav.Link className='link' eventKey="disabled">Drinks</Nav.Link>
            </Nav>
        </div>
    );
};

export default Categories;