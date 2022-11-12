import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
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
        <Navbar.Brand href='#home'>React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link href='#home'>Home</Nav.Link>
            <Nav.Link href='#link'>Link</Nav.Link>
          </Nav>
          <Nav>
            {user ? (<Nav.Link onClick={handleSignOut} className='text-white' as={Link} to='/login'>Sign out</Nav.Link>) : 
                (<Nav.Link className='text-white' as={Link} to='/login'>Login</Nav.Link>)
            }
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Head
