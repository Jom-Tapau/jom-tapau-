import React from "react";

const Payment = ({ cart }) => {
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
  const today = date.getDate()+" "+day[date.getDay()]+" "+
  monthNames[date.getMonth()]
  const tomorrow = date.getDate()+1+" "+day[date.getDay()+1]+" "+
  monthNames[date.getMonth()]
  const nexttmr = date.getDate()+2+" "+day[date.getDay()+2]+" "+
  monthNames[date.getMonth()]
  console.log(today,tomorrow,nexttmr)
  return (
    <div className="mt-5">
      <main>
        <section>
          <div>
            <p className="fs-1 fw-normal">Delivery Details</p>
            <div>
              <p>Delivery time:</p>
              
              <select style={{width:"250px"}} className="form-select" aria-label="Default select example">
                <option selected defaultValue={today}>{date.getDate()} {day[date.getDay()]},
                {monthNames[date.getMonth()]}</option>
                <option defaultValue={tomorrow}>{date.getDate() + 1} {day[date.getDay() + 1]},
                {monthNames[date.getMonth()]}</option>
                <option defaultValue={nexttmr}>{date.getDate() + 2} {day[date.getDay() + 2]},
                {monthNames[date.getMonth()]}</option>
              </select>
            </div>
          </div>
        </section>
        <section></section>
      </main>
    </div>
  );
};

export default Payment;
