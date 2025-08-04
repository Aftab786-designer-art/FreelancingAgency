// frontend/src/components/ContactDetails.jsx
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import "../App.css"; // <-- For hover effects

function ContactDetails() {
  const contact = {
    whatsapp: "+923213856798",
    email: "aftabbashir610@gmail.com",
    address: "Arifwala, Punjab, Pakistan",
    officeHours: "Mon - Sat: 9:00 AM - 6:00 PM",
  };

  const containerStyle = {
    textAlign: "center",
    maxWidth: "1000px",
    margin: "0 auto",
    paddingBottom: "80px",
  };

  const headingStyle = {
    fontSize: "2.8rem",
    color: "#f39c12",
    marginBottom: "35px",
  };

  const cardsStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "25px",
    flexWrap: "nowrap",
  };

  const cardStyle = {
    background: "#1a1a1a",
    padding: "30px",
    flex: "1",
    maxWidth: "250px",
    color: "#ddd",
    borderRadius: "12px",
    border: "2px solid transparent",
    transition: "transform 0.3s, border-color 0.3s",
  };

  const iconStyle = {
    fontSize: "2.5rem",
    color: "#f39c12",
    marginBottom: "15px",
  };

  const linkStyle = {
    textDecoration: "none",
    color: "#fff",
    fontWeight: "bold",
  };

  return (
    <div id="contact" style={containerStyle}>
      <h1 style={headingStyle}>Contact Us</h1>
      <div style={cardsStyle}>
        <div className="contact-hover-card" style={cardStyle}>
          <FaWhatsapp style={iconStyle} />
          <h3>WhatsApp</h3>
          <p>
            <a
              style={linkStyle}
              href={`https://wa.me/${contact.whatsapp.replace("+", "")}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {contact.whatsapp}
            </a>
          </p>
        </div>
        <div className="contact-hover-card" style={cardStyle}>
          <FaEnvelope style={iconStyle} />
          <h3>Email</h3>
          <p>
            <a style={linkStyle} href={`mailto:${contact.email}`}>
              {contact.email}
            </a>
          </p>
        </div>
        <div className="contact-hover-card" style={cardStyle}>
          <FaMapMarkerAlt style={iconStyle} />
          <h3>Address</h3>
          <p>{contact.address}</p>
        </div>
        <div className="contact-hover-card" style={cardStyle}>
          <FaClock style={iconStyle} />
          <h3>Office Hours</h3>
          <p>{contact.officeHours}</p>
        </div>
      </div>
    </div>
  );
}

export default ContactDetails;
