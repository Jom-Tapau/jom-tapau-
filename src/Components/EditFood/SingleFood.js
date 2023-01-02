import React from "react";
import "./SingleFood.css";
import { Link, NavLink, Outlet } from "react-router-dom";
const singleFood = (props) => {
  const { _id, name, price, imgURL, category } = props.food;
  const handleFoodDelete = props.handleFoodDelete;
  // console.log(props.food)

  return (
    <div className="mt-5 col-md-6 col-lg-4">
      <div className="card food-card mt-5" style={{ width: "18rem" }}>
        <div className="d-flex justify-content-center">
          <img src={imgURL} className="card-img-top food-img" alt="..." />
        </div>
        <div className="card-body">
          <h5 className="card-title text-center">{name}</h5>
          <div className="d-flex justify-content-center mb-3">
            <p
              style={{ width: "120px" }}
              className="category-font card-text fst-italic border border-3 border-light rounded-pill text-center"
            >
              {category}
            </p>
          </div>
          <div className="d-flex justify-content-center">
            <NavLink to={`/EditFood/${_id}`}>
              <span className="material-symbols-sharp me-5 edit-btn">edit</span>
            </NavLink>
            <span
              onClick={() => handleFoodDelete(_id)}
              className="material-symbols-sharp delete-btn"
            >
              delete
            </span>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default singleFood;
