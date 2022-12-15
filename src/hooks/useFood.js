import { useState } from "react"
import { useEffect } from "react"

const useFood = () =>{

    const [food,setFood] = useState({});
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

    return {food,error};
}

export default useFood;