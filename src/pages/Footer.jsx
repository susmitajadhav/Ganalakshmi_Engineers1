// Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-wave"></div>
      <div className="container">
        <div className="footer-content">
          <div className="footer-left">
            <h4>Ganalaxmi Engineers</h4>
            <p>
              "Ganalaxmi Engineers excels in designing and manufacturing PCC, MCC, VFD, and PLC panels, ensuring precision, reliability, and seamless industrial integration."
            </p>
            <div className="footer-contact">
              <p><i className="fas fa-phone-alt"></i>8999469825 ,9503613890 </p>
              <p><i className="fas fa-envelope"></i> info@ganalaxmi.com</p>
              <p><i className="fas fa-map-marker-alt"></i> Plot No. 27/18, Kalanagar,Sangli,
                Maharashtra 416416.</p>
            </div>

          </div>

          <div className="footer-right">
            <h4>Navigation</h4>
            <ul>
              {[
                { path: "/", label: "Home" },
                { path: "/aboutus", label: "About" },
                { path: "/services", label: "Services" },
                { path: "/contactpage", label: "Contact" }
              ].map((item, index) => (
                <li key={index}>
                  <Link to={item.path}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-right">
            <h4>Projects</h4>
            <ul>
              {[
                { path: "/instrumentation", label: "Instrumentation Services" },
                { path: "/solar", label: "EPC Solar Solutions" },
                { path: "/industrial-panel-manufacturer", label: "Industrial Panel Manufacturing" }
              ].map((item, index) => (
                <li key={index}>
                  <Link to={item.path}>{item.label}</Link>
                </li>
              ))}
            </ul>

            <div className="footer-social">
              <h4>Follow Us</h4>
              <div className="social-links">
                {["facebook", "twitter", "youtube", "linkedin", "instagram"].map((platform, index) => (
                  <a key={index} href={`https://${platform}.com/`} target="_blank" rel="noopener noreferrer">
                    <i className={`fab fa-${platform}`}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
