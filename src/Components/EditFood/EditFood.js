import React, { useRef } from "react";
import { useState } from "react";
import "./EditFood.css";
const EditFood = () => {

    const [inputValue,setInputValue] = useState('');
    const inputField = useRef('');
    
    const handleSearchFood = () =>{
        setInputValue(inputField.current.value)
    }

  return (
    <section>
      <div style={{ marginTop: "80px" }}>
        <h2 className="mb-3">Food Item</h2>
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

    </section>
  );
};

export default EditFood;
