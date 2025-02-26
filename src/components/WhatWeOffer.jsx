import React from "react";
import { FaCogs, FaUserTie, FaHeadset, FaShippingFast } from "react-icons/fa"; // Importing icons
import "../styles/WhatWeOffer.css";

const WhatWeOffer = () => {
  const services = [
    {
      title: "Advanced Technology",
      description:
        "Leveraging cutting-edge technology for faster delivery, better production, and precise designs.",
      icon: <FaCogs />, // Technology icon
    },
    {
      title: "Expert Engineers",
      description:
        "Our highly skilled team of engineers brings years of industrial expertise to every project.",
      icon: <FaUserTie />, // Engineer icon
    },
    {
      title: "Customer Support",
      description:
        "We provide exceptional service and support to meet all client requirements.",
      icon: <FaHeadset />, // Support icon
    },
    {
      title: "On-Time Delivery",
      description:
        "Committed to delivering high-quality products quickly to reduce client expenses.",
      icon: <FaShippingFast />, // Delivery icon
    },
  ];

  return (
    <div className="what-we-offer">
      <h1 className="heading">What We Offer</h1>
      <p className="subheading">
        We are dedicated to providing high-quality services with innovation and expertise.
      </p>

      <div className="offer-grid1">
        {services.map((service, index) => (
          <div className="offer-card" key={index}>
            <div className="icon-container1">{service.icon}</div>
            <div className="content">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatWeOffer;
