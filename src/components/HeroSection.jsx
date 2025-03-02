import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "../styles/HeroSection.css";

const HeroSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    cssEase: "linear",
    arrows: false,
  };

  return (
    <section className="hero-section">
      <div className="hero-overlay"></div>

      {/* Hero Content */}
      <div className="hero-content">
        <h1 className="hero-title">
          Welcome to <span className="highlight">Ganalaxmi!</span>
        </h1>
        <p className="hero-description">
          Technology Innovation for Client Growth is our Growth.
        </p>
        <Link to="/services" className="cta-button">
          Explore Our Services
        </Link>
      </div>

      {/* Hero Carousel */}
      <div className="carousel-container">
        <Slider {...settings}>
          <div className="carousel-item">
            <img
              src="https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Slide 1"
              className="carousel-image"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://images.pexels.com/photos/2628105/pexels-photo-2628105.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Slide 2"
              className="carousel-image"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://images.pexels.com/photos/6466143/pexels-photo-6466143.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Slide 3"
              className="carousel-image"
            />
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default HeroSection;
