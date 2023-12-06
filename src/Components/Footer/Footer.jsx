import React from "react";
import "./Footer.css";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">LOGO </p>
        <p className="footer-text2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla est
          purus, ultrices in porttitor in, accumsan non quam.
        </p>
        <div className="icons">
          <FaFacebookSquare color="white" />
          <AiOutlineInstagram color="white" />
          <FaTwitter color="white" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;