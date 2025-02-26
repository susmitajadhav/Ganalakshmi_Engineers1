import React, { useState, useEffect } from "react"; 
import emailjs from "@emailjs/browser";
import Footer from "./Footer";
import Header from './Header';
import "../styles/GetQuote.css";

const GetQuote = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [statusMessage, setStatusMessage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_hsx6zkv", // Replace with your actual EmailJS service ID
        "template_a7twor8", // Replace with your actual EmailJS template ID
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        },
        "0qB6fuI7GqVF0dC8I" // Replace with your actual EmailJS public key
      )
      .then(
        () => {
          setStatusMessage("Your quote request has been sent successfully!");
          setFormData({ name: "", email: "", phone: "", message: "" });
        },
        (error) => {
          console.error("EmailJS Error:", error);
          setStatusMessage("Failed to send your request. Please try again later.");
        }
      )
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="page-container">
      <Header />
      <div className="content-wrap">
        <div className="get-quote-page">
          <h1 className="quote-title">Request a Quote</h1>
          <p className="quote-description">
            Fill out the form below to request a quote. Our team will get back to you as soon as possible!
          </p>

          <form className="quote-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone:</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter your message or project details"
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-button" disabled={loading}>
              {loading ? "Sending..." : "Submit Request"}
            </button>
          </form>

          {statusMessage && <p className="status-message">{statusMessage}</p>}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default GetQuote;
