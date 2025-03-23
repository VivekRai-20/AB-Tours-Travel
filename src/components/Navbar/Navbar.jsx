"use client"

import { useState } from "react"
import { Link } from "react-router-dom"  // Import Link
import { Home, Info, Briefcase, Phone, Menu, X } from "lucide-react"
import "./Navbar.css"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleNavClick = () => {
    window.scrollTo(0, 0)  // Scroll to top
    setIsMenuOpen(false)    // Close menu (for mobile)
  }

  // Function to open WhatsApp chat
  const handleWhatsAppClick = () => {
    const phoneNumber = "9022503545"  // Replace with your WhatsApp number (Use country code)
    window.location.href = `https://wa.me/${phoneNumber}`
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src="" alt="" />
          <Link to="/" onClick={handleNavClick}>
            <span>AB</span>Travel
          </Link>
        </div>

        <div className={`navbar-links ${isMenuOpen ? "active" : ""}`}  >
          <ul>
            <li>
              <Link to="/" onClick={handleNavClick}>
                <Home size={18} />
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={handleNavClick}>
                <Info size={18} />
                <span>About</span>
              </Link>
            </li>
            <li>
              <Link to="/service" onClick={handleNavClick}>
                <Briefcase size={18} />
                <span>Service</span>
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={handleNavClick}>
                <Phone size={18} />
                <span>Contact</span>
              </Link>
            </li>
          </ul>
        </div>

        <div className="navbar-signup">
          <button className="signup-btn" onClick={handleWhatsAppClick}>WhatsApp</button>
        </div>

        <div className="navbar-toggle" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
