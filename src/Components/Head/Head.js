import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'
import auth from '../../firebase.init'
import { signOut } from 'firebase/auth'
import './Head.css'
import Loading from '../Loading/Loading'

const Head = () => {
  const [user, loading, error] = useAuthState(auth)

  if (loading) {
    return <Loading></Loading>
  }

  const handleSignOut = () => {
    signOut(auth)
  }
  const hehe = ({ isActive }) => {
    return {
      borderBottom: isActive ? "1px solid" : "",
    };
  }
  return (
    <div>
      <Navbar bg='danger' expand='lg' className='nav-bar'>
        <Container>
        <Nav>
        <NavLink className='text-white nav-link fs-5 me-5' as={Link} to="/menu">Jom Tapau</NavLink>
        </Nav>

        <Navbar.Toggle style={{color:'white'}} aria-controls='basic-navbar-nav' />
        <Navbar.Collapse  id='basic-navbar-nav'>
          <Nav className='me-auto d-flex align-items-center'>
            <NavLink style={hehe} className='text-white nav-link fs-5' as={Link} to="/menu">Menu</NavLink>
            <NavLink style={hehe} className='text-white nav-link fs-5' as={Link} to="/about">About</NavLink>
          </Nav>
          <Nav className='nav-container'>
            {user ? (<NavLink style={hehe} onClick={handleSignOut} className='text-white nav-link fs-5' as={Link} to='/login'>Sign out</NavLink>) : 
                (<NavLink style={hehe} className='text-white nav-link fs-5' as={Link} to='/login'>Login</NavLink>)
            }
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Head
