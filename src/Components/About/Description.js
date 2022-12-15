import React from 'react';

const Description = () => {
    return (
        <div>
            <section className='d-flex justify-content-around mt-5' >
                <div className='w-50 '><img className='w-100 border  rounded' src="https://i.ibb.co/xfKv5cX/IMG-9318.jpg" alt="" /></div>
                <div className='w-50'>
                    <p className='text-danger' style={{ fontFamily: "'Ma Shan Zheng', cursive", opacity: "0.5", textAlign: "center", marginLeft: "50px", fontSize: "100px" }}><i>About</i></p>
                    <h1 style={{ color: 'grey' }}>Jom Tapau</h1>
                    <p style={{ textAlign: "center", marginRight: "50px", marginLeft: "50px", color: "grey" }}>
                        JOM TaPAU App is a
                        Pre-order food delivery platform.
                        <br />
                        It helps university students and working adults to afford
                        <br />
                        cheaper food delivery meals and services
                    </p>
                    <i className='fs-3'><p style={{ color: "grey" }}>Sunday to Thursday <b className='text-danger'>10am-5pm </b></p></i>
                </div>
            </section>
        </div>
    );
};

export default Description;