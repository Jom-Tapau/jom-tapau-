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
  return (
    <div>
      <Navbar bg='danger' expand='lg' className='nav-bar'>
        <Container>
        <Nav>
        <Nav.Link className='text-white nav-link fs-5' as={Link} to="/home">Jom Tapau</Nav.Link>
        </Nav>

        <Navbar.Toggle style={{color:'white'}} aria-controls='basic-navbar-nav' />
        <Navbar.Collapse  id='basic-navbar-nav'>
          <Nav className='me-auto d-flex align-items-center'>
            <NavLink className='text-white nav-link fs-5' as={Link} to="/menu">Menu</NavLink>
            <NavLink className='text-white nav-link fs-5' as={Link} to="/about">About</NavLink>
          </Nav>
          <Nav>
            {user ? (<Nav.Link onClick={handleSignOut} className='text-white nav-link fs-5' as={Link} to='/login'>Sign out</Nav.Link>) : 
                (<Nav.Link className='text-white nav-link fs-5' as={Link} to='/login'>Login</Nav.Link>)
            }
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Head
