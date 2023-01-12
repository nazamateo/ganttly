import React from "react";
import { Outlet } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
import LoadingScreen from "../Loader";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";

const Home = () => {
  const { user } = UserAuth();

  if (user == null) {
    return <LoadingScreen />;
  }
  return (
    <div>
      <CssBaseline />
      <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: "relative",
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      ></AppBar>
      <Outlet />
    </div>
  );
};

export default Home;
