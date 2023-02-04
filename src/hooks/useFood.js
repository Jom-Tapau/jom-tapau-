import { useState } from "react"
import { useEffect } from "react"

const useFood = () =>{

    const [foods,setFood] = useState([]);
    const [error,setError] = useState(false)
    useEffect(()=>{
        fetch('https://jom-tapau-backend.onrender.com/food')
        .then(res=>res.json())
        .then(data=>{
            if(data.length>0)
                setFood(data)
            else
                setError(true)
        })
    },[foods])

    return {foods,error,setFood};
}

export default useFood;