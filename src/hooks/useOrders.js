import { useEffect } from "react";
import { useState } from "react";

const useOrders = () =>{

    const [orders,setOrders] = useState([]);
    const [otherOrder,setOtherOrder] = useState([])
    const accOrderArray = []
    useEffect(()=>{
        fetch('http://localhost:5000/allOrders')
        .then(res=>res.json())
        .then(data=>{
            setOrders(data)
            data?.forEach(element => {
                if(element?.status!=="rejected")
                accOrderArray.push(element)
            });
            setOtherOrder(accOrderArray)
        })
    },[])
    return {
        orders,
        otherOrder
    }
}

export default useOrders;