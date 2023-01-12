import React from "react";
import { Navigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
const Public = ({ children }) => {
  const { user } = UserAuth();
  return user?.email ? <Navigate to="/home" /> : children;
};
export default Public;
