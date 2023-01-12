import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./ProfilePage.css";

const ProfilePage = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/editprofile");
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
                                Name:
                            </td>
                            <td class="profile">
                                <span id="name" class="data"></span>
                            </td>
                        </tr>
                        <tr>
                            <td class="profile">
                                Email:
                            </td>
                            <td class="profile">
                                <span id="email" class="data"></span>
                            </td>
                        </tr>
                        <tr>
                            <td class="profile">
                                Role:
                            </td>
                            <td class="profile">
                                <span id="role" class="data"></span>
                            </td>
                        </tr>

                        <tr>
                            <td class="profile">
                                Phone:
                            </td>
                            <td class="profile">
                                <span id="phone" class="data"></span>
                            </td>
                        </tr>
                        <tr>
                            <td class="profile">
                                Matric:
                            </td>
                            <td class="profile">
                                <span id="matric" class="data"></span>
                            </td>
                        </tr>
                        <tr>
                            <td class="profile">
                                Address:
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