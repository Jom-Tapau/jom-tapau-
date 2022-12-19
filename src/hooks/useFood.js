import { useState } from "react"
import { useEffect } from "react"

const useFood = () =>{

    const [foods,setFood] = useState({});
    const [error,setError] = useState(false)
    useEffect(()=>{
        fetch('http://localhost:5000/food')
        .then(res=>res.json())
        .then(data=>{
            if(data.length>0)
                setFood(data)
            else
                setError(true)
        })
    },[])

    return {foods,error,setFood};
}

export default useFood;