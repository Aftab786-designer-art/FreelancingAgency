// frontend/src/App.jsx
import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutSection from "./components/AboutSection";
import AgencyForm from "./components/AgencyForm";
import ContactDetails from "./components/ContactDetails";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Home />
        <AboutSection />
        <AgencyForm />
        <ContactDetails />
      </main>
      <Footer />
    </>
  );
}

export default App;
