import React from 'react';
import "../styles/ConsultancyServices.css";
import electricalLaisoningImage from '../assets/electrical_laisoning.jpg';
import Footer from '../pages/Footer';
import Header from '../pages/Header';

// Electrical Laisoning / Sanction Service
const Laisoning = () => {
  return (
    <div>
      <Header />
      <div className="consultancy-container">
        <div className="image-container1">
          <img src={electricalLaisoningImage} alt="Electrical Laisoning" className="image1" />
        </div>
        <div className="info-container1">
          <h2 className="consultancy_title">Electrical Laisoning / Sanction</h2>
          <p className="consultancy_description">
            Expert assistance in obtaining electrical sanctions and liaising with authorities.
          </p>
          <ul className="consultancy_list">
            <li>Government approvals & compliance</li>
            <li>Sanction load estimation</li>
            <li>Documentation & regulatory support</li>
            <li>Coordination with utility providers</li>
          </ul>
          <p className="consultancy_additional-info">
            Ensuring seamless electrical approvals for your projects.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Laisoning;
