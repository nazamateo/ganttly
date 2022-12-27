import React from "react";
import App from "./App";
import ErrorPage from "./pages/ErrorPage";
import { createBrowserRouter } from "react-router-dom";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import Protected from "./components/Protected";
import Landing from "./pages/Landing";
import Public from "./components/Public";
import SignUp from "./pages/SignUp";

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
            <SignIn />
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
      },
    ],
  },
]);
