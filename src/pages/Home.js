import React, { useState } from "react";
import "../App.css";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import Puppies from "../components/Puppies";
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
} from "../components/InfoSection/Data";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <Puppies />
      <InfoSection {...homeObjTwo} />
      {/* <InfoSection {...homeObjThree} /> */}
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
