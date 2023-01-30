import React from "react";
import useGetUser from "../../hooks/useGetUser";

const AllOrderAdmin = () => {
  const { userDetails } = useGetUser();
  return (
    <div style={{ marginTop: "55px" }}>
      {userDetails?.Admin === true && userDetails ? (
        <section>
          <h1>Hello</h1>
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
