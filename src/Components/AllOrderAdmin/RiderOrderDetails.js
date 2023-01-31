import React from "react";
import useOrders from "../../hooks/useOrders";
import { RouterProvider } from "react-router-dom";

const RiderOrderDetails = ({ rider }) => {
  const { name, email, phoneNumber } = rider;

  const { orders } = useOrders();
  let count = 0;
  let index=0
  orders.forEach((order) => {
    if (order.riderEmail === email) count++;
  });

  return (
    <section>
      <div>
        <p className="fs-3 fs-light text-center">Rider Order Details</p>
        <table>
          <tbody>
            <tr>
              <td>
                <span className="fw-semibold pe-3">Name:</span>
              </td>
              <td>
                <span className="fw-semibold">{name}</span>
              </td>
            </tr>
            <tr>
              <td>
                <span className="fw-semibold">Email:</span>
              </td>
              <td>
                <span className="fw-semibold">{email}</span>
              </td>
            </tr>
            <tr>
              <td>
                <span className="fw-semibold">Orders:</span>
              </td>
              <td>
                <span className="fw-semibold">{count}</span>
              </td>
            </tr>
          </tbody>
        </table>
        <h3>Order List</h3>

        <table className="table caption-top">
          <thead className="table-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Details</th>
              <th scope="col">Address</th>
              <th scope="col">Food</th>
            </tr>
          </thead>

          {orders.map((order) => {
            if (order.riderEmail === email){
                return (
                    <tbody key={order._id}>
                      <tr>
                        <th scope="row">{++index}</th>
                        <td>{order.name} <br/>{order.email} <br/> {order.phoneNumber} </td>
                        <td>{order.deliveryAddress}</td>
                        <td>
                            {
                                order.orders.map(or=><div>
                                    {or.quantity} x {or.name}
                                </div>)
                            }
                        </td>
                      </tr>
                    </tbody>
                  );
            }
          })}
        </table>
      </div>
    </section>
  );
};

export default RiderOrderDetails;
