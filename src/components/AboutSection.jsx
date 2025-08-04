// frontend/src/components/AboutSection.jsx
import React from "react";
import "../App.css";

function AboutSection() {
  return (
    <section className="about-section" id="about">
      <h2>About Our Freelancing Agency</h2>
      <div className="about-cards">
        {/* Card 1 */}
        <div className="about-card">
          <h3>Who We Are</h3>
          <p>
            We are a dedicated team led by <b>Aftab Bashir</b>, an experienced WordPress developer
            passionate about creating high-quality, custom websites. Our mission is to empower
            businesses and individuals with powerful online solutions.
          </p>
        </div>
        {/* Card 2 */}
        <div className="about-card">
          <h3>What We Do</h3>
          <p>
            From WordPress development to custom web solutions, we provide services for agencies,
            startups, and enterprises. Whether it’s building dynamic websites, e-commerce stores,
            or custom plugins — we bring your ideas to life.
          </p>
        </div>
        {/* Card 3 */}
        <div className="about-card">
          <h3>Why Choose Us</h3>
          <p>
            We focus on delivering modern, responsive, and scalable web solutions. Our approach is
            client-centric — ensuring every project reflects your brand, engages your audience, and
            achieves your business goals.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
