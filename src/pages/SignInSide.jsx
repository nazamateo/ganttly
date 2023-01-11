import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";
import Copyright from "../components/CopyRight";

import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const theme = createTheme();

export default function SignInSide() {
  const { googleSignIn, emailSignIn } = UserAuth();
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });

    emailSignIn(data.get("email"), data.get("password"));
  };

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: "url(https://source.unsplash.com/x-ghf9LjrVg)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Typography
            variant="caption"
            sx={{
              display: "block",
              position: "absolute",
              bottom: 8,
              left: 8,
              color: "textSecondary",
            }}
            gutterBottom
          >
            Photo by{" "}
            <Link
              href="https://unsplash.com/@sunburned_surveyor?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
              target="_blank"
              rel="noreferrer"
              underline="hover"
            >
              Scott Blake
            </Link>{" "}
            on{" "}
            <Link
              href="https://unsplash.com/photos/x-ghf9LjrVg?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
              target="_blank"
              rel="noreferrer"
              underline="hover"
            >
              Unsplash
            </Link>
          </Typography>
        </Grid>

        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label={
                  <Typography variant="body2" color="textSecondary">
                    Remember me
                  </Typography>
                }
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>

              <Grid container>
                <Grid item xs>
                  <Link href="#" underline="hover" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    sx={{ display: "inline" }}
                  >
                    Don't have an account?{" "}
                  </Typography>
                  <Link
                    onClick={() => {
                      navigate("/signup");
                    }}
                    underline="hover"
                    variant="body2"
                    style={{ cursor: "pointer" }}
                  >
                    Sign Up
                  </Link>
                </Grid>
              </Grid>
              <Divider sx={{ mt: 3 }}>
                <Typography variant="body2" color="textSecondary">
                  or sign in with
                </Typography>
              </Divider>
              <Box
                sx={{
                  display: "flex",
                  mt: 2,
                  mb: 2,
                  justifyContent: "center",
                }}
              >
                <IconButton aria-label="google" onClick={handleGoogleSignIn}>
                  <GoogleIcon color="primary" />
                </IconButton>
                <IconButton aria-label="facebook" color="primary">
                  <FacebookIcon />
                </IconButton>
              </Box>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
