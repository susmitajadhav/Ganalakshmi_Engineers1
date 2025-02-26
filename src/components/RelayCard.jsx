import React from 'react';
import '../styles/RelayCard.css'; // Updated CSS file name
import Header from '../pages/Header';
import Footer from '../pages/Footer';
import { FaCheckCircle } from 'react-icons/fa'; // Import modern icons

function PLCDCSSystem() {
  return (
    <div>
      <Header />
      <div className="plc-dcs-container">
        <h1 className="plc-dcs-main-heading">PLC & DCS System</h1>

        {/* Image & Description Section */}
        <div className="plc-dcs-content">
          <div className="plc-dcs-text">
            <p>
              At <strong>SAV-Tech Associate</strong>, we offer cutting-edge <strong>PLC & DCS Systems</strong> designed for industrial automation, ensuring high performance and efficiency in electrical control systems.
            </p>
            <p>
              Our solutions enhance <strong>automation, scalability, and real-time processing</strong>, ensuring reliable performance for various industries.
            </p>
          </div>
          <div className="plc-dcs-image-container">
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDEtSZzcR4It0FBfOAf8XYmN2ZHF8I0wwsfw&s"
              alt="PLC & DCS System"
              className="plc-dcs-image"
            />
          </div>
        </div>

        {/* Features & Applications Section */}
        <div className="plc-dcs-details">
          {/* Features */}
          <div className="plc-dcs-features">
            <h2 className="plc-dcs-sub-heading">Features & Benefits</h2>
            <ul className="plc-dcs-features-list">
              <li><FaCheckCircle className="plc-dcs-icon" /> High Automation & Control</li>
              <li><FaCheckCircle className="plc-dcs-icon" /> Scalable & Future-Ready</li>
              <li><FaCheckCircle className="plc-dcs-icon" /> Real-Time Data Processing</li>
              <li><FaCheckCircle className="plc-dcs-icon" /> Industrial-Grade Reliability</li>
              <li><FaCheckCircle className="plc-dcs-icon" /> Energy-Efficient Solutions</li>
            </ul>
          </div>

          {/* Applications */}
          <div className="plc-dcs-applications">
            <h2 className="plc-dcs-sub-heading">Applications</h2>
            <ul className="plc-dcs-applications-list">
              <li>Manufacturing Automation</li>
              <li>Power Plants & Smart Grids</li>
              <li>Oil & Gas Industry</li>
              <li>Water Treatment Plants</li>
            </ul>
          </div>
        </div>

        {/* Contact Information */}
        <p className="plc-dcs-contact-info">
          📞 <strong>Contact us</strong> today to learn more about our automation solutions!
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default PLCDCSSystem;
