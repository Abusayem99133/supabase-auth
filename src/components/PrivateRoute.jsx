import React from "react";
import { Navigate } from "react-router";
import { UserAuth } from "../context/AuthContext";

const PrivateRoute = ({ children }) => {
  const { session } = UserAuth();
  if (session === undefined) {
    return <p>Loading....</p>;
  }
  return (
    <>
      {session} ? <>{children}</> : <Navigate to="/signin" />
    </>
  );
};

export default PrivateRoute;
