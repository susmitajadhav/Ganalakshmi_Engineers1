import React from "react";
import { motion } from "framer-motion";
import "../styles/JointVenture.css";

const JointVenture = () => {
  return (
    <div className="joint-venture-container">
      <motion.h1
        className="title_venture"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Ganalaxmi Engineers & Shree Electricals  
      </motion.h1>

      <motion.h2
        className="subtitle_venture"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        A Powerful Joint Venture for Electrical & Engineering Solutions
      </motion.h2>

      <div className="logos_venture">
        <motion.img
          src="/images/ganalaxmi_logo.png"
          alt="Ganalaxmi Engineers"
          className="logo_venture"
          whileHover={{ scale: 1.1 }}
        />
        <motion.img
          src="/images/shreeelectricals_logo.png"
          alt="Shree Electricals"
          className="logo_venture"
          whileHover={{ scale: 1.1 }}
        />
      </div>

      <motion.p
        className="description_venture"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        We have partnered with <strong>Shree Electricals</strong>, a government-certified electrical contractor, to provide exceptional electrical and engineering solutions. 
        Our expertise covers **Electrical Liaisoning, HT/LT Installations, and EPC Solar Solutions**.
      </motion.p>

      <div className="services_venture">
        <motion.div className="service-box_venture" whileHover={{ scale: 1.05 }}>
          <h3>Electrical Liaisoning & Sanction</h3>
          <p>Professional assistance with approvals and compliance.</p>
        </motion.div>

        <motion.div className="service-box_venture" whileHover={{ scale: 1.05 }}>
          <h3>HT/LT Installation Work</h3>
          <p>Reliable high and low-tension electrical installations.</p>
        </motion.div>

        <motion.div className="service-box_venture" whileHover={{ scale: 1.05 }}>
          <h3>EPC Solar Solutions</h3>
          <p>Comprehensive solar power solutions for businesses and industries.</p>
        </motion.div>
      </div>

      <div className="contact-info_venture">
        <h2>Contact Information</h2>
        <p><strong>Email:</strong> shreeelectricalssangli@gmail.com</p>
        <p><strong>Phone:</strong> 7620377082</p>
        <p><strong>Office Address:</strong> Plot No. 27/18, Kalanagar, Sangli - 416419</p>
        <p><strong>Reg. Address:</strong> At. Shirdhon, Tal - Kavathe Mahankal Dist, Sangli - 416419</p>
        <p><strong>GSTIN:</strong> 27BROPP1372E2ZK</p>
      </div>

     
    </div>
  );
};

export default JointVenture;
