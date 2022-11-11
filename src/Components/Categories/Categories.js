import React, { useState } from 'react';
import { Button, Collapse, Nav } from 'react-bootstrap';
import "./Categories.css";

const Categories = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className='categories-container'>
            <Button
                onClick={() => setOpen(!open)}
                aria-controls="collapse-nav"
                aria-expanded={open}
            >
                click
            </Button>
            <div style={{ minHeight: '150px' }}>
                <Collapse in={open} dimension="width">
                    <div id='collapse-nav'>
                        <Nav defaultActiveKey="#popular" className="categories flex-column">
                            <Nav.Link className='link' href="#popular">Popular</Nav.Link>
                            <Nav.Link className='link' eventKey="link-1">Set Meals</Nav.Link>
                            <Nav.Link className='link' eventKey="link-2">A la Carte</Nav.Link>
                            <Nav.Link className='link' eventKey="disabled">Nasi</Nav.Link>
                            <Nav.Link className='link' eventKey="disabled">Drinks</Nav.Link>
                        </Nav>
                    </div>
                </Collapse>
            </div>
        </div>
    );
};

export default Categories;