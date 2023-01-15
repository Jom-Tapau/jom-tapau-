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
      const [user] = useAuthState(auth);
    const [userDetails, setUserDetails]= useState('');
    
    const email = user?.email;
    
    const navigate = useNavigate();
    const [userU, setUserU]= useState(userDetails);
    const submit = (e) => {
e.preventDefault();
      const name = nameRef.current.value;
      const phone = phoneRef.current.value;
      const matric = matricRef.current.value;
      const address = addressRef.current.value;
console.log(userDetails);
fetch(`http://localhost:5000/user/${userDetails._id}`,{
    
})
        navigate("/profile");
    }
 
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
                        <form onSubmit={submit}>
                            <table>
                                <tr>
                                    <td class="profile">Name: </td>
                                    <td class="profile"> <input ref={nameRef} style={{width:'110%'}} type="text" id="updateName" name="updateName" defaultValue={userDetails.name} /></td>
                                </tr>
                                <tr>
                                    <td class="profile">Email:</td>
                                    <td class="profile"> <input disabled style={{width: '110%'}} type="text" id="updateEmail" name="updateEmail" defaultValue={userDetails.email}/></td>
                                </tr>
                                <tr>
                                    <td class="profile">Role:</td>
                                    <td class="profile"> <input style={{width: '110%'}} disabled type="text" id="updateRole" name="updateRole" defaultValue="role"/></td>
                                </tr>
                                <tr>
                                    <td class="profile">Phone Number:</td>
                                    <td class="profile"> <input ref={phoneRef} style={{width: '110%'}} type="text" id="updatePhone" name="updatePhone" defaultValue={userDetails.phoneNumber}/></td>
                                </tr>
                                <tr>
                                    <td class="profile">Matric:</td>
                                    <td class="profile"> <input ref={matricRef} style={{width: '110%'}} type="text" id="updateMatric" name="updateMatric" defaultValue={userDetails.matricValue}/></td>
                                </tr>
                                <tr>
                                    <td class="profile">Address:</td>
                                    <td class="profile"> <input ref={addressRef} defaultValue={userDetails.address} style={{width: '110%'}} type="text" id="updateAddress" name="updateAddress" /></td>
                                </tr>
                            </table>
                            <div style={{textAlign:'center'}}>
                                <button  type="submit" id="submit-btn" name="update">Submit</button>
                            </div>
                        </form>

                </div>
            </section>
        </div>
        </div>
    );
};

export default EditProfilePage;