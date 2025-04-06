import React from 'react';
import './Contacts.css';
import { MapPin, Phone, Mail } from 'lucide-react';

const Contacts = () => {
  const contactDetails = [
    {
      icon: <MapPin className="icon" />,
      title: 'Visit Us',
      content: 'Jatra hotel, Sagar Village, Nashik, Maharashtra 422207', // Replace with actual address
    },
    {
      icon: <Phone className="icon" />,
      title: 'Call Us',
      content: '+91 77768 88674',
    },
    {
      icon: <Mail className="icon" />,
      title: 'Email Us',
      content: 'bagulatish20@gmail.com',
    },
  ];

  return (
    <section className="contact-boxes" aria-label="Contact Options">
      <div className='container'>
      {contactDetails.map((item, index) => (
        <div key={index} className="box" role="region" aria-labelledby={`contact-title-${index}`}>
          {item.icon}
          <h3 id={`contact-title-${index}`}>{item.title}</h3>
          <p>{item.content}</p>
        </div>
      ))}
      </div>
    </section>
  );
};

export default Contacts;
