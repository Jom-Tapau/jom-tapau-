import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import "./EditProfile.css";

const EditProfilePage = () => {
    const navigate = useNavigate();
    const submit = () => {
        navigate("/profile");
    }
    const [user, loading, error] = useAuthState(auth);
    const [userDetails, setUserDetails]= useState('');
    
    const email = user?.email;
    
    //fetch the user from the database
    useEffect(() => {
      fetch("http://localhost:5000/findUser", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify( {email} ),
      })
        .then((response) => response.json())
        .then((data) => {
      console.log(data)
      setUserDetails(data);
        });
    }, [user]);
    return (
        <div>
        <div className='editprofile-container mb-3'>
            <section id="edit-container" class="edit-container">
                <div class="">
                    <div>
                        <h2 >Edit profile</h2>
                    </div>
                    <hr />
                        <form action="" method="post">
                            <table>
                                <tr>
                                    <td class="profile">Name: </td>
                                    <td class="profile"> <input  style={{width:'110%'}} type="text" id="updateName" name="updateName" value="" /></td>
                                </tr>
                                <tr>
                                    <td class="profile">Email:</td>
                                    <td class="profile"> <input style={{width: '110%'}} type="text" id="updateEmail" name="updateEmail" value=""/></td>
                                </tr>
                                <tr>
                                    <td class="profile">Role:</td>
                                    <td class="profile"> <input style={{width: '110%'}} disabled type="text" id="updateRole" name="updateRole" value=""/></td>
                                </tr>
                                <tr>
                                    <td class="profile">Phone Number:</td>
                                    <td class="profile"> <input style={{width: '110%'}} type="text" id="updatePhone" name="updatePhone" value=""/></td>
                                </tr>
                                <tr>
                                    <td class="profile">Matric:</td>
                                    <td class="profile"> <input style={{width: '110%'}} type="text" id="updateMatric" name="updateMatric" value=""/></td>
                                </tr>
                                <tr>
                                    <td class="profile">Address:</td>
                                    <td class="profile"> <input style={{width: '110%'}} type="text" id="updateAddress" name="updateAddress" value=""/></td>
                                </tr>
                            </table>
                            <div style={{textAlign:'center'}}>
                                <button type="submit" id="submit-btn" name="update">Submit</button>
                            </div>
                        </form>

                </div>
            </section>
        </div>
        </div>
    );
};

export default EditProfilePage;