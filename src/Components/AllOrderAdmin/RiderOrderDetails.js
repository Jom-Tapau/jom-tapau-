import React from 'react';
import useOrders from '../../hooks/useOrders';

const RiderOrderDetails = ({rider}) => {
    const {name,email,phoneNumber} = rider;

    const {orders} = useOrders();
    let count = 0;
    orders.forEach(order=>{
        if(order.riderEmail===email)
            count++;
    })

    return (
        <section>
            <div>
                <p className='fs-3 fs-light text-center'>Rider Order Details</p>
                <table>
                    <tbody>
                        <tr>
                            <td><span className='fw-semibold'>Name:</span></td>
                            <td><span className='fw-semibold ps-2'>{name}</span></td>
                        </tr>
                        <tr>
                            <td><span className='fw-semibold'>Email:</span></td>
                            <td><span className='fw-semibold ps-2'>{email}</span></td>
                        </tr>
                        <tr>
                            <td><span className='fw-semibold'>Total Order:</span></td>
                            <td><span className='fw-semibold ps-2'>{count}</span></td>
                        </tr>
                    </tbody>
                </table>
                <h3>Order List</h3>
                {
                    orders.map(order=>{
                        if(order.riderEmail===email)
                            return <div key={order._id}>dasd</div>
                    })
                }
            </div>
        </section>
    );
};

export default RiderOrderDetails;