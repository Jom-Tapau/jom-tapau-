import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Helmet } from "react-helmet";
import { UNSAFE_DataRouterContext, useNavigate } from "react-router-dom";
import AddRider from "./AddRider";
import AllRider from "./AllRider";
import ApplicantRider from "./ApplicantRider";
import "./Rider.css";

const Rider = () => {
  const [users, setUser] = useState([]);
  const [applicants, setApplicants] = useState([]);
  const [notRider, setNotRider] = useState([]);
  const [allRiders, setRiders] = useState([]);
  const [addRider, setAddRider] = useState(false);
  const [appBtn, setAppBtn] = useState(false);

  const navigate = useNavigate();
  useEffect(() => {
    fetch("http://localhost:5000/user")
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        let applicantRider = [];
        // filter the rider from the user data
        let riderUser = [];
        let remainning = [];
        data.map((user) => {
          if (user.rider == true) {
            riderUser.push(user);
          } else if (user.rider == "rejected") {
          } else {
            remainning.push(user);
          }

          if (user.rider != true) {
            applicantRider.push(user);
          }
        });
        setRiders(riderUser);
        setNotRider(remainning);
        setApplicants(applicantRider);
      });
  }, []);

  const handleAddRider = () => {
    setAddRider(!addRider);
    setAppBtn(false);
  };
  const handleApplicants = () => {
    setAppBtn(!appBtn);
    setAddRider(false);
  };
  return (
    <div>
      <Helmet>
        <title>Rider</title>
      </Helmet>

      <div className="btn-container">
        <Button
          onClick={handleAddRider}
          className="me-4"
          variant={addRider ? "danger" : "outline-danger"}
          size={"sm"}
        >
          Add Rider
        </Button>

        <Button
          onClick={handleApplicants}
          variant={appBtn ? "danger" : "outline-danger"}
          size={"sm"}
        >
          Applicants
        </Button>
      </div>

      {!addRider && !appBtn ? <AllRider rider={allRiders}></AllRider> : ""}
      {addRider && <AddRider notRider={notRider}></AddRider>}
      {appBtn && <ApplicantRider applicants={applicants}></ApplicantRider>}
    </div>
  );
};

export default Rider;
