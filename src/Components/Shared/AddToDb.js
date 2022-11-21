import { useEffect } from "react"

const AddToDb = newUser =>{
    console.log(newUser)
        fetch('http://localhost:5000/user',{
            method:'POST',
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(newUser)
        }).then(res=>res.json())
        .then(data=>console.log(data))
    // useEffect(()=>{
    // })
}

export default AddToDb