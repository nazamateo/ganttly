import React from "react";
import App from "./App";
import ErrorPage from "./pages/ErrorPage";
import { createBrowserRouter } from "react-router-dom";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import Protected from "./components/Protected";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <p>landingpage</p>,
      },
      {
        path: "signin",
        element: <SignIn />,
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
