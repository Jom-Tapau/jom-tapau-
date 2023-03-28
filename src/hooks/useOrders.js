import { useEffect } from "react";
import { useState } from "react";

const useOrders = () =>{

    const [orders,setOrders] = useState([]);
    const [otherOrder,setOtherOrder] = useState([])
    useEffect(()=>{
        fetch('https://jom-tapau-backend.onrender.com/allOrders')
        .then(res=>res.json())
        .then(data=>{
            setOrders(data)
            const accOrderArray = []
            data?.forEach(element => {
                if(element?.status!=="Accepted" && element?.status!=="Delivered" &&element?.status!=="Cancel")
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