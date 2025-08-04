// frontend/src/components/Home.jsx
import React from "react";
import "../App.css";

function Home() {
  return (
    <section className="home-section" id="home">
      <div className="home-overlay">
        <div className="home-content">
          <h1>Welcome to Our <br /> Freelancing Agency</h1>
          <p>
            We provide top-notch <strong>WordPress development</strong> and <strong>custom web solutions</strong> 
            for businesses, agencies, and individuals. Let’s build something amazing together.
          </p>
          <p>
            From small business websites to large-scale e-commerce platforms, our team specializes in 
            creating responsive, high-performance solutions that deliver results.
          </p>
          <button onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}>
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}

export default Home;
