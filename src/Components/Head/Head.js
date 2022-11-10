import React from 'react';
import { useAuthState  } from 'react-firebase-hooks/auth'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
import './Head.css';
import Loading from '../Loading/Loading';

const Head = () => {
    const [user, loading, error] = useAuthState(auth); 

    if(loading){
        return <Loading></Loading>
    }

    const handleSignOut = () =>{
        signOut(auth);
    }
    return (
        <div>
            <Navbar bg='danger' variant='dark' className='nav-bar'>
                <Container>
                    <Nav>
                        <Navbar.Brand as={Link} to="/home">JomTapau</Navbar.Brand>
                        <Nav.Link className='text-white' as={Link} to="/menu">Menu</Nav.Link>
                        <Nav.Link className='text-white' as={Link} to="/about">About</Nav.Link>
                    </Nav>
                    <Nav className=''>
                        {
                            user?  <Nav.Link onClick={handleSignOut} className='text-white' as={Link} to="/login">Sign out</Nav.Link>:<Nav.Link className='text-white' as={Link} to="/login">Login</Nav.Link>
                           
                        }
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Head;