import React, { useRef } from "react";
import { useState } from "react";
import useFood from "../../hooks/useFood";
import "./EditFood.css";
import SingleFood from './SingleFood'
import { Helmet } from "react-helmet";
const EditFood = () => {

    const [inputValue,setInputValue] = useState('');
    const inputField = useRef('');
    

    const {foods,setFood} = useFood();
    console.log(foods)
    const handleSearchFood = () =>{
        setInputValue(inputField.current.value)
        console.log(foods);

        fetch('',{
          method:'POST',
          headers:{
            'content-type':'application/json'
          },
          body: JSON.stringify(inputValue)
        })
        .then(res=>res.json())
        .then(data=>{
          if(data.length>0)
          setFood(data)
        })
    }

  return (
    <section className="bg-light">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Edit Food</title>
      </Helmet>
      <div style={{ paddingTop: "80px" }}>
        <h2 className="mb-5">Search Food Item</h2>
        <div className="wrap ">
          <div className="search mb-4">
            <input
                ref={inputField}
              type="text"
              className="searchTerm"
              placeholder="What are you looking for?"
            />
            <button onClick={handleSearchFood} type="submit" class="searchButton">
              <i className="fa fa-search"></i>
            </button>
          </div>
        </div>
      </div>
      {/* end of search bar code  */}  
      
      {/* send single food to singleFood component */}
      <div className="container">
      <section className="row justify-content-center">
      {
        foods.map(food=><SingleFood key={food._id} food={food}></SingleFood>)
      }
      </section>
      </div>
    </section>
  );
};

export default EditFood;
