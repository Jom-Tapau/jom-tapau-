import React from 'react';
import "./EditProfile.css";

const EditProfilePage = () => {
    return (
        <div>
        <div className='editprofile-container'></div>
            <section id="edit-container" class="edit-container">
                <div class="box">
                    <div>
                        <h2>Edit profile</h2>
                    </div>
                    <hr />
                        <form action="" method="post">
                            <table>
                                <tr>
                                    <td class="profile">Name:</td>
                                    <td class="profile"> <input disabled style={{width:'110%'}} type="text" id="updateName" name="updateName" value="" /></td>
                                </tr>
                                <tr>
                                    <td class="profile">Gender:</td>
                                    <td class="profile">
                                        <select id="updateGender" style={{width: '114%'}} name="updateGender">
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="profile">Father Name:</td>
                                    <td class="profile"> <input style={{width: '110%'}} type="text" id="updateFatherName" name="updateFatherName" value=""/></td>
                                </tr>
                                <tr>
                                    <td class="profile">Mother Name:</td>
                                    <td class="profile"> <input style={{width: '110%'}} type="text" id="updateMotherName" name="updateMotherName" value=""/></td>
                                </tr>
                                <tr>
                                    <td class="profile">Date of Birth:</td>
                                    <td class="profile"> <input style={{width: '110%'}} type="date" placeholder="dd-mm-yyyy" id="updateDOB" name="updateDOB" value=""/></td>
                                </tr>
                                <tr>
                                    <td class="profile">Email:</td>
                                    <td class="profile"> <input style={{width: '110%'}} type="text" id="updateEmail" name="updateEmail" value=""/></td>
                                </tr>
                                <tr>
                                    <td class="profile">Role:</td>
                                    <td class="profile"> <input style={{width: '110%'}} disabled type="text" id="updateRole" name="updateRole" value=""/></td>
                                </tr>
                            </table>
                            <div style={{textAlign:'center'}}>
                                <button type="submit" id="submit-btn" onclick="submit()" name="update">Submit</button>
                            </div>
                        </form>

                </div>
            </section>
        </div>
    );
};

export default EditProfilePage;