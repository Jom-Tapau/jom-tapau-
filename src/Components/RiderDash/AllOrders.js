import React from 'react';
import useOrders from '../../hooks/useOrders';
import Order from './Order';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useEffect } from 'react';

const AllOrders = () => {
    const { orders, otherOrder } = useOrders();

    const [user, loading, error] = useAuthState(auth);
    // console.log(user.email)

    useEffect(()=>{
        fetch('http://localhost:5000/riderOrders',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify({riderEmail:user?.email})
        })
    },[user])
    return (
        <div className='pt-5'>
            <h1>
                {user?.email}
            </h1>
        </div>
    );
};

export default AllOrders;