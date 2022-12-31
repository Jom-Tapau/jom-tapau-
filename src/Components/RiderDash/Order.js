import React from 'react';
import useCollapse from 'react-collapsed';

const Order = () => {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

    return (
        <div className='order'>
            <div className='name-user'>
                
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