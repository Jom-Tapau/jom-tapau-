import React from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const UpdateFood = () => {
    const {foodID}  = useParams();
    useEffect(()=>{
        fetch(`http://localhost:5000/food/${foodID}`)
        .then(res=>res.json())
        .then(data=>console.log(data))
    },[])
    return (
        <div style={{ paddingTop: "80px" }}>
            <h1>hello</h1>
            {foodID}
        </div>
    );
};

export default UpdateFood;