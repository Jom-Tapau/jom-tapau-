import React from 'react';
import { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';

const AddFood = () => {
  const nameRef= useRef();
  const priceRef= useRef();
  const catRef= useRef();
  const imgRef= useRef();
const handleAddFood=(event)=>{
  
  event.preventDefault();
  const name = nameRef.current.value;
  const price = priceRef.current.value;
  const imgURL = imgRef.current.value;
  const category = catRef.current.value;
 const  user={name, price, imgURL,category};
  fetch("http://localhost:5000/food",{
    method: 'POST',
    headers:{
      'Content-Type':'application/json',
    },
    body:JSON.stringify(user),
  }).then(
    res=>res.json()
  ).then(data=>console.log("success",data));
}

    return (
        <div  style={{marginTop:"100px"}}>
                     <h1 className='text-danger '>Please Add a New Food Item</h1>
                     <br />
               <Form className='w-50 mx-auto '>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
   
        <Form.Control ref={nameRef} type="text" placeholder="Enter Food Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    
        <Form.Control ref={priceRef}  type="text" placeholder="Enter Food Price" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    
        <Form.Control ref={imgRef}  type="text" placeholder="Paste the Food Image URL" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    
    <Form.Control ref={catRef}  type="text" placeholder="Enter Food Category" />
  </Form.Group>
  <Button onClick={handleAddFood} className='btn btn-danger'>Submit</Button>
    </Form>
        </div>
    );
};

export default AddFood;