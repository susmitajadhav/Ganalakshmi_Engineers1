import React from 'react';
import "../styles/ConsultancyServices.css";
import htltInstallationImage from '../assets/ht_lt_installation.jpg';
import Footer from '../pages/Footer';
import Header from '../pages/Header';

// HT / LT Installation Work Service
const LTInstallation = () => {
  return (
    <div>
      <Header />
      <div className="consultancy-container">
        <div className="image-container1">
          <img src={htltInstallationImage} alt="HT/LT Installation" className="image1" />
        </div>
        <div className="info-container1">
          <h2 className="consultancy_title">HT / LT Installation Work</h2>
          <p className="consultancy_description">
            Professional high-tension and low-tension electrical installations with precision.
          </p>
          <ul className="consultancy_list">
            <li>Substation installation & commissioning</li>
            <li>Cable laying & termination</li>
            <li>Transformer & switchgear setup</li>
            <li>Testing & maintenance services</li>
          </ul>
          <p className="consultancy_additional-info">
            Reliable electrical infrastructure solutions.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LTInstallation;
