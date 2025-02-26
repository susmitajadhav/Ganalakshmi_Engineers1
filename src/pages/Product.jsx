import React from "react"; 
import { Link, useNavigate } from "react-router-dom";
import "../styles/Product.css";
import Footer from "../pages/Footer";
import Header from '../pages/Header';
import { motion } from "framer-motion";

const Product = () => {
  const navigate = useNavigate();

  const products = [
    {
      name: "Machinery Manufacturer",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ2CqRA0EzZcOVFCmEfo31ODSfhiU2OChrbw&s",
      link: "/manufacturing",
    },
    {
      name: "PLC & DCS System",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDEtSZzcR4It0FBfOAf8XYmN2ZHF8I0wwsfw&s",
      link: "/relay-card",
    },
    {
      name: "Industrial Panels",
      image:
        "https://5.imimg.com/data5/KF/SE/DJ/SELLER-79625611/mcc-pcc-vfd-plc-panels-500x500.JPG",
      link: "/industrial-panel-manufacturer",
    },
  ];

  return (
    <div>
      <Header />
      <section id="products" className="product-section">
        <h2>Our Products</h2>
        <div className="product-list">
          {products.map((product, index) => (
            <motion.div
              key={index}
              className="product-card"
              onClick={() => navigate(product.link)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <img src={product.image} alt={product.name} className="product-image" />
              <h3>{product.name}</h3>
              <Link to={product.link} className="product-link">
                Learn More
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Product;
