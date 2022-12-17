import React, { useRef } from "react";
import { useState } from "react";
import useFood from "../../hooks/useFood";
import SingleFood from './SingleFood';
import "./EditFood.css";
const EditFood = () => {

    const [inputValue,setInputValue] = useState('');
    const inputField = useRef('');
    

    const {foods} = useFood();
    const handleSearchFood = () =>{
        setInputValue(inputField.current.value)
        console.log(foods);
    }

  return (
    <section className="bg-light">
      <div style={{ paddingTop: "80px" }}>
        <h2 className="mb-3">Search Food Item</h2>
        <div className="wrap">
          <div className="search">
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
      {/* {
        foods.map(food=> <SingleFood
            key={food._id}
            food={food}
        ></SingleFood>)
      } */}
      <div className="container">
      <section className="row justify-content-center">
      <SingleFood></SingleFood>
      <SingleFood></SingleFood>
      <SingleFood></SingleFood>
      <SingleFood></SingleFood>
      <SingleFood></SingleFood>
      <SingleFood></SingleFood>
      </section>
      </div>
    </section>
  );
};

export default EditFood;
