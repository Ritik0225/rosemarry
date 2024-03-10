import React from "react";
import "./Footer.css"
import logo from "../../assests/images/logo.jpg"
import { FaHome,  FaMailBulk, FaPhone, } from 'react-icons/fa'

function Footer() {
  return (
    <div className="footer">
       <div className="footer-wrapper">
         <div className="footer-coloumn-1">
            <div className="logo">
                 <img src={logo} alt="" />
            </div>
              <p>
               Enter the world of Rosemary Radiance, where opulence intertwines with serenity. 
                Our unwavering commitment to exceptional service guarantees a memorable retreat for every visitor.
             </p>
          </div>
       
    <div className="footer-coloumn-2">
        
       <p>Quick Links</p>
       <ul>
         <li>
           <a href="#" className="footer-link">Home</a>
         </li>
         <li>
           <a href="#" className="footer-link">About us</a>
         </li>
         <li>
           <a href="#" className="footer-link">Contact</a>
         </li>
        <li>
          <a href="#" className="footer-link">Attraction</a>
        </li>
      </ul>
    </div>
    <div className="footer-coloumn-3">
        <p>Contact Information</p>
         <div className='location'>
           <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>6,June Estate Rd,Bhimtal </p>
              <p>Uttarakhand 263136</p>
            </div>
         </div>
         <div className='phone'>
           <h4>
              <FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                 
          </h4>
          </div>
            <div className='email'>
                <h4>
                  <FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                      
                </h4>
           </div>
         </div>   
         <div className="footer-coloumn-4">
         <iframe
              title="hotel-location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6955.103593896094!2d79.53384339809415!3d29.354128472945067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a09826275af4ab%3A0x7f269da6f790c97b!2sThe%20Rosemary!5e0!3m2!1sen!2sin!4v1710051434760!5m2!1sen!2sin"
                  width="300"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
              ></iframe>

         </div>
    </div>
       
      </div>
      
    
  );
}

export default Footer;
