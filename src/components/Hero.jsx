import React from "react";
import Button from "./Button";
import "./stylesComponents.css";
const Hero = ({ children }) => {
  return (
    <div className="hero-cont">
      <div className="hero-content">
        <div className="hero-tagline">
          <h2>
            Step into style : Your <br /> Ultimate Fashion destination
          </h2>

          <h1>
            Welcome to <em>Modish Dynamics</em>
          </h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor
            cupiditate, accusamus culpa quod deleniti totam delectus?
          </p>
          <button className="hero-btn">Shop now &rarr;</button>
        </div>

        <div className="hero-image-cont">
          <img className="hero-img" src="/m-hero.jpg" alt="hero-image" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
