import React from 'react';

const ContactUs = () => {
    return (
        <div>
            <section className='d-flex justify-content-around mt-5' >
                <div className='w-50 '><img className='w-100 border  rounded' src="https://i.ibb.co/wcRm4kw/maps.jpg" alt="" /></div>
                <div className='w-50'>
                    <p className='text-danger' style={{ fontFamily: "'Ma Shan Zheng', cursive", opacity: "0.5", textAlign: "center", marginLeft: "50px", fontSize: "100px" }}><i>Contact Us</i></p>
                    <h1 style={{ color: 'grey' }}></h1>
                    <p style={{ textAlign: "center", marginRight: "50px", marginLeft: "50px", color: "grey" }}>
                    Pejabat Pos Universiti Teknologi Malaysia, LOT 9, L56, STUDENT MALL, 
                    <br />
                    81310 Skudai, Johor
                    <br /> <br />
                    Email : jomtapau.official@gmail.com
                    <br/>
                    Phone : 01169500561
                    </p>
                </div>
            </section>
        </div>
    );
};

export default ContactUs;