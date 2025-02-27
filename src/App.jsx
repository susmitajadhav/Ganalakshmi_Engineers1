import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./pages/Header";
import ProductList from "./components/ProductList";
import AboutUs from "./pages/AboutUs";
import Product from "./pages/Product";
import Footer from "./pages/Footer";
import ContactPage from "./pages/ContactPage";
import HeroSection from "./components/HeroSection";
import ServicesPage from "./components/ServicesPage";
import WhatWeOffer from "./components/WhatWeOffer";
import Manufacturing from "./components/Manufacturing";
import Gallery from "./pages/Gallery";
import RelayCard from "./components/RelayCard";
import IndustrialPanelManufacturer from "./components/IndustrialPanelManufacturer";
import Services from "./pages/Services";
import GetQuote from "./pages/GetQuote";
import ConsultancyServices from "./components/ConsultancyServices";
import MechanicalEngineering from "./components/MechanicalEngineering";
import OM from "./components/OM";
import Electrical from "./components/Electrical";
import Instrumentation from "./components/Instrumentation";
import SupplyOfMachinery from "./components/SupplyOfMachinery";
import CompanyIntro from "./components/CompanyIntro";
import Laisoning from  './components/Laisoning';
import LTInstallation  from './components/LTInstallation';
import Solar from  './components/Solar';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/header" element={<Header />} />
        <Route path="/herosection" element={<HeroSection />} />
        <Route path="/product" element={<Product />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/productlist" element={<ProductList />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/contactpage" element={<ContactPage />} />
        <Route path="/servicespage" element={<ServicesPage />} />
        <Route path="/whatweoffer" element={<WhatWeOffer />} />
        <Route path="/manufacturing" element={<Manufacturing />} />
        <Route path="/mechanicalengineering" element={<MechanicalEngineering />} />
        <Route path="/relay-card" element={<RelayCard />} />
        <Route path="/industrial-panel-manufacturer" element={<IndustrialPanelManufacturer />} />
        <Route path="/services" element={<Services />} />
        <Route path="/getquote" element={<GetQuote />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/om" element={<OM />} />
        <Route path="/electrical" element={<Electrical />} />
        <Route path="/instrumentation" element={<Instrumentation />} />
        <Route path="/consultancyservices" element={<ConsultancyServices />} />
        <Route path="/supplyofmachinery" element={<SupplyOfMachinery />} />
        <Route path="/companyIntro" element={<CompanyIntro/>} />
        <Route path="/Laisoning" element={<Laisoning />} />
        <Route path="/LTInstallation" element={<LTInstallation />} />
        <Route path="/solar" element={<Solar />} />
      </Routes>
    </Router>
  );
};

export default App;
