import { useState } from "react";
import { useEffect } from "react";

const useRiders = () =>{
    const [users,setUser] = useState([]);
    const [applicants,setApplicants] = useState([]);
    const [notRider,setNotRider] = useState([]);
    const [allRiders,setRiders] = useState([]);
    useEffect(()=>{
        fetch('https://jom-tapau-backend.onrender.com/user')
        .then(res=>res.json())
        .then(data=>{
            setUser(data);
            let applicantRider=[];
            // filter the rider from the user data
            let riderUser=[]
            let remainning=[]
            data.map(user=>{
                if(user.rider==true){
                    riderUser.push(user);
                }
                else if(user.rider=="rejected"){
                    remainning.push(user)
                }
                else{
                remainning.push(user);}

                if(user.rider!=true && user.hasOwnProperty("rider")&&user.rider!=="rejected"){
                    applicantRider.push(user)
                }
            })
            setRiders(riderUser)
            setNotRider(remainning)
            setApplicants(applicantRider)
            
        })
    },[])

    return{
        users,
        setUser,
        allRiders,
        applicants,
        notRider
    }
}

export default useRiders