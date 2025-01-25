import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col">
            <h3>About Us</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="col">
            <h3>Contact</h3>
            <ul>
              <li>Email: info@yourdomain.com</li>
              <li>Phone: +123 456 7890</li>
              <li>Address: 123 Main St, Anytown, USA</li>
            </ul>
          </div>
          <div className="col">
            <h3>Social Media</h3>
            <ul>
              <li>
                <a href="https://www.facebook.com/">Facebook</a>
              </li>
              <li>
                <a href="https://www.instagram.com/">Instagram</a>
              </li>
              <li>
                <a href="https://www.twitter.com/">Twitter</a>
              </li>
            </ul>
          </div>
        </div>
        <p className="copyright">
          &copy; 2023 Your Company Name. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
