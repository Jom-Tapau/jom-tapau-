import React from 'react';
import useOrders from '../../hooks/useOrders';
import Order from './Order';

const AllOrders = () => {
    const { orders, otherOrder } = useOrders();
    return (
        <div className='pt-5'>
            <h1>
                Hello
            </h1>
        </div>
    );
};

export default AllOrders;