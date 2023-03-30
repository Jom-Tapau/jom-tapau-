import { useState } from "react";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";


const useGetUser = () =>{
    const [user, loading, error] = useAuthState(auth);
    const [userDetails, setUserDetails]= useState('');
    useEffect(() => {
        fetch("http://localhost:5000/findUser", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify( {email:user?.email} ),
        })
          .then((response) => response.json())
          .then((data) => {
        
        setUserDetails(data);
          });
      }, [user?.email])

      return{userDetails}

}

export default useGetUser;