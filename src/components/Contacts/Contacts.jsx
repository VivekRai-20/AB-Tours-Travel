import React from 'react';
import './Contacts.css';
import { MapPin, Phone, Mail } from 'lucide-react';


const Contacts = () => {
  return (
    <div>
      <section className="contact-boxes">
        <div className="box">
        <MapPin size={40} />
          <h3>Visit Us</h3>
          <p>Address</p>
        </div>

        <div className="box">
        <Phone size={40} />
          <h3>Call Us</h3>
          <p>+91 77768 88674</p>
        </div>

        <div className="box">
        <Mail size={40} />
          <h3>Email Us</h3>
          <p>bagulatish20@gmail.com</p>
        </div>
      </section>
    </div>
  );
};

export default Contacts;
