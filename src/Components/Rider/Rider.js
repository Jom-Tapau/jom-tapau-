import React, { useEffect, useState } from 'react';

const Rider = () => {
    const [users,setUser] = useState([]);
    const [applicants,setApplicants] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/user')
        .then(res=>res.json())
        .then(data=>{
            setUser(data)
            const filterUser = users.filter(user=>user.hasOwnProperty("rider"));
            setApplicants(filterUser)
            console.log(applicants)
        })
    },[])
    
    return (
        <div>
            {
                users.map(user=>console.log(user))
            }
        </div>
    );
};

export default Rider;