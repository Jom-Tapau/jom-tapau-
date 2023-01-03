import React from 'react';

const ProfilePage = () => {
    return (
        <div style={{marginTop:'80px'}}>
            <section id="information-container" class="information-container">
                <div class="information-header">
                    <h2 style={{marginLeft: '100px'}}>My Information</h2>
                    <i title="Edit Profile" style={{marginRight: '100px' , cursor: 'pointer'}} class="fa-solid fa-pen-to-square"></i>
                </div>
                <hr></hr>
                <div class="information">
                    <div>
                        <img style={{width:'200px'}} src="https://spesialis1.orthopaedi.fk.unair.ac.id/wp-content/uploads/2021/02/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg" alt="" />
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
                                    Gender:
                                </td>
                                <td class="profile">
                                    <span id="gender" class="data"></span>
                                </td>
                            </tr>
                            <tr>
                                <td class="profile">
                                    Father Name:
                                </td>
                                <td class="profile">
                                    <span id="fatherName" class="data"></span>
                                </td>
                            </tr>
                            <tr>
                                <td class="profile">
                                    Mother Name:
                                </td>
                                <td class="profile">
                                    <span id="motherName" class="data"></span>
                                </td>
                            </tr>
                            <tr>
                                <td class="profile">
                                    date of Birth:
                                </td>
                                <td class="profile">
                                    <span id="dob" class="data"></span>
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
                        </table>
                    </div>
                </div>
                <form action="" method="post">
                    <div style={{textAlign:'center', paddingBottom:'30px'}}>
                        <button style={{ backgroundColor:'#0a0a23',color: '#fff',border:'none',borderRadius:'10px',padding:'15px',minHeight:'30px', cursor: 'pointer'}} id="leave-application"> <i style={{marginRight:'5px'}} class="fa-solid fa-arrow-right-from-bracket"></i>Leave Application</button>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default ProfilePage;