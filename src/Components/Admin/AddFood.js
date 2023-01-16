import alertify from "alertifyjs";
import React, { useState } from "react";
import { useRef } from "react";
import { Form } from "react-bootstrap";

const AddFood = () => {
  const nameRef = useRef();
  const priceRef = useRef();
  const catRef = useRef();
  const [loading, setLoading] = useState(false);
  const [img, setImg] = useState("");
  console.log(img);
  const handleAddFood = (event) => {
    event.preventDefault();
    setLoading(true);
    const name = nameRef.current.value;
    const price = priceRef.current.value;

    const category = catRef.current.value;
    let quantity = 1;
    const user = { name, price, category, quantity, img };

    const imgStorage_key = "b2be4bbba48e721660728e1b0dec1ba3";
    const image = img;
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imgStorage_key}`;
    fetch(url, { method: "POST", body: formData })
      .then((res) => res.json())
      .then((result) => { 
  
        if (result.success == true) {
          const foodImage = result.data;
          const foodInfo = {
            name: user.name,
            email: user.email,
            price:user.price,
            category: user.category,
            quantity: user.quantity,
            imgURL: foodImage.url,
          };
          fetch("http://localhost:5000/food", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(foodInfo),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log("success", data);
              setLoading(false);
              alertify.success("Food Item Added Successfully");
              nameRef.current.value = "";
              priceRef.current.value = "";
              catRef.current.value = "";
              setImg("");
            });

          console.log(foodInfo);
        }
      });
  };

  return (
    <div style={{ marginTop: "100px" }}>
      
      <h1 className="text-danger ">Please Add a New Food Item</h1>
      <br />
      <form onSubmit={handleAddFood} className="w-50 mx-auto ">
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Control
            required
            ref={nameRef}
            type="text"
            placeholder="Enter Food Name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Control
            required
            ref={priceRef}
            type="text"
            placeholder="Enter Food Price"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Control
            required
            onChange={(e) => setImg(e.target.files[0])}
            type="file"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <select
            class="form-select"
            ref={catRef}
            aria-label="Default select example"
          >
            <option selected>Choose Food Category</option>
            <option value="BreakFast">BreakFast</option>
            <option value="Lunch">Lunch</option>
            <option value="Drinks">Drinks</option>
          </select>
        </Form.Group>

        <input className="btn btn-danger" type="submit" name="" id="" />
      </form>
      {
        loading==true? <div><div class="spinner-border text-danger" role="status">
        <span class="visually-hidden">Loading...</span>
      </div></div>:<></>
      }
    </div>
  );
};

export default AddFood;
