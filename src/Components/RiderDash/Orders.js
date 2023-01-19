import React from "react";
import useOrders from "../../hooks/useOrders";
import Order from "./Order";

const Orders = () => {
  const { orders, otherOrder } = useOrders();
  return (
    <div>
      {otherOrder?.map((order) => (
        <Order key={order._id} order={order}></Order>
      ))}
    </div>
  );
};

export default Orders;
