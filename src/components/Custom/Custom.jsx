import React from "react";
import "./Custom.css"
import { FaCarSide, FaBus, FaPlaneDeparture, FaCalendarCheck } from "react-icons/fa";

const services = [
  { icon: <FaPlaneDeparture />, title: "Airport Pickup & Drop", description: "Nashik to Mumbai airport pickup-drop service." },
  { icon: <FaCarSide />, title: "Daily Travel Service", description: "Nashik - Mumbai, Nashik - Pune, Mumbai - Pune daily service." },
  { icon: <FaBus />, title: "Traveller Rental Service", description: "Other traveller rental services available for various needs." },
  { icon: <FaCarSide />, title: "All India Rental", description: "All India rental cars and buses available." },
  { icon: <FaCalendarCheck />, title: "Function Packages", description: "All function packages available at best rates." },
];

const Custom = () => {
    const whatsappNumber = "9022503545";
    const handleEnquiry = (serviceTitle) => {
        const message = encodeURIComponent(`Hello, I am interested in your service: ${serviceTitle}`);
        window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
      };
  return (
    <div className="custom-container">
      <h2 className="custom-title">Our Services</h2>
      <div className="custom-grid">
        {services.map((service, index) => (
          <div className="custom-box" key={index}>
            <div className="custom-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <button className="custom-btn" onClick={() => handleEnquiry(service.title)}>Enquire Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Custom;
