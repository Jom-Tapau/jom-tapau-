import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { React, PureComponent } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  faBowlFood,
  faCoffee,
  faMotorcycle,
  faUserPen,
} from "@fortawesome/free-solid-svg-icons";

import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";

import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from "recharts";
import { Helmet } from "react-helmet";

const Admin = () => {
  const data = [
    { name: "Sunday", uv: 23, pv: 100, amt: 2400 },
    { name: "Monday", uv: 40, pv: 100, amt: 2400 },
    { name: "Tuesday", uv: 11, pv: 100, amt: 2400 },
    { name: "Wednesday", uv: 66, pv: 100, amt: 2400 },
    { name: "Thursday", uv: 55, pv: 100, amt: 2400 },
    { name: "Friday", uv: 66, pv: 100, amt: 2400 },
    { name: "Saturday", uv: 41, pv: 100, amt: 2400 },
  ];
  const data01 = [
    { name: "KDSE", value: 20 },
    { name: "KRP", value: 30 },
    { name: "KDOJ", value: 11 },
    { name: "K9", value: 55 },
    { name: "KLG", value: 70 },
    { name: "KTF", value: 32 },
  ];

  return (
    <div className=" d-flex ">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Admin</title>
      </Helmet>

      <div
        className="d-flex  flex-column bg-danger w-25 "
        style={{ marginTop: "55px" }}
      >
        <div className=" bg-danger p-2  text-white   ">
          <div className="p-2 text-center">
            <img
              className="w-25 h-25  border border-light rounded-circle "
              src="https://w7.pngwing.com/pngs/358/473/png-transparent-computer-icons-user-profile-person-child-heroes-public-relations.png"
              alt=""
            />
          </div>
          <br />
          <i className="fw-bold">
            {" "}
            Hello! Mr James , What would you like to do today?
          </i>
          <br />
          <small>System Admin</small>
        </div>
        <div className="p-2 vh-100" style={{ backgroundColor: "grey" }}>
          <div>
            <Link to="/addfood" href="" className="text-decoration-none">
              <div className="d-flex mt-1 justify-content-between">
                <p className="   text-white">Add a Food Item</p>
                <FontAwesomeIcon style={{ color: "white" }} icon={faBowlFood} />
              </div>
            </Link>
          </div>
          <div>
            <Link to="/rider" href="" className="text-decoration-none">
              <div className="d-flex mt-1 justify-content-between">
                <p className="   text-white">Add a Rider</p>
                <FontAwesomeIcon
                  style={{ color: "white" }}
                  icon={faMotorcycle}
                />
              </div>
            </Link>
          </div>
          <div>
            <Link to="/EditFood" href="" className="text-decoration-none">
              <div className="d-flex mt-1 justify-content-between">
                <p className="   text-white">Edit Food</p>
                <FontAwesomeIcon style={{ color: "white" }} icon={faUserPen} />
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className="w-75 d-flex justify-content-center " style={{ marginTop: "100px", marginLeft: "50px" }}>
 <div>
 <div>
     <h2 style={{ textAlign: "start" }} className=" text-danger">
          Jom-Tapau Analytics
        </h2>
     </div>
        <div className="">
          <div className="mt-3 ">
            <h5 className="text-danger text-start">Weekly Sales</h5>
            <LineChart className="w-100" width={600} height={300} data={data}>
              <Line type="monotone" dataKey="uv" stroke="crimson" />
              <CartesianGrid stroke="#ccc" />
              <XAxis dataKey="name" />
              <YAxis />
            </LineChart>
          </div>
          <div>
            <h5 style={{ textAlign: "start" }} className="text-danger">
              Orders by College
            </h5>
            <PieChart className="w-100 mt-5" width={600} height={400}>
              <Pie
                dataKey="value"
                isAnimationActive={false}
                data={data01}
                cx="50%"
                cy="50%"
                outerRadius={150}
                fill="crimson"
                label
              />
              <Pie />
              <Tooltip />
            </PieChart>
          </div>
        </div>
 </div>
      </div>
    </div>
  );
};

export default Admin;
