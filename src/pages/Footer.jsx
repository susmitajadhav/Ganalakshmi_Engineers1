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
            <h4>SAV-Tech Associate</h4>
            <p>
              Innovative solutions for Sugar, Power Plant, Co-Generation,
              Distillery, Khandsar & Jaggery industries.
            </p>
            <div className="footer-contact">
              <p><i className="fas fa-phone-alt"></i> 9850827966, 7057104851, 953613890, 9503613890</p>
              <p><i className="fas fa-envelope"></i> officesavtech@gmail.com</p>
              <p><i className="fas fa-map-marker-alt"></i> Flat No.101, Vrundavan Apartment, Near Kusumgandh Garden, Pradhyapak Colony, Mahadevnagar, Uran Islampur 415409.</p>
            </div>

          </div>

          <div className="footer-right">
            <h4>Navigation</h4>
            <ul>
              {[
                { path: "/", label: "Home" },
                { path: "/aboutus", label: "About" },
                { path: "/services", label: "Services" },
                { path: "/blogpage", label: "Blog" },
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
                { path: "/manufacturing", label: "Manufacturing of Machineries" },
                { path: "/relay-card", label: "Relay Card Act" },
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
