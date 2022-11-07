import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Navbar bg='danger' variant='dark'>
                <Container>
                    <Nav>
                        <Navbar.Brand as={Link} to="/home">JomTapau</Navbar.Brand>
                        <Nav.Link className='text-white' as={Link} to="/home">Menu</Nav.Link>
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

export default Header;