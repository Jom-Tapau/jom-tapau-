import React from 'react';
import { Nav } from 'react-bootstrap';
import "./Categories.css";

const Categories = () => {
    return (
        <div className='categories'>
            <Nav defaultActiveKey="#popular" className="flex-column">
                <Nav.Link href="#popular">Popular</Nav.Link>
                <Nav.Link eventKey="link-1">Set Meals</Nav.Link>
                <Nav.Link eventKey="link-2">A la Carte</Nav.Link>
                <Nav.Link eventKey="disabled">Nasi</Nav.Link>
                <Nav.Link eventKey="disabled">Drinks</Nav.Link>
            </Nav>
        </div>
    );
};

export default Categories;