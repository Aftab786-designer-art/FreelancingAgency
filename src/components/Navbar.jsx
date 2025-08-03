// frontend/src/components/Navbar.jsx
import React from "react";

function Navbar() {
  const goHome = () => {
    window.location.href = "https://dev-aftabbashir-official.pantheonsite.io/";
  };

  return (
    <nav className="navbar">
      <div className="logo">Freelancing Agency</div>
      <ul className="nav-links">
        <li onClick={goHome}>Home</li>
        <li onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })}>Form</li>
      </ul>
    </nav>
  );
}

export default Navbar;
