import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const UpdateFood = () => {
    const [food,singleFood] = useState({});
    const {foodID}  = useParams();
    useEffect(()=>{
        fetch(`http://localhost:5000/food/${foodID}`)
        .then(res=>res.json())
        .then(data=>singleFood(data))
    },[])
    /* 
        now using direct url of image to update the picture of the food
        later we will upload only the image to update the picture
    */
    // TODO: update the picture of the food
    return (
        <div style={{ paddingTop: "80px" }}>
            <h1>Update Food Details</h1>
            <section>
                <div>
                    <img style={{width:'400px',height:'400px',borderRadius:'200px'}} src="https://i.ibb.co/m86djbX/nasigorengayam.jpg" alt=""/>
                </div>
                <div>
                    
                </div>
            </section>
        </div>
    );
};

export default UpdateFood;