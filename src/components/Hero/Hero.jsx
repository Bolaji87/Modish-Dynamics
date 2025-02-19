import React from "react";
import styles from "./Hero.module.css";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className={styles["hero-cont"]}>
      <div>
        <p className={styles.content}>
          Welcome to Modish Dynamics, welcome to <br />
          our wall of modest fashion where style meets sophistication.
        </p>

        <h1>Modish Dynamics</h1>
        <button className={styles["btn-shop-now"]}>
          <Link to="/products">shop now</Link>
        </button>
      </div>
    </section>
  );
}

export default Hero;
