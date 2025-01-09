import React from "react";

import "./stylesPages.css";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

const HomePage = () => {
  return (
    <div className="home-page">
      <Navbar />
      <Hero />
    </div>
  );
};

export default HomePage;
