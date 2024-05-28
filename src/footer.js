// footer.js
import React, {useRef} from "react";
import "./footer.css";
import Lottie from "lottie-react";
import githubIcon from "./icons8-github.json"; 

function Footer() {
  const githubIconRef = useRef();

  return (
    <div className="footer">
      <div className="footer-container">
        <a href="https://github.com/sh-islam/excel-search" target="_blank" rel="noreferrer">
          <Lottie 
            animationData={githubIcon}
            lottieRef={githubIconRef} 
            className="gh-icon-anim"
            autoplay ={false}
            loop = {1}  // Does not autoplay, but loops once on hover/pointer enter
            onPointerEnter={()=>{githubIconRef.current.goToAndPlay(1,true);}}
          />
        </a>
        <a href="mailto:misla2@uwo.ca" className="contact-link">
          Contact
        </a>
      </div>
    </div>
  );
}

export default Footer;
