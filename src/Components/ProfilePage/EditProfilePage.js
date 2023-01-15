import React from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import "./EditProfile.css";

const EditProfilePage = () => {
 
      const [user] = useAuthState(auth);
    const [userDetails, setUserDetails]= useState('');
    
    const email = user?.email;
    
    const navigate = useNavigate();
    const [userU, setUserU]= useState(userDetails);
    const handleChangeInput=(event)=>{

const field = event.target.name;
const value = event.target.value;
const updatedUser ={...userU};
updatedUser[field]=value;
setUserU(updatedUser);


    }
    const submit = (e) => {
e.preventDefault();

console.log(userU);
// fetch(`http://localhost:5000/user/${userDetails._id}`,{
// method:'PUT',
// headers:{
//     'content-type':'application/json'
// },
// body: JSON.stringify(userU)

// }).then(res=>res.json).then(data=>{
//     console.log(data)
// })
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
                                    <td class="profile"> <input onChange={handleChangeInput} style={{width:'110%'}} type="text" id="updateName" name="name" defaultValue={userDetails.name} /></td>
                                </tr>
                                <tr>
                                    <td class="profile">Email:</td>
                                    <td class="profile"> <input onChange={handleChangeInput}  disabled style={{width: '110%'}} type="text" id="updateEmail" name="email" defaultValue={userDetails.email}/></td>
                                </tr>
                                <tr>
                                    <td class="profile">Role:</td>
                                    <td class="profile"> <input onChange={handleChangeInput}  style={{width: '110%'}} disabled type="text" id="updateRole" name="role" defaultValue="role"/></td>
                                </tr>
                                <tr>
                                    <td class="profile">Phone Number:</td>
                                    <td class="profile"> <input onChange={handleChangeInput}  style={{width: '110%'}} type="text" id="updatePhone" name="phoneNumber" defaultValue={userDetails.phoneNumber}/></td>
                                </tr>
                                <tr>
                                    <td class="profile">Matric:</td>
                                    <td class="profile"> <input onChange={handleChangeInput}  style={{width: '110%'}} type="text" id="updateMatric" name="matricValue" defaultValue={userDetails.matricValue}/></td>
                                </tr>
                                <tr>
                                    <td class="profile">Address:</td>
                                    <td class="profile"> <input onChange={handleChangeInput}  defaultValue={userDetails.address} style={{width: '110%'}} type="text" id="updateAddress" name="address" /></td>
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