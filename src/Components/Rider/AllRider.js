import React from 'react';

const AllRider = (props) => {
    const{_id,name,email,phoneNUmber} = props.rider;
    return (
        <div>
            {
                props.rider.length?<div className='mt-5'>
                    hehehe
                </div>:
                <div className="mt-5">
                    <h4>Zero Result Found</h4>
                </div>
            }
        </div>
    );
};

export default AllRider;