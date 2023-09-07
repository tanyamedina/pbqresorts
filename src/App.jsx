import React from "react";
import "./App.css";
import { Home } from "./Pages/Home/Home";
import { NavBar } from "./Components/NavBar";
const LandingPage = () => {
  return (
    <div className="landing-page">
      <NavBar />
      <div className="pages">
        <Home />
      </div>
    </div>
  );
};

export default LandingPage;
