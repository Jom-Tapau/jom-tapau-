import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Head.css";

const Head = () => {
    return (
        <div>
            <Navbar bg='danger' variant='dark' className='nav-bar'>
                <Container>
                    <Nav>
                        <Navbar.Brand as={Link} to="/home">JomTapau</Navbar.Brand>
                        <Nav.Link className='text-white' as={Link} to="/menu">Menu</Nav.Link>
                        <Nav.Link className='text-white' as={Link} to="/data">About</Nav.Link>
                    </Nav>
                    <Nav className=''>
                        <Nav.Link className='text-white' as={Link} to="/login">Login</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Head;
