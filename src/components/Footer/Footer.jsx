import React from "react";
import "./Footer.css";
import { FaInstagram, FaPinterest, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <h2 className="footer-title">AB Tours & Travel</h2>
      <div className="footer-links">
        <a href="#">Company</a>
        <a href="#">Tours</a>
        <a href="#">Destinations</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>
      <div className="footer-social">
        <FaInstagram className="social-icon" />
        <FaPinterest className="social-icon" />
        <FaWhatsapp className="social-icon" />
      </div>
      <p className="footer-copy">Copyright &copy; 2025 - All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
