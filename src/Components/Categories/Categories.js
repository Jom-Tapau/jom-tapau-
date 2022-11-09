import React from 'react';
import { Nav } from 'react-bootstrap';

const Categories = () => {
    return (
        <div className='categories'>
            <Nav defaultActiveKey="/home" className="flex-column">
                <Nav.Link href="/home">Popular</Nav.Link>
                <Nav.Link eventKey="link-1">Set Meals</Nav.Link>
                <Nav.Link eventKey="link-2">A la Carte</Nav.Link>
                <Nav.Link eventKey="disabled">Nasi</Nav.Link>
                <Nav.Link eventKey="disabled">Drinks</Nav.Link>
            </Nav>
        </div>
    );
};

export default Categories;