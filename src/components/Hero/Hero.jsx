import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section>
      <div>
        <p>
          Welcome to Modish Dynamics, welcome to <br />
          our wall of modest fashion where style meets sophistication.
        </p>

        <h1>Modish Dynamics</h1>
        <button>
          <Link to="/products">shop now</Link>
        </button>
      </div>
    </section>
  );
}

export default Hero;
