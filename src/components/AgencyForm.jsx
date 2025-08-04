// frontend/src/components/AgencyForm.jsx
import { useState } from "react";

function AgencyForm() {
  const [name, setName] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [projectScope, setProjectScope] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/forms/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          fatherName,
          email,
          phone,
          whatsapp,
          projectScope,
        }),
      });

      if (res.ok) {
        window.location.href = "https://dev-aftabbashir-official.pantheonsite.io/";
      } else {
        const data = await res.json();
        alert(data.message || "Error submitting form");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Server error. Please try again.");
    }
  };

  return (
    <section className="form-contact-section" id="form">
      <form onSubmit={handleSubmit} className="agency-form">
        <h2>Freelancing Agency Form</h2>
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Full Name" required />
        <input value={fatherName} onChange={(e) => setFatherName(e.target.value)} placeholder="Father's Name" required />
        <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" type="email" required />
        <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone Number" required />
        <input value={whatsapp} onChange={(e) => setWhatsapp(e.target.value)} placeholder="WhatsApp Number" required />
        <textarea value={projectScope} onChange={(e) => setProjectScope(e.target.value)} placeholder="Project Scope / Details" />
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default AgencyForm;
