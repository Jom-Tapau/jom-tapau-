import React from 'react';

const About = () => {
    return (
        <div style={{marginTop:"100px"}}>
            
            <section className=''>

            <p className='text-danger' style={{fontFamily:"'Ma Shan Zheng', cursive",opacity:"0.5",textAlign:"center",marginLeft:"50px", fontSize:"100px"}}><i>About</i></p>
            
            <section class="section about-section gray-bg" id="about">
            <div class="container">
                <div class="row align-items-center flex-row-reverse">
                    <div class="col-lg-6">
                        <div class="about-text go-to">
                            <h6 class="theme-color lead">dagagag &amp; adaga gdag ggagag</h6>
                            <p>hobe kisu ekta pore dekbo eita </p>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="about-avatar">
                        <div className='w-100'><img className='w-100 border  rounded' src="https://i.ibb.co/Cz0PgK6/award.jpg" alt="" /></div>
                            </div>
                    </div>
                </div>
            </div>
            </section>

            </section>  
        </div>
    );
};

export default About;