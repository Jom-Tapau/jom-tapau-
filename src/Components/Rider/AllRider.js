import React from 'react';
import useRiders from '../../hooks/useRiders';

const AllRider = () => {
    const {allRiders} = useRiders();
    return (
        <div>
            {
                allRiders.length?<div className='mt-5'>
                    {allRiders.length}
                </div>:
                <div className="mt-5">
                    <h4>Zero Result Found</h4>
                </div>
            }
        </div>
    );
};

export default AllRider;