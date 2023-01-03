import React, { useState } from "react";
import auth from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect } from "react";

const Payment = ({ cart }) => {
  const [users, setUser] = useState({});
  const [user, loading, error] = useAuthState(auth);
  console.log(user?.email);
  const email = user?.email;

  useEffect(() => {
    fetch("http://localhost:5000/findUser", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ email }),
    })
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, []);

  let size;
  const day = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const date = new Date();
  const today =
    date.getDate() +
    " " +
    day[date.getDay()] +
    " " +
    monthNames[date.getMonth()];
  const tomorrow =
    date.getDate() +
    1 +
    " " +
    day[date.getDay() + 1] +
    " " +
    monthNames[date.getMonth()];
  const nexttmr =
    date.getDate() +
    2 +
    " " +
    day[date.getDay() + 2] +
    " " +
    monthNames[date.getMonth()];

  return (
    <div className="mt-5">
      <main className="d-flex justify-content-center">
        <section>
          <div>
            <p className="fs-1 fw-normal">Delivery Details</p>
            <div>
              <p className="fs-4">Delivery time:</p>

              <div className="d-flex">
                {/* date section */}
                <select
                  style={{ width: "250px" }}
                  className="form-select me-5"
                  aria-label="Default select example"
                >
                  <option defaultValue={today}>
                    {date.getDate()} {day[date.getDay()]},
                    {monthNames[date.getMonth()]}
                  </option>
                  <option defaultValue={tomorrow}>
                    {date.getDate() + 1} {day[date.getDay() + 1]},
                    {monthNames[date.getMonth()]}
                  </option>
                  <option defaultValue={nexttmr}>
                    {date.getDate() + 2} {day[date.getDay() + 2]},
                    {monthNames[date.getMonth()]}
                  </option>
                </select>
                {/* time section */}
                <select
                  style={{ width: "250px" }}
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option defaultValue="ASAP">ASAP</option>
                  <option defaultValue="">After 30min</option>
                  <option defaultValue=" ">After 1hour</option>
                </select>
              </div>
              <br />

              <p className="fs-4">Address Details:</p>
              <div className="d-flex">
                <select
                  size={size}
                  onClick={() => (size = 5)}
                  style={{ width: "250px" }}
                  className="form-select me-5"
                  aria-label="Default select example"
                >
                  <option defaultValue="KLG Block A">KLG Block A</option>
                  <option defaultValue="KLG Block B">KLG Block B</option>
                  <option defaultValue="KLG Block C">KLG Block C</option>
                  <option defaultValue="KDOJ XB1">KDOJ XB1</option>
                  <option defaultValue="KDOJ XB2">KDOJ XB2</option>
                  <option defaultValue="KDOJ XC1">KDOJ XC1</option>
                  <option defaultValue="KDOJ XC2">KDOJ XC2</option>
                </select>
                <input
                  type="text"
                  style={{ width: "250px" }}
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Room Number"
                ></input>
              </div>
            </div>
            <div>
              <p className="fs-1 fw-normal">Personal Details</p>
              <div className="">
                <div className="d-flex">
                  <div className="me-5">
                    <label htmlFor="">Name</label>
                    <input
                    type="text"
                    style={{ width: "250px" }}
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Name"
                  ></input>
                  </div>
                  <div>
                    <label htmlFor="">Email</label>
                    <input
                    type="text"
                    style={{ width: "250px" }}
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Email"
                  ></input>
                  </div>
                </div>
                <div className="mt-2">
                  <label htmlFor="">Phone Number</label>
                  <input
                  type="text"
                  style={{ width: "250px" }}
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Phone Number"
                ></input>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section></section>
      </main>
    </div>
  );
};

export default Payment;
