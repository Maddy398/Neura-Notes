import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left - Logo & Description */}
        <div className="footer-logo">
          <h2>NeuraNotes</h2>
          <p>Your AI-powered notes organizer.</p>
        </div>

        {/* Center - Quick Links */}
        <div className="footer-links">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/notes">My Notes</Link></li>
            <li><Link to="/blog">About</Link></li>
            <li><Link to="/contact">Inquiry</Link></li>
          </ul>
        </div>

        {/* Right - Social Media */}
        <div className="footer-social">
          <div className="social-icons">
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom - Copyright */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} NeuraNotes. All rights reserved.</p>
      </div>
    </footer>
  );
}
