import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Services.css';
import Footer from '../pages/Footer';
import Header from '../pages/Header';

const Services = () => {
  const services = [
    {
      title: 'Consultancy Services',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFizBIE_eGqs2C2JL6DvXkvEKUDPQAvOEr1g&s',
      link: "/consultancyservices"
    },
    {
      title: 'Mechanical Engineering',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUBkbETGBOr5-vnTTi9th3MP-hlQUbu2aOxg&s',
      link: "/mechanicalengineering"
    },
    {
      title: 'O & M Services',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS059frnmzmI_KVvyU3GfNKC09N_JzAH79Obg&s',
      link: "/om"
    },
    {
      title: 'Instrumentation Services',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_TL3L9MBpjEds4qVkIzGmBX4dNzG0I0XGeg&s',
      link: "/instrumentation"
    },
    {
      title: 'Electrical Services',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTte8ZOtfehxf9J4Lr7h60LtKt61xInSzM12g&s',
      link: "/electrical"
    },
    {
      title: 'Supply of Machinery',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPzD5UjjOv5i3YfR1FwE1f7HtjszE2mJx09A&s',
      link: "/supplyofmachinery"
    },
    {
      title: 'Electrical Laisoning/Sanction',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI4EnYYI_g2S7rQzLhX9r5MdEjE-yCpAGIug&s',
      link: "/laisoning"
    },
    {
      title: 'HT/LT Installation Work',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAJjb_z-5X3upA6fdfv9CpjFtsLZ0vcZw7Wg&s',
      link: "/LTInstallation"
    },
    {
      title: 'EPC Solar Solutions',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8mGwx2ERWZCWbL35Ddq_RLHOIQ8h5U02Sng&s',
      link: "/solar"
    }
  ];

  return (
    <div>
      <Header />
      <div className="services-container">
        <h1 className="services-title">OUR SERVICES</h1>
        <div className="services-grid">
          {services.map((service, index) => (
            <Link to={service.link} className="service-card" key={index}>
              <div className="card-image1">
                <img src={service.image} alt={service.title} />
              </div>
              <div className="card-overlay"></div>
              <div className="card-text">
                <h2>{service.title}</h2>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Services;

