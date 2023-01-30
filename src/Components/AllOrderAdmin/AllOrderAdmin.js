import React from "react";
import useGetUser from "../../hooks/useGetUser";
import { Helmet } from "react-helmet";
import useOrders from "../../hooks/useOrders";
import { useEffect } from "react";
import useRiders from "../../hooks/useRiders";

const AllOrderAdmin = () => {
  const { userDetails } = useGetUser();
  const {orders} = useOrders();
  const {allRiders} = useRiders();

  return (
    <div style={{ marginTop: "55px" }}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>All Order</title>
      </Helmet>
      {userDetails?.Admin === true && userDetails ? (
        <section>
          <h1 className="text-center py-5">All Order</h1>
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
