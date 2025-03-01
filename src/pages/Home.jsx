import React from "react";
import Header from "./Header"; // Adjust path if needed
import HeroSection from "../components/HeroSection";

import ServicesPage from "../components/ServicesPage";
import WhatWeOffer from "../components/WhatWeOffer";
import Footer from "./Footer";
import CompanyIntro from "../components/CompanyIntro"; 
  import Projects from "../components/Projects";
import JointVenture from "../components/JointVenure";
  
  

const Home = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <CompanyIntro/>
      
        <Projects />
     
      <ServicesPage />
      <WhatWeOffer />
      <JointVenture />
      <Footer />
    </>
  );
};

export default Home;
