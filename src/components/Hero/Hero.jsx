import { useNavigate } from 'react-router-dom'
import React from 'react'
import "./Hero.css"
const Hero = () => {
    const navigate = useNavigate();  
    const handleClick = ()=>{
        
        navigate('/service');
    }
  return (
    <div className='hero'>
        <h1>Welcome to AB Tours & Travel</h1>
        <h2>BOOK YOUR COMFORTABLE AND HASSEL-FREE RIDE</h2>
        <p>Daily Service, Rentals, Airport Pickups & More</p>
        <button onClick={handleClick}>Book Now</button>
    </div>
  )
}

export default Hero
