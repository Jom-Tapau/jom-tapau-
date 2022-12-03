import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import AddRider from './AddRider';
import AllRider from './AllRider';

const Rider = () => {
    const [users,setUser] = useState([]);
    const [applicants,setApplicants] = useState([]);
    const  [notRider,setNotRider] = useState([]);
    const [allRiders,setRiders] = useState([]);
    const [addRider,setAddRider] = useState(false)
    const [appBtn,setAppBtn] = useState(false)

    const navigate = useNavigate()
    useEffect(()=>{
        fetch('http://localhost:5000/user')
        .then(res=>res.json())
        .then(data=>{
            setUser(data)

            //filter the user who applied for rider
            const filterUser = users.filter(user=>user.hasOwnProperty("rider"));
            setApplicants(filterUser)//set filtered data to setApplicatants

            // filter the rider from the user data
            let riderUser=[]
            let remainning=[]
            data.map(user=>{
                if(user.rider===true){
                    riderUser.push(user);
                }
                else
                remainning.push(user);
            })
            setRiders(riderUser)
            setNotRider(remainning)

            console.log(applicants)
        })
    },[])

    const handleAddRider = () =>{
        setAddRider(!addRider);
        setAppBtn(false);
    }
    const handleApplicants=()=>{
        setAppBtn(!appBtn);
        setAddRider(false)
    }
    return (
        <div>
            <Helmet>
                <title>Rider</title>
            </Helmet>
            {
                users.map(user=>console.log(user))
            }
            <div style={{marginTop:"80px"}}>
            <Button onClick={handleAddRider} className="me-4" variant={addRider?'danger':'outline-danger'}>Add Rider</Button>
            <Button onClick={handleApplicants}variant={appBtn?'danger':'outline-danger'}>Applicants</Button>
            </div>
            {
                !addRider&&!appBtn?<AllRider rider={allRiders} ></AllRider>:""
            }
            {
                addRider&&<AddRider rider={users}></AddRider>
            }
        </div>
    );
};

export default Rider;