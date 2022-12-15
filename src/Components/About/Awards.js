import React from 'react';

const Awards = () => {
    return (
        <div>
            <section className='d-flex justify-content-around mt-5' >

                <div className='w-50'>
                    <p className='text-danger' style={{ fontFamily: "'Ma Shan Zheng', cursive", opacity: "0.5", textAlign: "center", marginLeft: "50px", fontSize: "100px" }}><i>Awards</i></p>

                    <p style={{ textAlign: "center", marginRight: "50px", marginLeft: "50px", color: "grey" }}>
                        Jom Tapau has attend several competitions.
                    </p>
    
                </div>
                
                <div className='w-50 '><img className='w-100 border  rounded' src="https://i.ibb.co/Cz0PgK6/award.jpg" alt="" /></div>

            </section>
        </div>
    );
};

export default Awards;