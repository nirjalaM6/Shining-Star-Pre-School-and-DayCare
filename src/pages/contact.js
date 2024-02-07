// Contact.js

import React from 'react';
import './contact.css'

function Contact() {
  return (
    <div className="contact-container">
      <h2>Contact Us</h2>

      <p>
        We'd love to hear from you! If you have any questions or would like to schedule a
        visit, please feel free to contact us using the information below:
      </p>

      <div className="contact-info">
        <p>Email: shiningstar207777@gmail.com</p>
        <p>Phone: 01-5186329</p>
        <p>Address: Chyasal, Lalitpur</p>
      </div>

      <div className="contact-form">
        <h3>Send us a Message</h3>
        <form>
          <label htmlFor="name">Your Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Your Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Your Message:</label>
          <textarea id="message" name="message" rows="4" required></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
