import React from 'react';
import '../styles/ConsultancyServices.css';

const SupplyOfMachinary = () => {
  return (
    <div className="consultancy-container">
      {/* Image Section */}
      <div className="image-container1">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPzD5UjjOv5i3YfR1FwE1f7HtjszE2mJx09A&s"
          alt="Supply of Machinery"
          className="image1"
        />
      </div>

      {/* Information Section */}
      <div className="info-container1">
        <h2 className="consultancy_title">Supply of Machinery</h2>
        <p className="consultancy_description">
          We provide high-quality machinery supply services, ensuring reliability, efficiency, and top performance for industrial and engineering needs.
        </p>

        {/* Services List */}
        <ul className="consultancy_list">
          <li>🛠️ Mill Equipments & Spares</li>
          <li>🔥 Boiler, NON-IBR Spares Equipments & Spares</li>
          <li>🏭 Boiling House Equipments</li>
          <li>⚙️ Material Handling System & Spares</li>
          <li>🔌 Electrical PCC, MCC, VFD Drives & Motors</li>
          <li>💻 PLC/DCS System for Total Plant Automation & Field Instruments</li>
        </ul>

      </div>
    </div>
  );
};

export default SupplyOfMachinary;
