import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import './UpdateFood.css';
const UpdateFood = () => {
  const [food, singleFood] = useState({});
  const { foodID } = useParams();
  useEffect(() => {
    fetch(`http://localhost:5000/food/${foodID}`)
      .then((res) => res.json())
      .then((data) => singleFood(data));
  }, []);
  /* 
        now using direct url of image to update the picture of the food
        later we will upload only the image to update the picture
    */
  // TODO: update the picture of the food
  return (
    <div style={{ paddingTop: "80px" }}>
      <h1>Update Food Details</h1>
      <section className="d-flex justify-content-center align-items-center w-100">
        <div className="me-5">
          <img
            style={{ width: "300px", height: "300px", borderRadius: "150px" }}
            src="https://i.ibb.co/m86djbX/nasigorengayam.jpg"
            alt=""
          />
        </div>
        {/* edit food details */}
        <section id="edit-profile-container" className="edit-profile-container">
        <div className="box">
            <div>
                <h2>Edit profile</h2>
            </div>
            <hr/>
            <form action="" method="post">
                <table>
                    <tr>
                        <td  className="profile">Food Name:</td>
                        <td className="profile"> <input style={{width:"110%"}} type="text" id="updateName" name="updateName" value="<?php echo $fullname?>"/></td>
                    </tr>
                    <tr>
                        <td className="profile">Price:</td>
                        <td className="profile"> <input style={{width: "110%"}} type="text" id="updateFatherName" name="updateFatherName" value="<?php echo $fatherName?>"/></td>
                    </tr>
                    <tr>
                        <td className="profile">URL:</td>
                        <td className="profile"> <input style={{width: "110%"}} type="text" id="updateMotherName" name="updateMotherName" value="<?php echo $motherName?>"/></td>
                    </tr>
                    <tr>
                        <td className="profile">Category:</td>
                        <td className="profile"> <input style={{width: "110%"}} type="text" id="updateEmail" name="updateEmail" value="<?php echo $email?>"/></td>
                    </tr>
                </table>
                <div style={{textAlign:"center"}}>
                    <button type="submit" id="submit-btn" name="update">Update</button>
                </div>
            </form>
            
        </div>
    </section>
      </section>
    </div>
  );
};

export default UpdateFood;
