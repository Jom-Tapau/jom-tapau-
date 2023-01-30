import React from 'react';
import useGetUser from '../../hooks/useGetUser';

const AllOrderAdmin = () => {
    const { userDetails } = useGetUser();
    return (
        <div style={{ marginTop: "55px" }}>
            
            <h1>Hello</h1>
        </div>
    );
};

export default AllOrderAdmin;