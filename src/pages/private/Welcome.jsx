import * as React from "react";
import { UserAuth } from "../../context/AuthContext";
import { styled } from "@mui/material/styles";
import LoadingScreen from "../Loader";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Sidebar from "../../components/Sidebar";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

export default function Welcome() {
  const { user } = UserAuth();

  if (user == null) {
    return <LoadingScreen />;
  }

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <h1>Account</h1>
        <p>Hi {user.displayName ? user.displayName : user.email}</p>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2} columns={16}>
            <Grid item xs={8}>
              <Item>xs=8</Item>
            </Grid>
            <Grid item xs={4}>
              <Item>xs=8</Item>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
