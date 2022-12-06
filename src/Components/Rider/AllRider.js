import React from "react";
import useRiders from "../../hooks/useRiders";
import 'alertifyjs/build/css/alertify.css';
import alertify from "alertifyjs";

const AllRider = () => {
  const { allRiders } = useRiders();

  const handleDeleteRider = (id) => {
    console.log(id);
    
    var notification = alertify.notify('Deleted successful', 'success', 2, function(){  console.log('Deleted')});
    //reject the rider
     fetch("http://localhost:5000/rejectRider", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: id }),
    })
      .then((res) => res.json())
      .then((data) =>{
        console.log(data)
        
      })  
    };
  return (
    <div>
      {allRiders.length ? (
        <section className="cart-container">
          <div>
            <div className="cart">
              <div className="info-container">
                <table className="table user-list">
                  <thead className="table-dark">
                    <tr>
                      <th>
                        <span>User</span>
                      </th>
                      <th>
                        <span className="text-center">Phone Number</span>
                      </th>
                      <th>
                        <span>Email</span>
                      </th>
                      <th>&nbsp;</th>
                    </tr>
                  </thead>
                  <tbody>
                    {allRiders.map((rider) => (
                      <tr key={rider._id}>
                        <td>
                          <img
                            src="https://i.pinimg.com/474x/76/4d/59/764d59d32f61f0f91dec8c442ab052c5.jpg"
                            alt=""
                          />
                          <p className="user-link">{rider.name}</p>
                        </td>
                        <td>
                          <p className="user-link">
                            {rider.phoneNumber ? rider.phoneNumber : "--"}
                          </p>
                        </td>
                        <td>
                          <p className="user-link">{rider.email}</p>
                        </td>
                        <td style={{ width: "20%" }}>
                          <span className="fa-stack table-link text-info">
                            <button
                              type="button"
                              className="btn btn-danger"
                              onClick={() => handleDeleteRider(rider._id)}
                            >
                              Delete
                            </button>
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <div className="not-found">
          <span className="">No riders available!</span>
        </div>
      )}
    </div>
  );
};

export default AllRider;
