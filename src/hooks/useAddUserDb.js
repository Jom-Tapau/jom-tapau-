import { useEffect, useState } from "react"

const useAddUserDb = newUser =>{
    const [data,setData] =useState('')
    const user = {
        name: newUser?.name||newUser?.displayName||'',
        email:newUser?.email||newUser?.email||'',
        phoneNumber:newUser?.phoneNumber||'',
        matricValue:newUser?.matricValue||'',
        address:newUser?.address||''
    }
    console.log(user);
    useEffect(()=>{
        fetch('https://jom-tapau-backend.onrender.com/user',{
            method:'POST',
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(user)
        }).then(res=>res.json())
        .then(data=>{
            console.log(data);
            setData(data);
        })
    },[newUser])

    return [data]
}
export default useAddUserDb;