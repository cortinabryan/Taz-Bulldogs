import React, { useState } from "react";
import Navbar from "../components/Navbar2";
import Sidebar from "../components/Sidebar";
// import Navbar from './Old stuff/Navbar';
import Puppies from "./../components/Puppies2";
import "../App.css";

const AvailablePuppies = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar />
      <Puppies />
    </>
  );
};

export default AvailablePuppies;

// More Puppies
