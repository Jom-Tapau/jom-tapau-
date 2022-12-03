import React from "react";
import "./AddRider.css";
const AddRider = (props) => {
  const riders = props.rider;
  return (
    <div>
      

      <section className="cart-container">
      <div>
        <div className="cart">
          <div className="info-container">
            <table className="table user-list">
              <thead>
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
                <tr>
                  <td>
                    <img
                      src="https://bootdey.com/img/Content/user_1.jpg"
                      alt=""
                    />
                    <p className="user-link">
                      G M Shaheen Shah Shimon
                    </p>
                  </td>
                  <td><p className="user-link">
                      +60187827582
                    </p></td>
                  <td>
                  <p className="user-link">
                      simon.rosedale99@gmail.com
                    </p>
                  </td>
                  <td style={{ width: "20%" }}>
                    <a
                      href="#"
                      className="table-link
                                                text-info"
                    >
                      <span className="fa-stack">
                        <p>asd</p>
                      </span>
                    </a>
                    <a
                      href="#"
                      className="table-link
                                                danger"
                    >
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      </section>
    </div>
  );
};

export default AddRider;
