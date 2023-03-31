import React from "react";
import { Helmet } from "react-helmet";
import useOrders from "../../hooks/useOrders";
import useGetUser from "../../hooks/useGetUser";
import useGetDate from "../../hooks/useGetDate";
import OrderTable from "./OrderTable";

const AllOrderAdmin2 = () => {
  const { today } = useGetDate();

  const { userDetails } = useGetUser();
  const { orders } = useOrders();
  console.log(orders);
  let todayOrder = []; //array of today's order
  let lunchOrder = []; //array of today's lunch order
  let dinnerOrder = []; //array of today's dinner order
  let remainingOrder = []; //array of order other than today's order

  let todayLunchOrder = 0.0;
  let todayDinnerOrder = 0.0;
  let todayTotalOrder = 0.0;
  let todayTotalPrice = 0.0;
  let totalPrice = 0.0;

  orders.map((order) => {
    //filter the lunch and dinner order
    if (order.deliveryDate === today) {
      todayOrder.push(order);
      todayTotalOrder++;
      todayTotalPrice += order.total;
      //get the lunch order
      if (order.deliveryTime === "Lunch") {
        lunchOrder.push(order);
        todayLunchOrder++;
      } else {
        dinnerOrder.push(order);
        todayDinnerOrder++;
      }
    } else {
      remainingOrder.push(order);
    }
    //calculate the total income
    totalPrice += order.total;
  });
  console.log(totalPrice);
  let lunchIndex = 0;
  let dinnerIndex = 0;
  let index = 0.0
  return (
    <div style={{ marginTop: "55px" }}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>All Order</title>
      </Helmet>

      {userDetails?.Admin === true && userDetails ? (
        <div>
          <h1 className="text-center py-5">All Order</h1>
          <p className="text-center fw-semibold fs-4">
            Total income: {totalPrice} RM
          </p>
          <p className="fs-3 fs-light text-center fst-italic">
            Today's Order ({today})
          </p>
          {/* display today sales  */}
          {todayOrder.length > 0 && (
            <div className="fs-5">
              <span className="me-4">Total order: {todayTotalOrder}</span>
              <span className="me-4">Total Income: {todayTotalPrice}RM</span>
              <span className="me-4">Total Lunch order: {todayLunchOrder}</span>
              <span className="me-4">
                Total Dinner order: {todayDinnerOrder}
              </span>
            </div>
          )}

          {/* display lunch Order of today */}
          {todayOrder.length > 0 && lunchOrder.length > 0 && (
            <div>
              <h3>Lunch Order</h3>
              <table className="table caption-top ml-3">
                <thead className="table-dark">
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Details</th>
                    <th scope="col">Address</th>
                    <th scope="col">Food</th>
                    <th scope="col">time</th>
                    <th scope="col">Payment</th>
                    <th scope="col">Status</th>
                  </tr>
                </thead>

                {lunchOrder.map((order) => {
                  return (
                    <OrderTable
                      key={order._id}
                      order={order}
                      index={lunchIndex++}
                    ></OrderTable>
                  );
                })}
              </table>
            </div>
          )}

          {/* display today's dinner order */}

          {todayOrder.length > 0 && dinnerOrder.length > 0 && (
            <div>
              <h3>Dinner Order</h3>
              <table className="table caption-top ml-3">
                <thead className="table-dark">
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Details</th>
                    <th scope="col">Address</th>
                    <th scope="col">Food</th>
                    <th scope="col">time</th>
                    <th scope="col">Payment</th>
                    <th scope="col">Status</th>
                  </tr>
                </thead>

                {dinnerOrder.map((order) => {
                  return (
                    <OrderTable
                      key={order._id}
                      order={order}
                      index={dinnerIndex++}
                    ></OrderTable>
                  );
                })}
              </table>
            </div>
          )}

          {/* display the remaining order */}
          {remainingOrder.length > 0 && (
              <div>
              <h3>Remaining Order</h3>
              <table className="table caption-top ml-3">
                <thead className="table-dark">
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Details</th>
                    <th scope="col">Address</th>
                    <th scope="col">Food</th>
                    <th scope="col">time</th>
                    <th scope="col">Payment</th>
                    <th scope="col">Status</th>
                  </tr>
                </thead>

                {remainingOrder.map((order) => {
                  return (
                    <OrderTable
                      key={order._id}
                      order={order}
                      index={index++}
                    ></OrderTable>
                  );
                })}
              </table>
            </div>
          )}
        </div>
      ) : (
        <div style={{ height: "calc(100vh - 278px)" }}>
          <p
            className="text-center fst-italic fs-3 text-danger"
            style={{ marginTop: "70px" }}
          >
            You are not admin
          </p>
        </div>
      )}
    </div>
  );
};

export default AllOrderAdmin2;
