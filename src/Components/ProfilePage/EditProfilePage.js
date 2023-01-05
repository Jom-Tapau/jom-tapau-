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