import React from "react";
import Header from "./Header"; // Adjust path if needed
import HeroSection from "../components/HeroSection";
import ProductList from "../components/ProductList";
import ServicesPage from "../components/ServicesPage";
import WhatWeOffer from "../components/WhatWeOffer";
import Footer from "./Footer";
import CompanyIntro from "../components/CompanyIntro"; 
  import Projects from "../components/Projects";

const Home = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <CompanyIntro/>
      
        <Projects />
      <ProductList />
      <ServicesPage />
      <WhatWeOffer />
      <Footer />
    </>
  );
};

export default Home;
