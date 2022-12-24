import React, { useRef } from "react";
import { useState } from "react";
import useFood from "../../hooks/useFood";
import SingleFood from "./SingleFood";
import "./EditFood.css";
import { Helmet } from "react-helmet";
const EditFood = () => {
  const inputField = useRef("");

  const { foods, setFood } = useFood();
  // console.log(foods);
  const handleSearchFood = () => {
    const text = inputField.current.value;
    fetch("http://localhost:5000/searchFood", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({text}),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.length > 0) setFood(data);
      });
  };

  //delete food
  const handleFoodDelete = id =>{
    console.log(id)
     fetch(`http://localhost:5000/foodDelete/${id}`)
    .then(res=>res.json())
    .then(data=>{
      console.log(data.acknowledged)
      if(data.acknowledged){
        const remainingFood = foods.filter(food=>food.id!==id)
        setFood(remainingFood);
      }
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
            <button
              onClick={handleSearchFood}
              type="submit"
              className="searchButton"
            >
              <i className="fa fa-search"></i>
            </button>
          </div>
        </div>
      </div>
      {/* end of search bar code  */}

      {/* send single food to singleFood component */}
        <div className="container">
          <section className="row">
            {foods.map((food) => (
              <SingleFood key={food._id} food={food} handleFoodDelete={handleFoodDelete}></SingleFood>
            ))}
          </section>
        </div>
    </section>
  );
};

export default EditFood;
