import React from 'react';
import '../styles/industrialPanelStyles.css'; // Ensure correct path
import Footer from '../pages/Footer';
import Header from '../pages/Header';

function IndustrialPanelManufacturer() {
  const panels = [
    {
      title: "Power Control Centers (PCC)",
      description: "Designed for effective management and protection of electrical power systems, ensuring smooth operations and energy efficiency.",
      image: "https://5.imimg.com/data5/KF/SE/DJ/SELLER-79625611/mcc-pcc-vfd-plc-panels-500x500.JPG"
    },
    {
      title: "Motor Control Centers (MCC)",
      description: "Customized solutions for motor control, protection, and automation, optimizing motor-driven operations.",
      image: "https://5.imimg.com/data5/KD/SL/VX/SELLER-79625611/motor-control-center-panel-500x500.jpg"
    },
    {
      title: "Variable Frequency Drive (VFD)",
      description: "Cutting-edge VFD panels for controlling motor speeds, reducing energy consumption, and ensuring smooth process control.",
      image: "https://5.imimg.com/data5/SELLER/Default/2023/8/329041825/RJ/NA/WJ/27396437/vfd-panel-500x500.jpg"
    },
    {
      title: "Programmable Logic Controller (PLC)",
      description: "High-performance PLC panels for automation, providing reliability and flexibility in industrial processes.",
      image: "https://5.imimg.com/data5/GF/GC/MY-2/plc-panel-500x500.jpg"
    }
  ];

  return (
    <div>
      <Header />
      <div className="industrial-panel-container">
        <h1 className="main-heading">Industrial Panel Manufacturer</h1>
        <p className="panel-description-text">
          Harnessing engineering expertise, we specialize in the meticulous design and manufacturing of Power Control Centers (PCC),
          Motor Control Centers (MCC), Variable Frequency Drive (VFD), and Programmable Logic Controller (PLC) panels.
          Our precision-crafted solutions ensure optimal performance, reliability, and seamless integration across diverse industrial applications.
        </p>


        {/* Animated Cards Section */}
        <div className="panel-cards">
          {panels.map((panel, index) => (
            <div key={index} className="panel-card">
              <img src={panel.image} alt={panel.title} className="panel-image" />
              <h3 className="panel-title">{panel.title}</h3>
              <p className="panel-description">{panel.description}</p>
            </div>
          ))}
        </div>

        <div className="features-applications-container" style={{ display: "block !important" }}>

          <div>
            <h2 className="sub-heading">Key Features & Benefits:</h2>
            <ul className="features-list">
              <li><strong>Seamless Integration:</strong> Our panels integrate effortlessly into existing industrial systems.</li>
              <li><strong>Precision Engineering:</strong> Crafted with high precision to ensure top-notch performance.</li>
              <li><strong>Reliability:</strong> Built for long-lasting durability, even in harsh environments.</li>
              <li><strong>Energy Efficiency:</strong> Designed to minimize energy consumption.</li>
              <li><strong>Customization:</strong> Tailored solutions for your specific requirements.</li>
            </ul>
          </div>

          <div>
            <h3 className="sub-heading">Applications:</h3>
            <ul className="applications-list">
              <li>Sugar plants</li>
              <li>CO-Generation Plants</li>
              <li>Distillery & Ethanol Plants</li>
              <li>Water Treatment Plants</li>
              <li>HVAC Systems</li>
              <li>Oil & Gas Industry</li>
            </ul>
          </div>
        </div>

        <p className="contact-info">
          For more information or inquiries, feel free to <strong>contact us</strong> today!
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default IndustrialPanelManufacturer;
