import React from 'react';
import useCollapse from 'react-collapsed';

const Order = () => {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

    return (
        <div className='order'>
            <div className='name-user'>
                <img src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png' />
                <h4>Name</h4>
            </div>

            <div {...getCollapseProps()}>
                
            </div>

            <div className="header" {...getToggleProps()}>
                {isExpanded ? "Collapse" : "Expand"}
            </div>
        </div>
    );
};

export default Order;