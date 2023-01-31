import React from "react";
import useGetUser from "../../hooks/useGetUser";
import { Helmet } from "react-helmet";
import useRiders from "../../hooks/useRiders";
import RiderOrderDetails from "./RiderOrderDetails";
import useOrders from "../../hooks/useOrders";

const AllOrderAdmin = () => {
  const { userDetails } = useGetUser();
  const {allRiders} = useRiders();
  const { orders } = useOrders();

    let remainingOrder = [];
    let totalPrice=0.0;
    orders.map(order=>{
        if(order.status==="")
            remainingOrder.push(order)
        if(order.status==="Delivered")
            totalPrice+=order.total;
    })
    console.log(totalPrice)
    let index=0
  return (
    <div style={{ marginTop: "55px" }}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>All Order</title>
      </Helmet>
      {userDetails?.Admin === true && userDetails ? (
        <section>
          <h1 className="text-center py-5">All Order</h1>
          <p className="fs-3 fs-light text-center fst-italic">Not Accepted Order</p>
          <table className="table caption-top ml-3" >
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
             
          {
            
            remainingOrder.map(order=>{
                return(
                    <tbody key={order._id}>
                      <tr>
                        <th scope="row">{++index}</th>
                        <td>{order.name} <br/>{order.email} <br/> {order.phoneNumber} </td>
                        <td>{order.deliveryAddress}</td>
                        <td>
                            {
                                order.orders.map(or=><div key={or._id}>
                                    {or.quantity} x {or.name}
                                </div>)
                            }
                        </td>
                        <td>{order.total} RM <br/> {order.paymentMethod}
                            <br/> {order.paymentMethod==='Card' && order.transactionID}    
                        </td>
                        <td><span className="bg-warning text-white rounded p-1">Pending</span>
                        </td>
                      </tr>
                    </tbody>
                )
            })
          }
          </table>
          <div>
            {
                allRiders.map(rider=><RiderOrderDetails
                    key={rider._id}
                    rider={rider}
                ></RiderOrderDetails>)
            }
          </div>
        </section>
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

export default AllOrderAdmin;
