import React from 'react';
import { Button, Form } from 'react-bootstrap';

const AddFood = () => {
    return (
        <div  style={{marginTop:"100px"}}>
                     <h1 className='text-danger '>Please Add a New Food Item</h1>
                     <br />
               <Form className='w-50 mx-auto '>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
   
        <Form.Control type="text" placeholder="Enter Food Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    
        <Form.Control type="text" placeholder="Enter Food Price" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    
        <Form.Control type="text" placeholder="Paste the Food Image URL" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    
    <Form.Control type="text" placeholder="Enter Food Category" />
  </Form.Group>
  <Button className='btn btn-danger'>Submit</Button>
    </Form>
        </div>
    );
};

export default AddFood;