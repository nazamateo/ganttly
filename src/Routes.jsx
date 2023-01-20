import React from "react";
import App from "./App";
import ErrorPage from "./pages/ErrorPage";
import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/private/Home";
import Protected from "./components/Protected";
import Landing from "./pages/public/Landing";
import Public from "./components/Public";
import SignUp from "./pages/public/SignUp";
import SignInSide from "./pages/public/SignInSide";
import Account from "./pages/Account";
import Welcome from "./pages/private/Welcome";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: (
          <Public>
            <Landing />
          </Public>
        ),
      },
      {
        path: "home",
        element: (
          <Protected>
            <Home />
          </Protected>
        ),
        children: [
          {
            path: "/home",
            element: <Welcome />,
          },
          {
            path: "account",
            element: <Account />,
          },
        ],
      },
    ],
  },
  {
    path: "signup",
    element: (
      <Public>
        <SignUp />
      </Public>
    ),
  },
  {
    path: "signin",
    element: (
      <Public>
        {/* <SignIn /> */}
        <SignInSide />
      </Public>
    ),
  },
]);
