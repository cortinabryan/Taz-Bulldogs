import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "bootstrap";
import "../App.css";
import HeroSection from "../components/HeroSection";

const Home = () => {
  return (
    <div className="text-center bg-light">
      {/* <h1 className="mb-3">Taz Bulldogs</h1>
      <h4 className="mb-3">Subheading</h4> */}
      <HeroSection />
    </div>
  );
};

export default Home;
