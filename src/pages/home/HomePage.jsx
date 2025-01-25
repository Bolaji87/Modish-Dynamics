import React from "react";

import "./home.css";
import Hero from "../../components/hero/Hero";
import Newsletter from "../../components/newsletter/Newsletter";
import Footer from "../../components/footer/Footer";

Hero;
const HomePage = () => {
  return (
    <div className="home-page">
      <Hero />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default HomePage;
