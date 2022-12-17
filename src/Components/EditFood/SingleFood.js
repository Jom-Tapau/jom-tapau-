import React from "react";
import "./SingleFood.css";
const singleFood = () => {
  // console.log(props.food)
  return (
    <div className="mt-5">
      <div className="card" style={{ width: "18rem" }}>
        <div className="d-flex justify-content-center">
          <img
            src="https://i.ibb.co/SRJYQQv/IMG-9330.jpg"
            className="card-img-top food-img"
            alt="..."
          />
        </div>
        <div className="card-body">
          <h5 className="card-title">Nasi Goreng Ayam</h5>
          <div className="d-flex justify-content-center">
            <p 
              style={{ width: "120px" }}
              className="card-text fst-italic border border-3 border-light rounded-pill"
            >
              Breakfast
            </p>
            <p
              style={{ width: "110px" }}
              className="card-text fst-italic border border-3 border-light rounded-pill"
            >
              Breakfast
            </p>
          </div>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
};

export default singleFood;
