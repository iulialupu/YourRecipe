import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import logo from "../img/logo-light.svg";

function Footer() {
  return (
    <footer>
      <nav
        bg="dark"
        variant="dark"
        className="d-flex flex-column align-items-center justify-content-between"
      >
        <a className="footer-logo " href="/">
          <img className="footer-logo" src={logo} alt="Your Recipe Logo" />
        </a>

        <div className="copy">© 2019 YourRecipe.com</div>

        <div className="footer-menu">
          <a href="/" className="footer-link">
            About Us
          </a>
          <a href="/" className="footer-link">
            Term of Service
          </a>
          <a href="/" className="footer-link">
            Privacy Policy
          </a>
        </div>

        <ul className="socials">
          <li className="socials-link">
            <a href="https://twitter.com" target="_blank">
              <i class="fab fa-twitter" />
            </a>
          </li>
          <li className="socials-link">
            <a href="https://facebook.com" target="_blank">
              <i class="fab fa-facebook" />
            </a>
          </li>
          <li className="socials-link">
            <a href="https://instagram.com" target="_blank">
              <i class="fab fa-instagram" />
            </a>
          </li>
          <li className="socials-link">
            <a href="https://pinterest.com" target="_blank">
              <i class="fab fa-pinterest" />
            </a>
          </li>
          <li className="socials-link">
            <a href="https://youtube.com" target="_blank">
              <i class="fab fa-youtube" />
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
