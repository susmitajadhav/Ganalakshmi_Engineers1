import React from "react"; 
import { motion } from "framer-motion";
import "../styles/Manufacturing.css"; // Importing the CSS file
import Header from '../pages/Header';
import Footer from "../pages/Footer";

const Manufacturing = () => {
  return (
    <div>
      <Header />
      <div className="manufacturing-container">
        <motion.h1
          className="manufacturing-title"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Machinery Manufacturer
        </motion.h1>

        <div className="manufacturing-content">
          {/* Left: Image */}
          <motion.div
            className="manufacturing-image-container"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ2CqRA0EzZcOVFCmEfo31ODSfhiU2OChrbw&s"
              alt="Machinery"
              className="manufacturing-image"
            />
          </motion.div>

          {/* Right: Description */}
          <motion.div
            className="manufacturing-description"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p>
              We specialize in the design and manufacturing of machinery for Sugar
              Plants, Khandsari, and Jaggery Plants. Our high-quality machinery and
              equipment ensure maximum efficiency and productivity in the sugar and
              jaggery production processes.
            </p>
          </motion.div>
        </div>

        <h2 className="manufacturing-subheading">Our Specialization Includes:</h2>
        <div className="card-container">
          <motion.div
            className="manufacturing-card"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src="https://img.icons8.com/ios-filled/100/000000/gear.png"
              alt="Mill & Spares"
              className="card-image"
            />
            {/* NEW CLASS HERE: mill-spares-heading */}
            <h3 className="card-heading">Mill & its Spares</h3>
            <p className="card-para" >We design and manufacture efficient mills and their spare parts for sugar extraction.</p>
          </motion.div>

          <motion.div
            className="manufacturing-card"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src="https://img.icons8.com/ios-filled/100/000000/factory.png"
              alt="Boiling House Equipment"
              className="card-image"
            />
            <h3 className="card-heading" >Boiling House Equipments & Spares</h3>
            <p className="card-para"> High-quality equipment used in the boiling house for the production of sugar and jaggery.</p>
          </motion.div>

          <motion.div
            className="manufacturing-card"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src="https://img.icons8.com/ios-filled/100/000000/truck.png"
              alt="Material Handling"
              className="card-image"
            />
            <h3 className="card-heading" >Material Handling Systems & Spares</h3>
            <p className="card-para">Automated and manual material handling systems tailored for sugar and jaggery plants.</p>
          </motion.div>
        </div>

        <h2 className="manufacturing-subheading">Machinery for Khandsari & Jaggery Plants</h2>
        <p  className="manufacturing-description">
          Our machinery is designed for the efficient extraction and processing of Khandsari and Jaggery.
          We offer robust systems that ensure long-term reliability and high performance.
        </p>

        <h3 className="manufacturing-subheading">Key Features of Our Machinery:</h3>
        <ul className="manufacturing-list">
          <motion.li whileHover={{ scale: 1.05 }}>
            ⚙️ <strong>High efficiency:</strong> Improves sugar extraction and boiling house process equipment results in increase in sugar requiry and reduces steam consumption.
          </motion.li>
          <motion.li whileHover={{ scale: 1.05 }}>
            🛠️ <strong>Durability:</strong> Long-lasting parts and components.
          </motion.li>
          <motion.li whileHover={{ scale: 1.05 }}>
            🔧 <strong>Easy maintenance:</strong> Simple to replace spares.
          </motion.li>
          <motion.li whileHover={{ scale: 1.05 }}>
            ⚡ <strong>Energy-efficient:</strong> Reduces operational costs.
          </motion.li>
          <motion.li whileHover={{ scale: 1.05 }}>
            🏭 <strong>Customizable:</strong> Tailored designs for different plant sizes.
          </motion.li>
        </ul>

        <p className="manufacturing-contact">
          For more information or inquiries, feel free to <strong>contact us</strong> today!
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Manufacturing;
