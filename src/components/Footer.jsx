import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <h2 className="footer-name">Vaishnavi Kamble</h2>

      <nav className="footer-nav">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
        <a href="#projects">Projects</a>
        <a href="#education">Education</a>
      </nav>

      <div className="footer-socials">
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/vaishnavi-kamble-966b95290"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          <svg viewBox="0 0 24 24">
            <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 23.5h4V7.98h-4V23.5zM8.5 7.98h3.84v2.12h.05c.53-1 1.82-2.12 3.75-2.12 4 0 4.74 2.63 4.74 6.05v9.47h-4v-8.4c0-2-.04-4.58-2.8-4.58-2.8 0-3.23 2.18-3.23 4.43v8.55h-4V7.98z" />
          </svg>
        </a>

      </div>
    </footer>
  );
};

export default Footer;
