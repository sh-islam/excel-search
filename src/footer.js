import React from "react";
import "./footer.css";
import appIcon from "./app-icon.png";
import { Lottie } from "lottie-react";
import githubIcon from "./icons8-github.json"; 

function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
      <img src={appIcon} className="gh-icon" alt="App Icon" />
        {/* <Lottie animationData={githubIcon} className="logo-animation" /> */}
        <a href="mailto:misla2@uwo.ca" className="contact-link">
          Contact
        </a>
      </div>
    </div>
  );
}

export default Footer;
