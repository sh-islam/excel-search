// footer.js
import React from "react";
import "./footer.css";
import Lottie from "lottie-react";
import githubIcon from "./icons8-github.json"; 

function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <Lottie animationData={githubIcon} className="gh-icon-anim" />
        <a href="mailto:misla2@uwo.ca" className="contact-link">
          Contact
        </a>
      </div>
    </div>
  );
}

export default Footer;
