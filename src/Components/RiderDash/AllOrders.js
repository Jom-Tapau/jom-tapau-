import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useEffect } from 'react';
import { useState } from 'react';

const AllOrders = () => {
    const [riderOrders,setRiderOrders] = useState([]);
    const [riderErr,setRiderErr] = useState("")
    const [user, loading, error] = useAuthState(auth);

    useEffect(()=>{
        fetch('http://localhost:5000/riderOrders',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify({riderEmail:user?.email})
        })
        .then(res=>res.json())
        .then(data=>{
            data.map(or=>console.log(or.status))
            if(data.length>0)
                setRiderOrders(data)
            else  
                setRiderErr("You have performed O order");
        })
    },[user])
    return (
        <div className=''>
            <h1>

            </h1>
            {riderOrders.length}
            <br/>
                {user?.email}
                {
                    riderErr&&<p>{riderErr}</p>
                }
        </div>
    );
};

export default AllOrders;