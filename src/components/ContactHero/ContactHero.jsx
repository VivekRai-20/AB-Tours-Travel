import React from 'react'
import heroImage from '../Assets/image 2.jpg'
import './ContactHero.css'
const ContactHero = () => {
  return (
    <div className="hero-section">
      <img src={heroImage} alt="Hero" className="hero-bg" />
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>Contact Us</h1>
          <p>Need Assistance? We’re Just a Message Away</p>
        </div>
      </div>
    </div>
  )
}

export default ContactHero
