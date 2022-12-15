import React from "react";
import "./EditFood.css";
const EditFood = () => {
  return (
    <section>
      <div style={{ marginTop: "100px" }}>
        <div className="wrap">
          <div className="search">
            <input
              type="text"
              className="searchTerm"
              placeholder="What are you looking for?"
            />
            <button type="submit" class="searchButton">
              <i className="fa fa-search"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditFood;
