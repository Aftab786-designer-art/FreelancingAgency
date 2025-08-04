import React, { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (id) => {
    if (id === "portfolio") {
      window.location.href = "https://dev-aftabbashir-official.pantheonsite.io/";
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="logo" onClick={() => handleNavClick("home")}>
        Freelancing Agency
      </div>
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>
      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li onClick={() => handleNavClick("home")}>Home</li>
        <li onClick={() => handleNavClick("about")}>About</li>
        <li onClick={() => handleNavClick("form")}>Form</li>
        <li onClick={() => handleNavClick("contact")}>Contact</li>
        <li onClick={() => handleNavClick("portfolio")}>Portfolio</li>
      </ul>
    </nav>
  );
}

export default Navbar;
