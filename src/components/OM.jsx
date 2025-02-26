import React from "react";
import "../styles/ConsultancyServices.css"; // Using the same CSS file for consistency
import Header from '../pages/Header';
import Footer from "../pages/Footer";

const OM = () => {
  return (
    <div>
      <Header />
      <div className="consultancy-container">
        {/* Image Section */}
        <div className="image-container1 fade-in">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS059frnmzmI_KVvyU3GfNKC09N_JzAH79Obg&s"
            className="image1 zoom-in"
            alt="O&M Services"
          />
        </div>

        {/* Information Section */}
        <div className="info-container1 slide-in">
          <h1 className="consultancy_title">O & M Services</h1>
          <p className="consultancy_description">
            We provide comprehensive Operation & Maintenance (O&M) services for the following plants:
          </p>
          <ul className="consultancy_list stylish-list">
            <li>🏭 Total Sugar Plants</li>
            <li>⚡ Co-Generation/Power Plants</li>
            <li>🛢️ Distillery & Ethanol Plants</li>
            <li>🍬 Jaggery & Khandsary Plants</li>
            <li>💧 D.M. (Demineralization) & R.O. (Reverse Osmosis) Plants</li>
            <li>🌿 E.T.P. (Effluent Treatment Plant) & S.T.P. (Sewage Treatment Plant)</li>
          </ul>
          <p className="consultancy_additional-info">
            Our expert team ensures smooth operations, routine maintenance, and efficiency optimization, 
            guaranteeing long-term reliability for your plants.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OM;
