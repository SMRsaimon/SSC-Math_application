import React from "react";
import "./Footer.css";


const Footer = () => {
  return (
    <footer id="footer">
      <div className="container footer-container pt-5">
        <div className="row">
          <div className=" col-12 d-flex justify-content-center copyrights ">
            <p className="para text-center">
              Copyright ©{new Date().getFullYear()} All rights reserved | Design
              && Develop By &nbsp;
              <a
                target="_blank"
                rel="noreferrer"
                href="https://sultanmahmud-587e3.web.app/"
              >
                SULTAN MAHMUD
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faFacebook,
//   faGithubSquare,
//   faInstagram,
//   faLinkedin,
// } from "@fortawesome/free-brands-svg-icons";