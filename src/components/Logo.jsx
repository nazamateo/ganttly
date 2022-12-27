import React from "react";
import { Box } from "@mui/material";

const Logo = ({ src }) => {
  return (
    <Box
      sx={{
        width: 50,
        height: 50,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img src={src} style={{ width: 50, lenght: 50 }} />
    </Box>
  );
};

export default Logo;
