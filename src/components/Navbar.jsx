import React from "react";
import { Box, Button, Typography, Avatar } from "@mui/material";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import logo from "../assets/chart-icon.png";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { UserAuth } from "../context/AuthContext";
import { borderRadius } from "@mui/system";

const Navbar = () => {
  const { user, logOut } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Box sx={{ width: 1 }}>
      <Box
        sx={{
          width: 0.9,
          display: "flex",
          justifyContent: "space-between",
          margin: "auto",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <Link to="home">
            <Logo src={logo} />
          </Link>
        </Box>
        <Box sx={{ alignSelf: "center" }}>
          {user?.email ? (
            <Button variant="contained">
              <Link
                onClick={handleSignOut}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Log Out {user.displayName}
              </Link>
              {user.reloadUserInfo.photoUrl ? (
                <Avatar
                  alt="profile avatar"
                  src={user.reloadUserInfo.photoUrl}
                />
              ) : (
                <Avatar alt="profile avatar" sx={{ bgcolor: "gray" }}>
                  {user.email.charAt(0)}
                </Avatar>
              )}
            </Button>
          ) : (
            <>
              <Button variant="text" sx={{ marginRight: "20px" }}>
                <Link
                  to="signin"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Log In
                </Link>
              </Button>
              <Button variant="contained">
                <Link
                  to="signup"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Get Started
                </Link>
              </Button>
            </>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
