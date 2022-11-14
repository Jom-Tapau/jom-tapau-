import React from 'react';
import { Form } from 'react-bootstrap';

const AddFood = () => {
    return (
        <div  style={{marginTop:"100px"}}>
                     <h1 className='text-danger'>Please Add a New Food Item</h1>
               <Form className='w-50 mx-auto'>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
    </Form>
        </div>
    );
};

export default AddFood;