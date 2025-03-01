import React from "react";
import "../styles//companyIntroStyles.css";

const CompanyIntro = () => {
  return (
    <section className="company-intro-section">
      <div className="company-intro-container">
        {/* Left Side Content */}
        <div className="company-intro-content">
          <h2 className="company-intro-title">Get to Know About Us</h2>
          <p className="company-intro-description">

            At  <strong>Ganalaxmi Engineers,</strong> we specialize in designing and manufacturing high-performance PCC, MCC, VFD, and PLC panels, ensuring precision, reliability, and seamless industrial integration. Our expertise extends to panel design, BOM specification, earthing, lighting layouts, and cable scheduling engineering for optimized control solutions. With a commitment to cutting-edge technology and industry standards, we deliver customized solutions that enhance operational efficiency and safety. From concept to execution, our team ensures quality craftsmanship, robust performance, and seamless automation to meet diverse industrial requirements.
          </p>
<<<<<<< HEAD
          
=======

>>>>>>> 3cce27a (Updated styles)
        </div>

        {/* Right Side Image */}
        <div className="company-intro-image">
          <img
            src="https://images.pexels.com/photos/840996/pexels-photo-840996.jpeg?cs=srgb&dl=pexels-olly-840996.jpg&fm=jpg"
            alt="Company Introduction"
          />
        </div>
      </div>
    </section>
  );
};

export default CompanyIntro;
