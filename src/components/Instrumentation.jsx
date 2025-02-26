import React from "react";
import "../styles/ConsultancyServices.css"; // Using the same CSS file for consistency
import Header from '../pages/Header';
import Footer from "../pages/Footer";

const Instrumentation = () => {
  return (
    <div>
      <Header />
      <div className="consultancy-container">
        {/* Image Section */}
        <div className="image-container1 fade-in">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTte8ZOtfehxf9J4Lr7h60LtKt61xInSzM12g&s"
            className="image1 zoom-in"
            alt="Electrical Services"
          />
        </div>

        {/* Information Section */}
        <div className="info-container1 slide-in">
          <h1 className="consultancy_title"> Instrumentation Services</h1>
          <p className="consultancy_description">
            We provide a wide range of Instrumentation services, including:
          </p>
          <ul className="consultancy_list stylish-list">
            <li>🤖 Turnkey PLC and DCS-based Automation System</li>
            <li>🛠️ Total Field Instrumentation Supply, Erection, Cable Laying, and Termination Work</li>
            <li>⚙️ Troubleshooting and Upgradation of PLC, DCS System</li>

          </ul>

        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Instrumentation;
