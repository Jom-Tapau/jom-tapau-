import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

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
                        <td className="profile">Name:</td>
                        <td className="profile"> <input style={{width:"110%"}} type="text" id="updateName" name="updateName" value="<?php echo $fullname?>"/></td>
                    </tr>
                    <tr>
                        <td className="profile">Gender:</td>
                        <td className="profile"> 
                        <select id="updateGender" style={{width: "114%"}} name="updateGender">
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                        </td>
                    </tr>
                    <tr>
                        <td className="profile">Father Name:</td>
                        <td className="profile"> <input style={{width: "110%"}} type="text" id="updateFatherName" name="updateFatherName" value="<?php echo $fatherName?>"/></td>
                    </tr>
                    <tr>
                        <td className="profile">Mother Name:</td>
                        <td className="profile"> <input style={{width: "110%"}} type="text" id="updateMotherName" name="updateMotherName" value="<?php echo $motherName?>"/></td>
                    </tr>
                    <tr>
                        <td className="profile">Date of Birth:</td>
                        <td className="profile"> <input style={{width: "110%"}} type="date" placeholder="dd-mm-yyyy"  id="updateDOB" name="updateDOB" value="<?php echo $dob?>"/></td>
                    </tr>
                    <tr>
                        <td className="profile">Email:</td>
                        <td className="profile"> <input style={{width: "110%"}} type="text" id="updateEmail" name="updateEmail" value="<?php echo $email?>"/></td>
                    </tr>
                    <tr>
                        <td className="profile">Role:</td>
                        <td className="profile"> <input style={{width: "110%"}} disabled type="text" id="updateRole" name="updateRole" value="<?php echo $role?>"/></td>
                    </tr>
                   
                    <tr>
                        <td className="profile">Phone Number:</td>
                        <td className="profile"> <input style={{width: "110%"}} type="text" id="updatePhone" name="updatePhone" value="<?php echo $phone?>"/></td>
                    </tr>
                </table>
                <div style={{textAlign:"center"}}>
                    <button type="submit" id="submit-btn" onClick="submit()" name="update">Submit</button>
                </div>
            </form>
            
        </div>
    </section>
      </section>
    </div>
  );
};

export default UpdateFood;
