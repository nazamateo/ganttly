import React from "react";
import { Outlet } from "react-router-dom";
import { Button } from "@mui/material";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
