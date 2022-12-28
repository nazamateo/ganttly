import React from "react";
import { UserAuth } from "../context/AuthContext";
import LoadingScreen from "./Loader";

const Home = () => {
  const { user } = UserAuth();

  if (user?.displayName == null) {
    return <LoadingScreen />;
  }
  return (
    <div>
      <h1>Account</h1>
      <p>Hi {user?.displayName}</p>
    </div>
  );
};

export default Home;
