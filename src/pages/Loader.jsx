import { Box } from "@mui/system";
import React from "react";
import { ThreeDots } from "react-loader-spinner";
import { createTheme, ThemeProvider } from "@mui/material/styles";

export default function LoadingScreen() {
  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ThreeDots
          height="200"
          width="200"
          radius="100"
          color={theme.palette.primary.main}
          visible={true}
        />
      </Box>
    </ThemeProvider>
  );
}
