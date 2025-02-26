import React from "react";
import "../styles/ConsultancyServices.css"; // Using the same CSS file for consistency
import Header from '../pages/Header';
import Footer from "../pages/Footer";

const MechanicalEngineering = () => {
  return (
    <div>
      <Header />
      <div className="consultancy-container">
        {/* Image Section */}
        <div className="image-container1 fade-in">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUBkbETGBOr5-vnTTi9th3MP-hlQUbu2aOxg&s"
            className="image1 zoom-in"
            alt="Mechanical Engineering"
          />
        </div>

        {/* Information Section */}
        <div className="info-container1 slide-in">
          <h1 className="consultancy_title">Mechanical Engineering Services</h1>
          <p className="consultancy_description">
            We provide a wide range of mechanical services, including:
          </p>
          <ul className="consultancy_list stylish-list">
            <li>⚙️ Turbo Generator & Diesel Generator Erection Work</li>
            <li>🛠️ Sand Blasting of Turbine Rotors</li>
            <li>🔧 New Project Turnkey Erection & Commissioning Work</li>
            <li>⚙️ Light & Heavy Fabrication Work (M.S. & S.S. Both)</li>
            <li>
              🏭 Annual Maintenance Work for:
              <ul className="consultancy_sub-list">
                <li>🔹 Total Sugar Plants</li>
                <li>🔹 Co-Generation/Power Plants</li>
                <li>🔹 Distillery & Ethanol Plants</li>
                <li>🔹 Jaggery & Khandsary Plants</li>
              </ul>
            </li>
            <li>🔩 Boiling House Machinery Modification, Rectification & Upgradation</li>
            <li>🚛 Material Handling System Maintenance & Rectification</li>
            <li>🔥 Boiler Annual Maintenance Work</li>
            <li>🛠️ RLA (Remaining Life Assessment) & NDT (Non-Destructive Testing) Services</li>
            <li>⚖️ Rotary Equipment Site Balancing Work</li>
          </ul>
          <p className="consultancy_additional-info">
            Our expertise ensures efficient solutions, precision engineering, and timely delivery for all your mechanical needs.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MechanicalEngineering;
