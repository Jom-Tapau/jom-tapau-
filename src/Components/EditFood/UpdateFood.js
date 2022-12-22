import React from 'react';
import { useParams } from 'react-router-dom';

const UpdateFood = () => {
    const {foodID}  = useParams();
    return (
        <div style={{ paddingTop: "80px" }}>
            <h1>hello</h1>
            {foodID}
        </div>
    );
};

export default UpdateFood;