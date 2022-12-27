import { Button } from "@mui/material";
import React from "react";
import { UserAuth } from "../context/AuthContext";

const Home = () => {
  const { user } = UserAuth();

  return (
    <div>
      <h1>Account</h1>
      <p>Hi {user?.displayName}</p>
    </div>
  );
};

export default Home;
