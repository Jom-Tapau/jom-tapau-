import alertify from 'alertifyjs';
import React, { useState } from 'react';
import { useRef } from 'react';
import {   Form } from 'react-bootstrap';

const AddFood = () => {
  const nameRef= useRef();
  const priceRef= useRef();
  const catRef= useRef();
  const imgRef= useRef();
  const [img, setImg]= useState('');
  console.log(img);
const handleAddFood=(event)=>{
  
  event.preventDefault();
  const name = nameRef.current.value;
  const price = priceRef.current.value;
  const imgURL = imgRef.current.value;
  const category = catRef.current.value;
  let quantity =1;
 const  user={name, price,imgURL,category, quantity,img};

  console.log(user, user.img[0]);
  const imgStorage_key ='b2be4bbba48e721660728e1b0dec1ba3';
  const image = user.img;
  const formData = new FormData();
  formData.append("image", image);
  const url =`https://api.imgbb.com/1/upload?key=${imgStorage_key}`;
fetch(url,{method:'POST',
body:formData
}).then(res=>res.json()).then(result=>{
console.log("imgbb:",result);
})

 
  fetch("http://localhost:5000/food",{
    method: 'POST',
    headers:{
      'Content-Type':'application/json',
    },
    body:JSON.stringify(user),
  }).then(
    res=>res.json()
  ).then(data=>{console.log("success",data);

alertify.success("Food Item Added Successfully");
  

});
  nameRef.current.value= "";
  priceRef.current.value= "";
  imgRef.current.value= "";
  catRef.current.value= "";
  
}

    return (
        <div  style={{marginTop:"100px"}}>
                     <h1 className='text-danger '>Please Add a New Food Item</h1>
                     <br />
               <form onSubmit={handleAddFood} className='w-50 mx-auto '>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
   
        <Form.Control required ref={nameRef} type="text" placeholder="Enter Food Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    
        <Form.Control required ref={priceRef}  type="text" placeholder="Enter Food Price" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    
        <Form.Control required ref={imgRef}  type="text" placeholder="Paste the Food Image URL" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    
    <Form.Control required onChange={(e)=>setImg(e.target.files[0])}  type="file" placeholder="Paste the Food Image URL" />
    
  </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">

<select class="form-select" ref={catRef} aria-label="Default select example">
  <option selected>Choose Food Category</option>
  <option value="BreakFast">BreakFast</option>
  <option value="Lunch">Lunch</option>
  <option value="Drinks">Drinks</option>
</select>
   
  </Form.Group>

  <input className='btn btn-danger' type="submit" name="" id="" />
    </form>

        </div>
    );
};

export default AddFood;