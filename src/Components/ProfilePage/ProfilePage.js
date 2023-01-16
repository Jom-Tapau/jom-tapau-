import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import "./ProfilePage.css";

const ProfilePage = () => {
    const navigate = useNavigate();
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
      
      setUserDetails(data);
        });
    }, [user]);
    const handleClick = () => {
        navigate(`/editprofile/${userDetails._id}`);
    }
    return (
        <div className='profile-container'>
            <section id="information-container" class="information-container">
                <div class="information-header">
                    <h2 style={{ marginLeft: '100px' }}>My Information</h2>
                    <button onClick={handleClick}><FontAwesomeIcon icon={faPenToSquare}></FontAwesomeIcon></button>
                </div>
                <hr></hr>
                <div class="information">
                    <div>
                        <img src="https://i.ibb.co/QQyzW1L/ezgif-com-gif-maker.jpg" alt="" style={{ width: '200px' }}  />
                    </div>
                </div>

                <div>
                    <table id="profile-table">
                        <tr>
                            <td class="profile">
                                Name:{userDetails.name}
                            </td>
                            <td class="profile">
                                <span id="name" class="data"></span>
                            </td>
                        </tr>
                        <tr>
                            <td class="profile">
                                Email:{user?.email}
                            </td>
                            <td class="profile">
                                <span id="email" class="data"></span>
                            </td>
                        </tr>
                        <tr>
                            <td class="profile">
                                Role:{userDetails.rider!="true"?<span>Customer</span>:<>{userDetails.role}</>}
                            </td>
                            <td class="profile">
                                <span id="role" class="data"></span>
                            </td>
                        </tr>

                        <tr>
                            <td class="profile">
                                Phone:{userDetails.phoneNumber}
                            </td>
                            <td class="profile">
                                <span id="phone" class="data"></span>
                            </td>
                        </tr>
                        <tr>
                            <td class="profile">
                                Matric:{userDetails.matricValue}
                            </td>
                            <td class="profile">
                                <span id="matric" class="data"></span>
                            </td>
                        </tr>
                        <tr>
                            <td class="profile">
                                Address: {userDetails.address}
                            </td>
                            <td class="profile">
                                <span id="address" class="data"></span>
                            </td>
                        </tr>
                    </table>
                </div>
            </section >
        </div >
    );
};

export default ProfilePage;