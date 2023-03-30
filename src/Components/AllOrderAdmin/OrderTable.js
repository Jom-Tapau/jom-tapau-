import React from "react";

const OrderTable = ({order,index}) => {
  return (
    <>
      <tbody key={order._id}>
        <tr>
          <th scope="row">{++index}</th>
          <td>
            {order.name} <br />
            {order.email} <br /> {order.phoneNumber}{" "}
          </td>
          <td>{order.deliveryAddress}</td>
          <td>
            {order.orders.map((or) => (
              <div key={or._id}>
                {or.quantity} x {or.name}
              </div>
            ))}
          </td>
          <td>{order.deliveryTime}</td>
          <td>
            {order.total} RM <br /> {order.paymentMethod}
            <br /> {order.paymentMethod === "Card" && order.transactionID}
          </td>
          <td>
            <span className="bg-warning text-white rounded p-1">Pending</span>
          </td>
        </tr>
      </tbody>
    </>
  );
};

export default OrderTable;
