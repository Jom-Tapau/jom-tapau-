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
        let result = order.hasOwnProperty("status")
        if(!result)
            remainingOrder.push(order)
        else{
            totalPrice+=order.total;
        }
    })
    console.log(totalPrice)
    console.log(remainingOrder)
  return (
    <div style={{ marginTop: "55px" }}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>All Order</title>
      </Helmet>
      {userDetails?.Admin === true && userDetails ? (
        <section>
          <h1 className="text-center py-5">All Order</h1>

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
