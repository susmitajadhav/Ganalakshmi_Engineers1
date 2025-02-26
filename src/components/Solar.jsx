import React from 'react';
import '../styles/ConsultancyServices.css';
import epcSolarImage from '../assets/epc_solar.jpg';
import Footer from '../pages/Footer';
import Header from '../pages/Header';

// EPC Solar Solutions Service
const Solar = () => {
  return (
    <div>
      <Header />
      <div className="consultancy-container">
        <div className="image-container1">
          <img src={epcSolarImage} alt="EPC Solar Solutions" className="image1" />
        </div>
        <div className="info-container1">
          <h2 className="consultancy_title">EPC Solar Solutions</h2>
          <p className="consultancy_description">
            End-to-end solar energy solutions for residential and commercial applications.
          </p>
          <ul className="consultancy_list">
            <li>Solar panel installation</li>
            <li>Grid-tied & off-grid solutions</li>
            <li>System design & engineering</li>
            <li>Maintenance & performance monitoring</li>
          </ul>
          <p className="consultancy_additional-info">
            Empowering sustainability with solar technology.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Solar;
