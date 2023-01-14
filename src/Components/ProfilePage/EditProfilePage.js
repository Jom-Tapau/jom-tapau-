import React from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import "./EditProfile.css";

const EditProfilePage = () => {
   const  nameRef= useRef();
   const  phoneRef= useRef();
   const matricRef= useRef();
   const addressRef= useRef();
    const navigate = useNavigate();
    const submit = () => {
      const name = nameRef.current.value;
      const phone = phoneRef.current.value;
      const matric = matricRef.current.value;
      const address = addressRef.current.value;

        navigate("/profile");
    }
    const [user] = useAuthState(auth);
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
                                    <td class="profile"> <input ref={nameRef} style={{width:'110%'}} type="text" id="updateName" name="updateName" value="" /></td>
                                </tr>
                                <tr>
                                    <td class="profile">Email:</td>
                                    <td class="profile"> <input disabled style={{width: '110%'}} type="text" id="updateEmail" name="updateEmail" value=""/></td>
                                </tr>
                                <tr>
                                    <td class="profile">Role:</td>
                                    <td class="profile"> <input style={{width: '110%'}} disabled type="text" id="updateRole" name="updateRole" value=""/></td>
                                </tr>
                                <tr>
                                    <td class="profile">Phone Number:</td>
                                    <td class="profile"> <input ref={phoneRef} style={{width: '110%'}} type="text" id="updatePhone" name="updatePhone" value=""/></td>
                                </tr>
                                <tr>
                                    <td class="profile">Matric:</td>
                                    <td class="profile"> <input ref={matricRef} style={{width: '110%'}} type="text" id="updateMatric" name="updateMatric" value=""/></td>
                                </tr>
                                <tr>
                                    <td class="profile">Address:</td>
                                    <td class="profile"> <input ref={addressRef} style={{width: '110%'}} type="text" id="updateAddress" name="updateAddress" value=""/></td>
                                </tr>
                            </table>
                            <div style={{textAlign:'center'}}>
                                <button onClick={submit} type="submit" id="submit-btn" name="update">Submit</button>
                            </div>
                        </form>

                </div>
            </section>
        </div>
        </div>
    );
};

export default EditProfilePage;