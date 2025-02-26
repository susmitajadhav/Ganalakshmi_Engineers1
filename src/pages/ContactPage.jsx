import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import Header from '../pages/Header';
import Footer from "../pages/Footer";

import "../styles/ContactPage.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState("");

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Form Submit
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "your_service_id", // Replace with your EmailJS Service ID
        "your_template_id", // Replace with your EmailJS Template ID
        e.target,
        "your_user_id" // Replace with your EmailJS User ID (Public Key)
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setIsSent(true);
          setFormData({ name: "", email: "", message: "" });
          setError("");
        },
        (err) => {
          console.log("FAILED...", err);
          setError("Failed to send message. Please try again later.");
        }
      );
  };

  return (
    <div>
      <Header />
    <div className="contact-container">
      <div className="contact-header">
        <h2>Get in Touch</h2>
        <p>We are here to answer any questions you may have.</p>
      </div>

      <div className="contact-content">
        {/* Contact Form */}
        <div className="contact-form">
          <h3>Contact Us</h3>
          {isSent && <p className="success-message">Message sent successfully!</p>}
          {error && <p className="error-message">{error}</p>}

          <form onSubmit={sendEmail}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="contact-info_c">
          <h3>Our Contact Details</h3>
          <p><strong>Email:</strong> support@ganlakshmi.com</p>
          <p><strong>Phone:</strong> +91 98765 43210</p>
          <p><strong>Address:</strong> 123 Industrial Area, Sangli, India</p>
        </div>
      </div>

      {/* Address and Maps */}
      <div className="address-section">
        <h3>Our Locations</h3>
        <div className="address-container">
          <div className="address-card">
            <h4>Head Office</h4>
            <p>123 Industrial Area, Sangli, India</p>
            <iframe
              title="Head Office"
              src="https://www.google.com/maps/embed?...your_map_link..."
              loading="lazy"
            ></iframe>
          </div>

          <div className="address-card">
            <h4>Branch Office 1</h4>
            <p>456 Business Road, Pune, India</p>
            <iframe
              title="Branch Office 1"
              src="https://www.google.com/maps/embed?...your_map_link..."
              loading="lazy"
            ></iframe>
          </div>

          <div className="address-card">
            <h4>Branch Office 2</h4>
            <p>789 Corporate Tower, Mumbai, India</p>
            <iframe
              title="Branch Office 2"
              src="https://www.google.com/maps/embed?...your_map_link..."
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default Contact;
