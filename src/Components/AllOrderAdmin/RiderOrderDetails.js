import React from "react";
import useOrders from "../../hooks/useOrders";

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
                <span className="fw-semibold">Phone:</span>
              </td>
              <td>
                <span className="fw-semibold">{phoneNumber}</span>
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

        <table className="table caption-top px-5" >
          <thead className="table-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Details</th>
              <th scope="col">Address</th>
              <th scope="col">Food</th>
              <th scope="col">Payment</th>
              <th scope="col">Status</th>
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
                        <td>{order.total} RM <br/> {order.paymentMethod}
                            <br/> {order.paymentMethod==='Card' && order.transactionID}    
                        </td>
                        <td>{order.status==="Delivered"&& <span className="bg-success text-white rounded p-1">Delivered</span> || order.status==="Cancel" && <span style={{paddingLeft:"12px",paddingRight:"12px"}} className="bg-danger text-white rounded py-1" >Cancel</span>}</td>
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
