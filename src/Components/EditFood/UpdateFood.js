import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import "./UpdateFood.css";
import { useRef } from "react";
const UpdateFood = () => {
  const [food, singleFood] = useState({});
  const [imgurl, setImg] = useState("");
  const { foodID } = useParams();

  const foodName = useRef("");
  const price = useRef("");
  const category = useRef("");

  //load the food
  useEffect(() => {
    fetch(`http://localhost:5000/food/${foodID}`)
      .then((res) => res.json())
      .then((data) => {
        singleFood(data);
        setImg(data.imgURL);
      });
  },[]);
  /* 
        now using direct url of image to update the picture of the food
        later we will upload only the image to update the picture
    */
  const handleImageUrl = e =>{
    setImg(e.target.value)
  }
  
  // TODO: update the picture of the food
  const handleUpdateFood = (e) => {
    e.preventDefault();
    const name = foodName.current.value;
    const foodPirce = parseFloat(price.current.value);
    const foodCategory = category.current.value;
    const foodDetails = {
      name: name,
      category: foodCategory,
      price:foodPirce,
      imgURL:imgurl
    }
    console.log(foodDetails);

    fetch(`http://localhost:5000/food/${foodID}`,{
      method: 'PUT',
      headers:{
        'content-type': 'application/json',
      },
      body: JSON.stringify(foodDetails)
    })
    .then(res=>res.json())
    .then(data=>console.log(data))
  };
  return (
    <div style={{ paddingTop: "80px" }}>
      <h1>Update Food Details</h1>
      <section className="d-flex justify-content-center align-items-center w-100">
        <div className="me-5">
          <img
            style={{ width: "300px", height: "300px", borderRadius: "150px" }}
            src={imgurl||''}
            alt=""
          />
        </div>
        {/* edit food details */}
        <section id="edit-profile-container" className="edit-profile-container">
          <div className="box">
            <div>
              <h2>Food Details</h2>
            </div>
            <hr />
            <form action="" method="" onSubmit={handleUpdateFood}>
              <table>
                <tr>
                  <td className="profile">Food Name:</td>
                  <td className="profile">
                    {" "}
                    <input
                      ref={foodName}
                      style={{ width: "110%" }}
                      type="text"
                      id="updateName"
                      name="updateName"
                      defaultValue={food?.name}
                    />
                  </td>
                </tr>
                <tr>
                  <td className="profile">Price:</td>
                  <td className="profile">
                    <input
                    ref={price}
                      style={{ width: "110%" }}
                      type="text"
                      id="updateFatherName"
                      name="updateFatherName"
                      defaultValue={food?.price}
                    />
                  </td>
                </tr>
                <tr>
                  <td className="profile">URL:</td>
                  <td className="profile">
                    {" "}
                    <input
                      style={{ width: "110%" }}
                      type="text"
                      defaultValue={food?.imgURL}
                      onChange={handleImageUrl}
                    />
                  </td>
                </tr>
                <tr>
                  <td className="profile">Category:</td>
                  <td className="profile">
                    {" "}
                    <input
                      ref={category}
                      style={{ width: "110%" }}
                      type="text"
                      id="updateEmail"
                      name="updateEmail"
                      defaultValue={food.category}
                    />
                  </td>
                </tr>
              </table>
              <div style={{ textAlign: "center" }}>
                <button type="submit" id="submit-btn" name="update">
                  Update
                </button>
              </div>
            </form>
          </div>
        </section>
      </section>
    </div>
  );
};

export default UpdateFood;
