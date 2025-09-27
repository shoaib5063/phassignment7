import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-left">
          <strong>cs — Ticket System</strong>
          <p className="muted small">© 2025 cs — Ticket System. All rights reserved.</p>
        </div>
        <div className="footer-right">
          <div className="footer-links">
            <div>About</div>
            <div>Services</div>
            <div>Privacy</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
