import React from "react";
import "./SingleFood.css";
const singleFood = () => {
  // console.log(props.food)
  return (
    <div className="mt-5 col-4">
      <div className="card food-card mt-5" style={{ width: "18rem" }}>
        <div className="d-flex justify-content-center">
          <img
            src="https://i.ibb.co/SRJYQQv/IMG-9330.jpg"
            className="card-img-top food-img"
            alt="..."
          />
        </div>
        <div className="card-body">
          <h5 className="card-title">Nasi Goreng Ayam</h5>
            <div className="d-flex justify-content-center mb-3">
            <p 
              style={{ width: "120px" }}
              className="category-font card-text fst-italic border border-3 border-light rounded-pill"
            >
              Breakfast
            </p>
            </div>
          <span class="material-symbols-sharp me-5 edit-btn">
            edit
          </span>
          <span class="material-symbols-sharp delete-btn">
            delete
          </span>
        </div>
      </div>
    </div>
  );
};

export default singleFood;
