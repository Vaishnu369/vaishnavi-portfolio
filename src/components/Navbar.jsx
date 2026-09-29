import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="pb-navbar">
      <a
        className="pb-navbar__logo"
        href="/"
        style={{ textDecoration: "none" }}
      >
        Vaishnavi.
      </a>

      <nav className="pb-navbar__nav">
        <a href="/#about">About</a>
        <a href="/#skills">Skills</a>
        <a href="/#projects">Projects</a>
        <a href="/#education">Education</a>
        <a href="/#contact">Contact</a>
      </nav>

      <div className="pb-navbar__actions">
        <a
          className="pb-navbar__cta"
          href="https://github.com/Vaishnu369"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
        <a
          className="pb-navbar__cta"
          href="https://www.linkedin.com/in/vaishnavi-kamble-966b95290"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </header>
  );
}

export default Navbar;