import React from 'react';
import { InlineWidget } from "react-calendly";
import Header from './Header'; // Import the Header component
import './ScheduleCall.css';

const ScheduleCall = () => {
  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    window.location.href = `/${sectionId}`;
  };

  return (
    <div className="schedule-call-container">
      <Header handleNavClick={handleNavClick} />
      <div className="schedule-call-content">
        <div className="schedule-call-left">
          <h2 className="contact-header">C o n t a c t &nbsp; O u t - o f - H o u s e . d e v</h2>
          <h3 className="gradient-text">Schedule a call to discuss your project</h3>
          <p>Discover how we can transform your digital vision into reality, no matter the complexity or development stage.</p>
          <hr className="divider" />
          <div className="contact-info">
            <h4>Hours</h4>
            <p>Mon – Fri</p>
            <p>8 am – 6 pm</p>
            <h4>Contact</h4>
            <p>support@out-of-house.com</p>
            <p>+44 07742 952173</p>
            <h4>Whatsapp</h4>
            <button className="whatsapp-btn">Message us</button>
          </div>
        </div>
        <div className="schedule-call-right">
          <InlineWidget url="https://calendly.com/your-calendly-username/your-event" />
        </div>
      </div>
    </div>
  );
};

export default ScheduleCall;
