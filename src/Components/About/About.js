import React from 'react';
import Awards from './Awards';
import ContactUs from './ContactUs';
import Description from './Description';

const About = () => {
    return (
        <div style={{marginTop:"70px"}}>
            <Description></Description>
            <Awards></Awards>
            <ContactUs></ContactUs>
        </div>
    );
};

export default About;