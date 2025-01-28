import React from "react";
import "./newsletter.css";

function Newsletter() {
  return (
    <div className="newsletter">
      <h3>Stay Updated!</h3>
      <p>Sign up for exclusive offers and new arrivals</p>
      <input type="email" placeholder="Enter your email" />
      <button>Subscribe</button>
    </div>
  );
}

export default Newsletter;
