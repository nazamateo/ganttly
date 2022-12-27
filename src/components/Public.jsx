import React from "react";
import { Navigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Public = ({ children }) => {
  const { user } = UserAuth();
  if (user != null) {
    return <Navigate to="/home" />;
  }
  return children;
};

export default Public;
