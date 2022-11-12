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
    
            <Navbar style={{backgroundColor:'rgb(255,75,75)'}} variant='dark' className='nav-bar'>
            <Nav><img style={{marginLeft:'100px'}} src='jomlogo.png' width='70' height='70'></img></Nav>
                <Container>
                    <Nav className='d-flex align-items-center'>
                        <Navbar.Brand as={Link} to="/home">
                        </Navbar.Brand>
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