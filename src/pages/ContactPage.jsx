import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import Header from "../pages/Header";
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
            {isSent && (
              <p className="success-message">Message sent successfully!</p>
            )}
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
                required></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="contact-info_c">
            <h3>Our Contact Details</h3>
            <p>
              <strong>Email:</strong> contactus@ganalaxmi.com
            </p>
            <p>
              <strong>Phone:</strong> +91 8999469825 , +91 9503613890
            </p>
            <p>
              <strong>Address:</strong> Plot No. 27/18, Kalanagar,Sangli,
              Maharashtra 416416.
            </p>
            <p>
              <strong>Working Hours:</strong>Monday - Friday : 9:00 AM - 6:00 PM
            </p>
          </div>
        </div>

        {/* Address and Maps */}
        <div className="address-section">
          <h3>Our Locations</h3>
          <div className="address-container">
            <div className="address-card">
              <h4>Head Office</h4>
              <p>Plot No. 27/18, Kalanagar,Sangli, Maharashtra 416416</p>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3818.0899610393244!2d74.5802963!3d16.871443799999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc119b34e406681%3A0x5a4272f32d11556e!2sGanalaxmi%20Group!5e0!3m2!1sen!2sin!4v1740734310746!5m2!1sen!2sin"
                loading="lazy"></iframe>
            </div>



            <div className="address-card">
              <h4>Manufacturing Unit</h4>
              <p>VJFM+W56 MIDC Kupwad, Maharashtra</p>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3818.0222750096937!2d74.63031567389312!3d16.874792617372126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc122dba88f97d3%3A0x397693455386570d!2sVJFM%2BW56%2C%20MIDC%20Kupwad%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1740728912433!5m2!1sen!2sin"
                loading="lazy"></iframe>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
