import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-column footer-brand">
            <h3>CS — Ticket System</h3>
            <p className="footer-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
            </p>
          </div>
          
          <div className="footer-column">
            <h4>Company</h4>
            <ul className="footer-links">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Our Mission</a></li>
              <li><a href="#">Contact Sales</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h4>Services</h4>
            <ul className="footer-links">
              <li><a href="#">Products & Services</a></li>
              <li><a href="#">Customer Stories</a></li>
              <li><a href="#">Download Apps</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h4>Information</h4>
            <ul className="footer-links">
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">Join Us</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h4>Social Links</h4>
            <ul className="footer-links">
              <li><a href="#">@CS — Ticket System Facebook</a></li>
              <li><a href="#">@CS — Ticket System Twitter</a></li>
              <li><a href="#">@CS — Ticket System Instagram</a></li>
              <li><a href="#">@CS — Ticket System YouTube</a></li>
              <li><a href="#">support@cs.com</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>© 2025 CS — Ticket System. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
