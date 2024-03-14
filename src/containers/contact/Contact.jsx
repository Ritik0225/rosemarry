import React from "react";
import './contact.css';
import contact from '../../assests/images/contact_us.jpg';

function Contact() {
  return (
    <div className="contact-bg" style={{
      backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 1)), url(${contact})`

    }}>
      <div className="contact-text">
        <div className="contact-heading">
        Come experience the epitome of  <br/> Luxury and Tranquility!
        </div>
        
        <div className="contact-subheading">
          Take advantage of our exclusive limited-time offer and make your dream stay a reality. With this special promotion, you can experience the epitome of comfort, luxury, and convenience at a discounted rate that won’t last long. Whether you’re seeking a relaxing escape, a romantic rendezvous, or a memorable family vacation, now is the perfect moment to secure your reservation.
        </div>
      </div>
    </div>
  );
}

export default Contact;
