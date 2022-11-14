import React from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Admin = () => {
    return (
        <div  style={{marginTop:"100px"}}>
        <h1 className='text-danger mb-5'>What would you like to do today?</h1>
        
<div className='d-flex justify-content-lg-center'>
<div className='me-5'>
    <Card style={{ width: '180px',  }}>
      <Card.Img  style={{width:"200px", height:"200px"}} variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUK7-fzWVB5Te59sLIGJA4eD2Nrn7hZ5R_kw&usqp=CAU" />
      <Card.Body>
        
      
        <Button as={Link} to="/addfood" variant="danger">Add a Food Item</Button>
      </Card.Body>
    </Card>
    </div>
    <div className='me-5'>
    <Card style={{ width: '180px',  }}>
      <Card.Img style={{width:"200px",height:"200px"}}  variant="top" src="https://m.media-amazon.com/images/I/81hkHb88xoL._SX355_.jpg" />
      <Card.Body>
        
      
        <Button variant="danger">Add a Rider</Button>
      </Card.Body>
    </Card>
    </div>
    <div className='me-5'>
    <Card style={{ width: '180px',  }}>
      <Card.Img style={{width:"200px",height:"200px"}} variant="top" src="https://miro.medium.com/max/512/1*lxnwe1wohMGnGA-qItmpXw.png" />
      <Card.Body>
        
      
        <Button variant="danger">Edit User</Button>
      </Card.Body>
    </Card>
    </div>
</div>
        </div>
    );
};

export default Admin;