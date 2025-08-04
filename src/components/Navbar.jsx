// frontend/src/components/Navbar.jsx
import React from "react";

function Navbar() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar">
      <div className="logo" onClick={() => scrollToSection("home")}>
        Freelancing Agency
      </div>
      <ul className="nav-links">
        <li onClick={() => scrollToSection("home")}>Home</li>
        <li onClick={() => scrollToSection("about")}>About</li>
        <li onClick={() => scrollToSection("form")}>Form</li>
        <li onClick={() => scrollToSection("contact")}>Contact Us</li>
        <li onClick={() => (window.location.href = "https://dev-aftabbashir-official.pantheonsite.io/")}>
          Portfolio
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
