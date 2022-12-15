import React from "react";
import  './SingleFood.css';
const singleFood = () => {
  // console.log(props.food)
  return (
    <div className="mt-5">
      <div className="card" style={{width: "18rem"}}>
        <div className="d-flex justify-content-center">
        <img src="https://i.ibb.co/SRJYQQv/IMG-9330.jpg" className="card-img-top food-img" alt="..." />
        </div>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
};

export default singleFood;
