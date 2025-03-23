import React from "react";
import { useParams } from "react-router-dom";
import { MapPin, Clock, Wallet, MessageCircle } from "lucide-react";
import nashikData from "../Assets/naashik";
import mumbaiData from "../Assets/mumbai";
import puneData from "../Assets/pune";
import popular from "../Assets/popular";
import "./TourDisplay.css";

const TourDisplay = () => {
  const { id } = useParams(); // Extract ID from URL

  // Combine all tours into one array
  const allTours = [...nashikData, ...mumbaiData, ...puneData, ...popular];

  // Find the selected tour by ID
  const tour = allTours.find((t) => String(t.id) === id);

  // If tour not found, display error message
  if (!tour) {
    return <h2 className="error-message">Tour Not Found</h2>;
  }

  // WhatsApp Inquiry Link with predefined message
  const phoneNumber = "9022503545"; // Replace with actual WhatsApp number
  const whatsappMessage = `Hello, I am interested in the ${tour.name} tour. Can you provide more details?`;
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="tourDisplay">
      <div className="tourDisplay_left">
        <img className="tourDisplay-main-img" src={tour.image} alt={tour.name} />
      </div>

      <div className="tourDisplay_right">
        <h1>{tour.name}</h1>

        <div className="tourDisplay-details">
          <p><MapPin size={18} /> <strong>City:</strong> {tour.city}</p>
          <p><Clock size={18} /> <strong>Timing:</strong> {tour.timing}</p>
          <p><Wallet size={18} /> <strong>Entry Fee:</strong> {tour.entry_fee}</p>
          <p><strong>Category:</strong> {tour.category}</p>
        </div>

        <p className="tourDisplay-description">{tour.description}</p>

        <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="enquire-button">
          <MessageCircle size={20} /> Enquire Now
        </a>
      </div>
    </div>
  );
};

export default TourDisplay;
