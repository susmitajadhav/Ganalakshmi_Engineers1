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
            Ganlakshmi Engineer Company is a trusted name in the industry, providing top-notch engineering solutions 
            with precision and expertise. Our dedicated team ensures quality, innovation, and reliability in every project.
          </p>
          
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
