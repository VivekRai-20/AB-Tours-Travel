"use client"
import "./Custom.css"
import {
  FaCarSide,
  FaBus,
  FaPlaneDeparture,
  FaCalendarCheck,
  FaBuilding,
  FaUsers,
  FaHeart,
  FaShip,
  FaMapMarkedAlt,
  FaRing,
  FaUmbrellaBeach,
  FaHotel,
  FaRoute,
  FaShieldAlt,
} from "react-icons/fa"

const services = [
  {
    icon: <FaPlaneDeparture />,
    title: "Airport Pickup & Drop",
    description: "Nashik to Mumbai airport pickup-drop service.",
  },
  {
    icon: <FaCarSide />,
    title: "Daily Travel Service",
    description: "Nashik - Mumbai, Nashik - Pune, Mumbai - Pune daily service.",
  },
  {
    icon: <FaBus />,
    title: "Traveller Rental Service",
    description: "Other traveller rental services available for various needs.",
  },
  { icon: <FaCarSide />, title: "All India Rental", description: "All India rental cars and buses available." },
  {
    icon: <FaCalendarCheck />,
    title: "Function Packages",
    description: "All function packages available at best rates.",
  },
  { icon: <FaCarSide />, title: "Car Hire", description: "Premium car rental services for all your needs." },
  {
    icon: <FaBuilding />,
    title: "Corporate Travel",
    description: "Specialized travel solutions for businesses and corporate events.",
  },
  { icon: <FaHeart />, title: "Couples Trips", description: "Romantic getaways and special packages for couples." },
  { icon: <FaShip />, title: "Cruises", description: "Luxury cruise bookings and packages at competitive rates." },
  {
    icon: <FaUmbrellaBeach />,
    title: "Day Trips",
    description: "Exciting single-day excursions to nearby attractions.",
  },
  {
    icon: <FaRing />,
    title: "Destination Weddings",
    description: "Complete travel arrangements for destination weddings.",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Excursion Booking",
    description: "Book exciting excursions and activities at your destination.",
  },
  {
    icon: <FaUsers />,
    title: "Family Trips",
    description: "Comfortable and enjoyable travel packages for the whole family.",
  },
  { icon: <FaUsers />, title: "Group Travel", description: "Specialized arrangements for large groups and events." },
  { icon: <FaHeart />, title: "Honeymoons", description: "Special honeymoon packages to make your trip memorable." },
  { icon: <FaHotel />, title: "Hotels", description: "Hotel bookings at the best rates across all destinations." },
  { icon: <FaRoute />, title: "Tours", description: "Guided tours and custom itineraries for all destinations." },
  {
    icon: <FaShieldAlt />,
    title: "Travel Insurance",
    description: "Comprehensive travel insurance for worry-free journeys.",
  },
]

const Custom = () => {
  const whatsappNumber = "9022503545"
  const handleEnquiry = (serviceTitle) => {
    const message = encodeURIComponent(`Hello, I am interested in your service: ${serviceTitle}`)
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank")
  }

  return (
    <div className="custom-container">
    <div className="custom-container" id="services">
      <h2 className="custom-title">Our Services</h2>
      <div className="custom-grid">
        {services.map((service, index) => (
          <div className="custom-box" key={index}>
            <div className="custom-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <button className="custom-btn" onClick={() => handleEnquiry(service.title)}>
              Enquire Now
            </button>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default Custom

